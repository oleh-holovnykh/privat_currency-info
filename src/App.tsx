import { useState } from 'react';
import { findEuro } from './helpers/findEuro';
import { normalizeCurrency } from './helpers/normalizeCurrency';
import useCurrencyData from './hooks/useCurrencyData';
import { Schedule } from './components/Schedule';
import modules from './data/moduleSchedule.json';
import practices from './data/practiceSchedule.json';
import retreats from './data/retreatSchedule.json';
import ie from './data/individualEntrepreneur.json';
import { createSchedule } from './helpers/сreateSchedule';
import { CopyButton } from './components/copyButton';

function App() {
  const { currencies, loading, error } = useCurrencyData();
  const [showRequisites, setShowRequisites] = useState<boolean>(false);
  const [showSchedule, setShowSchedule] = useState<boolean>(true);

  const handleRequisitesClick = () => {
    setShowRequisites(!showRequisites);

    if (showSchedule) {
      setShowSchedule(!showSchedule);
    }
  };

  const handleScheduleClick = () => {
    setShowSchedule(!showSchedule);

    if (showRequisites) {
      setShowRequisites(!showRequisites);
    }
  };

  if (loading) {
    return <div className='text-center'>Завантаження даних...</div>;
  }
  console.log(['error:', error])
  if (error !== null) {
    return (
      <div exchange-container>
        Помилка при завантажені данних: {error.message}.{' '}
        <a
          href='https://minfin.com.ua/ua/company/monobank/currency/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-700 underline'
        >
          Подивитись поточний курс Монобанку на сайті minfin.com.ua
        </a>
      </div>
    );
  }

  const euroRate = findEuro(currencies);

  if (euroRate) {
    console.log(['test', euroRate]);
    normalizeCurrency(euroRate);
  }

  const nextGropuDate = new Date(createSchedule(modules, practices,retreats)[0].startDate);
  const nextGrupDateToPrint = `${nextGropuDate.getDate().toString().padStart(2, '0')}.${(nextGropuDate.getMonth() + 1).toString().padStart(2, '0')}`

  return (
    <>
      <div className='mb-2 bg-slate-800 text-white flex justify-center items-center'>
        <table className='border-separate border-spacing-x-2'>
          <tbody>
            <tr>
              <td></td>
              {/* <td className='text-gray-400'>Buy</td> */}
              <td className='text-gray-400'>Sell</td>
            </tr>
            <tr>
              <td>EUR</td>
              {/* <td>{euroRate!.rateBuy}</td> */}
              <td>{euroRate?.rateSell}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='text-center mb-2'>
          <span className='mb-2 block'>
            <b>Модуль:</b>
            <br />
            €150 = {Math.round(150 * euroRate!.rateSell)} грн
          </span>
          <div className='mb-2'>
            <button
              onClick={handleRequisitesClick}
              className={`mr-2 text-sm text-gray-800 py-1 px-2 border border-gray-200 rounded ${
                showRequisites ? 'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
              }`}
            >
              {showRequisites ? 'Cховати реквізити' : 'Показати реквізити'}
            </button>

            <button
              onClick={handleScheduleClick}
              className={`text-sm text-gray-800 py-1 px-2 border border-gray-200 rounded ${
                showSchedule ?  'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
              }`}
            >
              {showSchedule ? 'Cховати розклад' : 'Показати розклад'}
            </button>
          </div>

          {/* <br />
          <span className='text-gray-400'>
            €50 = {Math.round(50 * euroRate!.rateSell)} грн
            <br /> 
            €100 = {Math.round(100 * euroRate!.rateSell)} грн{' '}
          </span> */}
{/* 
          <span>
            <b>Група практики:</b>
            <br />
            PayPal €{(600 / euroRate!.rateBuy).toFixed(2)}
            <br />
            ФОП 600 грн
          </span> */}
      </div>
        {showRequisites && (
          <div className='text-left w-max mt-2 mx-auto text-gray-600'>
            {ie.recipient} <CopyButton value={ie.recipient} />
            <br />
            IBAN: {ie.iban} <CopyButton value={ie.iban} />
            <br />
            ІПН/ЄДРПОУ: {ie.id} <CopyButton value={ie.id} />
            <br />
            Акціонерне товариство: УНІВЕРСАЛ БАНК
            <br />
            МФО: {ie.mfo} <CopyButton value={ie.mfo} />
            <br />
            ОКПО Банку: {ie.okpo} <CopyButton value={ie.okpo} />
            <br />
            <br />
            🔸Призначення платежу:
            <br />
            {`"За навчання ${nextGrupDateToPrint}"`} <CopyButton value={`"За навчання ${nextGrupDateToPrint}"`} /> 
            <br />
            <br />
            🔥Важливо вказати призначення платежу
            <br />
            🔥Важливо, щоб платіж був від фізособи.
            <br />А не від ФОП, чи організації
          </div>
        )}
      
      {showSchedule && (<div className='flex justify-center items-center'>
      <div className='w-[350px] text-gray-600'>
        <Schedule 
          modules={modules}
          practices={practices}
          retreats={retreats}
        />
      </div>
      </div>)}
    </>
  );
}

export default App;

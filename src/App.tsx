import { useState } from 'react';
import { findEuro } from './helpers/findEuro';
import { normalizeCurrency } from './helpers/normalizeCurrency';
import useCurrencyData from './hooks/useCurrencyData';

function App() {
  const { currencies, loading, error } = useCurrencyData();
  const [showRequisites, setShowRequisites] = useState<boolean>(false);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

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
          <div className='text-left w-max mt-2 mx-auto text-gray-400'>
            Отримувач: ФОП Шепель Володимир Вікторович
            <br />
            IBAN: UA733220010000026006300003278
            <br />
            ІПН/ЄДРПОУ: 2527501892
            <br />
            Акціонерне товариство: УНІВЕРСАЛ БАНК
            <br />
            МФО: 322001
            <br />
            ОКПО Банку: 21133352
            <br />
            <br />
            🔸Призначення платежу:
            <br />
            "За навчання (вкажіть дату початку модуля)"
            <br />
            <br />
            🔥Важливо вказати призначення платежу
            <br />
            🔥Важливо, щоб платіж був від фізособи.
            <br />А не від ФОП, чи організації
          </div>
        )}
      
      {showSchedule && (<div className='flex justify-center items-center'>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FKiev&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&hl=uk&src=OTJhYzYxYTgwZmZkZWMxZGFmMDgwZDc5ODFkOTc3MGZmMTk2OTA3YWNmY2Y2NjcwYzRkMTIxMmJjODBlNzFhZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5"
          style={{ borderWidth: 0, width: 500, height: 400 }}
        ></iframe>
      </div>)}
    </>
  );
}

export default App;

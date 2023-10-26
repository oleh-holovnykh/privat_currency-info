import { useState } from 'react';
import './App.css';
import { findEuro } from './helpers/findEuro';
import { normalizeCurrency } from './helpers/normalizeCurrency';
import useCurrencyData from './hooks/useCurrencyData';

function App() {
  const {currencies, loading, error} = useCurrencyData();
  const [showRequisites, setShowRequisites] = useState<boolean>(false);

  const handleClick = () => {
    setShowRequisites(!showRequisites);
  };

  if (loading) {
    return <div className='text-center'>Завантаження даних...</div>;
  } 

  if (error !== null) {``
    return (
      <div exchange-container>
        Помилка при завантажені данних: {error.message}.{' '}
        <a
          href='https://minfin.com.ua/ua/company/monobank/currency/'
          target='_blank'
          rel='noopener noreferrer'
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Подивитись поточний курс Монобанку на сайті minfin.com.ua
        </a>
      </div>
    );
  }

  const euroRate = findEuro(currencies);

  if (euroRate) {
    normalizeCurrency(euroRate);
  }

  return (
    <>
      <div className='bg-slate-800 text-white flex justify-center items-center'>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Продаж</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EUR</td>
              <td>{euroRate?.rateSell}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='display-price'>
        <div className='currencies'>
          €50 = {Math.round(50 * euroRate!.rateSell)} грн
          <br />
          €100 = {Math.round(100 * euroRate!.rateSell)} грн
          <br />
          €150 = {Math.round(150 * euroRate!.rateSell)} грн
        </div>
        <button onClick={handleClick} className='mb-2 text-sm bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-200 rounded shadow'>
          {showRequisites ? 'Cховати реквізити' : 'Показати реквізити'}
        </button>
        {showRequisites && (
          <div className='requisites'>
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
      </div>
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css'
import { findEur } from './helpers/findEur';
import { normalizeCurrency } from './helpers/normalizeCurrency';
import useCurrencyData from './hooks/useCurrencyData'

function App() {
  const {currencies, loading, error} = useCurrencyData();
  const [showRequisites, setShowRequisites] = useState<boolean>(false);

  const handleClick = () => {
    setShowRequisites(!showRequisites);
  }

  if (loading) {
    return <div>завантаження даних...</div>
  }

  if (error) {
    return <div exchange-container>
    Помилка при завантажені данних: {error.message}.{' '}
    <a href="https://monobankinfo.com.ua/uk/kurs-valiut-monobank/" target="_blank" rel="noopener noreferrer">
      Подивитись поточний курс на офіційному сайті Монобанку
    </a>
  </div> 
  }

  const eurRate = findEur(currencies);

  if(eurRate) {
    normalizeCurrency(eurRate);
  }

  return (
    <>
      <div className="exchange-container">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Продаж</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EUR</td>
              <td>{ eurRate?.rateSell }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='display-price'>
        <div className='currencies'>
          €50 = {Math.round(50 * eurRate!.rateSell)} грн
          <br />
          €100 = {Math.round(100 * eurRate!.rateSell)} грн
          <br />
          €150 = {Math.round(150 * eurRate!.rateSell)} грн
        </div>
        <button onClick={handleClick} className='showButton'>
          {showRequisites ? 'Cховати реквізити' : 'Показати реквізити'}
        </button>
        {showRequisites && <div className='requisites'>
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
          <br />
          А не від ФОП, чи організації
        </div>
        }
      </div>
    </>
  )
}

export default App

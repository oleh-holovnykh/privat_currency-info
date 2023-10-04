/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Currency } from '../types/currency';

const useCurrencyData = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const response = await axios.get('https://api.monobank.ua/bank/currency');
        
        // Сохраняем полученные данные в sessionStorage
        sessionStorage.setItem('currencyData', JSON.stringify(response.data));

        setCurrencies(response.data);
        setLoading(false);
        setError(null);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }

    const cachedData = sessionStorage.getItem('currencyData');

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      setCurrencies(parsedData);
      setLoading(false);
      setError(null);
    } else {
      fetchCurrencies();
    }
  }, []);

  return { currencies, loading, error };
};

export default useCurrencyData;

import { Currency } from '../types/currency';

export const normalizeCurrency = (currency: Currency) => {
  currency.rateBuy = +currency.rateBuy.toFixed(2);
  currency.rateSell = +currency.rateSell.toFixed(2);
}
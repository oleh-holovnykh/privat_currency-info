import { Currency } from '../types/currency';

export const findEur = (currencies: Currency[]) => {
  return currencies.find(item => item.currencyCodeA === 978 && item.currencyCodeB === 980);
}
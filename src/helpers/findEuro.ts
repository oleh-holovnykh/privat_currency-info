import { Currency } from '../types/currency';

export const findEuro = (currencies: Currency[]) => {
  return currencies.find(
    (item) => item.currencyCodeA === 978 && item.currencyCodeB === 980
  );
};

import { months } from './constants';

export const convertISODateToReadable = ISODate => {
  const readable = new Date(ISODate);

  const m = readable.getMonth(); // returns 6
  const d = readable.getDate(); // returns 15
  const y = readable.getFullYear(); // returns 2012

  const monthName = months[m];
  return d + ' ' + monthName + ', ' + y;
};

import { apiKey } from '../../keys/keys';
import date from 'date-and-time';


export const fetchTodaysImage = async () => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  const image = await response.json();
  return image.url;
}

export const fetchYesterdaysImage = async () => {
  let now = new Date();
  let yesterday = date.addDays(now, -1);
  yesterday = date.format(yesterday, 'YYYY-MM-DD');
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${yesterday}`)
  const image = await response.json();
  return image.url;
}
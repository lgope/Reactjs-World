import axios from 'axios';
import { apiKey } from '../config/keys';

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async query => {
  try {
    const { data } = await axios.get(baseURL, {
      params: {
        q: query,
        units: 'metric',
        APPID: apiKey,
      },
    });

    return data;
  } catch (error) {
    return '';
  }
};

import axios from 'axios';

const API_KEY = "c0f55801a63b7c74c53eae3bc79667c8";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lang=pl&units=metric`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

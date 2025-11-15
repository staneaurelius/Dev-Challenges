import { error } from '@sveltejs/kit';
import dayList from '$lib/utils/dayList.js';
import getTime from '$lib/utils/getTime.js';

export async function load({ fetch, params, url, setHeaders }) {
	const location = params.location;
	const latitude = url.searchParams.get('lat');
	const longitude = url.searchParams.get('long');
	const country = url.searchParams.get('country');

	// Open Meteo API
	const weatherRes = await fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,precipitation,weather_code&timezone=auto&forecast_hours=12`
	);

	if (!weatherRes.ok) {
		error(503, {
			message: 'Unable to fetch weather data. Please try again in a moment.'
		});
	}

	const weather = await weatherRes.json();

	setHeaders({
		'cache-control': 'public, max-age=600'
	});

	return {
		location: `${location}, ${country}`,
		date: new Intl.DateTimeFormat('en-US', {
			weekday: 'short',
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		}).format(new Date(weather.current.time)),
		current: {
			weatherCode: weather.current.weather_code,
			temperature: weather.current.temperature_2m,
			feelsLike: weather.current.apparent_temperature,
			humidity: weather.current.relative_humidity_2m,
			wind: weather.current.wind_speed_10m,
			precipitation: weather.current.precipitation
		},
		daily: {
			date: weather.daily.time.map((time: string) => dayList[new Date(time).getDay()]),
			weatherCode: weather.daily.weather_code,
			maxTemp: weather.daily.temperature_2m_max,
			minTemp: weather.daily.temperature_2m_min
		},
		hourly: {
			weatherCode: weather.hourly.weather_code,
			time: weather.hourly.time.map((date: string) => getTime(date)),
			temperature: weather.hourly.temperature_2m
		}
	};
}

import drizzleIcon from '$lib/assets/weather/icon-drizzle.webp';
import fogIcon from '$lib/assets/weather/icon-fog.webp';
import overcastIcon from '$lib/assets/weather/icon-overcast.webp';
import cloudyIcon from '$lib/assets/weather/icon-partly-cloudy.webp';
import rainIcon from '$lib/assets/weather/icon-rain.webp';
import snowIcon from '$lib/assets/weather/icon-snow.webp';
import stormIcon from '$lib/assets/weather/icon-storm.webp';
import sunnyIcon from '$lib/assets/weather/icon-sunny.webp';

interface IconTranslator {
	[index: string]: string[];
}

const iconTranslator: IconTranslator = {
	0: [sunnyIcon, 'sunny icon'],
	1: [cloudyIcon, 'cloudy icon'],
	2: [cloudyIcon, 'cloudy icon'],
	3: [overcastIcon, 'overcast icon'],
	45: [fogIcon, 'fog icon'],
	48: [fogIcon, 'fog icon'],
	51: [drizzleIcon, 'drizzle icon'],
	53: [drizzleIcon, 'drizzle icon'],
	55: [drizzleIcon, 'drizzle icon'],
	56: [drizzleIcon, 'drizzle icon'],
	57: [drizzleIcon, 'drizzle icon'],
	61: [rainIcon, 'rain icon'],
	63: [rainIcon, 'rain icon'],
	65: [rainIcon, 'rain icon'],
	66: [rainIcon, 'rain icon'],
	67: [rainIcon, 'rain icon'],
	71: [snowIcon, 'snow icon'],
	73: [snowIcon, 'snow icon'],
	75: [snowIcon, 'snow icon'],
	77: [snowIcon, 'snow icon'],
	80: [rainIcon, 'rain icon'],
	81: [rainIcon, 'rain icon'],
	82: [rainIcon, 'rain icon'],
	85: [snowIcon, 'snow icon'],
	86: [snowIcon, 'snow icon'],
	95: [stormIcon, 'storm icon'],
	96: [stormIcon, 'storm icon'],
	99: [stormIcon, 'storm icon']
};

export default iconTranslator;

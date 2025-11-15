export default function getTime(date: string): string {
	const dateTime = new Date(date);

	const time = new Intl.DateTimeFormat('en-US', {
		hour: 'numeric',
		hour12: true
	}).format(dateTime);

	return time;
}

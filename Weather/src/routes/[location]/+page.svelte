<script lang="ts">
	import WeatherDashboard from '$lib/components/WeatherDashboard.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Weather in {data.location}</title>
	<meta
		name="description"
		content="Current weather in {data.location}. Temperature: {data.current.temperature}°C."
	/>
</svelte:head>

<WeatherDashboard {data} />

<script lang="ts">
	import WeatherDashboard from '$lib/components/WeatherDashboard.svelte';

	let { data } = $props();
</script>

<WeatherDashboard {data} />

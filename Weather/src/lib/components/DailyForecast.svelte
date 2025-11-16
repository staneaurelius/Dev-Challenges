<script>
	import DailyCard from '$lib/components/ui/DailyCard.svelte';

	let { daily } = $props();
</script>

<section class="daily" aria-labelledby="7d-forecast">
	<h2 id="7d-forecast">Daily forecast</h2>
	<div class="cards">
		{#each { length: 7 }, i}
			<DailyCard
				date={daily.date[i]}
				weatherCode={daily.weatherCode[i]}
				maxTemp={daily.maxTemp[i]}
				minTemp={daily.minTemp[i]}
			/>
		{/each}
	</div>
</section>

<style>
	.daily {
		grid-column: 1 / 2;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;

		.cards {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
	}

	@media (max-width: 767px) {
		.daily {
			.cards {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 1rem;
			}
		}
	}
</style>

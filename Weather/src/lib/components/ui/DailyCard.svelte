<script lang="ts">
	import iconTranslator from '$lib/utils/WMOIcon';

	interface Props {
		date: string;
		weatherCode: number;
		maxTemp: number;
		minTemp: number;
	}

	let { date, weatherCode, maxTemp, minTemp }: Props = $props();
</script>

<div class="card">
	<p>{date}</p>
	<img
		src={iconTranslator[weatherCode][0]}
		alt={iconTranslator[weatherCode][1]}
		width="60"
		height="60"
	/>
	<div class="temp-container">
		<p>{maxTemp}&deg;</p>
		<p>{minTemp}&deg;</p>
	</div>
</div>

<style>
	.card {
		/* Layout */
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem 0.625rem;

		/* Appearance */
		background-color: rgb(var(--neutral-800));
		border: 1px solid rgb(var(--neutral-600));
		border-radius: 12px;

		/* Children */
		& > p {
			font-size: var(--fs-6);
			font-weight: 500;
		}

		img {
			width: 3.75rem;
			height: 3.75rem;
		}

		.temp-container {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			p {
				font-size: var(--fs-7);
				font-weight: 500;
			}

			p:last-child {
				color: rgb(var(--neutral-200));
			}
		}
	}
</style>

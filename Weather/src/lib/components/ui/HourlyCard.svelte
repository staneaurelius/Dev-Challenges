<script lang="ts">
	import iconTranslator from '$lib/utils/WMOIcon';

	interface Props {
		weatherCode: number;
		time: string;
		temperature: number;
	}

	let { weatherCode, time, temperature }: Props = $props();
</script>

<div class="card">
	<img
		src={iconTranslator[weatherCode][0]}
		alt={iconTranslator[weatherCode][1]}
		width="40"
		height="40"
	/>
	<p>{time}</p>
	<p>{temperature}&deg;</p>
</div>

<style>
	.card {
		background-color: rgb(var(--neutral-700));
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.625rem 1rem 0.625rem 0.75rem;
		border: 1px solid rgb(var(--neutral-600));
		border-radius: 8px;

		/* Children */
		img {
			width: 2.5rem;
			height: 2.5rem;
		}

		p:first-of-type {
			flex: 1;
			font-size: var(--fs-5);
			font-weight: 500;
		}

		p:last-of-type {
			font-size: var(--fs-7);
			font-weight: 500;
		}
	}
</style>

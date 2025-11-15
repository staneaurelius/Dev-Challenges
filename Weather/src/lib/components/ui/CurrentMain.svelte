<script lang="ts">
	import desktopBg from '$lib/assets/backgrounds/bg-today-large.svg';
	import iconTranslator from '$lib/utils/WMOIcon';

	interface Props {
		location: string;
		date: string;
		weatherCode: number;
		temperature: number;
	}

	let { location, date, weatherCode, temperature }: Props = $props();

	const iconImg: string = iconTranslator[weatherCode][0];
	const iconAlt: string = iconTranslator[weatherCode][1];
</script>

<div class="main-card">
	<img class="background" src={desktopBg} alt="" width="800" height="280" />
	<div>
		<p>{location}</p>
		<p>{date}</p>
	</div>
	<img class="weather-icon" src={iconImg} alt={iconAlt} width="120" height="120" />
	<p class="temperature">{temperature}</p>
</div>

<style>
	.main-card {
		position: relative;
		padding: 5rem 1.5rem;
		border-radius: 20px;
		display: flex;
		align-items: center;

		/* Background */
		.background {
			width: 100%;
			position: absolute;
			z-index: -1;
			object-fit: cover;
			left: 0;
			top: 0;
			border-radius: 20px;
		}

		/* Left paragraphs */
		div {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 0.75rem;

			& p:first-child {
				font-size: var(--fs-4);
				font-weight: 700;
			}

			& p:last-child {
				font-size: var(--fs-6);
				font-weight: 500;
			}
		}

		/* Icon */
		.weather-icon {
			width: 7.5rem;
			height: 7.5rem;
		}

		/* Temperature */
		.temperature {
			font-size: var(--fs-1);
			font-style: italic;
			font-weight: 600;
			letter-spacing: -0.02em;
			line-height: 1;
		}
	}
</style>

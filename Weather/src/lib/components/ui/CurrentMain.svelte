<script lang="ts">
	import desktopBg from '$lib/assets/backgrounds/bg-today-large.svg';
	import mobileBg from '$lib/assets/backgrounds/bg-today-small.svg';
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
	<picture>
		<source media="(max-width: 767px)" srcset={mobileBg} />
		<img src={desktopBg} alt="" aria-hidden="true" class="background" width="800" height="280" />
	</picture>
	<div class="location">
		<p>{location}</p>
		<p>{date}</p>
	</div>
	<div class="weather">
		<img class="weather-icon" src={iconImg} alt={iconAlt} width="120" height="120" />
		<p class="temperature">{temperature}</p>
	</div>
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

		/* Left */
		.location {
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

		/* Right */
		.weather {
			display: flex;
			gap: 1.25rem;
			align-items: center;
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

	@media (max-width: 767px) {
		.main-card {
			flex-direction: column;
			gap: 1rem;
			padding: 2.5rem 1.5rem;

			.location {
				text-align: center;
			}

			.weather {
				gap: 0;
				justify-content: space-between;
			}
		}
	}
</style>

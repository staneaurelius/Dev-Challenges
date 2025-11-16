<script>
	import logo from '$lib/assets/logo.svg';
</script>

<header aria-label="header">
	<img src={logo} alt="Weather now logo" height="40" />
</header>

<style>
	header {
		padding: 48px 112px;
	}

	@media (max-width: 1439px) {
		header {
			padding: 24px;

			img {
				height: 2.5rem;
			}
		}
	}

	@media (max-width: 767px) {
		header {
			padding: 16px;

			img {
				height: 1.75rem;
			}
		}
	}
</style>

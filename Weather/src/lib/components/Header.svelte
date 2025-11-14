<script>
	import logo from '$lib/assets/logo.svg';
	import UnitButton from '$lib/components/ui/UnitButton.svelte';
</script>

<header aria-label="header">
	<img src={logo} alt="Weather now logo" height="40" />
	<UnitButton />
</header>

<style>
	header {
		padding: 48px 112px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>

<script>
	import unitIcon from '$lib/assets/icon-units.svg';
	import dropdownIcon from '$lib/assets/icon-dropdown.svg';
</script>

<button type="button">
	<img src={unitIcon} alt="" aria-hidden="true" width="16" height="16" />
	Units
	<img src={dropdownIcon} alt="" aria-hidden="true" width="12" height="18" />
</button>

<style>
	button {
		/* Appearance */
		background-color: rgb(var(--neutral-800));
		border: none;
		border-radius: 8px;
		padding: 0.75rem 1rem;
		font-size: var(--fs-7);
		font-weight: 500;

		/* Layout */
		display: flex;
		align-items: center;
		gap: 0.625rem;
		cursor: pointer;

		/* States */
		&:hover,
		&:focus {
			background-color: rgb(var(--neutral-700));
		}

		&:focus {
			outline: none;
			box-shadow:
				0 0 0 3px rgb(var(--neutral-900)),
				0 0 0 5px rgb(var(--neutral-0));
		}

		/* Children */
		img:first-of-type {
			width: 1rem;
			height: 1rem;
		}

		img:last-of-type {
			width: 0.75rem;
			height: 1.125rem;
		}
	}
</style>

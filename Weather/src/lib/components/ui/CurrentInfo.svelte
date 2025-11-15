<script lang="ts">
	interface Props {
		text: string;
		value: number;
		unit: string;
	}

	let { text, value, unit }: Props = $props();
</script>

<div class="info-card">
	<p class="title">{text}</p>
	<p class="value">{value}{unit}</p>
</div>

<style>
	.info-card {
		/* Layout */
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 1.25rem;

		/* Appearance */
		border-radius: 12px;
		background-color: rgb(var(--neutral-800));
		border: 1px solid rgb(var(--neutral-600));

		/* Children */
		.title {
			color: rgb(var(--neutral-200));
			font-size: var(--fs-6);
			font-weight: 500;
		}

		.value {
			font-size: var(--fs-3);
			font-weight: 300;
			line-height: 1;
		}
	}
</style>

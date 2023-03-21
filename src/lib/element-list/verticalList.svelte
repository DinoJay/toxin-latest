<script>
	export let data = [];
	export let secLabel;
	export let className;
	import ListElement from './listElement.svelte';
	import SimpleListElement from './SimpleListElement.svelte';

	let div;

	$: {
		if (div && data) {
			div.scrollTop = 0;
		}
	}
</script>

<div bind:this={div} class="{className} flex flex-col  overflow-y-auto">
	{#each data as d (d.key || d.id)}
		<div class="my-1">
			{#if d.values}
				<ListElement attr={secLabel} datum={d} />
			{:else}
				<SimpleListElement {...d} />
			{/if}
		</div>
	{/each}
</div>

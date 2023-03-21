<script>
	export let results;
	export let imgSrc;
	import transformObject from '$lib/transformObject';
	// import ArrowRightSFill from 'svelte-remixicon/lib/icons/ArrowRightSFill.svelte';
	import CompoundInfo from './CompoundInfo.svelte';
	import ToxicologicalData from './ToxicologicalData.svelte';

	console.log('props compoundinfo', $$props);
	const { bindings } = results;
	const data = bindings.map(transformObject);
	const d = data.length > 0 ? data[0] : null;

	console.log('d', d);
</script>

{#if d}
	<CompoundInfo {...d} {imgSrc} />
	<ToxicologicalData {...d} />
{:else}
	<div class="text-2xl">No Results</div>
{/if}

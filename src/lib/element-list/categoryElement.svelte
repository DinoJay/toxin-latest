<script>
	import AttrElement from './attrElement.svelte';
	import StringElement from './stringElement.svelte';
	import { fade, slide } from 'svelte/transition';
	// import { v4 as uuidv4 } from 'uuid';
	import { getAttrs } from '$lib/guidelineAttrs';

	export let categories;
	export let open;
	// console.log('categories', guidelineAttrs('non OECD', categories));
	const cs = getAttrs('non OECD', categories);

	const cats = Object.entries(cs).map(([key, values]) => ({
		key,
		values
	}));
	// console.log('key', key);
	// let open = false;
</script>

{#if open}
	<div class="ml-12">
		{#each cats as c}
			{#if typeof c.values === 'object'}
				<AttrElement key={c.key} categories={c.values} />
			{:else}
				<StringElement key={c.key} value={c.values} />
			{/if}
		{/each}
	</div>
{/if}

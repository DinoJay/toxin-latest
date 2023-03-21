<script>
	export let categories;
	export let key;

	import { fade, fly, slide } from 'svelte/transition';

	const cats = Object.entries(categories).map(([key, values]) => ({ key, values }));
	// console.log('cats', cats);
	let open = false;
</script>

<div transition:fly class=" ">
	<div class="bg-gainsboro my-2 p-3" role="button" on:click={() => (open = !open)}>{key}</div>
	{#if open}
		<div class="ml-8">
			{#each cats as c}
				<div class="my-2 p-3 bg-whitesmoke">
					<div class="font-bold">{c.key}:</div>
					<div class="ml-8">{c.values}</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

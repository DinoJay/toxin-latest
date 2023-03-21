<script>
	export let datum;
	export let attr;
	import { fade, fly, slide } from 'svelte/transition';
	import CategoryElement from '$lib/element-list/categoryElement.svelte';
	let open = false;
	let openCategory = datum.values.map(() => false);
</script>

<div class="bg-thistle p-3 flex" role={'button'} on:click={() => (open = !open)}>
	<span class="mr-1">+</span>
	<span>{datum.key}</span>
	<span class="ml-auto">{datum.values.length} studies</span>
</div>
{#if open}
	{#each datum.values as v, i}
		<div>
			<div
				role="button"
				class="ml-6 bg-lightblue p-3 my-2"
				on:click={() => {
					openCategory[i] = !openCategory[i];
				}}
			>
				#{++i} Report
				{v[attr]}
			</div>
			<CategoryElement open={openCategory[i]} categories={v.categories} />
		</div>
	{/each}
{/if}

<script>
	export let datum;
	export let attr;
	import { fade, fly, slide } from 'svelte/transition';
	import CategoryElement from '$lib/element-list/categoryElement.svelte';
	let open = false;
	export let categories;
	export let id;
</script>

<div class="bg-thistle p-3 flex" role={'button'} on:click={() => (open = !open)}>
	<span class="mr-1">+</span>
	<span>{id}</span>
	<span class="ml-auto">{Object.values(categories).length} values</span>
</div>
<div class={open ? 'mt-2' : ''}>
	<CategoryElement {open} {categories} />
</div>

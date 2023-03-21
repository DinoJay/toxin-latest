<script>
	export let title;
	export let open;
	export let onClick;
	import ArrowRight from 'svelte-remixicon/lib/icons/ArrowRightSFill.svelte';
	import { slide } from 'svelte/transition';
</script>

<div>
	<div class="flex" role="button" on:click={onClick}>
		<slot name="title" />
		<div class="ml-auto">
			<ArrowRight size={25} class="transition" style="transform: rotate({open ? '90deg' : '0'})" />
		</div>
	</div>
	{#if open}
		<div transition:slide>
			<slot />
		</div>
	{/if}
</div>

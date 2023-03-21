<script>
	let tabOpen = 0;
</script>

<div class="container">
	<div class=" text-2xl flex flex-wrap mb-2">
		<button type="button" class="mr-2 {tabOpen === 0 && 'underline'}" on:click={() => (tabOpen = 0)}
			>Chemical Compound</button
		>
		<button type="button" class={tabOpen === 1 && 'underline'} on:click={() => (tabOpen = 1)}
			>Health Effect</button
		>
	</div>
	{#if tabOpen === 0}
		<slot name="tab1" />
	{/if}
	{#if tabOpen === 1}
		<slot name="tab2" />
	{/if}
</div>

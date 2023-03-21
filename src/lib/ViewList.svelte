<script>
	export let acuteToxicityCsv = [];
	export let irritationCorosivityCsv = [];
	export let repeatedToxicityCsv = [];
	export let typeOfStudy;
	export let guideline;
	// import Table from '$lib/table.svelte';
	import ElementList from './element-list/index.svelte';
	$: {
		console.log({ acuteToxicityCsv, irritationCorosivityCsv, repeatedToxicityCsv });
		console.log('typeOfstudy', typeOfStudy);
		console.log('guideline', guideline);
	}

	$: data = [...acuteToxicityCsv, ...irritationCorosivityCsv, ...repeatedToxicityCsv].map((d) => {
		const values =
			typeOfStudy !== null ? d.values.filter((e) => e.type_of_study === typeOfStudy) : d.values;
		return {
			...d,
			values
		};
	});
</script>

<div class="m-3 flex flex-col ">
	<ElementList {data} />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 100px 1fr;
	}

	.sub-cont {
		@apply overflow-y-auto;
		min-width: 35rem;
		max-width: 35rem;
		@apply flex;
		@apply border-2;
		@apply border-blue-100;
	}
	.placeholder {
		@apply m-auto;
		@apply text-2xl;
		@apply text-gray-500;
	}
</style>

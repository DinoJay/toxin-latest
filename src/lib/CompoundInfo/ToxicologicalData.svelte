<script>
	import ElementList from '$lib/element-list/index.svelte';
	import Expandable from '$lib/Expandable.svelte';
	import { constructQuery } from '$lib/sparql';
	import transformObject from '$lib/transformObject';
	import getParentCategories from '$lib/getTestParentCategories';
	import {
		REPEATED_DOSE_TOXICITY,
		ACUTE_TOXICITY,
		SKIN_SENSITISATION_UNMERGED,
		MUTAGENICITY,
		CARCINOGENICIY
	} from '$lib/endpoint_constants';
	import { transformBindings } from '$lib/sparql';

	export let acuteToxicityCsv = [];
	export let irritationCorosivityCsv = [];
	export let repeatedToxicityCsv = [];
	export let compound;
	export let label;
	import uniqBy from '$lib/uniqBy';
	import { groups } from '$lib/group';
	import { bind } from 'svelte/internal';
	// import Table from '$lib/table.svelte';
	// console.log('$$props', $$props);
	const transformResponse = (e) => {
		const { bindings } = e.results;
		const { reportData } = transformBindings(bindings, null);
		return reportData.filter((d) => d.compoundLabel === label);
	};
	let acuteToxicityPromise = fetch(constructQuery({ endpoint: ACUTE_TOXICITY }))
		.then((res) => res.json())
		.then(transformResponse);

	let skinSensitisationUnmergedPromise = fetch(
		constructQuery({ endpoint: SKIN_SENSITISATION_UNMERGED })
	)
		.then((res) => res.json())
		.then(transformResponse);

	let repeatedDoseToxicityPromise = fetch(constructQuery({ endpoint: REPEATED_DOSE_TOXICITY }))
		.then((res) => res.json())
		.then(transformResponse);

	let mutagenicityPromise = fetch(constructQuery({ endpoint: MUTAGENICITY }))
		.then((res) => res.json())
		.then(transformResponse);

	let carcinogenicityPromise = fetch(constructQuery({ endpoint: CARCINOGENICIY }))
		.then((res) => res.json())
		.then(transformResponse);
</script>

<div>
	<h2 class="text-xl mb-3">Toxicological Data</h2>
	<div>
		{#await acuteToxicityPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} reports found in Acute Toxicity Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
	<div>
		{#await repeatedDoseToxicityPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} reports found in Repeated Dose Toxicity Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
	<div>
		{#await skinSensitisationUnmergedPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} reports found in Skin Sensitisation Unmerged Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
	<div>
		{#await mutagenicityPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} reports found in Mutagenicity Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
	<div>
		{#await carcinogenicityPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} reports found in Carcinogenicity Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
</div>

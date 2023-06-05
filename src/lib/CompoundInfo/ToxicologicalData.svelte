<script>
	import ElementList from '$lib/element-list/index.svelte';
	import { constructQuery } from '$lib/sparql';
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
		console.log('reportData', reportData);
		return reportData.filter((d) => d.compoundLabel === label);
	};
	let acuteToxicityPromise = constructQuery({ endpoint: ACUTE_TOXICITY }).then(transformResponse);

	let skinSensitisationUnmergedPromise = constructQuery({
		endpoint: SKIN_SENSITISATION_UNMERGED
	}).then(transformResponse);

	let repeatedDoseToxicityPromise = constructQuery({ endpoint: REPEATED_DOSE_TOXICITY }).then(
		transformResponse
	);

	let mutagenicityPromise = constructQuery({ endpoint: MUTAGENICITY }).then(transformResponse);

	let carcinogenicityPromise = constructQuery({ endpoint: CARCINOGENICIY }).then(transformResponse);
</script>

<div>
	<h2 class="text-xl mb-3">Toxicological Data</h2>
	<div>
		{#await acuteToxicityPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} Opinions found in Acute Toxicity Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
	<div>
		{#await repeatedDoseToxicityPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} Opinions found in Repeated Dose Toxicity Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
	<div>
		{#await skinSensitisationUnmergedPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} Opinions found in Skin Sensitisation Unmerged Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
	<div>
		{#await mutagenicityPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} Opinions found in Mutagenicity Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
	<div>
		{#await carcinogenicityPromise}
			<div>Loading</div>
		{:then testsByComp}
			<div>
				<h3>{testsByComp.length} {label} Opinions found in Carcinogenicity Endpoint</h3>
				<ElementList grData={testsByComp} secLabel="id" />
			</div>
		{/await}
	</div>
</div>

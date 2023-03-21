<script>
	import ChemicalAlert from './ChemicalAlert.svelte';

	export let label;
	export let imgSrc;
	export let ec_number;
	export let cas_number;
	export let empirical_formula;
	export let function_and_uses;
	export let see_also;
	export let smiles;
</script>

<div class="">
	<div class="flex">
		<div class="mr-auto">
			<h1 class="font-bold">Chemical Name</h1>
			<div class="p-2">{label}</div>
		</div>
		<img
			style="height:200px"
			class="border object-contain"
			height="200"
			width="200"
			src={`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${smiles}/PNG`}
			alt="chemical compound"
		/>
	</div>
	<h2>Substance identity</h2>
	<div class="p-1">
		<p>EC / List no.: {ec_number}</p>
		<p>CAS no.: {cas_number}</p>
		<p>Mol. formula: {empirical_formula}</p>
	</div>
	<div class="">
		<h2>Function:</h2>
		<p class=" p-1 max-h-60 overflow-y-auto">{function_and_uses}</p>
	</div>
	<ChemicalAlert cas={cas_number.replace(/-/g, '')} />
</div>

<style>
	h1 {
		@apply text-xl;
	}
	h2 {
		@apply text-lg;
	}
</style>

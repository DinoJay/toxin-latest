<script>
	import CloseIcon from 'svelte-remixicon/lib/icons/CloseLine.svelte';
	import Slider from '@bulatdashiev/svelte-slider';

	let purity = [0, 100];
	let compoundEnabled = true;

	let testSubstanceFilterEnabled = true;
	let purityEnabled = true;
</script>

<fieldset
	class="flex {!testSubstanceFilterEnabled && 'opacity-50'}"
	disabled={!testSubstanceFilterEnabled}
>
	<legend class="text-xl">
		Test Substance
		<input type="checkbox" class="form-checkbox" bind:checked={testSubstanceFilterEnabled} />
	</legend>
	<div>
		<div class="text-lg p-2 flex flex-col {!compoundEnabled && 'opacity-50'}">
			<label class="flex items-center" for="species"
				><span class="mr-auto">Compound:</span>
				<button on:click={() => (compoundEnabled = !compoundEnabled)}
					><CloseIcon color="#5684fd" /></button
				></label
			>
			<input disabled={!compoundEnabled} class="border p-1" name="species" id="species" />
		</div>
		<div class="text-lg p-2 flex justify-center flex-col {!purityEnabled && 'opacity-50'}">
			<label class=" flex items-center" for="purity"
				><span class="mr-auto">Purity ({purity[0]}%):</span>
				<button on:click={() => (purityEnabled = !purityEnabled)}
					><CloseIcon color="#5684fd" /></button
				></label
			>
			<div class="w-40 {!purityEnabled && 'pointer-events-none'}">
				<Slider bind:value={purity} />
			</div>
		</div>
	</div>
</fieldset>

<style>
	fieldset {
		@apply mr-4;
		@apply mb-3;
		@apply border-2;
	}
	fieldset legend {
		@apply mx-3;
	}
</style>

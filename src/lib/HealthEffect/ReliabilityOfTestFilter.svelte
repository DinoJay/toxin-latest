<script>
	import Slider from '@bulatdashiev/svelte-slider';

	import CloseIcon from 'svelte-remixicon/lib/icons/CloseLine.svelte';
	let reliabilityOfTestFilterEnabled = true;

	let year = [1960, 2021];
	let yearEnabled = true;
	let preliminaryStudyEnabled = true;
</script>

<fieldset
	class={!reliabilityOfTestFilterEnabled && 'opacity-50'}
	disabled={!reliabilityOfTestFilterEnabled}
>
	<legend class="text-xl"
		><span class="">Reliability of Test</span>
		<input type="checkbox" class="form-checkbox" bind:checked={reliabilityOfTestFilterEnabled} />
	</legend>
	<div class="text-lg p-2 flex flex-col justify-center {!yearEnabled && 'opacity-50'}">
		<label class=" flex items-center" for="observation"
			><span class="mr-auto">Year ({year[0]} - {year[1]}):</span><button
				on:click={() => (yearEnabled = !yearEnabled)}><CloseIcon color="#5684fd" /></button
			></label
		>
		<div class="w-40 {!yearEnabled && 'pointerEventsNone'}">
			<Slider bind:value={year} order range min={1960} max={2021} />
		</div>
	</div>
	<div class="text-lg p-2 flex flex-col justify-center {!preliminaryStudyEnabled && 'opacity-50'}">
		<label class=" flex items-center" for="observation"
			><span class="mr-auto">Preliminary Study:</span><button
				on:click={() => (preliminaryStudyEnabled = !preliminaryStudyEnabled)}
				><CloseIcon color="#5684fd" /></button
			></label
		>
		<input disabled={!preliminaryStudyEnabled} type="checkbox" class="form-checkbox" checked />
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

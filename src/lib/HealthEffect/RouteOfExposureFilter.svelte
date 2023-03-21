<script>
	import CloseIcon from 'svelte-remixicon/lib/icons/CloseLine.svelte';

	let routeOfExposureFilterEnabled = true;
	let oralEnabled = true;
	let patchingTechniqueEnabled = true;
</script>

<fieldset
	class={!routeOfExposureFilterEnabled && 'opacity-50'}
	disabled={!routeOfExposureFilterEnabled}
>
	<legend class="text-xl"
		>Route of Exposure
		<input type="checkbox" class="form-checkbox" bind:checked={routeOfExposureFilterEnabled} />
	</legend>
	<div class="text-lg p-2 flex flex-col {!oralEnabled && 'opacity-50'}">
		<label class="flex items-center" for="oral"
			><span class="mr-auto">Oral:</span><button on:click={() => (oralEnabled = !oralEnabled)}
				><CloseIcon color="#5684fd" /></button
			></label
		>
		<select disabled={!oralEnabled} class="border p-1" name="oral" id="oral">
			<option value="all">All</option>
			<option value="gavage">Gavage</option>
			<option value="drink-water">Drink Water </option>
			<option value="feed">Feed</option>
		</select>
	</div>
	<div class="text-lg p-2 flex flex-col {!patchingTechniqueEnabled && 'opacity-50'}">
		<label class="flex items-center" for="patching-technique"
			><span class="mr-auto">Patching Technique:</span>
			<button on:click={() => (patchingTechniqueEnabled = !patchingTechniqueEnabled)}
				><CloseIcon color="#5684fd" /></button
			>
		</label>
		<select
			disabled={!patchingTechniqueEnabled}
			class="border p-1"
			name="patching-technique"
			id="type"
		>
			<option value="all">All</option>
			<option value="open">Open</option>
			<option value="semi-occluded">Semi-Occluded </option>
			<option value="occluded">Occluded</option>
		</select>
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

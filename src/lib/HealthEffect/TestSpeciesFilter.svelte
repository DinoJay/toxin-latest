<script>
	import CloseIcon from 'svelte-remixicon/lib/icons/CloseLine.svelte';

	let testSpeciesFilterEnabled = true;
	let speciesEnabled = true;
	let targetOrganEnabled = true;
	let sexEnabled = true;
</script>

<fieldset class={!testSpeciesFilterEnabled && 'opacity-50'} disabled={!testSpeciesFilterEnabled}>
	<legend class="text-xl">
		Test Species
		<input type="checkbox" class="form-checkbox" bind:checked={testSpeciesFilterEnabled} />
	</legend>
	<div class="text-lg p-2 flex flex-col {!speciesEnabled && 'opacity-50'}">
		<label class="flex items-center" for="species"
			><span class="mr-auto">Species:</span><button
				on:click={() => (speciesEnabled = !speciesEnabled)}><CloseIcon color="#5684fd" /></button
			></label
		>
		<input disabled={!speciesEnabled} class="border p-1" name="species" id="species" />
	</div>
	<div class="flex">
		<div class="text-lg p-2 flex flex-col {!targetOrganEnabled && 'opacity-50'}">
			<label class="flex items-center" for="targetOrgan"
				><span class="mr-auto">Target Organ:</span><button
					on:click={() => (targetOrganEnabled = !targetOrganEnabled)}
					><CloseIcon color="#5684fd" /></button
				></label
			>
			<input
				disabled={!targetOrganEnabled}
				class="border p-1"
				name="targetOrgan"
				id="targetOrgan"
			/>
		</div>
		<div class="text-lg p-2 flex flex-col {!sexEnabled && 'opacity-50'}">
			<label class="flex items-center" for="sex"
				><span class="mr-auto">Sex:</span>
				<button on:click={() => (sexEnabled = !sexEnabled)}><CloseIcon color="#5684fd" /></button
				></label
			>
			<select disabled={!sexEnabled} class="border p-1" name="sex" id="type">
				<option value="all">All</option>
				<option value="open">Female</option>
				<option value="semi-occluded">Male </option>
			</select>
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

<script>
	import CloseIcon from 'svelte-remixicon/lib/icons/CloseLine.svelte';
	export let typeOfStudy = null;
	let generalFilterEnabled = true;
	let typeOfStudyEnabled = true;
	let guidelineEnabbled = true;
</script>

<fieldset class={!generalFilterEnabled && 'opacity-50'} disabled={!generalFilterEnabled}>
	<legend class="text-xl">
		<span>General</span>
		<input type="checkbox" class="form-checkbox" bind:checked={generalFilterEnabled} />
	</legend>
	<div class="text-lg p-2 flex flex-col {!typeOfStudyEnabled && 'opacity-50'}">
		<label class="flex items-center  " for="type-of-study">
			<span>Type of study:</span>
			<button on:click={() => (typeOfStudyEnabled = !typeOfStudyEnabled)}>
				<CloseIcon color="#5684fd" />
			</button>
		</label>
		<select
			disabled={!typeOfStudyEnabled}
			class="border p-1"
			name="type-of-study"
			id="type"
			on:change={(e) => {
				typeOfStudy = e.target.value === 'all' ? null : e.target.value;
			}}
		>
			<option value="all">All</option>
			<option value="in vivo">In Vivo</option>
			<option value="in vitro"> In Vitro</option>
		</select>
	</div>
	<div class="text-lg p-2 flex flex-col {!guidelineEnabbled && 'opacity-50'}">
		<label class="flex items-center" for="guideline">
			<span class="mr-auto">Guideline:</span>
			<button on:click={() => (guidelineEnabbled = !guidelineEnabbled)}>
				<CloseIcon color="#5684fd" />
			</button>
		</label>
		<select
			class="border p-1"
			disabled={!guidelineEnabbled}
			name="guideline"
			id="type"
			on:change={(e) => (guideline = e.target.value === 'all' ? null : e.target.value)}
		>
			<option value="all">All</option>
			<option value="oecd">OECD</option>
			<option value="non-oecd">Non OECD</option>
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

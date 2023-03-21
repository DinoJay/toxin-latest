<script>
	let type = 'all';
	let endpointTypeEnabled = true;
</script>

<fieldset class={!endpointTypeEnabled && 'opacity-50'} disabled={!endpointTypeEnabled}>
	<legend class="text-xl">
		<span>Endpoint Type</span>
		<input type="checkbox" class="form-checkbox" bind:checked={endpointTypeEnabled} />
	</legend>
	<div>
		<div>
			<label class="ml-2" for="type">Type:</label>
		</div>

		<select class="ml-2 border p-1 mr-2" name="type" id="type" bind:value={type}>
			<option value="all">All</option>
			<option value="acute toxicity">Acute Toxicity</option>
			<option value="irritation corosivity">Irritation Corosivity</option>
			<option value="repeated toxicity">Repeated Toxicity</option>
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

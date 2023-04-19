<script>
	import uniqBy from '$lib/uniqBy';

	import DropDown from '$lib/DropDown.svelte';
	export let data;

	let selectedData = [];

	const containsData = (id) => !!selectedData.find((d) => d.Endpoint === id);
	const onChange = (d) => {
		if (containsData(d.Endpoint)) {
			selectedData = selectedData.filter((e) => e.Endpoint !== d.Endpoint);
		} else {
			selectedData = [d, ...selectedData];
		}
	};

	console.log('data', data);
</script>

<div class="mb-3">
	<DropDown>
		<span class="text-lg" slot="title">Select Data</span>
		{#each uniqBy(data, (d) => d.Endpoint) as d, i}
			<li class=" mb-3 flex items-center">
				<div class="flex-grow">{d.Endpoint}</div>
				<input
					class="ml-3"
					type="checkbox"
					checked={containsData(d.Endpoint)}
					on:change={() => onChange(d)}
				/>
			</li>
		{/each}
	</DropDown>

	<ul class="mt-6 max-h-96 overflow-y-auto list-disc" style="min-width:50%">
		{#each selectedData as d, i}
			<li class="mb-3 ">
				<div class="flex items-center">
					<div class="font-bold">{d.Endpoint}</div>

					<input
						class="ml-auto"
						type="checkbox"
						on:change={() => onChange(d)}
						checked={containsData(d.Family)}
					/>
				</div>
				<div class="ml-3">{d.Value}{' '}{d.Unit || ''}</div>
			</li>
		{/each}
	</ul>
</div>

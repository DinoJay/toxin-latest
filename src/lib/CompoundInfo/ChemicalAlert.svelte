<script>
	import DropDown from '$lib/DropDown.svelte';
	import ArrowRightSFill from 'svelte-remixicon/lib/icons/ArrowRightSFill.svelte';
	import AttrElement from '$lib/element-list/attrElement.svelte';
	import ChemicalCompound from './ChemicalCompound.svelte';
	import SelectProfilers from './SelectProfilers.svelte';
	import { Result } from 'postcss';
	import SelectData from './SelectData.svelte';

	import profilingEx from './profiling_example';
	import dataEx from './data_example';

	export let cas;

	const host = 'https://eb601b4004c0.ngrok.app';

	const q = `/api/v6/Search/cas/${cas}/true`;

	console.log('query', `${host}${q}`);

	let profilingPromise = fetch(`${host}${q}`)
		.then((res) => res.json())
		.then((res) => {
			console.log('res', res);
			return res.length > 0 ? res[0].ChemId : null;
		})
		.then((chemId) => {
			console.log('chemId', chemId);
			const profilingQ = `/api/v6/Profiling/all/${chemId}`;
			const promiseProfiling = fetch(`${host}${profilingQ}`)
				.then((res) => res.json())
				.then((res) => {
					// console.log('profiling', res);
					return res;
				});

			const dataQ = `/api/v6/Data/all/${chemId}`;
			const promiseData = fetch(`${host}${dataQ}`)
				.then((res) => res.json())
				.then((res) => {
					console.log('data', res);
					return res;
				});

			return Promise.all([promiseProfiling, promiseData]).then(([profiling, data]) => ({
				profiling,
				data
			}));
		});

	// profilingPromise.then((d) => console.log('result', d));
</script>

<div class="mt-3 mb-4">
	<h1 class="text-xl mb-3">OECD Toolbox</h1>
	<div class=" ">
		<div class="flex">
			<!-- {#await profilingPromise}
				<div>Loading...</div>
			{:then result}
				<div style="min-width:50%; max-width:50%" class="pr-6">
					<SelectProfilers data={result.profiling} />
				</div>
				<div style="min-width:50%; max-width:50%" class="pl-6">
					<SelectData data={result.data} />
				</div>
			{:catch error}
				error: {error}
			{/await} -->
			<div style="min-width:50%; max-width:50%" class="pr-6">
				<SelectProfilers data={profilingEx} />
			</div>
			<div style="min-width:50%; max-width:50%" class="pl-6">
				<SelectData data={dataEx} />
			</div>
		</div>
	</div>
</div>

<script>
	import ElementList from '$lib/element-list/index.svelte';
	import transformObject from '$lib/transformObject';
	import uniqBy from '$lib/uniqBy';
	import getParentCategories from '$lib/getTestParentCategories';
	import { groups } from '$lib/group';

	const NON_OECD = 'non OECD';
	const IN_VIVO = 'in vivo';
	const IN_VITRO = 'in vitro';

	// export let typeOfStudy;
	// export let guideline;
	export let results;

	export let endpoint;

	export let oecd;
	export let nonOecd;
	export let invivo;
	export let invitro;
	export let varFilters;
	export let selFilter;

	// $: console.log('oecd', oecd, 'non-oecd', nonOecd, 'invivo', invivo, 'invitro', invitro);
	$: console.log('varFilters', varFilters, 'selFilters', selFilter);

	const { bindings } = results;
	const preData = bindings.map(transformObject);
	const preresults = groups(preData, (d) => d.test)
		.map(([key, values]) => ({ key, values }))
		.map((d) => {
			const obj = {};
			d.values.forEach((e) => {
				const attr = e.pred.substring(e.pred.lastIndexOf('#') + 1);
				obj[attr] = e.value;
			});
			obj.id = d.key;
			// obj.test = d.key;
			// d.key = undefined;
			d.values = undefined;
			return obj;
		})
		.filter((d) => {
			const isInVivo = invivo && d.type === IN_VIVO;
			const isInVitro = invitro && d.type === IN_VITRO;
			const isNonOecd = nonOecd && d.guidelineLabel === NON_OECD;
			const isOECD = oecd && d.guidelineLabel !== NON_OECD;

			const oecdBool = isOECD || isNonOecd;
			const typeBool = isInVivo || isInVitro;

			// console.log('oecd', oecd && d.guideline !== NON_OECD, 'res', bool1, bool2);

			// return (isInVivo || isInVitro) && (isOECD || isNonOecd);
			return typeBool && oecdBool;
		})
		.filter((d) => {
			if (!!varFilters && !!selFilter.value) {
				const found = varFilters?.find((f) => d[f]?.includes(selFilter.value.toLowerCase().trim()));
				return found;
				// return true;
			} else {
				return true;
			}
		});

	console.log(
		'preresults',
		groups(preData, (d) => d.test)
			.map(([key, values]) => ({ key, values }))
			.map((d) => {
				const obj = {};
				d.values.forEach((e) => {
					const attr = e.pred.substring(e.pred.lastIndexOf('#') + 1);
					obj[attr] = e.value;
				});
				obj.id = d.key;
				// obj.test = d.key;
				// d.key = undefined;
				d.values = undefined;
				return obj;
			})
	);

	const reportData = uniqBy(
		preresults.map((d) => ({ ...d, categories: getParentCategories(endpoint)(d) })),
		(d) => d.id
	).sort((a, b) => Object.values(b.categories).length - Object.values(a.categories).length);

	// console.log('reportData', reportData);

	const compoundData = [...groups(reportData, (d) => d.compoundLabel)]
		.map(([key, values]) => ({
			id: key,
			key,
			values
		}))
		.sort((a, b) => b.values.length - a.values.length);

	let selected = 'compound';
	const selectedClass = 'bg-blue-400';
	// $: data = selected === 'compound' ? compoundData : reportData;
	$: reportSelected = selected === 'report';
	$: compoundSelected = selected === 'compound';

	console.log('data', reportData);
	// 	numPages = Math.ceil(grData.length / offset);
	// 	curPage = 0;
	// 	numPagesArray = Array.from(Array(numPages));
	// }
</script>

<div>
	<button
		class="m-1 p-1 border-2 {compoundSelected && selectedClass}"
		on:click={() => (selected = 'compound')}>Compound View</button
	>
	<button
		class="m-1 p-1 border-2 {reportSelected && selectedClass}"
		on:click={() => (selected = 'report')}>Report View</button
	>
</div>
<div class=" mt-3 flex flex-col ">
	<ElementList grData={selected === 'report' ? reportData : compoundData} secLabel={'id'} />
</div>

<style>
</style>

<script>
	export let data = [];
	console.log('data', data);
	const cols = data[0] ? Object.keys(data[0]) : [];
	console.log('cols', cols);
	const clsx = (key) => {
		if (key === 'pdf_link') return 'break-all';
	};
</script>

<div>
	<table class="table-fixed">
		<tr>
			{#each data.columns as d}
				<th class="">
					{d}
				</th>
			{/each}
		</tr>
		{#each data as d}
			<tr>
				{#each cols as n}
					<td class={clsx(n)}>
						<div>{d[n]}</div>
					</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>

<style>
	td {
		max-width: 12rem;
		min-width: 9rem;
		height: 15rem;
		@apply overflow-auto border border-blue-500 px-4 py-2 text-blue-600 font-medium;
	}
	/* th {
		max-width: 12rem;
		min-width: 9rem;
		height: 15rem;
		@apply overflow-auto border border-blue-500 px-4 py-2 text-blue-600 font-medium;
	} */

	td div {
		max-height: 15rem;
	}
</style>

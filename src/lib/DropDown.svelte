<script>
	import { slide } from 'svelte/transition';

	let visible = false;

	// onMount(() => {
	// 	var checkList = document.getElementById('list1');
	// 	checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
	// 		if (checkList.classList.contains('visible')) checkList.classList.remove('visible');
	// 		else checkList.classList.add('visible');
	// 	};
	// });
</script>

<div id="list1" class="dropdown-check-list w-full visible" tabindex="100">
	<span class="w-full anchor border" on:click={() => (visible = !visible)}
		><slot name="title" /></span
	>
	{#if visible}
		<ul transition:slide class="items border max-h-80 overflow-y-auto p-3">
			<slot />
		</ul>
	{/if}
</div>

<style>
	.dropdown-check-list {
		display: inline-block;
	}

	.dropdown-check-list .anchor {
		position: relative;
		cursor: pointer;
		display: inline-block;
		padding: 2px 50px 2px 5px;
	}

	.dropdown-check-list .anchor:after {
		position: absolute;
		content: '';
		border-left: 2px solid black;
		border-top: 2px solid black;
		padding: 5px;
		right: 10px;
		top: 20%;
		transform: rotate(-135deg);
	}

	.dropdown-check-list .anchor:active:after {
		right: 8px;
		top: 21%;
	}

	/* .dropdown-check-list ul.items {
		padding: 2px;
		display: none;
		margin: 0;
		border: 1px solid #ccc;
		border-top: none;
	} */

	.dropdown-check-list ul.items li {
		list-style: none;
	}

	/* .dropdown-check-list.visible .anchor {
		color: #0094ff;
	} */

	.dropdown-check-list.visible .items {
		display: block;
	}
</style>

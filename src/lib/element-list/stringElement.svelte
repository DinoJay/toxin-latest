<script>
	export let key;
	export let value;

	import { fade, slide, fly } from 'svelte/transition';

	let open = false;
</script>

<div class="bg-whitesmoke p-3 mb-2 {!value ? 'text-red-600' : ''}">
	<button type="button">{key}</button>
	<div class="ml-8  ">{value}</div>
</div>

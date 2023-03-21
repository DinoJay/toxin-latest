<script>
	import '../app.css';
</script>

<main class="max-w-screen-lg mx-auto">
	<nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
		<div class="flex items-center text-white mr-6 w-12">
			<svg
				class="h-8 w-8 mr-2"
				width="54"
				height="54"
				viewBox="0 0 54 54"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
				/></svg
			>
		</div>
		<div class="font-semibold text-xl tracking-tight">TOXIN</div>
	</nav>
	<slot />
</main>

<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<div class="mx-auto mt-4 mb-6 max-w-4xl bg-gray-50 px-4 font-gentium">
	{@render children()}
</div>

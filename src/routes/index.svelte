<script lang="ts">
	import { onMount } from 'svelte';

	interface Romanizations {
		dmg: string;
		eir: string;
		ijmes: string;
		loc: string;
	}

	interface WordsObject {
		[orig: string]: Romanizations;
	}

	let words: [string, Romanizations][] = [];

	let loaded = false;

	onMount(async () => {
		const res = await fetch(`/rmnz/words.json`);
		const parsed: WordsObject = await res.json();

		words = Object.entries(parsed);
		loaded = true;
	});
</script>

<svelte:head>
	<title>Persian romanization examples</title>
</svelte:head>

<h1 class="text-3xl mb-4">Persian romanization examples</h1>

<p class="mb-4 text-lg" class:hidden={loaded}><em>Loading words…</em></p>

<div class:hidden={!loaded}>
	<p class="text-lg mb-4">
		There are <code class="text-pink-600">{words.length}</code> words so far. A search function
		will be added soon.
	</p>

	<table class="table-auto divide-y-2 divide-gray-400 text-lg">
		<thead class="text-xl bg-blue-300/25">
			<tr>
				<th class="px-4 py-2 border-r border-gray-400 font-normal">Orig.</th>
				<th
					class="px-4 border-r border-gray-400 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/dmg.pdf">DMG</a></th
				>
				<th
					class="px-4 border-r border-gray-400 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/eir.pdf">EIr</a></th
				>
				<th
					class="px-4 border-r border-gray-400 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/ijmes-full.pdf">IJMES</a></th
				>
				<th class="px-4 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/loc.pdf">LOC</a></th
				>
			</tr>
		</thead>

		<tbody class="divide-y divide-gray-400">
			{#each words as [orig, roms]}
				<tr>
					<td
						lang="ar"
						class="px-4 py-2 text-2xl border-r border-gray-400 font-persian text-center"
						>{orig}</td
					>
					<td class="px-4 border-r border-gray-400">{roms.dmg}</td>
					<td class="px-4 border-r border-gray-400">{roms.eir}</td>
					<td class="px-4 border-r border-gray-400">{roms.ijmes}</td>
					<td class="px-4">{roms.loc}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

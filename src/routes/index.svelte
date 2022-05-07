<script lang="ts">
	import { onMount } from 'svelte';
	import { searchWords } from '$lib/search.svelte';
	import type { Romanizations, WordsObject } from '$lib/types.svelte';

	let words: [string, Romanizations][] = [];
	let selectedWords: [string, Romanizations][] = [];

	let loaded = false;

	let searchTerm = '';
	let searchActive = false;

	function handleSearch(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			searchActive = true;
			selectedWords = searchWords(searchTerm, words);
		}
	}

	function clearSearch() {
		searchTerm = '';
		searchActive = false;
		selectedWords = words;
	}

	onMount(async () => {
		const res = await fetch(`/rmnz/words.json`);
		const parsed: WordsObject = await res.json();

		words = Object.entries(parsed);
		selectedWords = words;
		loaded = true;
	});
</script>

<svelte:head>
	<meta
		name="description"
		content="Examples of Persian words, romanized according to different standards"
	/>
	<meta name="twitter:title" content="Persian romanization examples" />
	<title>Persian romanization examples</title>
</svelte:head>

<h1 class="text-3xl mb-4">Persian romanization examples</h1>

<p class="mb-4 text-lg" class:hidden={loaded}><em>Loading words…</em></p>

<div class:hidden={!loaded}>
	<p class="text-lg mb-3">
		In total, there are <code class="text-rose-700">{words.length}</code> words so far. You
		can search for specific patterns below.
	</p>

	<img
		src="/rmnz/search-icon.svg"
		alt="Magnifying glass icon"
		height="20"
		width="20"
		class="absolute ml-2.5 mt-2.5 pointer-events-none"
	/><input
		id="search-box"
		class="border border-solid border-gray-400 mb-6 rounded text-lg pl-9 pr-8 py-1 w-80 placeholder-gray-500"
		placeholder="Search words"
		bind:value={searchTerm}
		on:keydown={handleSearch}
		readonly={searchActive}
	/><button
		><img
			src="/rmnz/cancel.svg"
			alt="Cancel search"
			height="20"
			width="20"
			class="absolute -mt-4 -ml-7"
			class:hidden={!searchActive}
			on:click={clearSearch}
		/></button
	>

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
				<th
					class="px-4 border-r border-gray-400 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/ijmes-d/">IJMES-D</a></th
				>
				<th class="px-4 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/loc.pdf">LOC</a></th
				>
			</tr>
		</thead>

		<tbody class="divide-y divide-gray-400">
			{#each selectedWords as [orig, roms]}
				<tr>
					<td
						lang="ar"
						class="px-4 py-2 text-2xl border-r border-gray-400 font-persian text-center"
						>{orig}</td
					>
					<td class="px-4 border-r border-gray-400">{roms.dmg}</td>
					<td class="px-4 border-r border-gray-400">{roms.eir}</td>
					<td class="px-4 border-r border-gray-400">{roms.ijmes}</td>
					<td class="px-4 border-r border-gray-400">{roms.ijmesD}</td>
					<td class="px-4">{roms.loc}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

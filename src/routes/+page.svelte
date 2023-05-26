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

<h1 class="mb-4 text-3xl">Persian romanization examples</h1>

<p class="mb-4 text-lg" class:hidden={loaded}><em>Loading words…</em></p>

<div class:hidden={!loaded}>
	<p class="mb-3 text-lg">
		In total, there are <code class="text-rose-700">{words.length}</code> words so far. You can search
		for specific patterns below.
	</p>

	<img
		src="/rmnz/search-icon.svg"
		alt="Magnifying glass icon"
		height="20"
		width="20"
		class="pointer-events-none absolute ml-2.5 mt-2.5"
	/><input
		id="search-box"
		class="mb-6 w-80 rounded border border-solid border-gray-400 py-1 pl-9 pr-8 text-lg placeholder-gray-500"
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
			class="absolute -ml-7 -mt-4"
			class:hidden={!searchActive}
			on:click={clearSearch}
			on:keydown={(e) => {
				if (e.key === 'Enter') clearSearch();
			}}
		/></button
	>

	<table class="table-auto divide-y-2 divide-gray-400 text-lg">
		<thead class="bg-blue-300/25 text-xl">
			<tr>
				<th class="border-r border-gray-400 px-3 py-2 font-normal">Orig.</th>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/dmg.pdf">DMG</a></th
				>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/eir.pdf">EIr</a></th
				>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/ijmes-full.pdf">IJMES</a></th
				>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/ijmes-d">IJMES-D</a></th
				>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/is.pdf">IS</a></th
				>
				<th class="px-3 font-normal text-blue-700 anyfine:hover:underline"
					><a href="/rmnz/docs/loc.pdf">LOC</a></th
				>
			</tr>
		</thead>

		<tbody class="divide-y divide-gray-400">
			{#each selectedWords as [orig, roms]}
				<tr>
					<td lang="ar" class="border-r border-gray-400 px-3 py-2 text-center font-persian text-2xl"
						>{orig}</td
					>
					<td class="border-r border-gray-400 px-3">{roms.dmg}</td>
					<td class="border-r border-gray-400 px-3">{roms.eir}</td>
					<td class="border-r border-gray-400 px-3">{roms.ijmes}</td>
					<td class="border-r border-gray-400 px-3">{roms.ijmesD}</td>
					<td class="border-r border-gray-400 px-3">{roms.is}</td>
					<td class="px-3">{roms.loc}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

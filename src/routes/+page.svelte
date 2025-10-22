<script lang="ts">
	import { onMount } from "svelte";
	import { asset, resolve } from "$app/paths";
	import { searchWords } from "$lib/search";
	import type { Romanizations, WordsObject } from "$lib/types";

	let words: [string, Romanizations][] = $state([]);
	let selectedWords: [string, Romanizations][] = $state([]);

	let loaded = $state(false);

	let searchTerm = $state("");
	let searchActive = $state(false);

	function handleSearch(event: KeyboardEvent) {
		if (event.key === "Enter") {
			searchActive = true;
			selectedWords = searchWords(searchTerm, words);
		}
	}

	function clearSearch() {
		searchTerm = "";
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
		class="pointer-events-none absolute mt-2.5 ml-2.5"
	/><input
		id="search-box"
		class="mb-6 w-80 rounded border border-solid border-gray-400 bg-white py-1 pr-8 pl-9 text-lg placeholder-gray-500"
		placeholder="Search words"
		bind:value={searchTerm}
		onkeydown={handleSearch}
		readonly={searchActive}
	/><button
		onclick={clearSearch}
		onkeydown={(e) => {
			if (e.key === "Enter") clearSearch();
		}}
		><img
			src="/rmnz/cancel.svg"
			alt="Cancel search"
			height="20"
			width="20"
			class="absolute -mt-4 -ml-7 cursor-pointer"
			class:hidden={!searchActive}
		/></button
	>

	<table class="table-auto divide-y-2 divide-gray-400 text-lg">
		<thead class="bg-blue-300/25 text-xl">
			<tr>
				<th class="border-r border-gray-400 px-3 py-2 font-normal">Orig.</th>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700">
					<a href={asset("/docs/dmg.pdf")} class="hover:underline">DMG</a>
				</th>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700">
					<a href={asset("/docs/eir.pdf")} class="hover:underline">EIr</a>
				</th>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700">
					<a href={asset("/docs/ijmes-full.pdf")} class="hover:underline">IJMES</a>
				</th>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700">
					<a href={resolve("/ijmes-d/")} class="hover:underline">IJMES-D</a>
				</th>
				<th class="border-r border-gray-400 px-3 font-normal text-blue-700">
					<a href={asset("/docs/is.pdf")} class="hover:underline">IS</a>
				</th>
				<th class="px-3 font-normal text-blue-700">
					<a href={asset("/docs/loc.pdf")} class="hover:underline">LOC</a>
				</th>
			</tr>
		</thead>

		<tbody class="divide-y divide-gray-400">
			{#each selectedWords as [orig, roms] (orig)}
				<tr>
					<td
						lang="ar"
						class="border-r border-gray-400 px-3 py-2 text-center font-persian text-2xl"
					>
						{orig}
					</td>
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

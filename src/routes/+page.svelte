<script lang="ts">
  import { flushSync, onMount } from "svelte";
  import { asset, resolve } from "$app/paths";
  import { searchWords } from "#lib/search.ts";
  import type { Romanizations, WordsObject } from "#lib/types.ts";

  let words: [string, Romanizations][] = $state([]);
  let selectedWords: [string, Romanizations][] = $state([]);

  let loaded = $state(false);
  let loadFailed = $state(false);

  let searchTerm = $state("");
  let searchActive = $state(false);
  let searchInput: HTMLInputElement | undefined = $state();

  function handleSearch(event: KeyboardEvent) {
    if (event.key === "Enter") {
      searchActive = true;
      selectedWords = searchWords(searchTerm, words);
    }
  }

  function clearSearch() {
    flushSync(() => {
      searchTerm = "";
      searchActive = false;
      selectedWords = words;
    });
    searchInput?.focus();
  }

  async function loadWords() {
    loadFailed = false;

    try {
      const res = await fetch(asset("words.json"));
      if (!res.ok) throw new Error(`Failed to load words: ${res.status}`);
      const parsed: WordsObject = await res.json();

      words = Object.entries(parsed);
      selectedWords = words;
      loaded = true;
    } catch {
      loadFailed = true;
    }
  }

  onMount(() => {
    void loadWords();
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

{#if loadFailed}
  <div class="mb-4 text-lg">
    <p role="alert">Couldn't load the words. Please try again.</p>
    <button type="button" onclick={loadWords} class="text-blue-700 underline">Try again</button>
  </div>
{:else if !loaded}
  <p class="mb-4 text-lg" role="status"><em>Loading words…</em></p>
{/if}

<div class:hidden={!loaded}>
  <p class="mb-3 text-lg">
    In total, there are <code class="text-rose-700">{words.length}</code> words so far. You can search
    for specific patterns below.
  </p>

  <label for="search-box" class="sr-only">Search words</label>
  <div class="relative mb-6 w-80">
    <img
      src={asset("search-icon.svg")}
      alt=""
      height="20"
      width="20"
      class="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2"
    />
    <input
      id="search-box"
      class="block w-full rounded border border-solid border-gray-400 bg-white py-1 pr-10 pl-9 text-lg placeholder-gray-500"
      placeholder="Search words"
      bind:this={searchInput}
      bind:value={searchTerm}
      onkeydown={handleSearch}
      readonly={searchActive}
    />
    <button
      type="button"
      aria-label="Clear search"
      class="absolute top-1/2 right-1 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-blue-700"
      class:hidden={!searchActive}
      onclick={clearSearch}
    >
      <img src={asset("cancel.svg")} alt="" height="20" width="20" />
    </button>
  </div>

  <table class="table-auto divide-y-2 divide-gray-400 text-lg">
    <thead class="bg-blue-300/25 text-xl">
      <tr>
        <th class="border-r border-gray-400 px-3 py-2 font-normal">Orig.</th>
        <th class="border-r border-gray-400 px-3 font-normal text-blue-700">
          <a href={asset("docs/dmg.pdf")} class="hover:underline">DMG</a>
        </th>
        <th class="border-r border-gray-400 px-3 font-normal text-blue-700">
          <a href={asset("docs/eir.pdf")} class="hover:underline">EIr</a>
        </th>
        <th class="border-r border-gray-400 px-3 font-normal text-blue-700">
          <a href={asset("docs/ijmes-full.pdf")} class="hover:underline">IJMES</a>
        </th>
        <th class="border-r border-gray-400 px-3 font-normal text-blue-700">
          <a href={resolve("/ijmes-d")} class="hover:underline">IJMES-D</a>
        </th>
        <th class="border-r border-gray-400 px-3 font-normal text-blue-700">
          <a href={asset("docs/is.pdf")} class="hover:underline">IS</a>
        </th>
        <th class="px-3 font-normal text-blue-700">
          <a href={asset("docs/loc.pdf")} class="hover:underline">LOC</a>
        </th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-400">
      {#each selectedWords as [orig, roms] (orig)}
        <tr>
          <td
            lang="fa"
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

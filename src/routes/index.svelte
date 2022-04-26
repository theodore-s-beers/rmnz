<script lang="ts">
	import { words } from '$lib/words';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@0;1&family=Scheherazade+New&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Gentium+Basic&text=ʿʾ&display=swap"
		rel="stylesheet"
	/>
	<title>Persian romanization examples</title>
</svelte:head>

<h1 class="text-3xl mb-4">Persian romanization examples</h1>

<table class="table-auto divide-y-2 divide-gray-400 text-lg">
	<thead class="font-bold bg-blue-400/25">
		<tr>
			<th class="px-4 py-2 border-r border-gray-400">Orig.</th>
			<th class="px-4 border-r border-gray-400">DMG</th>
			<th class="px-4 border-r border-gray-400">EIr</th>
			<th class="px-4 border-r border-gray-400">IJMES</th>
			<th class="px-4">LOC</th>
		</tr>
	</thead>

	<tbody class="divide-y divide-gray-400">
		{#each words as word}
			<tr>
				<td
					lang="ar"
					class="px-4 py-2 text-2xl border-r border-gray-400 font-persian text-center"
					>{word.orig}</td
				>
				<td class="px-4 border-r border-gray-400">{word.romanizations.dmg}</td>
				<td class="px-4 border-r border-gray-400">{word.romanizations.eir}</td>
				<td class="px-4 border-r border-gray-400">{word.romanizations.ijmes}</td>
				<td class="px-4">{word.romanizations.loc}</td>
			</tr>
		{/each}
	</tbody>
</table>

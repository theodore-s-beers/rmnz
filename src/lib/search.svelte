<script lang="ts" context="module">
	import type { Romanizations } from "$lib/types.svelte";

	export function searchWords(
		searchTerm: string,
		words: [string, Romanizations][],
	): [string, Romanizations][] {
		let selectedWords: [string, Romanizations][] = [];
		const needle = searchTerm.trim().toLowerCase();

		for (const word of words) {
			const orig = word[0];

			if (orig.includes(needle)) {
				selectedWords.push(word);
				continue;
			}

			const roms = word[1];
			const romValues: string[] = Object.values(roms);

			for (const romanization of romValues) {
				if (romanization.includes(needle)) {
					selectedWords.push(word);
					break;
				}
			}
		}

		return selectedWords;
	}
</script>

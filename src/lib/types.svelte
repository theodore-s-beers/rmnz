<script lang="ts" context="module">
	export interface Romanizations {
		dmg: string;
		eir: string;
		ijmes: string;
		ijmesD: string;
		is: string;
		loc: string;
	}

	export interface WordsObject {
		[orig: string]: Romanizations;
	}
</script>

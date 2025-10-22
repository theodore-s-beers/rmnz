<script lang="ts">
	import { asset, resolve } from "$app/paths";
</script>

<svelte:head>
	<meta name="description" content="Details about a standard for romanizing Afghan Persian words" />
	<meta name="twitter:title" content="“IJMES-D”: Romanizing Afghan Persian" />
	<title>“IJMES-D”: Romanizing Afghan Persian</title>
</svelte:head>

<div class="mx-auto max-w-3xl text-lg">
	<p class="mb-3">
		<a href={resolve("/")} class="text-blue-700 hover:underline">Back home</a>
	</p>

	<div class="space-y-4">
		<h1 class="text-3xl">“IJMES-D”: Romanizing Afghan Persian</h1>
		<p>
			The <a
				href="https://www.cambridge.org/core/journals/international-journal-of-middle-east-studies"
				class="text-blue-700 hover:underline">IJMES</a
			>
			romanization standard (<a
				href={asset("/docs/ijmes-full.pdf")}
				class="text-blue-700 hover:underline">see guidelines</a
			>) is now dominant among anglophone scholars in Near Eastern&nbsp;/ Islamic Studies.
			Persianists tend not to like it, but we use it nonetheless—or are compelled to do so—because
			it’s well established. (Among the unfortunate aspects of IJMES Persian romanization is its
			treatment of the
			<a
				href="https://sites.la.utexas.edu/persian_online_resources/phonology/silent-letters-silent-and-consonantal/"
				class="text-blue-700 hover:underline"><em>silent hāʾ</em></a
			>
			word ending, which is rendered <em>-ih</em>. This is insane. It seems to have resulted from a
			desire to observe contradictory principles, leading to a result that pleases no one.)
		</p>
		<p>
			In any case, we need to work with IJMES. It would be good to have a variation of the standard
			for romanizing Afghan&nbsp;/ South Asian Persian, a.k.a. “<a
				href="https://en.wikipedia.org/wiki/Dari"
				class="text-blue-700 hover:underline">Dari</a
			>.” (NB: Different adjustments would be needed for Tajik Persian.) The changes involved are
			few but impactful. They are as follows:
		</p>
		<ul class="list-inside list-disc lg:list-outside">
			<li>
				Consonantal<span class="mx-1.5">و</span>becomes
				<em class="text-green-800">w</em>, not <em>v</em>.
			</li>
			<li>
				The <em>silent hāʾ</em> ending becomes <em class="text-green-800">-a</em>, not
				<em>-ih</em>. (One happy consequence of this is that it meshes better with the IJMES
				romanization of Arabic words ending in <em>tāʾ marbūṭa</em>. For example,
				<em>madrasa</em> would be the same coming from either language.)
			</li>
			<li>
				The <a
					href="https://en.wikipedia.org/wiki/Aimaq_dialect#Phonology"
					class="text-blue-700 hover:underline"><em>majhūl</em> vowels</a
				>—<em class="text-green-800">ē</em> in place of <em>ī</em>,
				<em class="text-green-800">ō</em> in place of <em>ū</em>—are notated as appropriate. See,
				for example, <em class="text-green-800">khurshēd</em>
				vs. <em>khurshīd</em>, <em class="text-green-800">kōh</em> vs. <em>kūh</em>. (It is on the
				practitioner to know which Persian words have <em>majhūl</em> vowels.)
			</li>
		</ul>
	</div>
</div>

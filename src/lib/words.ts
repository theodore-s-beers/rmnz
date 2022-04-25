const wordsJson = {
	محمد: {
		dmg: 'muḥammad',
		eir: 'moḥammad',
		ijmes: 'muḥammad',
		loc: 'muḥammad'
	},
	خانه: { dmg: 'ḫāna', eir: 'ḵāna', ijmes: 'khānih', loc: 'khānah' },
	باغ: { dmg: 'bāġ', eir: 'bāḡ', ijmes: 'bāgh', loc: 'bāgh' },
	کتاب: { dmg: 'kitāb', eir: 'ketāb', ijmes: 'kitāb', loc: 'kitāb' },
	مدرسه: {
		dmg: 'madrasa',
		eir: 'madrasa',
		ijmes: 'madrasih',
		loc: 'madrasah'
	},
	تخت: { dmg: 'taḫt', eir: 'taḵt', ijmes: 'takht', loc: 'takht' },
	عینک: {
		dmg: 'ʿaynak',
		eir: 'ʿeynak',
		ijmes: 'ʿaynak',
		loc: 'ʿaynak'
	},
	بابا: { dmg: 'bābā', eir: 'bābā', ijmes: 'bābā', loc: 'bābā' },
	مَلِک: { dmg: 'malik', eir: 'malek', ijmes: 'malik', loc: 'malik' },
	سیاه: { dmg: 'siyāh', eir: 'siāh', ijmes: 'siyāh', loc: 'siyāh' },
	مشهد: {
		dmg: 'mašhad',
		eir: 'mašhad',
		ijmes: 'mashhad',
		loc: 'mashhad'
	}
};

interface Romanizations {
	dmg: string;
	eir: string;
	ijmes: string;
	loc: string;
}

interface Word {
	orig: string;
	romanizations: Romanizations;
}

export const words: Word[] = Object.entries(wordsJson)
	.map(([orig, romanizations]) => ({
		orig,
		romanizations
	}))
	.sort((a, b) => a.orig.localeCompare(b.orig));

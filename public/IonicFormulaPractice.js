(function () {
	class Ion {
		constructor(name, formula) {
			this.name = name;
			this.formula = formula;
		}
	}
	//creating individual cations
	let sodium = new Ion("sodium", "Na<sup>+</sup>"),
		lithium = new Ion("lithium", "Li<sup>+</sup>"),
		potassium = new Ion("potassium", "K<sup>+</sup>"),
		ammonium = new Ion("ammonium", "NH<sub>4</sub><sup>+</sup>"),
		calcium = new Ion("calcium", "Ca<sup>2+</sup>"),
		magnesium = new Ion("magnesium", "Mg<sup>2+</sup>"),
		strontium = new Ion("strontium", "Sr<sup>2+</sup>"),
		barium = new Ion("barium", "Ba<sup>2+</sup>"),
		iron2 = new Ion("iron(II)", "Fe<sup>2+</sup>"),
		iron3 = new Ion("iron(III)", "Fe<sup>3+</sup>"),
		cobalt2 = new Ion("cobalt(II)", "Co<sup>2+</sup>"),
		cobalt3 = new Ion("cobalt(III)", "Co<sup>3+</sup>"),
		manganese7 = new Ion("manganese(VII)", "Mn<sup>7+</sup>"),
		silver = new Ion("silver", "Ag<sup>+</sup>"),
		mercury2 = new Ion("mercury(II)", "Hg<sup>2+</sup>"),
		mercury1 = new Ion("mercury(I)", "Hg<sub>2</sub><sup>2+</sup>"),
		aluminum = new Ion("aluminum", "Al<sup>3+</sup>"),
		tin2 = new Ion("tin(II)", "Sn<sup>2+</sup>"),
		tin4 = new Ion("tin(IV)", "Sn<sup>4+</sup>"),
		lead2 = new Ion("lead(II)", "Pb<sup>2+</sup>"),
		lead4 = new Ion("lead(IV)", "Pb<sup>4+</sup>"),
		gold3 = new Ion("gold(III)", "Au<sup>3+</sup>"),
		copper2 = new Ion("copper(II)", "Cu<sup>2+</sup>"),
		copper1 = new Ion("copper(I)", "Cu<sup>+</sup>"),
		zinc = new Ion("zinc", "Zn<sup>2+</sup>");
	//creating individual anions
	let fluoride = new Ion("fluoride", "F<sup>-</sup>"),
		chloride = new Ion("chloride", "Cl<sup>-</sup>"),
		bromide = new Ion("bromide", "Br<sup>-</sup>"),
		iodide = new Ion("iodide", "I<sup>-</sup>"),
		oxide = new Ion("oxide", "O<sup>2-</sup>"),
		sulfide = new Ion("sulfide", "S<sup>2-</sup>"),
		nitride = new Ion("nitride", "N<sup>3-</sup>"),
		phosphide = new Ion("phosphide", "P<sup>3-</sup>"),
		chlorate = new Ion("chlorate", "ClO<sub>3</sub><sup>-</sup>"),
		perchlorate = new Ion("perchlorate", "ClO<sub>4</sub><sup>-</sup>"),
		chlorite = new Ion("chlorite", "ClO<sub>2</sub><sup>-</sup>"),
		hypochlorite = new Ion("hypochlorite", "ClO<sup>-</sup>"),
		nitrate = new Ion("nitrate", "NO<sub>3</sub><sup>-</sup>"),
		nitrite = new Ion("nitrite", "NO<sub>2</sub><sup>-</sup>"),
		acetate = new Ion("acetate", "C<sub>2</sub>H<sub>3</sub>O<sub>2</sub><sup>-</sup>"),
		phosphate = new Ion("phosphate", "PO<sub>4</sub><sup>3-</sup>"),
		phosphite = new Ion("phosphite", "PO<sub>3</sub><sup>3-</sup>"),
		sulfate = new Ion("sulfate", "SO<sub>4</sub><sup>2-</sup>"),
		sulfite = new Ion("sulfite", "SO<sub>3</sub><sup>2-</sup>"),
		chromate = new Ion("chromate", "CrO<sub>4</sub><sup>2-</sup>"),
		dichromate = new Ion("chromate", "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>"),
		carbonate = new Ion("carbonate", "CO<sub>3</sub><sup>2-</sup>"),
		bicarbonate = new Ion("bicarbonate", "HCO<sub>3</sub><sup>-</sup>"),
		permanganate = new Ion("permanganate", "MnO<sub>4</sub><sup>-</sup>"),
		hydroxide = new Ion("hydroxide", "OH<sup>-</sup>");
	//create arrays to contain the ion objects

	let cations = [ sodium, lithium, potassium, ammonium, calcium, magnesium, strontium, barium, iron2, iron3, cobalt2, cobalt3, manganese7, silver, mercury2, mercury1, aluminum, tin2, tin4, lead2, lead4, gold3, copper2, copper1, zinc ];
	let anions = [ fluoride, chloride, bromide, iodide, oxide, sulfide, nitride, phosphide, chlorate, perchlorate, chlorite, hypochlorite, nitrate, nitrite, acetate, phosphate, phosphite, sulfate, sulfite, chromate, dichromate, carbonate, bicarbonate, permanganate, hydroxide ];

	let _count = 1;

	document.getElementById('new-ion-button').addEventListener('click', setIonsToPage);

	let app = new Vue({
		el: '#app',
		data: {
			ionPairs: []
		},
	});

	Vue.component('ion', {
		props: ['ion', 'type', 'count', 'showHint'],
		data: function() {
			return {
				showIonHint: this.showHint
			};
		},
		template: `
			<div :class="type">
				<p class="name">{{ ion.name }}</p>
				<button class="hint" :id="type + '-' + count" v-if="!showIonHint" v-on:click="showThisHint()">See Forumula</button>
				<p v-if="showIonHint" class="formula" :id="'hint-' + type + '-' + count" v-html="ion.formula"></p>
			</div>`,
			methods: {
				showThisHint() {
					this.showIonHint = true;
				}
			}
	});

	setIonsToPage();

	function getRandomIndex(list) {
		var randomNum = Math.random();
		var randomIndex = Math.floor(randomNum * list.length);
		return randomIndex;
	}

	function getRandomIon(arr) {
		var indexValue = getRandomIndex(arr);
		return arr[indexValue];
	}

	function setIonsToPage() {
		let newCation = getRandomIon(cations),
				newAnion = getRandomIon(anions);

		_count++;
		app.ionPairs.push({
			cation: newCation,
			anion: newAnion,
			count: _count.toString(),
			showCationHint: false,
			showAnionHint: false,
		});
	}

})()
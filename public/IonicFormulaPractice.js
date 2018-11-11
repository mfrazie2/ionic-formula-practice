(function () {
	// constructors
	class Ion {
		constructor(name, baseFormula, chargeMagnitude, requireParens) {
			this.name = name;
			this.baseFormula = baseFormula;
			this.chargeMagnitude = chargeMagnitude;
			this.requireParens = requireParens;
			this.formula = this.makeFormula(baseFormula, chargeMagnitude);
		}

		makeFormula(baseFormula, chargeMagnitude) {
				return `${baseFormula}<sup>${chargeMagnitude > 1 ? chargeMagnitude : ''}${this._charge}</sup>`
		}
	}

	class Cation extends Ion {
		constructor(name, baseFormula, chargeMagnitude, requireParens) {
			super(name, baseFormula, chargeMagnitude, requireParens);
		}
		get _charge() {
			return '+';
		}
	}
	class Anion extends Ion {
		constructor(name, baseFormula, chargeMagnitude, requireParens) {
			super(name, baseFormula, chargeMagnitude, requireParens);
		}
		get _charge() {
			return '-';
		}
	}

	//creating individual cations
	let sodium = new Cation("sodium", "Na", 1, false),
		lithium = new Cation("lithium", "Li", 1, false),
		potassium = new Cation("potassium", "K", 1, false),
		ammonium = new Cation("ammonium", "NH<sub>4</sub>", 1, true),
		calcium = new Cation("calcium", "Ca", 2, false),
		magnesium = new Cation("magnesium", "Mg", 2, false),
		strontium = new Cation("strontium", "Sr", 2, false),
		barium = new Cation("barium", "Ba", 2, false),
		iron2 = new Cation("iron(II)", "Fe", 2, false),
		iron3 = new Cation("iron(III)", "Fe", 3, false),
		cobalt2 = new Cation("cobalt(II)", "Co", 2, false),
		cobalt3 = new Cation("cobalt(III)", "Co", 3, false),
		manganese7 = new Cation("manganese(VII)", "Mn", 7, false),
		silver = new Cation("silver", "Ag", 1, false),
		mercury2 = new Cation("mercury(II)", "Hg", 2, false),
		mercury1 = new Cation("mercury(I)", "Hg<sub>2</sub>", 2, true),
		aluminum = new Cation("aluminium", "Al", 3, false),
		tin2 = new Cation("tin(II)", "Sn", 2, false),
		tin4 = new Cation("tin(IV)", "Sn", 4, false),
		lead2 = new Cation("lead(II)", "Pb", 2, false),
		lead4 = new Cation("lead(IV)", "Pb", 4, false),
		gold3 = new Cation("gold(III)", "Au", 3, false),
		copper2 = new Cation("copper(II)", "Cu", 2, false),
		copper1 = new Cation("copper(I)", "Cu", 1, false),
		zinc = new Cation("zinc", "Zn", 2, false);
	//creating individual anions
	let fluoride = new Anion("fluoride", "F", 1, false),
		chloride = new Anion("chloride", "Cl", 1, false),
		bromide = new Anion("bromide", "Br", 1, false),
		iodide = new Anion("iodide", "I", 1, false),
		oxide = new Anion("oxide", "O", 2, false),
		sulfide = new Anion("sulfide", "S", 2, false),
		nitride = new Anion("nitride", "N", 3, false),
		phosphide = new Anion("phosphide", "P", 3, false),
		chlorate = new Anion("chlorate", "ClO<sub>3</sub>", 1, true),
		perchlorate = new Anion("perchlorate", "ClO<sub>4</sub>", 1, true),
		chlorite = new Anion("chlorite", "ClO<sub>2</sub>", 1, true),
		hypochlorite = new Anion("hypochlorite", "ClO", 1, true),
		nitrate = new Anion("nitrate", "NO<sub>3</sub>", 1, true),
		nitrite = new Anion("nitrite", "NO<sub>2</sub>", 1, true),
		acetate = new Anion("acetate", "C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>", 1, true),
		phosphate = new Anion("phosphate", "PO<sub>4</sub>", 3, true),
		phosphite = new Anion("phosphite", "PO<sub>3</sub>", 3, true),
		sulfate = new Anion("sulfate", "SO<sub>4</sub>", 2, true),
		sulfite = new Anion("sulfite", "SO<sub>3</sub>", 2, true),
		chromate = new Anion("chromate", "CrO<sub>4</sub>", 2, true),
		dichromate = new Anion("chromate", "Cr<sub>2</sub>O<sub>7</sub>", 2, true),
		carbonate = new Anion("carbonate", "CO<sub>3</sub>", 2, true),
		bicarbonate = new Anion("bicarbonate", "HCO<sub>3</sub>", 1, true),
		permanganate = new Anion("permanganate", "MnO<sub>4</sub>", 1, true),
		hydroxide = new Anion("hydroxide", "OH", 1, true);
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

	Vue.component('solution', {
		props: ['solution', 'count', 'showSolution'],
		data: function() {
			return {
				showFullSolution: this.showSolution
			};
		},
		template: `
			<div>
				<button class="hint" :id="'solution-' + count" v-if="!showFullSolution" v-on:click="showThisSolution()">See Solution</button>
				<p v-if="showFullSolution" class="formula" :id="'hint-solution-' + count" v-html="solution"></p>
			</div>`,
			methods: {
				showThisSolution() {
					this.showFullSolution = true;
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
			solution: buildFormula(newCation, newAnion),
			count: _count.toString(),
			showCationHint: false,
			showAnionHint: false,
			showSolution: false,
		});
	}

	function buildFormula(cation, anion) {
		if (cation.chargeMagnitude === anion.chargeMagnitude) {
			return `${cation.baseFormula}${anion.baseFormula}`;
		}

		let cationFormula, anionFormula;
		if (cation.chargeMagnitude > anion.chargeMagnitude) {
			let ratio = cation.chargeMagnitude / anion.chargeMagnitude;
			if (ratio % 1 === 0) {
				cationFormula = cation.baseFormula;
				if (anion.requireParens) {
					anionFormula = `(${anion.baseFormula})<sub>${ratio}</sub>`;
				} else {
					anionFormula = `${anion.baseFormula}<sub>${ratio}</sub>`;
				}
				return `${cationFormula}${anionFormula}`;
			}
		} else {
			let ratio = anion.chargeMagnitude / cation.chargeMagnitude;
			if (ratio % 1 === 0) {
				anionFormula = anion.baseFormula;
				if (cation.requireParens) {
					cationFormula = `(${cation.baseFormula})<sub>${ratio}</sub>`;
				} else {
					cationFormula = `${cation.baseFormula}<sub>${ratio}</sub>`;
				}
				return `${cationFormula}${anionFormula}`;
			}
		}
		if (cation.requireParens) {
			cationFormula = `(${cation.baseFormula})<sub>${anion.chargeMagnitude}</sub>`;
		} else {
			cationFormula = `${cation.baseFormula}<sub>${anion.chargeMagnitude}</sub>`;
		}
		if (anion.requireParens) {
			anionFormula = `(${anion.baseFormula})<sub>${cation.chargeMagnitude}</sub>`;
		} else {
			anionFormula = `${anion.baseFormula}<sub>${cation.chargeMagnitude}</sub>`;
		}
		return `${cationFormula}${anionFormula}`;
	}

})()
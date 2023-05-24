type Ion = {
    "name": string;
    "baseFormula": string;
    "chargeMagnitude": number;
    "requireParens": boolean;
    "formula": string;
}

function buildFormula(cation: Ion, anion: Ion) {
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
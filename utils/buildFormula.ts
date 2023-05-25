type Ion = {
    "name": string;
    "baseFormula": string;
    "chargeMagnitude": number;
    "requireParens": boolean;
    "formula": string;
}

function applyMagnitudeToIon(ion: Ion, magnitude: number) {
    if (magnitude < 1) throw Error(`Magnitude cannot be less than 1`);
    if (magnitude === 1) return ion.baseFormula;
    const baseFormula = ion.requireParens ? `(${ion.baseFormula})` : ion.baseFormula
    return `${baseFormula}<sub>${magnitude}</sub>`
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
            anionFormula = applyMagnitudeToIon(anion, ratio);
            return `${cationFormula}${anionFormula}`;
        }
    } else {
        let ratio = anion.chargeMagnitude / cation.chargeMagnitude;
        if (ratio % 1 === 0) {
            anionFormula = anion.baseFormula;
            cationFormula = applyMagnitudeToIon(cation, ratio);
            return `${cationFormula}${anionFormula}`;
        }
    }
    anionFormula = applyMagnitudeToIon(anion, cation.chargeMagnitude);
    cationFormula = applyMagnitudeToIon(cation, anion.chargeMagnitude);
    return `${cationFormula}${anionFormula}`;
}
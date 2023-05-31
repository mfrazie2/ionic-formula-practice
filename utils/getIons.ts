import data from '../data/ions.json'
import { Ion, buildFormula } from './buildFormula';


function getRandomIndex(list: any[]) {
  var randomNum = Math.random();
  var randomIndex = Math.floor(randomNum * list.length);
  return randomIndex;
}

function getRandomIon(arr: Ion[]) {
  var indexValue = getRandomIndex(arr);
  return arr[indexValue];
}


export const getRandomCation = () => {
  return getRandomIon(data.cations);
}

export const getRandomAnion = () => {
  return getRandomIon(data.anions);
}

export const getRandomCompound = () => {
  const cation = getRandomCation();
  const anion = getRandomAnion();
  const compound = buildFormula(cation, anion);

  return {
    anion, cation, compound
  };
}
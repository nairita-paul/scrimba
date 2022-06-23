const input = document.getElementById("input");
const btn = document.getElementById("btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const meterToFeet = 3.281;
const litterToGallons = 0.264;
const kilogramToPound = 2.204;

let basevalue;

function unitConverter() {
  basevalue = input.value;
  convertLength();
  convertVolume();
  convertMass();
}

function convertLength() {
  const ftVal = (basevalue * meterToFeet).toFixed(2);
  const mVal = (basevalue / meterToFeet).toFixed(2);

  const mToFtStr = `${basevalue} meter = ${ftVal} feet`;
  const ftToMStr = `${basevalue} feet = ${mVal} meter`;
  length.textContent = `${mToFtStr} | ${ftToMStr}`;
}

function convertVolume() {
  // prettier-ignore
  volume.textContent = `${basevalue} litter = ${basevalue * litterToGallons} gallon | 
  ${basevalue} gallon = ${(basevalue / litterToGallons).toFixed(2)} meter  `;
}

function convertMass() {
  mass.textContent = ` ${basevalue} kilo = ${(
    basevalue * kilogramToPound
  ).toFixed(2)} pound | ${basevalue} pound = ${(
    basevalue / kilogramToPound
  ).toFixed(2)} meter `;
}

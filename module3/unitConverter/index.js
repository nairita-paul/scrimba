const input = document.getElementById("input");
const btn = document.getElementById("btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
let meterToFeet = 3.281;
let litterToGallons = 0.264;
let kilogramToPound = 2.204;

function unitConverter() {
  convertLength();
  convertVolumn();
  convertMass();
}

function convertLength() {
  let basevalue = input.value;
  length.textContent = ` 
  ${basevalue} meter = ${
    basevalue * meterToFeet
  } feet  | ${basevalue} feet = ${(input.value / meterToFeet).toFixed(
    2
  )} meter  `;
}

function convertVolumn() {
  let basevalue = input.value;
  volume.textContent = ` ${input.value} litter = ${
    basevalue * litterToGallons
  } gallon | ${basevalue} gallon = ${(input.value / litterToGallons).toFixed(
    2
  )} meter  `;
}

function convertMass() {
  let basevalue = input.value;
  mass.textContent = ` ${input.value} kilo = ${(
    basevalue * kilogramToPound
  ).toFixed(2)} pound | ${basevalue} pound = ${(
    input.value / kilogramToPound
  ).toFixed(2)} meter `;
}

unitConverter();

//import {typeSentence, deleteSentence, sleep} from "./typingEffect.js";


const body = document.querySelector("body");
const main = document.querySelector("main");

//Navigation Elements
const homeElement = document.getElementById("home");
const shopElement = document.getElementById("shop");
const makeTeeElement = document.getElementById("make-tee");
const aboutElement = document.getElementById("about");
const contactElement = document.getElementById("contact");



//Creates the typing headline in document
const sentenceElement = document.getElementById("sentence");
const worldText = "It's your world ...";
const creativityText = "Let your creativity run free. . . ";
let delay = 100;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const typeSentence = async function (text, element) {
  const letters = text.split("");
  let i = 0;
  while (i < letters.length) {
    await sleep(delay);
    element.append(letters[i]);
    //element.append(letters[i]);
    i++
  }
  return;
};

const deleteSentence = async function (element) {
  const text = element.innerText;
  const letters = text.split("");
  let i = 0;
  while (letters.length > 0) {
    await sleep(delay);
    letters.pop();
    element.innerText = letters.join("");
  }
};

const typeQuoteSentence = async function () {
  await sleep(1000);
  typeSentence(worldText, sentenceElement);
  await sleep(3000);
  deleteSentence(sentenceElement);
  await sleep(4000);
  typeSentence(creativityText, sentenceElement);
};

typeQuoteSentence();

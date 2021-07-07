import {typeSentence, deleteSentence} from "./typingEffect.js";


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

const typeQuoteSentence = async function () {
  await sleep(1000);
  typeSentence(worldText, sentenceElement);
  await sleep(3000);
  deleteSentence(sentenceElement);
  await sleep(4000);
  typeSentence(creativityText, sentenceElement);
};

typeQuoteSentence();

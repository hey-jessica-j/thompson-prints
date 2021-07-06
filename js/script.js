
const body = document.querySelector("body");
const main = document.querySelector("main");
const quoteTextElement = document.getElementById("quote-text");
const homeElement = document.getElementById("home");
const shopElement = document.getElementById("shop");
const makeTeeElement = document.getElementById("make-tee");
const aboutElement = document.getElementById("about");
const contactElement = document.getElementById("contact");

const worldText = "It's your world ...";
const creativityText = "Let your creativity run free. . . ";
let speed = 150;
let textAdded = false;

const typeWriterEffect = async function(element, text, textDelete) {
  let i = -1;

  const addText = setInterval( function() {
    if (i< text.length) {
      element.append(text.charAt(i))
      i++;
      checkIfDelete(element, text, textDelete);

    }
  }, speed)
};

const checkIfDelete = async function(element, text, textDelete) {
  if (textDelete == true) {
    let textLen = text.length;
    let elementLen = element.innerText.length;
    if (elementLen === textLen) {
      await sleep(2000);
      deleteTextEffect(element, text);
    }
  }

};

const deleteTextEffect = async function(element, text) {
  //const delete = setInterval
  let oldText = element.innerText;
  let length = element.innerText.length;
  let textDeleted
  let i = length ;
  console.log(oldText, length, i);

  const time = setInterval( function() {
    if(i >= 1) {
      i--;
      let newText = oldText.substring(0, i);
      element.innerText = newText;

      }
    }, 100)

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const updateHomePage = async function() {
  main.classList.add("home-picture");
  typeWriterEffect(quoteTextElement, worldText, true);

  await sleep(7000);

  typeWriterEffect(quoteTextElement, creativityText, false);
};
body.onLoad = updateHomePage();

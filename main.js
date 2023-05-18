
let nameInput = document.getElementById("name-input");
let nameSpan = document.getElementById("name")

let sectionPageTree = document.getElementById("page3");
sectionPageTree.style.display = "none";

let sectionPageTwo = document.getElementById("page2");
sectionPageTwo.style.display = "none";


function sendName(){
  let sectionPageOne = document.getElementById("page1");
  sectionPageOne.style.display = "none";
  let sectionPageTwo = document.getElementById("page2");
  sectionPageTwo.style.display = "block";
  
  let spanName = nameInput.value;
  nameSpan.innerHTML = spanName
 
}

function startButton() {
  let sectionPageTwo = document.getElementById("page2");
  sectionPageTwo.style.display = "none";

let sectionPageTree = document.getElementById("page3");
sectionPageTree.style.display = "block";

}

/* 

function firstQuestion() {
  let firstAnswer = document.getElementById("a")
  if(firstAnswer = "a") {
    //correcto
  } else {
    //incorrecto
  }
}

function firstQuestion() {
  let firstAnswer = document.getElementById("a")
  let
  if(firstAnswer = "a") {
    addClass = 
  } else {
    //incorrecto
  }
}

  function firstQuestion() {
    let firstAnswer = document.getElementById("a")
    if(firstAnswer = "a") {
      //correcto
    } else {
      //incorrecto
    }
}
*/

function sendAnswers() {
  alert("-La respuesta correcta de la pregunta 1 es Luigui. \n-La respuesta correcta de la pregunta 2 es Princesa Peach. \n-La respuesta correcta de la pregunta 3 es Birdo" );
}

function reloadTrivia(){
  location.reload()
}


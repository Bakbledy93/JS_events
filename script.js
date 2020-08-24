// Fonctionnalité 1
var footEl = document.getElementsByTagName("footer")[0];
console.log(footEl);
var i = 0;
var onFootClick = function(){
  i += 1
  console.log(`clique numéro ${i}`);
}

footEl.addEventListener("click", onFootClick); 

// Fonctionnalité 2
var navId = document.getElementById("navbarHeader");
var navIdToggler = document.getElementsByClassName("navbar-toggler-icon");
console.log(navIdToggler);
console.log(navId);

var onNavClick = function(){
  console.log("coucou");
  navId.classList.toggle("collapse");
};

navIdToggler[0].addEventListener("click", onNavClick);

// Fonctionnalité 3
var firstCard = document.getElementsByClassName("card")[0];
console.log(firstCard);

var editBtn = firstCard.getElementsByClassName("btn")[1];
console.log(editBtn);

var onBtnClick = function (){
  firstCard.style.color ="red";
};

editBtn.addEventListener("click",onBtnClick);

// Fonctionnalité 4
var secondCard = document.getElementsByClassName("card")[1];
console.log(firstCard);

var editBtn = secondCard.getElementsByClassName("btn")[1];
console.log(editBtn);

var onBtnClick = function (){
  if (secondCard.style.color === 'green'){
  secondCard.style.color ="black";
  }
  else {
    secondCard.style.color ="green";
  }
};

editBtn.addEventListener("click",onBtnClick);

// Fonctionnalité 5
var bootLink = document.getElementsByTagName("link")[0];
console.log(bootLink);
var navBody = document.getElementsByTagName ("header")[0];
console.log(navBody);

var onDblNavClick = function(){
  if (bootLink.getAttribute("rel") === " "){
    bootLink.setAttribute("rel","stylesheet")
  }
  else {
    bootLink.setAttribute("rel", " ");
  }
};

navBody.addEventListener ("dblclick", onDblNavClick);

// Fonctionnalité 6
let cards = document.getElementsByClassName("card");
console.log(cards);
for(i = 0 ; i < cards.length; i++){
  let Card = cards[i];
  console.log(Card);
  let viewBtn = Card.getElementsByTagName("button")[0];
  let cardBody = Card.getElementsByTagName("p")[0];
  let imgCard = Card.getElementsByTagName("img")[0];
  let txtHTML = cardBody.innerHTML;
  console.log(`coucou`);

  var onMouseOver = function(){

    if (cardBody.innerHTML === txtHTML){
    cardBody.innerHTML = "";
    imgCard.style.width = "20%";
    imgCard.style.wide = "20%";
    }
    else {
    cardBody.innerHTML = txtHTML;
    imgCard.style.width = "100%";
    imgCard.style.wide = "100%";
    }
  };
  viewBtn.addEventListener("mouseover", onMouseOver);
};

//Fonctionnalité 7

let jumbotron = document.getElementsByClassName("jumbotron")[0];
let jumBtn = jumbotron.getElementsByClassName("btn")[1];
console.log(jumBtn);

var onPickClick = function(){
  let containerNode = document.getElementsByClassName("card")[0].parentNode.parentNode;
  let firstElement = containerNode.firstElementChild;
  let lastElement = containerNode.lastElementChild;
  containerNode.insertBefore(lastElement, firstElement)
};

jumBtn.addEventListener("click", onPickClick);

// Fonctionnalité 8
let jumBtn0 = jumbotron.getElementsByClassName("btn")[0];
console.log(jumBtn0);

var onPickClick0 = function(){
  jumBtn0.removeAttribute("href");
  let containerNode = document.getElementsByClassName("card")[0].parentNode.parentNode;
  let firstElement = containerNode.firstElementChild;
  let lastElement = containerNode.lastElementChild;
  containerNode.insertBefore(firstElement, lastElement.nextSibling)
};

jumBtn0.addEventListener("click", onPickClick0);
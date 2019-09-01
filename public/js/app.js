
var menuButton = document.getElementsByClassName('menuBtn');
var mobileMenu = document.getElementsByClassName('mobileMenu');
var closeBtn = document.getElementsByClassName('closeBtn');


// console.log(closeBtn[0]);

var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active');
}

closeBtn[0].addEventListener('click', clickedBtn);

menuButton[0].addEventListener('click', clickedBtn);


// services section see more button
var seeMore = document.getElementsByClassName("seeMoreBtn");
var blockContainer = document.getElementsByClassName("blockContainer");

var seeMoreClicked = function() {
    blockContainer[0].classList.toggle('moreServices');
}

seeMore[0].addEventListener('click', seeMoreClicked);








// =====================================carDotJs============================================

// var testEl = document.getElementsByTagName("h1");


// var para = document.createElement("h1");
// var node = document.createTextNode("I was Created haha!");
// para.appendChild(node);


// var element = document.getElementById("div1");
// element.appendChild(para);

// console.log(element);
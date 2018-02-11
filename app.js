'use strict';

var allItems=[];

//make my constructor function
function Item(name, filepath, numOfTimesClicked, numOfTimesShown) {
  this.name = name;
  this.filepath = filepath;
  this.numOfTimesClicked=numOfTimesClicked;
  this.numOfTimesShown=numOfTimesShown;
  allItems.push(this);
}

//use my constructor function to create new Item instances
function generateItems() {
  new Item('bag', 'img/bag.jpg', 0, 0);
  new Item('banana', 'img/banana.jpg', 0, 0);
  new Item('bathroom', 'img/bathroom.jpg', 0, 0);
  new Item('boots', 'img/boots.jpg', 0, 0);
  new Item('breakfast', 'img/breakfast.jpg', 0, 0);
  new Item('bubblegum', 'img/bubblegum.jpg', 0, 0);
  new Item('chair', 'img/chair.jpg', 0, 0);
  new Item('cthulhu', 'img/cthulhu.jpg', 0, 0);
  new Item('dog-duck', 'img/dog-duck.jpg', 0, 0);
  new Item('dragon', 'img/dragon.jpg', 0, 0);
  new Item('pen', 'img/pen.jpg', 0, 0);
  new Item('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
  new Item('tauntaun', 'img/tauntaun.jpg', 0, 0);
  new Item('unicorn', 'img/unicorn.jpg', 0, 0);
  new Item('usb', 'img/usb.jpg', 0, 0);
  new Item('water-can', 'img/water-can.jpg', 0, 0);
  new Item('wine-glass', 'img/wine-glass.jpg', 0, 0);
}
generateItems();

//randomly display one of the pictures
// function randomItem() {
//   var randomIndex = Math.floor(Math.random() * Item.allItems.length);
//   imgEl1.src = Item.allItems[randomIndex].filepath;
// }
// randomItem();

//listener, something to be clicked...events!!!
var imgEl1 = document.getElementById('imageOne');
var imgEl2 = document.getElementById('imageTwo');
var imgEl3 = document.getElementById('imageThree');

function displayImage1() {
  var randomIndex = Math.floor(Math.random() * allItems.length);
  imgEl1.src = allItems[randomIndex].filepath;
}
displayImage1();

function displayImage2() {
  var randomIndex = Math.floor(Math.random() * allItems.length);
  imgEl2.src = allItems[randomIndex].filepath;
}
displayImage2();

function displayImage3() {
  var randomIndex = Math.floor(Math.random() * allItems.length);
  imgEl3.src = allItems[randomIndex].filepath;
}
displayImage3();

imgEl1.addEventListener('click', displayImage1);
imgEl2.addEventListener('click', displayImage2);
imgEl3.addEventListener('click', displayImage3);



// var usedImages = {};
// var usedImagesCount = 0;

// function displayImage(){

//     var num = Math.floor(Math.random() * (imagesArray.length));
//     if (!usedImages[num]){
//         document.canvas.src = imagesArray[num];
//         usedImages[num] = true;
//         usedImagesCount++;
//         if (usedImagesCount === imagesArray.length){
//             usedImagesCount = 0;
//             usedImages = {};
//         }
//     } else {
//         displayImage();
//     }
// }
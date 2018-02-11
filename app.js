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
  new Item('usb', 'img/usb.gif', 0, 0);
  new Item('water-can', 'img/water-can.jpg', 0, 0);
  new Item('wine-glass', 'img/wine-glass.jpg', 0, 0);
}
generateItems();

//listener, something to be clicked...events!!!
var imgEl1 = document.getElementById('imageOne');
var imgEl2 = document.getElementById('imageTwo');
var imgEl3 = document.getElementById('imageThree');
var chooseOne = [imgEl1, imgEl2, imgEl3];
var currIndices = []; 
var prevIndices = [];

function computeNewIndices(usedImages) {
  var newSet=new Array(chooseOne.length);
  var newCt=0;
  while(newCt<chooseOne.length) {
    var iRand=Math.floor(Math.random() * allItems.length);
    if(usedImages.includes(iRand) || newSet.includes(iRand)) {
      continue;
    }
    newSet[newCt++]=iRand;
  }
  return newSet;
}

//randomly display one of the pictures
function displayImages() {

  currIndices=computeNewIndices(prevIndices);
  
  for(var i = 0; i < currIndices.length; i++) {
    chooseOne[i].src = allItems[currIndices[i]].filepath;
  }
  prevIndices=currIndices;
}
displayImages();

imgEl1.addEventListener('click', displayImages);
imgEl2.addEventListener('click', displayImages);
imgEl3.addEventListener('click', displayImages);

// document.getElementById ("").addEventListener ("click", updateCounter, false);
// var count = 0;
// function updateCounter() {
//   count++;  
//   document.getElementById("counted").innerHTML = "This has been clicked " + count + " times.";
// }

// var arrayWithElements = new Array();

// document.onclick = clickListener;

// function clickListener(e) {
//   var clickedElement;
//   if(e === null) {
//     clickedElement = event.srcElement;
//   } else {
//     clickedElement = e.target;
//   }
//   arrayWithElements.push(clickedElement);
//   alert(arrayWithElements);
// }
// clickListener();

// chooseOne[].addEventListener('click', displayImage1, displayImage2, displayImage3);


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
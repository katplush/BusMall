'use strict';

var allItems=[];

//make my constructor function
function Item(name, filepath, numOfTimesClicked, numOfTimesShown) {
  this.name = name;
  this.filepath = filepath;
  this.numOfTimesClicked = numOfTimesClicked;
  this.numOfTimesShown = numOfTimesShown;
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
Item.totalClicks = 0;
Item.tally = document.getElementById('tally');

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
function displayImages(clickEvent = null) {

  // if we have event, update count.
  if (clickEvent) {
    var iString = clickEvent.target.getAttribute('index');
    var iNum = parseInt(iString);
    if (!isNaN(iNum)) {
      allItems[iNum].numOfTimesClicked++;
    }
  }
  currIndices = computeNewIndices(prevIndices);

  function showTally() {
    for(var i = 0; i < allItems.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = allItems[i].name + ' has ' + allItems[i].numOfTimesClicked + ' votes in ' + allItems[i].numOfTimesShown + ' views.';
      Item.tally.appendChild(liEl);
      console.log(showTally);
    }
  }

  if ( Item.totalClicks++ > 24) {
    imgEl1.removeEventListener('click', displayImages);
    imgEl2.removeEventListener('click', displayImages);
    imgEl3.removeEventListener('click', displayImages);
    showTally();
  }

  for(var i = 0; i < currIndices.length; i++) {
    chooseOne[i].src = allItems[currIndices[i]].filepath;
    chooseOne[i].setAttribute('index', currIndices[i]);
    allItems[currIndices[i]].numOfTimesShown++;
  }
  prevIndices = currIndices;
}
displayImages();

imgEl1.addEventListener('click', displayImages);
imgEl2.addEventListener('click', displayImages);
imgEl3.addEventListener('click', displayImages);





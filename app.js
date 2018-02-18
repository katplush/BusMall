'use strict';

var allItems=[];

//make my constructor function
function Item(name, filepath, numOfTimesClicked, numOfTimesShown,labelColor) {
  this.name = name;
  this.filepath = filepath;
  this.numOfTimesClicked = numOfTimesClicked;
  this.numOfTimesShown = numOfTimesShown;
  this.labelColor = labelColor;
  allItems.push(this);
}

//use my constructor function to create new Item instances
function generateItems() {
  new Item('Bag', 'img/bag.jpg', 0, 0, '#ffcb0c');
  new Item('Banana', 'img/banana.jpg', 0, 0, '#006400');
  new Item('Bathroom', 'img/bathroom.jpg', 0, 0, '#272759');
  new Item('Boots', 'img/boots.jpg', 0, 0, '#FF1493');
  new Item('Breakfast', 'img/breakfast.jpg', 0, 0, '#ffcb0c');
  new Item('Bubblegum', 'img/bubblegum.jpg', 0, 0, '#006400');
  new Item('Chair', 'img/chair.jpg', 0, 0, '#272759');
  new Item('Cthulhu', 'img/cthulhu.jpg', 0, 0, '#FF1493');
  new Item('Dog-duck', 'img/dog-duck.jpg', 0, 0, '#ffcb0c');
  new Item('Dragon', 'img/dragon.jpg', 0, 0, '#2f6a2f');
  new Item('Pen', 'img/pen.jpg', 0, 0, '#FF1493');
  new Item('Pet-sweep', 'img/pet-sweep.jpg', 0, 0, '#ffcb0c');
  new Item('Tauntaun', 'img/tauntaun.jpg', 0, 0, '#FF1493');
  new Item('Unicorn', 'img/unicorn.jpg', 0, 0, '#2f6a2f');
  new Item('Usb', 'img/usb.gif', 0, 0, '#272759');
  new Item('Water-can', 'img/water-can.jpg', 0, 0, '#ffcb0c');
  new Item('Wine-glass', 'img/wine-glass.jpg', 0, 0, '#FF1493');
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
  console.log(currIndices);

  function showTally() {
    for(var i = 0; i < allItems.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = allItems[i].name + ' has ' + allItems[i].numOfTimesClicked + ' votes out of ' + allItems[i].numOfTimesShown + ' views';
      console.log(allItems[i].numOfTimesShown + ' shown');
      console.log(allItems[i].numOfTimesClicked + ' number of times clicked');
      Item.tally.appendChild(liEl);
    }
  }
  console.log(Item.totalClicks, 'total clicks');
  if ( Item.totalClicks++ > 24) {
    imgEl1.removeEventListener('click', displayImages);
    imgEl2.removeEventListener('click', displayImages);
    imgEl3.removeEventListener('click', displayImages);
    showTally();
    generateChart();
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

function generateChart() {
  var strItems = JSON.stringify(allItems);
  localStorage.setItem('items', strItems);
  var chartNames = [];
  var chartVotes = [];
  var labelColors = [];
  for(var j = 0; j < allItems.length; j++) {
    chartNames[j] = allItems[j].name;
    chartVotes[j] = allItems[j].numOfTimesClicked;
    labelColors[j] = allItems[j].labelColor;
  }

  var ctx = document.getElementById('chart').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartNames,
      datasets: [{
        label: '# of Votes',
        data: chartVotes,
        backgroundColor: labelColors
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks:  {
            beginAtZero: true,
            stepSize: 1,
            max: 8,
          }
        }]
      }
    }
  });
}

var clearLS = document.getElementById('clearStorage');

clearLS.addEventListener('click', function() {
  console.log('click it!');
  localStorage.clear();
});

Product.all = [];
Product.container = document.getElementById('image_container');
Product.justViewed = [];
Product.pics = [document.getElementById('left'), document.getElementById('center'), document.getElementById('rigth')];
// images were given left, center, right in index.html
Product.tally = document.getElementById('tally');
Product.totalClicks = 0;

Product.names = ['bag', 'banana',...];

function Product (name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}

for(var i = 0; i < Product.names.length; i++) {
  new Product(Product.names[i]);
}

function makeRandom() {
  return Math.floor(Math.random() * Product.names.length);
}
 
function displayPics() {
  var currentlyShowing = [];
  //make left image unique
  currentlyShowing[0] = makeRandom();
  while (Product.justViewed.indexOf(currentlyShowing[0]) !== -1) {
    console.error('Duplicate, or in prior view, re-run!');
    currentlyShowing[0] = makeRandom();
  }
  //make center image unique
  currentlyShowing[1] = makeRandom();
  while(currentlyShowing[0] === currentlyShowing[1] || Product.justViewed.indexOf(currentlyShowing[1]) !== -1) {
  console.error('Duplicate at center, or in prior view! Re-run');
  currentlyShowing[1] = makeRandom();
  }
  //make right image unique
  currentlyShowing[2] = makeRandom();
  while(currentlyShowing[0] === currentlyShowing[2] || currentlyShowing[1]....) {
  }
  //take it to the DOM
  for(var i = 0; i < 3; i++) {
    Product.pics[i].src = Procuct.all[currentlyShowing[i]].path;
    Product.pics[i].id = Procuct.all[currentlyShowing[i]].name;
    Product.all[currentlyShowing[i]].views += 1;
    Product.justViewed[i] = currentlyShowing[i];
  }
}
//handle click events
function handleClick(event) {
  console.log(Product.totalClicks, 'total clicks');
  if(Product.totalClicks > 24) {
    Product.container.removeEventListener('click', handleClick);
    //Show the list
    showTally();
  }
  if (event.target.id === 'image_container') {
    return alert('Nope you need to click on an image.');
  }
  Product.totalClicks += 1;
  for (var i =0; i < Product.names.length; i++) {
    if (event.target.id === Product.all[i].name) {
      Product.all[i].votes += 1; 
      console.log(event.target.id + ' has ' + Product.all[i].votes + ' votes in ' + Product.all
      Product.all[i].views + ' views. ');
    }
  }
  displayPics();
}
  //show tally using the list in the DOM
  function showTally() {
    for(var i = 0; i < Product.all.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views.';
      Product.tally.appendChild(liEl);
    }
  }
  //event listener
  Product.container.addEventListener('clicks', handleClick);
  displayPics;
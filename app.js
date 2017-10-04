'use strict';

let time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let shopObj = [];
let hrSum = []; //sum of all store each hr
let salesTable = document.getElementById('sales');
let inputForm = document.getElementById('input-form');


//constructor
function Sales(name,minCust,maxCust,avgCook) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.totalCook = 0;
  this.custEachHr = [];
  this.cookEachHr = [];


//random num generates # of cust in between the min/max customer per hr and push into an array
  this.custPerHr = function(){
    for(let i = 0; i < time.length; i++){
      this.custEachHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };


//generate the number of sale for each day and push into an array
  this.cookPerSale = function(){
    this.custPerHr();
    for(let i = 0; i < time.length; i++){
      this.cookEachHr.push(Math.ceil(this.custEachHr[i] * this.avgCook));
      this.totalCook += this.cookEachHr[i];
    }
  };


  this.render = function(){

    this.cookPerSale();
    let trEl = document.createElement('tr'); // create the row element

    let thEl = document.createElement('th'); // create loc info
    thEl.textContent = this.name;
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);

    //render data
    for(let i = 0; i < time.length; i++){
      let tdEl = document.createElement('td');
      tdEl.textContent = this.cookEachHr[i];
      trEl.appendChild(tdEl);
      salesTable.appendChild(trEl);

    }

    thEl = document.createElement('th'); //loc total
    thEl.textContent = this.totalCook;
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);

  };
  shopObj.push(this);
}


//create new store objects
new Sales('1st and Pike',23,65,6.3);
new Sales('SeaTac Airport',3,24,1.2);
new Sales('Seattle Center',11,38,3.7);
new Sales('Capitol Hill',20,38,2.3);
new Sales('Alki',2,16,4.6);



//header row maker
function makeHeaderRow(){
  let trEl = document.createElement('tr');  //create a row

  //spacer
  let thEl = document.createElement('th');
  thEl.textContent = 'Loc/Time ';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);


  //time header
  for(let i = 0; i < time.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = time[i];
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Total:';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
}

//footer calculator and render
function footerSum(){

  for(let i = 0; i < time.length; i++){
    let sum = shopObj[0].cookEachHr[i] + shopObj[1].cookEachHr[i] + shopObj[2].cookEachHr[i] + shopObj[3].cookEachHr[i] + shopObj[4].cookEachHr[i];
    hrSum.push(sum);
  }

  let trEl = document.createElement('tr');

  //spacer
  let thEl = document.createElement('th');
  thEl.textContent = 'Hr. Total:  ';
  trEl.appendChild(thEl);

  for(i = 0; i < time.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hrSum[i];
    trEl.appendChild(thEl);
  }
  salesTable.appendChild(trEl);
}


//user can clear what just been entered
function handleSelect(event){
  event.preventDefault();

  if(event.target.redo.value == 'yes'){
    shopObj.pop();
    renderShop();
  }
}



//handler function
function handleInput(event){
  event.preventDefault();

  if (!event.target.store.value || !event.target.min.value || !event.target.max.value || !event.target.cookie) {
    return alert('Fields cannot be empty!');
  }

  //strech goal: user can replace data for an existing object
  for(let i = 0; i < shopObj.length; i++){
    if(event.target.store.value == shopObj[i].name){
      shopObj[i].minCust = parseInt(event.target.min.value);
      shopObj[i].maxCust = parseInt(event.target.max.value);
      shopObj[i].avgCook = parseInt(event.target.cookie.value);
      shopObj[i].cookEachHr = [];
      shopObj[i].custEachHr = [];
      shopObj[i].totalCook = 0;
      shopObj[i].render();
      nullValue();
      return renderShop();

    }
  }

  let store = event.target.store.value;
  let min = parseInt(event.target.min.value);
  let max = parseInt(event.target.max.value);
  let cookie = parseInt(event.target.cookie.value);

  // create new object from user input using contructor
  new Sales(store,min,max,cookie);

  nullValue();
  renderShop(); //calls rendering function

}


//listner
inputForm.addEventListener('submit', handleInput);
inputForm.addEventListener('select', handleSelect);



//null fields function
function nullValue(){
  event.target.store.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.cookie.value = null;
}



//calls rendering and methods in the constructor
function renderShop(){
  salesTable.innerHTML = '';  //empty table 1st b4 re-rendering
  makeHeaderRow();
  for(let i = 0; i < shopObj.length; i++){
    shopObj[i].render();
  }
  footerSum();
}

renderShop();

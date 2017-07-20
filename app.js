'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var shopObj = [];
var hrSum = []; //sum of all store each hr
var salesTable = document.getElementById('sales');
var inputForm = document.getElementById('input-form');



//create new store objects
new Sales('1st and Pike',23,65,6.3);
new Sales('SeaTac Airport',3,24,1.2);
new Sales('Seattle Center',11,38,3.7);
new Sales('Capitol Hill',20,38,2.3);
new Sales('Alki',2,16,4.6);



//listner
inputForm.addEventListener('submit', handleInput);


//handler function
function handleInput(event){
  event.preventDefault();

  if (!event.target.store.value || !event.target.min.value || !event.target.max.value || !event.target.cookie) {
    return alert('Fields cannot be empty!');
  }

  var store = event.target.store.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var cookie = parseInt(event.target.cookie.value);


  new Sales(store,min,max,cookie);

  event.target.store.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.cookie.value = null;
  renderShop();
}



function renderShop(){
  salesTable.innerHTML = '';
  makeHeaderRow();
  for(var i = 0; i < shopObj.length; i++){
    shopObj[i].render();
  }
  footerSum();
}


renderShop();


function Sales(name,minCust,maxCust,avgCook) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.totalCook = 0;
  this.custEachHr = [];
  this.cookEachHr = [];
  this.tosser = [];

//random num generates # of cust in between the min/max customer per hr and push into an array
  this.custPerHr = function(){
    for(var i = 0; i < time.length; i++){
      this.custEachHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };


//generate the number of sale for each day and push into an array
  this.cookPerSale = function(){
    this.custPerHr();
    for(var i = 0; i < time.length; i++){
      this.cookEachHr.push(Math.ceil(this.custEachHr[i] * this.avgCook));
      this.totalCook += this.cookEachHr[i];
    }
  };


  this.render = function(){

    this.cookPerSale();
    var trEl = document.createElement('tr'); // create the row element

    var thEl = document.createElement('th'); // create loc info
    thEl.textContent = this.name;
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);

    //render data
    for(var i = 0; i < time.length; i++){
      var tdEl = document.createElement('td');
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


function makeHeaderRow(){
  var trEl = document.createElement('tr');  //create a row

  //spacer
  var thEl = document.createElement('th');
  thEl.textContent = 'Loc/Time ';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);

  //time header
  for(var i = 0; i < time.length; i++){
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

function footerSum(){

  for(var i = 0; i < time.length; i++){
    var sum = shopObj[0].cookEachHr[i] + shopObj[1].cookEachHr[i] + shopObj[2].cookEachHr[i] + shopObj[3].cookEachHr[i] + shopObj[4].cookEachHr[i];
    hrSum.push(sum);
  }

  var trEl = document.createElement('tr');

  //spacer
  var thEl = document.createElement('th');
  thEl.textContent = 'Hr. Total:  ';
  trEl.appendChild(thEl);

  for(var i = 0; i < time.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hrSum[i];
    trEl.appendChild(thEl);
  }


  salesTable.appendChild(trEl);
}

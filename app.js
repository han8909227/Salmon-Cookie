'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var shopObj = [];
var hrSum = [];
var shopLoc = ['1st and Pike','SeaTac Airport','Seattle Center','Capitol Hill','Alki'];
var salesTable = document.getElementById('sales');
// var tosserTable = document.getElementById('tosser');
makeHeaderRow();


new Sales('1st and Pike',23,65,6.3);
new Sales('SeaTac Airport',3,24,1.2);
new Sales('Seattle Center',11,38,3.7);
new Sales('Capitol Hill',20,38,2.3);
new Sales('Alki',2,16,4.6);

for(var i = 0; i < shopLoc.length; i++){
  shopObj[i].cookPerSale();
}

for(i = 0; i < shopLoc.length; i++){
  shopObj[i].render();
}

//sum each hr
for(i = 0; i < time.length; i++){
  var sum = shopObj[0].cookEachHr[i] + shopObj[1].cookEachHr[i] + shopObj[2].cookEachHr[i] + shopObj[3].cookEachHr[i] + shopObj[4].cookEachHr[i];
  hrSum.push(sum);
}

footerSum();



function Sales(name,minCust,maxCust,avgCook) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.totalCook = 0;
  this.custEachHr = [];
  this.cookEachHr = [];
  this.tosser = [];

  // this.numTosser = function(){
  //   for(var i = 0; i < time.length; i++){
  //     var divide = (this.cookEachHr[i]) / 20;
  //     this.tosser.push(divide);
  //   }
  // };


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
  var trEl = document.createElement('tr');

  //spacer
  var thEl = document.createElement('th');
  thEl.textContent = 'Hr. Total:  ';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);

  for(var i = 0; i < time.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = hrSum[i];
    trEl.appendChild(tdEl);
    salesTable.appendChild(trEl);

  }
}

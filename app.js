'use strict';



var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//object for a specific location of sale
var pike = {

  name: 'pike',
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  custEachHr: [],
  cookEachHr: [],


//random num generates # of cust in between the min/max customer per hr and push into an array
  custPerHr: function(){
    for(var i=0;i<time.length;i++){
      this.custEachHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
},


//generate the number of sale for each day and push into an array
  cookPerSale: function(){

      this.custPerHr();
      for(var i=0;i<time.length;i++){
        this.cookEachHr.push(Math.floor(this.custEachHr[i] * this.avgCook));

      }
  },


  //render
  render: function(){
    var pikeUL = document.getElementById('pike');
    // This will render the seagull data array to the DOM
    // We'll need a 'for' loop to iterate over the array
    for(var i = 0; i < this.cookEachHr.length; i++){
      // There are three parts to this process:

      // 1. Create an element
      var liEl = document.createElement('li');

      // 2. Give it content
      liEl.textContent = time[i] + ':  ' + this.cookEachHr[i];


      // 3. Append it to a certain place in the DOM
      // parentElement.appendChild(childElement)
      pikeUL.appendChild(liEl);
    }
  },

  sum: function(a,b){
    return a+b;
  },

  sumCust: function(){
    var totalCust = 0;
    for(var i=0;i<this.custEachHr.length;i++){

      totalCust = this.sum(totalCust,this.custEachHr[i]);

    }

    return totalCust;

  },

  sumCook: function(){
    var totalCook = 0;
    for(var i=0;i<this.cookEachHr.length;i++){

      totalCook = this.sum(totalCook,this.cookEachHr[i]);

    }
    return totalCook;
  },


  total: function(){
    var pikeUL = document.getElementById('pike');
      var liEl = document.createElement('li');
      liEl.textContent = 'Total' + ':  ' + this.sumCook();
      pikeUL.appendChild(liEl);
    }

  };



pike.sumCust();
pike.sumCook();
pike.cookPerSale();
pike.render();
pike.total();




//object for a specific location of sale
var seatac = {

  name: 'seatac',
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  custEachHr: [],
  cookEachHr: [],


//random num generates # of cust in between the min/max customer per hr and push into an array
  custPerHr: function(){
    for(var i=0;i<time.length;i++){
      this.custEachHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
},


//generate the number of sale for each day and push into an array
  cookPerSale: function(){

      this.custPerHr();
      for(var i=0;i<time.length;i++){
        this.cookEachHr.push(Math.floor(this.custEachHr[i] * this.avgCook));

      }
  },


  //render
  render: function(){
    var seatacUL = document.getElementById('seatac');
    // This will render the seagull data array to the DOM
    // We'll need a 'for' loop to iterate over the array
    for(var i = 0; i < this.cookEachHr.length; i++){
      // There are three parts to this process:

      // 1. Create an element
      var liEl = document.createElement('li');

      // 2. Give it content
      liEl.textContent = time[i] + ':  ' + this.cookEachHr[i];

      // 3. Append it to a certain place in the DOM
      // parentElement.appendChild(childElement)
      seatacUL.appendChild(liEl);
    }
  },

  sum: function(a,b){
    return a+b;
  },

  sumCust: function(){
    var totalCust = 0;
    for(var i=0;i<this.custEachHr.length;i++){


      totalCust = this.sum(totalCust,this.custEachHr[i]);
    }

    return totalCust;

  },

  sumCook: function(){
    var totalCook = 0;
    for(var i=0;i<this.cookEachHr.length;i++){


      totalCook = this.sum(totalCook,this.cookEachHr[i]);
    }

    return totalCook;

  },

  total: function(){
    var seatacUl = document.getElementById('seatac');
      var liEl = document.createElement('li');
      liEl.textContent = 'Total' + ':  ' + this.sumCook();
      seatacUl.appendChild(liEl);
    }
};

seatac.cookPerSale();
seatac.render();
seatac.sumCust();
seatac.sumCook();
seatac.total();



//object for a specific location of sale
var seacenter = {

  name: 'seacenter',
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  custEachHr: [],
  cookEachHr: [],


//random num generates # of cust in between the min/max customer per hr and push into an array
  custPerHr: function(){
    for(var i=0;i<time.length;i++){
      this.custEachHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
},


//generate the number of sale for each day and push into an array
  cookPerSale: function(){

      this.custPerHr();
      for(var i=0;i<time.length;i++){
        this.cookEachHr.push(Math.floor(this.custEachHr[i] * this.avgCook));

      }
  },


  //render
  render: function(){
    var seacenterUL = document.getElementById('seacenter');
    // This will render the seagull data array to the DOM
    // We'll need a 'for' loop to iterate over the array
    for(var i = 0; i < this.cookEachHr.length; i++){
      // There are three parts to this process:

      // 1. Create an element
      var liEl = document.createElement('li');

      // 2. Give it content
      liEl.textContent = time[i] + ':  ' + this.cookEachHr[i];

      // 3. Append it to a certain place in the DOM
      // parentElement.appendChild(childElement)
      seacenterUL.appendChild(liEl);
    }
  },

  sum: function(a,b){
    return a+b;
  },

  sumCust: function(){
    var totalCust = 0;
    for(var i=0;i<this.custEachHr.length;i++){


      totalCust = this.sum(totalCust,this.custEachHr[i]);
    }

    return totalCust;

  },

  sumCook: function(){
    var totalCook = 0;
    for(var i=0;i<this.cookEachHr.length;i++){


      totalCook = this.sum(totalCook,this.cookEachHr[i]);
    }

    return totalCook;

  },

  total: function(){
    var seacenterUL = document.getElementById('seacenter');
      var liEl = document.createElement('li');
      liEl.textContent = 'Total' + ':  ' + this.sumCook();
      seacenterUL.appendChild(liEl);
    }
};

seacenter.cookPerSale();
seacenter.render();
seacenter.sumCust();
seacenter.sumCook();
seacenter.total();



//object for a specific location of sale
var caphill = {

  name: 'caphill',
  minCust: 20,
  maxCust: 38,
  avgCook: 2.3,
  custEachHr: [],
  cookEachHr: [],


//random num generates # of cust in between the min/max customer per hr and push into an array
  custPerHr: function(){
    for(var i=0;i<time.length;i++){
      this.custEachHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
},


//generate the number of sale for each day and push into an array
  cookPerSale: function(){

      this.custPerHr();
      for(var i=0;i<time.length;i++){
        this.cookEachHr.push(Math.floor(this.custEachHr[i] * this.avgCook));

      }
  },


  //render
  render: function(){
    var caphillUL = document.getElementById('caphill');
    // This will render the seagull data array to the DOM
    // We'll need a 'for' loop to iterate over the array
    for(var i = 0; i < this.cookEachHr.length; i++){
      // There are three parts to this process:

      // 1. Create an element
      var liEl = document.createElement('li');

      // 2. Give it content
      liEl.textContent = time[i] + ':  ' + this.cookEachHr[i];

      // 3. Append it to a certain place in the DOM
      // parentElement.appendChild(childElement)
      caphillUL.appendChild(liEl);
    }
  },

  sum: function(a,b){
    return a+b;
  },

  sumCust: function(){
    var totalCust = 0;
    for(var i=0;i<this.custEachHr.length;i++){


      totalCust = this.sum(totalCust,this.custEachHr[i]);
    }

    return totalCust;

  },

  sumCook: function(){
    var totalCook = 0;
    for(var i=0;i<this.cookEachHr.length;i++){


      totalCook = this.sum(totalCook,this.cookEachHr[i]);
    }

    return totalCook;

  },

  total: function(){
    var caphillUL = document.getElementById('caphill');
      var liEl = document.createElement('li');
      liEl.textContent = 'Total' + ':  ' + this.sumCook();
      caphillUL.appendChild(liEl);
    }
};

caphill.cookPerSale();
caphill.render();
caphill.sumCust();
caphill.sumCook();
caphill.total();





//object for a specific location of sale
var alki = {

  name: 'alki',
  minCust: 2,
  maxCust: 16,
  avgCook: 4.6,
  custEachHr: [],
  cookEachHr: [],


//random num generates # of cust in between the min/max customer per hr and push into an array
  custPerHr: function(){
    for(var i=0;i<time.length;i++){
      this.custEachHr.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
},


//generate the number of sale for each day and push into an array
  cookPerSale: function(){

      this.custPerHr();
      for(var i=0;i<time.length;i++){
        this.cookEachHr.push(Math.floor(this.custEachHr[i] * this.avgCook));

      }
  },


  //render
  render: function(){
    var alkiUL = document.getElementById('alki');
    // This will render the seagull data array to the DOM
    // We'll need a 'for' loop to iterate over the array
    for(var i = 0; i < this.cookEachHr.length; i++){
      // There are three parts to this process:

      // 1. Create an element
      var liEl = document.createElement('li');

      // 2. Give it content
      liEl.textContent = time[i] + ':  ' + this.cookEachHr[i];

      // 3. Append it to a certain place in the DOM
      // parentElement.appendChild(childElement)
      alkiUL.appendChild(liEl);
    }
  },

  sum: function(a,b){
    return a+b;
  },

  sumCust: function(){
    var totalCust = 0;
    for(var i=0;i<this.custEachHr.length;i++){


      totalCust = this.sum(totalCust,this.custEachHr[i]);
    }

    return totalCust;

  },

  sumCook: function(){
    var totalCook = 0;
    for(var i=0;i<this.cookEachHr.length;i++){


      totalCook = this.sum(totalCook,this.cookEachHr[i]);
    }

    return totalCook;

  },

  total: function(){
    var alkiUL = document.getElementById('alki');
      var liEl = document.createElement('li');
      liEl.textContent = 'Total' + ':  ' + this.sumCook();
      alkiUL.appendChild(liEl);
    }
};

alki.cookPerSale();
alki.render();
alki.sumCust();
alki.sumCook();
alki.total();

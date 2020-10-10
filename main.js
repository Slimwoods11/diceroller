let dierolls = [];
let allRolls = [];
let diereset = 0;
let rollthedice = 0;
let numbers = 0;
let rollamount = 0;

let rollthedie = document.querySelector('#roll-the-dice');
let numdice = document.querySelector('#numbers');
let rollresults = document.querySelector('#roll-results');
let resetbutton = document.querySelector('#die-resets');
let dicerolled = document.querySelector('#dice-rolled');

function giveMeRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

rollthedie.addEventListener('click', function () {
  let dienumber = numdice.value;
  let count = 0;
  allRolls = [];
  console.log(dienumber);
  while (count <= dienumber) {
    allRolls.push('The number rolled:' + giveMeRandomNumber());
    console.log(allRolls);
    count++;

    dicerolled.addEventListener('click', function () {
      rollamount = rollamount + 1;
      dicerolled.innerHTML = rollamount;
    });
  }
});

numberroll.addEventListener('click', function () {
  let count = 0;
  while (count < allRolls.length) {
    console.log(allRolls[count]);
    rollresults.innerHTML += '<li>' + allRolls[count] + '</li>';
    count++;
  }
});

resetbutton.addEventListener('click', function () {
  diereset = diereset + 1;
  diereset.innerHTML = reset;

  rollthedice = 0;
  numbers = 0;
  rollresults = 0;
});

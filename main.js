let dierolls = [];
let allRolls = [];
let diereset = 0;
let rollthedice = 0;
let numbers = 0;
let rollamount = 0;

let rollthedie = document.querySelector('#roll-the-dice');
let numdice = document.querySelector('#numbers');
let rollresults = document.querySelector('#roll-results');
let resetbutton = document.querySelector('#reset-button');
let dicerolled = document.querySelector('#dice-rolled');
let resets = document.querySelector('#die-resets');
let resetNumber = Number(document.querySelector('#die-resets').innerHTML);

function giveMeRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

rollthedie.addEventListener('click', function () {
  let dienumber = numdice.value;
  let count = 0;
  allRolls = [];
  console.log(dienumber);
  while (count < dienumber) {
    allRolls.push(giveMeRandomNumber());
    console.log(allRolls);
    count++;
  }
  count = 0;
  let total = 0;
  while (allRolls.length > count) {
    total = total + allRolls[count];
    count++;
  }
  console.log(total);
  dicerolled.innerHTML = total;
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
  document.querySelector('#dice-rolled').innerHTML = 0;
  document.querySelector('#roll-the-dice').innerHTML;
  document.querySelector('#roll-results').innerHTML = 0;
  resets.innerHTML++;
  numdice.value = 0;
  dieRollsArray = [];
});

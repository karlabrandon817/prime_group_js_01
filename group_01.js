var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

function bonusDetermine(emp){
  // bonus rate
  var bonusRate = 0.0;
  // determine bonusRate
  if (emp[3] <= 2){
    bonusRate = 0.0;
  }else if (emp[3] === 3){
     bonusRate = 0.04;
  }else if (emp[3] === 4){
    bonusRate = 0.06;
  } else if (emp[3] === 5){
    bonusRate =  0.10;
  }
  // check employee number length
  console.log( 'emp[1].length', emp[1].length );
  if (emp[1].length === 4){
    console.log( 'in here' );
    bonusRate += 0.05;
  }
  // salary check
  if (emp[2] > 65000){
    bonusRate -= 0.01;
  }
  // no bonus over 13% or below 0%
  if (bonusRate > 0.13) {
    bonusRate = 0.13;
  }else if (bonusRate < 0.00) {
    bonusRate = 0.00;
  }
  return bonusRate;
};

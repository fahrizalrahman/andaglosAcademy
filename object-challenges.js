console.log('=================================================');
console.log('Tugas 1 (Change Me!)');
console.log('=================================================');

function changeMe(arr) {
  // console.log(arr[0][1]);
  var no = 0;
  var fullName = '';
  for(var i=0; i < arr.length; i++){
    no++;
    fullName = arr[i][0] + ' ' + arr[i][1];
    var objName = {};
    objName.firstName = arr[i][0];
    objName.lastName = arr[i][1];
    objName.gender = arr[i][2];
    if(arr[i][3] === undefined){
      objName.age = 'Invalid Birth Year';
    } else {
      objName.age = 2018 - arr[i][3];
    }
    console.log(no + '.' + fullName);
    console.log(objName);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""


console.log('=================================================');
console.log('Tugas 2 (Shopping Time!)');
console.log('=================================================');

function makeObj (memberId, money) {
  this.memberId = memberId;
  this.money = money;
  this.listPurchased = [];
  this.changeMoney = 0;
}

var shoppingObj = {
  memberId: 'a',
  money: 0,
  listPurchased: [],
  changeMoney: 0
};

function shoppingTime(memberId, money) {
  if (memberId === '' || (memberId === undefined && money === undefined)) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else {
    shoppingObj = new makeObj(memberId, money);
    shoppingObj.memberId = memberId;
    shoppingObj.money = money;
    var canPurchase = true;
    while (money > 0 && canPurchase) {
      if (money >= 1500000) {
        shoppingObj.listPurchased.push('Sepatu Stacattu');
        money -= 1500000;
        canPurchase = true;
      }
      if (money >= 500000) {
        shoppingObj.listPurchased.push('Baju Zoro');
        money -= 500000;
        canPurchase = true;
      }
      if (money >= 250000) {
        shoppingObj.listPurchased.push('Baju H&N');
        money -= 250000;
        canPurchase = true;
      }
      if (money >= 175000) {
        shoppingObj.listPurchased.push('Sweater Uniklooh');
        money -= 175000;
        canPurchase = true;
      }
      if (money >= 50000) {
        shoppingObj.listPurchased.push('Casing Handphone');
        money -= 50000;
        canPurchase = true;
      }
      canPurchase = false;
    }
    shoppingObj.changeMoney = money;
    return shoppingObj;
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
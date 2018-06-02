console.log('=================================================');
console.log('Tugas 1 (Target Terdekat)');
console.log('=================================================');

function targetTerdekat(arr) {
  var findO= arr.indexOf('o');
  var findX= [];
  var diff=[];
  var nearest;
  //cari indexX
  for (var i=0; i < arr.length; i++){
    if (arr[i]==='x'){
      findX.push(i);
    }
  }
  for (var j=0; j < findX.length; j++ ){
    diff.push(Math.abs(findX[j]-findO));
  }
  for (var k=0; k < diff.length; k++){
    var min=diff[0];
    if(min<diff[k]){
      nearest=min;
    }
    else{
      nearest = diff[k];
    }
  }
  if(findX.length === 0){
      nearest=0;
    }
  return nearest;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2


console.log('=================================================');
console.log('Tugas 2 (Mengelompokkan Angka)');
console.log('=================================================');


function mengelompokkanAngka(arr) {
    var arr_result = [[],[],[]];
    for (var i = 0; i < arr.length; i++) {
      //urutan prioritas kelipatan 3 -> ganjil -> genap
      if (arr[i] % 3 === 0) {
        arr_result[2].push(arr[i]);
        continue;
      }
      if (arr[i] % 2 !== 0) {
        arr_result[1].push(arr[i]);
        continue;
      }
      if (arr[i] % 2 === 0) {
        arr_result[0].push(arr[i]);
        continue;
      }
    }
  return arr_result;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]


console.log('=================================================');
console.log('Tugas 3 (Mengelompokkan Hewan)');
console.log('=================================================');


function groupAnimals(animals) {
 var animals_result = [[],[],[]];
     for (var i = 0; i < animals.length; i++) {
          if (animals[i].split('',1).join('') == "k") {
             animals_result[2].push(animals[i]);
          }
          if (animals[i].split('',1).join('') == "c") {
             animals_result[1].push(animals[i]);
          }
          if (animals[i].split('',1).join('') == "a") {
             animals_result[0].push(animals[i]);
          }
    }
    return animals_result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

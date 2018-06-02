console.log('=================================================');
console.log('Tugas 1 (Mencari Mean)');
console.log('=================================================');
function cariMean(arr) {
  var jumlah=0;
  for (var i=0; i<arr.length; i++){
    jumlah+=arr[i];
  }
  var hasil=jumlah/arr.length;
  return Math.round(hasil);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

console.log('=================================================');
console.log('Tugas 2 (Perkalian Unik)');
console.log('=================================================');

function perkalianUnik(arr) {
 var hasil = [];
 var total = 1;
 for (var i = 0; i < arr.length; i++){
   total *= arr[i];
 }

 for (var j = 0; j < arr.length; j++){
   var hasilBagi = total / arr[j];
   hasil.push(hasilBagi);
 }
 return hasil;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]


console.log('=================================================');
console.log('Tugas 3 (Tentukan Deret Aritmatika)');
console.log('=================================================');


function tentukanDeretAritmatika(arr) {
  let selisih = arr[1] - arr[0]
  for (let i = 1; i < arr.length-1; i++) {
    if (arr[i] !== arr[i-1]+selisih) {
      return false
    }
  }
  return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

console.log('=================================================');
console.log('Tugas 4 (Tentukan Deret Geometri)');
console.log('=================================================');


function tentukanDeretGeometri(arr) {
  var gap = arr[1] / arr[0];
  var geometri = true;
  for (var i = 1; i < arr.length - 1 && geometri === true; i++) {
    if (gap !== arr[i+1]/arr[i]) {
      geometri = false;
    }
  }
  return geometri;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
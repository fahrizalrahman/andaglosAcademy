console.log("Tugas 1 (Bandingkan Angka)");

console.log("--------");

function bandingkanAngka(angka1, angka2) {
 if(angka1===angka2){
   return -1
 }   
   return angka1<angka2 

}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

console.log("--------");

console.log("Tugas 2 (Balik Kata)");

console.log("--------");

function balikKata(kata) {
  return kata.split('').reverse().join('');
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS


console.log("--------");

console.log("Tugas 3 (Konversi Menit)");

console.log("--------");

function konversiMenit(menit) {
  
    var konvMenit = menit / 60;
    var konvDetik = menit % 60;

    if(konvDetik >= 10){
    	var KonversiHasil = Math.floor(konvMenit)+':'+Math.floor(konvDetik);
    }else{
    	var KonversiHasil = Math.floor(konvMenit)+':0'+Math.floor(konvDetik);
    }
    

    return KonversiHasil;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00




console.log("--------");

console.log("Tugas 4 (X dan O)");

console.log("--------");


function xo(str) {
  var x = 0;
  var o = 0;
  for(var i = 0; i <= str.length; i++){

  if(str[i] === 'x'){
  	x++;
  }else if(str[i] === 'o'){
  	o++;
  }
  	
}

  return x === o;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
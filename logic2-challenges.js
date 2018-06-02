console.log('=================================================');
console.log('Tugas 1 (Palindrome)');
console.log('=================================================');

function palindrome(kata) {
  var temp = ''
  for(var i = 0; i < kata.length; i++){
    temp=kata[i] + temp
  }
  return temp === kata
  
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

console.log('=================================================');
console.log('Tugas 2 (Number Palindrome)');
console.log('=================================================');

function angkaPalindrome(num) {
    var palindrome = false;
    var stringNum = num.toString(); 
    var numStr = '';

    while (palindrome === false) {
        num++;
        numStr = num.toString();
        var numStrReverse = '';
        for (var i = numStr.length - 1; i >= 0; i--) {
            numStrReverse += numStr[i];
        }

        palindrome = numStr === numStrReverse;
    }
    
    return num;

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001


console.log('=================================================');
console.log('Tugas 3 (Menghitung Jumlah Kata)');
console.log('=================================================');


function hitungJumlahKata(kalimat) {
  var kata=kalimat.split(' ');
  var jumlah=kata.length
  return jumlah;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


console.log('=================================================');
console.log('Tugas 4 (Pasangan Angka Terbesar)');
console.log('=================================================');


function pasanganTerbesar(num) {
  var arr = num.toString().split('');
  var hasil = [];
  for (var i = 0; i < arr.length - 1; i++) {
    hasil[i] = Number(arr[i] + arr[i + 1]);
  }
  var terbesar_sementara= hasil[0];
  for (var j = 1; j < hasil.length; j++){
    if(hasil[j] > terbesar_sementara){
      terbesar_sementara = hasil[j];
    }
  }
  return terbesar_sementara;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
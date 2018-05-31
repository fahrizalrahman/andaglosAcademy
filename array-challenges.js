console.log('Tugas 1 (Melakukan Looping Data Array)'+'\n');
console.log('====================================='+'\n');
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

function dataHandling(input){
  		var ubahData = '';
		for (var i = 0; i <= input.length -1; i++) {	  
			ubahData += 'Nomor ID: ' +input[i][0] +
						'\n' +'Nama: ' + input[i][1] +
						'\n' +'TTL: ' + input[i][2] +', '+ input[i][3] +
						'\n' +'Hobby: ' + input[i][4] +
						'\n'+'\n';
		}
  return ubahData;
}

console.log(dataHandling(input));

console.log('Tugas 2 (Menggunakan Built-in Function pada Array)'+'\n');
console.log('================================================='+'\n');

var array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ;
function dataHandling2(array) { 
return array;
}
array.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
console.log(array)

var arrayDate = array[3].split('/');
switch (arrayDate[1]){
  case '01': console.log('Januari');
  break;
  case '02': console.log('Februari');
  break;
  case '03': console.log('Maret');
  break;
  case '04': console.log('April');
  break;
  case '05': console.log('Mei');
  break;
  default: console.log('coba lagi');
}


var arraySort = arrayDate.sort();
arraySort.sort(function(a,b)
{ return b - a});

var arrayFormatDate = array[3].split('/').join('-');
console.log(arraySort);
console.log(arrayFormatDate);
console.log(array[1].split('',15).join(''));








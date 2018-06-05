console.log('=================================================');
console.log('Tugas 1 (Membuat Class dan Meng-Instance nya.)');
console.log('=================================================');


class Kalkulator {
	constructor(angka1,angka2){
		this.angka1 = angka1
		this.angka2 = angka2
		this.hasil = 0
	}
		tambah(){
			const pertambahan = this.angka1 + this.angka2
			return this.hasil = pertambahan
		}
		kurang(){
			const  pengurangan = this.angka1 - this.angka2
			return this.hasil = pengurangan
		}
		kali(){
			const  perkalian = this.angka1 * this.angka2
			return this.hasil = perkalian
		}
		bagi(){
			const  pembagian = this.angka1 / this.angka2
			return this.hasil = pembagian
		}
		tampilkanHasil(){
			return this.hasil
		}
} 

// test code

const angka1 = 2
const angka2 = 3
const kalkulator = new Kalkulator(angka1, angka2)

kalkulator.tambah()
console.log(kalkulator.hasil) // 5
kalkulator.kurang()
console.log(kalkulator.hasil) // -1
kalkulator.kali()
console.log(kalkulator.hasil) // 6
kalkulator.angka1 = 6
kalkulator.angka2 = 2
kalkulator.bagi()
console.log(kalkulator.hasil) // 3

console.log('=================================================');
console.log('Tugas 2 (Melakukan inheritanc terhadap Class.)');
console.log('=================================================');

class Hewan {
	constructor (spesies,makanan,kaki){
		this.spesies = spesies
		this.makanan = makanan
		this.kaki = kaki
		this.kondisiHewan = false
	}
	kondisiSehat(){
		this.kondisiHewan = true
	}
	kondisiSakit(){
		this.kondisiHewan = false
	}
}

class Gajah extends Hewan {
	constructor (spesies,makanan,kaki){
		super(spesies,makanan,kaki)
		this.semburan = false
	}

	semburanBelalai(){
		console.log("Hewan ini Menyemburkan Air ");
		this.semburan = true
	}
}
class Jerapah extends Hewan {
	constructor (spesies,makanan,kaki){
		super(spesies,makanan,kaki)
		this.leher = false
	}

	leherPanjang(){
		console.log("Hewan ini Mempunyai Leher Panjang");
		this.leher = true
	}
}

const hewanGajah = new Gajah('Elephantidae','tumbuhan',4);
const hewanJerapah = new Jerapah('camelopardalis','daun',4);

hewanGajah.semburanBelalai()
hewanJerapah.leherPanjang()

hewanGajah.kondisiSehat()
hewanJerapah.kondisiSehat()





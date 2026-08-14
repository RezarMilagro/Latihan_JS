// while
var awal = 1
while (awal <= 5) {
    console.log("hello")
    awal++
}

var nilaiAwal = 1
while (nilaiAwal <= 10) {
    // console.log(`Hello ${nilaiAwal}x`)
    console.log("Nilai Awal "+ nilaiAwal + "X")
    nilaiAwal++
}


// for
for (var awalNilai = 1; awalNilai <= 10; awalNilai++) {
    console.log("Hello Kawan " + awalNilai + "x")
}


// if else
var angka = prompt("Masukkan Angka")
if (angka %2 == 0) {
    alert(angka + " adalah bilangan GENAP")
}else if (angka %2 == 1) {
    alert(angka + " angka adalah bilangan GANJIL")
}else {
    alert("Masukkan angka jangan huruf")
}
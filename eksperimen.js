// // while
// var awal = 1
// while (awal <= 5) {
//     console.log("hello")
//     awal++
// }

// var nilaiAwal = 1
// while (nilaiAwal <= 10) {
//     // console.log(`Hello ${nilaiAwal}x`)
//     console.log("Nilai Awal "+ nilaiAwal + "X")
//     nilaiAwal++
// }


// // for
// for (var awalNilai = 1; awalNilai <= 10; awalNilai++) {
//     console.log("Hello Kawan " + awalNilai + "x")
// }


// // if else
// var angka = prompt("Masukkan Angka")
// if (angka %2 == 0) {
//     alert(angka + " adalah bilangan GENAP")
// }else if (angka %2 == 1) {
//     alert(angka + " angka adalah bilangan GANJIL")
// }else {
//     alert("Masukkan angka jangan huruf")
// }


// switch 
// var angka = prompt("Masukkan angka")
// switch (angka) {
//     case "1" :
//         alert("Anda memasukkan angka 1")
//         break;
//     case "2" :
//         alert("Anda memasukkan angka 2")
//         break;
//     case "3" :
//         alert("Anda memasukkan angka 3")
//         break;
//     default :
//         alert("Angka yang anda masukkan salah")
//         break;
// }


// versi 1
// var angka = prompt("Masukkan nama makanan / minuman : \n (cth : nasi, daging, susu, hamburger, softdrink)")
// switch (angka) {
//     case "nasi" :
//         alert("makanan / minuman SEHAT")
//         break;
//     case "daging" :
//         alert("makanan / minuman SEHAT")
//         break;
//     case "susu" :
//         alert("makanan / minuman SEHAT")
//         break;
//     case "hamburger" :
//         alert("makanan / minuman TIDAK SEHAT")
//         break;
//     case "softdrink" :
//         alert("makanan / minuman TIDAK SEHAT")
//     default :
//         alert("makanan / minuman yang anda masukkan tidak sesuai dengan contoh")
// }

// versi 2
// var angka = prompt("Masukkan nama makanan / minuman : \n (cth : nasi, daging, susu, hamburger, softdrink)")
// switch (angka) {
//     case "nasi" :
//     case "daging" :
//     case "susu" :
//         alert("makanan / minuman SEHAT")
//         break;
//     case "hamburger" :
//     case "softdrink" :
//         alert("makanan / minuman TIDAK SEHAT")
//     default :
//         alert("makanan / minuman yang anda masukkan tidak sesuai dengan contoh")
// }

var s = ""
for (var i = 5; i > 0; i--) {
    for (var j = 0; j < i; j++){
        s += "*"
    }
    s += "\n"
}
console.log(s)
// contoh function declaration
function penjumlahanDuaBilangan(a, b) {
    var total
    total = a + b

    return total
}
console.log(penjumlahanDuaBilangan(2, 4))
console.log(penjumlahanDuaBilangan(4, 6))
console.log(penjumlahanDuaBilangan(7, 4.4))

// contoh function expression
var penjumlahanDuaBilangan = function(a, b) {
    var total
    total = a + b
    
    return total
}


// NOTED : FUNCTION YANG BAIK HANYA MENGERJAKAN 1 HAL SAJA
// versi 1
function volumeKubus(s) {
    var total
    total  = s * s * s

    return total
}
console.log(volumeKubus(8))
console.log(volumeKubus(3))

console.log(volumeKubus(8) + volumeKubus(3))
var hasil = (volumeKubus(3) + volumeKubus(2))
console.log(hasil)


// versi 2
function jmlDuaVolumeKubus(a, b) {
    var kubus1
    var kubus2
    var tambahDuaKubus

    kubus1 = a * a * a
    kubus2 = b * b * b

    tambahDuaKubus = kubus1 + kubus2
    
    return tambahDuaKubus
}
console.log(jmlDuaVolumeKubus(2, 6))



// parameter dan argument
// function tambah(a, b) {
//     return a + b
// }

// var a = 10
// var b = 20
// var totalTambah = tambah(a, b)
// console.log(totalTambah)

// menggunakan paerseInt karena kalau prompt saja masuk string
// var a = parseInt(prompt("Masukkan Nilai a"))
// var b = parseInt(prompt("Masukkan Nilai b"))
// var totalHasil = tambah(a, b)
// alert(totalHasil)
 
// function kali(a, b) {
//     return a * b
// }

// console.log(kali(4, 4))

// var hasilKali = kali(tambah(1, 2), tambah(1, 1))
// console.log(hasilKali)

// var hasil = tambah(2, 2)
// var hasil2 = tambah(2*2, 2*2)
// console.log(hasil)
// console.log(hasil2)

// console.log(tambah(3, 4))
// console.log(tambah(3*2, 4*2))


// function tambah() {
//     return arguments
// }
// var tes = tambah(2, 4, 6, "Hello", true)
// console.log(tes)

// function tambah() {
//     var hasil = 0
//     for (i = 0; i < arguments.length; i++) {
//         hasil += arguments[i]
//     }
//     return hasil
// }
// var tes = tambah(2, 4, 6)
// console.log(tes)


// VARIABLE SCOPE
var a = 1

function tes(a) {
    console.log(a)
}
tes(a)
console.log(a)
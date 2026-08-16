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
// REFACTORING : menyederhanakan sebuah kode agar lebih ringkas dan efektif
// NODE : Tetap utamakan "Readability"-nya, karena blm tentu sebuah kode yg dibuat sendiri bisa dibaca oleh orang lain
//          jika hanya memikirkan ringkasannya saja

// function jmlDuaVolumeKubus(a, b) {
//     var kubus1
//     var kubus2
//     var tambahDuaKubus

//     kubus1 = a * a * a
//     kubus2 = b * b * b

//     tambahDuaKubus = kubus1 + kubus2
    
//     return tambahDuaKubus
// }

// contoh sederhana refactoring kode yg di atas
function jmlDuaVolumeKubus(a, b) {
    return a * a * a + b * b * b
}
console.log(jmlDuaVolumeKubus(2, 6))
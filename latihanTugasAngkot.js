// WHILE
// var angkot = 1
// while (angkot <= 10) {
//     // versi 1
//     console.log("Angkot No. " + angkot + " Beroperasi dengan Baik.")

//     // versi 2
//     console.log(`Angkot No. ${angkot} Beroperasi dengan Baik.`)
// angkot++
// }

// revisi atas | tugas angkot 1
// var jmlAngkot = 10
// var noAngkot = 1
// while (noAngkot <= jmlAngkot) {
//     console.log("Angkot No. " + noAngkot + "x Beroperasi dengan Baik")
// noAngkot++
// }

// tugas angkot 2
// var jmlAngkot = 10
// var angkotBeroperasi = 6
// var noAngkot = 1
// while (noAngkot <= angkotBeroperasi) {
//     console.log("Angkot No. " + noAngkot + " Beroperasi dengan Baik")
//     noAngkot++
// }

// for (angkotBeroperasi = angkotBeroperasi + 1; angkotBeroperasi <= jmlAngkot; angkotBeroperasi++) {
//     console.log("Angkot No. " + angkotBeroperasi + " Tidak beroperasi")
// }


// tugas angkot 3
// var jmlAngkot = 10
// var angkotBeroperasi = 6
// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log("Angkot No." + noAngkot + " Beroperasi dengan baik")
//     }else {
//         console.log("Angkot No." + noAngkot + " Sedang tidak beroperasi")
//     }
// }


// tugas angkot 4 versi 1.1
var jmlAngkot = 10
var angkotBeroperasi = 6
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No." + noAngkot + " Beroperasi dengan baik")
    }else if (noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot No." + noAngkot + " Sedang lembur")
    }else {
        console.log("Angkot No." + noAngkot + " Sedang tidak beroperasi")
    }
}

// tugas angkot 4 versi 1.2
var jmlAngkot = 10
var angkotBeroperasi = 6
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No." + noAngkot + " Beroperasi dengan baik")
        if (noAngkot === 5) {
        console.log("Angkot No." + noAngkot + " Sedang Lembur")
        }
    }else if (noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot No." + noAngkot + " Sedang lembur")
    }else {
        console.log("Angkot No." + noAngkot + " Sedang tidak beroperasi")
    }
}

// tugas angkot 4 versi 1.3
var jmlAngkot = 10
var angkotBeroperasi = 6
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log("Angkot No." + noAngkot + " Beroperasi denga baik")
    }else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log("Angkot No." + noAngkot + " Sedang lembur")
    }else {
        console.log("Angkot No." + noAngkot + " Sedang tidak beroperasi")
    }
}
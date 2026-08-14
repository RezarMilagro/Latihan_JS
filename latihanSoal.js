// PART 1
// soal 1
let nilai1 = 80
let hasil1 = ""
if (nilai1 >= 80) {
        hasil1 = "Lulus"
    } else {
        hasil1 = "Tidak Lulus"
    }
document.getElementById("soal1").innerHTML = hasil1


// soal 2
let nilai2 = 100
let hasil2 = ""
if (nilai2 >= 90 && nilai2 <=100) {
    hasil2 = "A"
} else if (nilai2 >=80 && nilai2 <= 89) {
    hasil2 = "B"
} else if (nilai2 >=70 && nilai2 <= 79) {
    hasil2 = "C"
} else if (nilai2 >=60 && nilai2 <= 69) {
    hasil2 = "D"
} else if (nilai2 <60 ) {
    hasil2 = "E"
}
document.getElementById("soal2").innerHTML = hasil2


// soal 3 versi 1
var nama = "admin"
var password = 1234
if (nama == "admin" && password == 1234) {
    console.log("Admin Sesuai")
}else {
    console.log("Admin Tidak seusai")
}

// soal 3 versi 2
const inputAdmin = document.querySelector('input[name="admin"]')
console.log(inputAdmin)
const passwordAdmin = document.querySelector('input[name="admin_password"]')
console.log(passwordAdmin)

function onclick1() {
    const adminValue = inputAdmin.value 
    console.log(adminValue)
    const passwordValue = passwordAdmin.value 
    console.log(passwordValue)

    if (adminValue == "admin" && passwordValue == "1234") {
        alert("Admin Sesuai")
    }else {
        alert("Admin tidak Sesuai")
    }
}
    

// soal 4
const nilaiMahasiswa = document.querySelector('input[name="nilai"]')
const kehadiranMahasiswa = document.querySelector('input[name="kehadiran"]')

function onclick2() {
    const val_nilaiMahasiswa = nilaiMahasiswa.value
    const val_kehadiranMahasiswa = kehadiranMahasiswa.value

    if (val_nilaiMahasiswa >= 70 && val_kehadiranMahasiswa >= 75) {
        alert("Lulus")
    }else {
        alert("Tidak Lulus")
    }
}


// soal 5
let umur = 17
let tinggi = 165
if (umur >= 17 && tinggi >= 160) {
    console.log("Boleh Masuk")
}else if (umur < 17 && tinggi >= 160) {
    console.log("Umur Belum Mencukupi")
}else if (umur >= 17 && tinggi < 160) {
    console.log("TInggi Belum Mencukupi")
}else {
    console.log("tidak Boleh Masuk")
}


// PART 2
// Soal 1
for (i=0; i<=10; i++) {
    console.log(i)
}

for (j=0; j<=10; j+=2) {
    console.log(j)
}
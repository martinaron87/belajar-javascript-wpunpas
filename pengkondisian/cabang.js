// if (kondisi) {
//    aksi
// }

var angka = prompt('Masukkan Angka Anda : ');
if (angka % 2 === 0) {
    alert(angka + ' adalah bilangan Genap');    
} else if (angka % 2 === 1) {
    alert(angka + ' adalah bilanan Ganjil');
} else if (angka === null) {
    alert('masukkan anda salah, tolong masukkan inputan berupa angka!')
} else {
    alert('masukkan anda salah, tolong masukkan inputan berupa angka!')
}
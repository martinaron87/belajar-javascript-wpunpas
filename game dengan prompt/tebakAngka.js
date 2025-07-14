// var tanya = true; // menandakan permainan masih berlangsung

// while (tanya) {
//     alert('Selamat datang di permainan tebak angka!\n\nSilahkan pilih angka antara 1-10!\n\nKamu memiliki 3 kesempatan untuk memilih!');

//     // angka tebakan komputer
//     var comp = Math.floor(Math.random() * 10) + 1;
//     console.log(comp); // untuk mengecek angka tebakan komputer

//     for (var i = 3; i > 0; i--) {
//         // angka tebakan user
//         var input = prompt('Masukkan angka tebakkanmu!');

//         if (Number(input) === comp) {
//             alert('Tebakanmu benar!\n\nSelamat kamu menang!');
//             break; // keluar dari loop for jika tebakan benar
//         } else if (Number(input) < comp) {
//             alert('Tebakanmu terlalu kecil!\n\nAyo coba lagi, masih ada ' + (i-1) + ' kesempatan!');
//         } else if (Number(input) > comp) {
//             alert('Tebakanmu terlalu besar!\n\nAyo coba lagi, masih ada ' + (i-1) + ' kesempatan!');
//         } else {
//             alert('Tebakanmu tidak valid!\n\nSilahkan masukkan angka antara 1-10!\nKesempatan tersisa ' + (i-1));
//         }
//     }

//     if (i < 1) {
//         alert('Kesempatanmu sudah habis!\n\nAngka yang benar adalah ' + comp);
//     }

//     tanya = confirm('Ingin bermain lagi?');
// }

// alert('Terima kasih sudah bermain!');



// new code
var tanya = true; // Menandakan permainan masih berlangsung

while (tanya) {
    alert('Selamat datang di permainan tebak angka!\n\nSilahkan pilih angka antara 1-10!\n\nKamu memiliki 3 kesempatan untuk memilih!');

    // Angka tebakan komputer
    var comp = Math.floor(Math.random() * 10) + 1;
    console.log(comp); // Debugging: menampilkan angka tebakan komputer di console

    var hasil = ''; // Variabel untuk menyimpan hasil tebakan
    
    var kesempatan = 3; // Jumlah kesempatan

    do {
        // Angka tebakan user
        do {
           var angkaTebakan = parseInt(prompt('Masukkan angka tebakanmu (1-10):'));
        } while (isNaN(angkaTebakan) || angkaTebakan < 1 || angkaTebakan > 10);

        if (angkaTebakan === comp) {
            hasil = 'Tebakanmu benar!\n\nSelamat kamu menang!';
            kesempatan = 0;
        } else if (angkaTebakan !== comp && kesempatan === 1) {
            hasil = 'Kesempatanmu sudah habis!\n\nAngka yang benar adalah ' + comp;
        } else if (angkaTebakan < comp) {
            hasil = 'Tebakanmu terlalu kecil!\n\nAyo coba lagi, masih ada ' + (kesempatan - 1) + ' kesempatan!';
        } else if (angkaTebakan > comp) {
            hasil = 'Tebakanmu terlalu besar!\n\nAyo coba lagi, masih ada ' + (kesempatan - 1) + ' kesempatan!';
        } 

        alert(hasil);

        kesempatan--;
    } while (kesempatan > 0);

    tanya = confirm('Ingin bermain lagi?');
}

alert('Terima kasih sudah bermain!');

var tanya = true; // menandakan permainan masih berlangsung
while (tanya) {
    // menangkap pilihan user
    var p = prompt('Pilih: gajah, semut, orang').toLowerCase();

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random(); // membangkitkan bilangan random dari 0-1

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    // menentukan rules
    var hasil = '';
    if (p === comp) {
        hasil = 'SERI!';
    } else if (p ==='gajah') {
        // if (comp === 'semut') {
        //     hasil = 'KALAH!';
        // } else {
        //     hasil = 'MENANG!';
        // }
        // menggunakan operator ternary
        hasil = (comp === 'semut') ? 'KALAH!' : 'MENANG!';
    } else if (p === 'semut') {
        hasil = (comp === 'gajah') ? 'MENANG!' : 'KALAH!';
    } else if (p === 'orang') {
        hasil = (comp === 'semut') ? 'MENANG!' : 'KALAH!';
    } else {
        alert('Pilihan Anda salah, silahkan pilih antara gajah, semut, atau orang!');
        hasil = 'salah!';
    }

    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + '\nKomputer memilih : ' + comp + '\nHasilnya : Anda ' + hasil);

    // menanyakan kepada user apakah ingin bermain lagi
    tanya = confirm('Ingin bermain lagi?');
    // jika user menekan tombol OK, maka tanya akan bernilai true, jika tidak maka false
}

alert('Terima kasih sudah bermain!');
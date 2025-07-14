function generatePattern(size) {
    let middleRow = Math.floor(size / 2); // Baris tengah otomatis

    for (let i = 0; i < size; i++) {
        let line = ''; // Menyimpan satu baris output
        for (let j = 0; j < size; j++) {
            if (i === middleRow) {
                line += 'C '; // Baris tengah diisi 'C'
            } else if (i === j) {
                line += 'A '; // Elemen diagonal utama
            } else if (i + j === size - 1) {
                line += 'B '; // Elemen diagonal sekunder
            } else {
                line += (j + 1) + ' '; // Cetak angka jika bukan A, B, atau C
            }
        }
        console.log(line.trim()); // Cetak setiap baris
    }
}

// Ubah nilai di sini tanpa perlu mengedit kondisi if
generatePattern(5); // Bisa diubah ke nilai lain, misalnya generatePattern(9) atau generatePattern(11)

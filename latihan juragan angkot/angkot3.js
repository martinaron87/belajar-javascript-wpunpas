var noAngkot = 1,
    angkotBeroperasi = 6,
    jmlAngkot = 10;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if ( noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + '  beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    } 
}


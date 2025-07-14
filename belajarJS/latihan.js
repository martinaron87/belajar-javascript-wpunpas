var x = 20;
if (x == 10) {
    alert("x adalah " + x); 
} else if (x <= 10 || x % 2 == 0) {
    alert("x adalah " + (x-5));
}

alert('kami sedang "makan"');
alert("hari ini adalah hari jum'at");
console.log("akjhfaksh jum'at");
console.log("fgefgw \n");
console.log("\u7676");
console.log("martin aron" == 'martin ARon');
console.log("martin ARon".length);

var lagi = false;
while (lagi === false) {
    var nama = prompt('Siapa nama mu?');
    alert('halo, nama saya ' + nama);

    lagi = confirm('Batal atau oke?');
}
alert('data tersimpan!');
alert('sampai jumpa...');

var ulang = true;
while (ulang) {
    console.log('hello world');
    ulang = confirm('lagi?');
}

var awal = 1;
while (awal <=5) {
    console.log('halo, nama saya ' + nama);
awal++;
}

for (var i=0; i<=5; i++) {
    console.log('nama saya ' + i + ' kali ' + nama);
}
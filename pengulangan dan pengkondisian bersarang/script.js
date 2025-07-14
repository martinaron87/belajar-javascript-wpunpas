var a ='';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        a += j + ' ';
    }
    a += '\n';
}
console.log(a);
console.log('\n');

var b ='';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        b += i + ' ';
    }
    b += '\n';
}
console.log(b);
console.log('\n');

var c = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        c += '*';
    }
    c += '\n';
}
console.log(c);
console.log('\n');

var d = '';
for (var i = 5; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        d += '*';
    }
    d += '\n';
}
console.log(d);
console.log('\n');

var e = '';
for (var i = 1; i <= 5; i++) {
    for (var j = 5; j > 0; j--) {
        e += j + ' ';
    }
    e += '\n';
}
console.log(e);
console.log('\n');

var f = '';
for (var i = 5; i > 0; i--) {
    for (var j = 1; j <= 5; j++) {
        f += i + ' ';
    }
    f += '\n';
}
console.log(f);
console.log('\n');

var g ='';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 6; j++) {
        if (j % 2 == 0) {
            g += 'x ';
        } else {
            g += j + ' ';
        }
    }
    g += '\n';
}
console.log(g);
console.log('\n');

var h ='';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 6; j++) {
        if (j % 2 != 0) {
            h += 'y ';
        } else {
            h += j + ' ';
        }
    }
    h += '\n';
}
console.log(h);
console.log('\n');

var k ='';
for (var i = 1; i <= 7; i++) {
    for (var j = 1; j <= 7; j++) {
        if (i == j) {
            k += 'A ';
        } else {
            k += j + ' ';
        }
    k += '\n';
    }
}
console.log(k);
console.log('\n');
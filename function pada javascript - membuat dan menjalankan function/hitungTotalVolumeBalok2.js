function jumlahVolumeDuaKubus(s1,s2) {
    var total,v1,v2;
    v1 = Math.pow(s1, 3); //s1*s1*s1
    v2 = Math.pow(s2, 3); //s2*s2*s2
    total = v1 + v2;
    console.log("Volume Kubus 1: " + v1);
    console.log("Volume Kubus 2: " + v2);
    console.log("Total Volume Kubus: " + total);
    // return total;
}

jumlahVolumeDuaKubus(8,4);
jumlahVolumeDuaKubus(12,4);
jumlahVolumeDuaKubus(2,7);
jumlahVolumeDuaKubus(10,3);
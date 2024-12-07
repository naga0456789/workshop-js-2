var mobil = {
    nama: "Xpander",
    merek: "Mitsubishi",
    tipeMobil: "Minibus",
    tahunDiBuat: "2007",
    warna: "Putih",
    majuCepat: function(){
        return "Mobil ini melaju dengan kecepatan 300 km/h";
    },
    majuLambat: function(){
        return "Mobil ini melaju dengan kecepatan 10 km/h";
    },
    mundur: function(){
        return "Mobil ini bergerak ke belakang";
    },
    stop: function(){
        return "Mobil ini berhenti";
    }
}

console.log(mobil.nama);
console.log(mobil.merek);
// console.log(mobil.tipeMobil);
// console.log(mobil.tahunDiBuat);
console.log(mobil.majuCepat());
// console.log(mobil.majuLambat());
// console.log(mobil.mundur());
console.log(mobil.stop());
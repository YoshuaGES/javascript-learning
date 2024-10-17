const nama = "Ahmad";
const umur = 22;
const domisili = "Gresik";

function data () {
    console.log(`Perkenalkan nama saya ${nama}, umur saya ${umur} tahun, domisili saya ${domisili}.`);
}

data();

const p = 5;
const l = 7;

const z = p * l;

function persegipanjang (){
    console.log(`Luas persegi panjang adalah ${z}.`);
}

persegipanjang();

const tahunLahir = 2002;
const tahunSekarang = 2024;
const usia = tahunSekarang - tahunLahir;

function usiasekarang() {
    console.log(`saya lahir tahun ${tahunLahir} karena sekarang tahun ${tahunSekarang} maka umur saya ${usia}`);
}

usiasekarang();

const waktuMenyala = 5;
const jumlahMenyala = 48;
const totalWaktu = waktuMenyala * jumlahMenyala / 60;

function lampu() {
    console.log(`Dibuthkan waktu ${totalWaktu} menit untuk menyala sebanyak ${jumlahMenyala} kali`);
}

lampu();
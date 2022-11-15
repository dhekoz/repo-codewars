function sum(angka){
    if(angka === 0) return 0;
    return angka.reduce((total, skrg) => total + skrg);
}

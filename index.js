
const yaricap = process.argv.slice(2);

function daireAlan(yaricap){
    return Math.PI * (yaricap**2);
}

const sonuc = daireAlan(Number(yaricap[0]))

console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${sonuc}`);

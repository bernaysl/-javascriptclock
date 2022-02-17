
let isim=prompt("İsminizi giriniz: ");
document.getElementById("myName").innerHTML = isim;

function showTime(){
    var clock = new Date().toLocaleString();
    document.getElementById("myClock").innerHTML = clock;
}

setInterval(showTime, 1000); 
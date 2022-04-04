let welcomeName = prompt("Web sayfamıza hoşgeldiniz, adınız nedir?");
document.getElementById("user").innerHTML = welcomeName

function tarihSaat() {
    var date = new Date().toLocaleString();
    document.getElementById("myClock").innerHTML = date;
}

setInterval(tarihSaat, 1000); 
let resimbox = document.getElementById("resimbox");
let qrResim = document.getElementById("qrResim");
let bilgi = document.getElementById("bilgi");
console.log(resimbox.src)

function qryapici() {
    if (bilgi.value.length > 0) {
        qrResim.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + bilgi.value
        resimbox.style.display = "block"

    }
    else
        alert("lütfen bir url giriniz!!!")

}
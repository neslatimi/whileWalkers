var clubs = [];

function klubLista() {

    for (var i = 0; i < data.length; i++) {
        if (clubs.indexOf(data[i].klub) == -1) {
            clubs.push(data[i].klub);
        }
    }
}
klubLista();
//console.log(klubLista());

var klubHtml = '';
for (var i = 0; i < clubs.length; i++) {
    klubHtml += '<option value="' + clubs[i] + '">' + clubs[i] + '</option>';
}

document.querySelector("#klubok").innerHTML = klubHtml;

function jatekosLista() {
    var valasztott = document.querySelector("#klubok").value;
    var jatekosok = [];
    console.log(valasztott);
    for (var i = 0; i < data.length; i++) {
        if (data[i].klub == valasztott) {
            jatekosok.push(data[i]);
        }
    }
}


function nemzetiseg() {
    var magyar = [];
    var kulfoldi = [];
    var kettos = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].magyar == true && data[i].kulfoldi == true) {
            kettos.push(data[i]);
        } else if (data[i].magyar == true) {
            magyar.push(data[i]);
        } else {
            kulfoldi.push(data[i]);
        }
        document.getElementById("magyar").innerHTML = "<li>" + magyar[i] + "</li>";
    }
}




/*function magyarJatekosok () {
var magyarJatekosok = "";
for (var i = 0; i < magyar.length; i++) {
    magyarJatekosok += "<li>" + magyar[i] + "</li>";
}
document.getElementById("magyar").innerHTML = magyarJatekosok;​
}*/
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
    var valasztott = document.querySelector("#klubok option:checked").value;
    var jatekosok = [];
    console.log(valasztott);
    for (var i = 0; i < data.length; i++) {
        if (data[i].klub == valasztott) {
            jatekosok.push(data[i]);
        }
    }
    return jatekosok;
}


function nemzetiseg(szukitettTomb) {
    var nemzetiObject = { magyar: [], kulfoldi: [], kettos: [] };
    document.getElementById('magyar').innerHTML = '';
    document.getElementById('kulfoldi').innerHTML = '';
    document.getElementById('kettos').innerHTML = '';
    for (var i = 0; i < szukitettTomb.length; i++) {
        if ((szukitettTomb[i].magyar == true) && (szukitettTomb[i].kulfoldi == false)) {
            nemzetiObject.magyar.push(szukitettTomb[i]);
            document.getElementById('magyar').innerHTML += '<li>' + szukitettTomb[i].vezeteknev + ' ' + szukitettTomb[i].utonev + '</li>';
        } else if ((szukitettTomb[i].magyar == false) && (szukitettTomb[i].kulfoldi == true)) {
            nemzetiObject.kulfoldi.push(szukitettTomb[i]);
            document.getElementById('kulfoldi').innerHTML += '<li>' + szukitettTomb[i].vezeteknev + ' ' + szukitettTomb[i].utonev + '</li>';
        } else {
            nemzetiObject.kettos.push(szukitettTomb[i]);
            document.getElementById('kettos').innerHTML += '<li>' + szukitettTomb[i].vezeteknev + ' ' + szukitettTomb[i].utonev + '</li>';
        }
    }
    return nemzetiObject;
}




/*function magyarJatekosok () {
var magyarJatekosok = "";
for (var i = 0; i < magyar.length; i++) {
    magyarJatekosok += "<li>" + magyar[i] + "</li>";
}
document.getElementById("magyar").innerHTML = magyarJatekosok;
}*/
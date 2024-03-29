function csapatSzures(csapatNev) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].klub === csapatNev) {
            result.push(data[i]);
        }
    }
    return result;
}

function elsoCsapat() {
    //Végigfut és kiszedi a disabled attribútumot
    var els = document.querySelectorAll('#masodikCsapat option');
    for (var i = 0; i < els.length; i++) {
        els[i].removeAttribute("disabled");
    }

    //Csapat kikeresése
    var elsoCsapatNev = document.querySelector('#elsoCsapat option:checked').innerText;

    //megkeresi a node-ot, aminek a szovege megegyezik a keresettel
    var options = document.querySelectorAll('#masodikCsapat option');
    var searchText = elsoCsapatNev;
    var found;
    for (var i = 0; i < options.length; i++) {
        if (options[i].textContent == searchText) {
            found = options[i];
            break;
        }
    }
    found.disabled = true;

    return elsoCsapat
}

function masodikCsapat() {
    var els = document.querySelectorAll('#elsoCsapat option');
    for (var i = 0; i < els.length; i++) {
        els[i].removeAttribute("disabled");
    }

    var masodikCsapatNev = document.querySelector('#masodikCsapat option:checked').innerText;

    var options = document.querySelectorAll('#elsoCsapat option');
    var searchText = masodikCsapatNev;
    var found;
    for (var i = 0; i < options.length; i++) {
        if (options[i].textContent == searchText) {
            found = options[i];
            break;
        }
    }
    found.disabled = true;
    return masodikCsapat
}

function CalculateAge(szulido) {
    var age = -99;
    var dtToday = new Date();
    var dtBirthdate = new Date(szulido);
    age = dtToday.getFullYear() - dtBirthdate.getFullYear();
    return age;
}

function MaximumAge(csapat) {
    var max = CalculateAge(csapat[0].szulido);
    var ember = csapat[0];
    for (var i = 0; i < csapat.length; i++) {
        if (CalculateAge(csapat[i].szulido) > max) {
            max = CalculateAge(csapat[i].szulido);
            ember = csapat[i];
        }
    }
    return ember;
}

function MinimumAge(csapat) {
    var min = CalculateAge(csapat[0].szulido);
    var ember = csapat[0];
    for (var i = 0; i < csapat.length; i++) {
        if (CalculateAge(csapat[i].szulido) < min) {
            min = CalculateAge(csapat[i].szulido);
            ember = csapat[i];
        }
    }
    return ember;
}

function teamValue(csapat) {
    var osszertek = 0;
    for (var i = 0; i < csapat.length; i++) {
        osszertek += csapat[i].ertek;
    }
    return osszertek;
}

//Ket bemenet
function ikszTopPlayers(csapat, hanyat) {
    var hanylegjobb = [];
    for (var i = 0; i < (csapat.length - 1); i++) {
        for (var j = i + 1; j < csapat.length; j++) {
            if (csapat[i].ertek < csapat[j].ertek) {
                var temp = [csapat[i], csapat[j]];
                csapat[i] = temp[1];
                csapat[j] = temp[0];
            }
        }
    }
    if (hanyat > csapat.length) {
        hanyat = csapat.length;
    }
    for (var i = 0; i < hanyat; i++) {
        hanylegjobb.push(csapat[i]);
    }
    return hanylegjobb;
}

console.log(ikszTopPlayers(data, 20));

function Nationalities(csapat) {
    var nemzetek = { magyar: 0, kulfoldi: 0, kettos: 0 };
    for (var i = 0; i < csapat.length; i++) {
        if ((csapat[i].magyar === true) && (csapat[i].kulfoldi == false)) {
            nemzetek.magyar++;
        } else if ((csapat[i].magyar === false) && (csapat[i].kulfoldi === true)) {
            nemzetek.kulfoldi++;
        } else {
            nemzetek.kettos++;
        }
    }
    return nemzetek;
}



function melyikSzures() {
    var node = document.querySelector('#szures');
    var szures = parseInt(node.value);
    var elsoCsapatNev = document.querySelector('#elsoCsapat option:checked').innerText;
    var egy = csapatSzures(elsoCsapatNev);
    var masodikCsapatNev = document.querySelector('#masodikCsapat option:checked').innerText;
    var ketto = csapatSzures(masodikCsapatNev);
    var uno = document.querySelector('#info1');
    var due = document.querySelector('#info2');
    document.querySelector('#csapat1').innerHTML = egy[0].klub;
    document.querySelector('#csapat2').innerHTML = ketto[0].klub;;
    switch (szures) {
        case 1:
            uno.innerHTML = '';
            due.innerHTML = '';
            uno.innerHTML += MaximumAge(egy).vezeteknev + ' ' + MaximumAge(egy).utonev + ', aki ' + CalculateAge(MaximumAge(egy).szulido) + ' éves';
            due.innerHTML += MaximumAge(ketto).vezeteknev + ' ' + MaximumAge(ketto).utonev + ', aki ' + CalculateAge(MaximumAge(ketto).szulido) + ' éves';
            break;
        case 2:
            uno.innerHTML = '';
            due.innerHTML = '';
            uno.innerHTML += MinimumAge(egy).vezeteknev + ' ' + MinimumAge(egy).utonev + ', aki ' + CalculateAge(MinimumAge(egy).szulido) + ' éves';
            due.innerHTML += MinimumAge(ketto).vezeteknev + ' ' + MinimumAge(ketto).utonev + ', aki ' + CalculateAge(MinimumAge(ketto).szulido) + ' éves';
            break;
        case 3:
            uno.innerHTML = '';
            due.innerHTML = '';
            uno.innerHTML += 'A csapat teljes értéke: ' + teamValue(egy) + ' milliárd euró';
            due.innerHTML += 'A csapat teljes értéke: ' + teamValue(ketto) + ' milliárd euró';
            break;
        case 4:
            var hanyatmutasson;
            do {
                hanyatmutasson = parseInt(prompt('Hány játékosra vagy kíváncsi?', 'Kérlek pozitív számot adj meg!'));
            } while (isNaN(hanyatmutasson) || (hanyatmutasson < 0));

            uno.innerHTML = '<ol id="lista1"></ol>';
            due.innerHTML = '<ol id="lista2"></ol>';

            for (var i = 0; i < ikszTopPlayers(egy, hanyatmutasson).length; i++) {
                document.querySelector('#lista1').innerHTML += '<li>' + '<strong>' + ikszTopPlayers(egy, hanyatmutasson)[i].vezeteknev + ' ' + ikszTopPlayers(egy, hanyatmutasson)[i].utonev + '</strong>' +
                    '<br>' + 'Értéke: ' + ikszTopPlayers(egy, hanyatmutasson)[i].ertek + ' milliárd euró' + '</br>'
            }

            for (var i = 0; i < ikszTopPlayers(ketto, hanyatmutasson).length; i++) {
                document.querySelector('#lista2').innerHTML += '<li>' + '<strong>' + ikszTopPlayers(ketto, hanyatmutasson)[i].vezeteknev + ' ' + ikszTopPlayers(ketto, hanyatmutasson)[i].utonev + '</strong>' +
                    '<br>' + 'Értéke: ' + ikszTopPlayers(ketto, hanyatmutasson)[i].ertek + ' milliárd euró' + '</li>'
            }
            break;
        case 5:
            uno.innerHTML = '';
            due.innerHTML = '';
            uno.innerHTML += 'Magyar: ' + Nationalities(egy).magyar + '<br>' + 'Külföldi: ' + Nationalities(egy).kulfoldi + '<br>' + 'Kettős állampolgár: ' + Nationalities(egy).kettos;
            due.innerHTML += 'Magyar: ' + Nationalities(ketto).magyar + '<br>' + 'Külföldi: ' + Nationalities(egy).kulfoldi + '<br>' + 'Kettős állampolgár: ' + Nationalities(ketto).kettos
            break;
        case 6:
            uno.innerHTML = '<i>Kattints a játékosra több információért!</i><ul id="list1"></ul>';
            due.innerHTML = '<i>Kattints a játékosra több információért!</i><ul id="list2"></ul>';
            for (var i = 0; i < egy.length; i++) {
                document.querySelector('#list1').innerHTML += '<li>' + '<a href="/lista.html#' + egy[i].vezeteknev + ' ' + egy[i].utonev + '" target="_blank">' + egy[i].vezeteknev + ' ' + egy[i].utonev + '</a>' + '</li>';
            }
            for (var i = 0; i < ketto.length; i++) {
                document.querySelector('#list2').innerHTML += '<li>' + '<a href="/lista.html#' + ketto[i].vezeteknev + ' ' + ketto[i].utonev + '" target="_blank">' + ketto[i].vezeteknev + ' ' + ketto[i].utonev + '</a>' + '</li>';
            }
            break;
    }
}


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function ClubsRepresented() {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        if (result.indexOf(data[i].klub) == -1) {
            result.push(data[i].klub);
        }
    }
    return result;
}

console.log(ClubsRepresented());

function valueByClub() {
    var result = [];
    var klubbok = ClubsRepresented();
    for (var i = 0; i < klubbok.length; i++) {
        var nev = klubbok[i];
        result.push({ csapat: nev, ertek: 0 });
    }
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < result.length; j++) {
            if (data[i].klub == result[j].csapat) {
                result[j].ertek += parseInt(data[i].ertek);
            }
        }
    }
    return result;
}

console.log(valueByClub());
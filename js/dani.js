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
    var elsoCsapatNev = document.querySelector('#elsoCsapat option:checked').innerText;
    var elsoCsapat = csapatSzures(elsoCsapatNev);
    return elsoCsapat
}

function masodikCsapat() {
    var masodikCsapatNev = document.querySelector('#masodikCsapat option:checked').innerText;
    var masodikCsapat = csapatSzures(masodikCsapatNev);
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

function threeTopPlayers(csapat) {
    var haromlegjobb = [];
    var legtobb = csapat[0].ertek;
    for (var i = 0; i < (csapat.length - 1); i++) {
        for (var j = i + 1; j < csapat.length; j++) {
            if (csapat[i].ertek < csapat[j].ertek) {
                var temp = [csapat[i], csapat[j]];
                csapat[i] = temp[1];
                csapat[j] = temp[0];
            }
        }
    }
    for (var i = 0; i < 3; i++) {
        haromlegjobb.push(csapat[i]);
    }
    return haromlegjobb;
}

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
    document.querySelector('#csapat1').innerHTML = elsoCsapat()[0].klub;
    document.querySelector('#csapat2').innerHTML = masodikCsapat()[0].klub;;
    switch (szures) {
        case 1:
            document.querySelector('#info1').innerHTML = '';
            document.querySelector('#info2').innerHTML = '';
            document.querySelector('#info1').innerHTML += MaximumAge(elsoCsapat()).vezeteknev + ' ' + MaximumAge(elsoCsapat()).utonev + ', aki ' + CalculateAge(MaximumAge(elsoCsapat()).szulido) + ' éves';
            document.querySelector('#info2').innerHTML += MaximumAge(masodikCsapat()).vezeteknev + ' ' + MaximumAge(masodikCsapat()).utonev + ', aki ' + CalculateAge(MaximumAge(masodikCsapat()).szulido) + ' éves';
            break;
        case 2:
            document.querySelector('#info1').innerHTML = '';
            document.querySelector('#info2').innerHTML = '';
            document.querySelector('#info1').innerHTML += MinimumAge(elsoCsapat()).vezeteknev + ' ' + MinimumAge(elsoCsapat()).utonev + ', aki ' + CalculateAge(MinimumAge(elsoCsapat()).szulido) + ' éves';
            document.querySelector('#info2').innerHTML += MinimumAge(masodikCsapat()).vezeteknev + ' ' + MinimumAge(masodikCsapat()).utonev + ', aki ' + CalculateAge(MinimumAge(masodikCsapat()).szulido) + ' éves';
            break;
        case 3:
            document.querySelector('#info1').innerHTML = '';
            document.querySelector('#info2').innerHTML = '';
            document.querySelector('#info1').innerHTML += 'A csapat teljes értéke: ' + teamValue(elsoCsapat()) + ' milliárd euró';
            document.querySelector('#info2').innerHTML += 'A csapat teljes értéke: ' + teamValue(masodikCsapat()) + ' milliárd euró';
            break;
        case 4:
            document.querySelector('#info1').innerHTML = '';
            document.querySelector('#info2').innerHTML = '';
            document.querySelector('#info1').innerHTML += '<strong>' + threeTopPlayers(elsoCsapat())[0].vezeteknev + ' ' + threeTopPlayers(elsoCsapat())[0].utonev + '</strong>' +
                '<br>' + 'Értéke: ' + threeTopPlayers(elsoCsapat())[0].ertek + ' milliárd euró' + '<br>' +
                '<strong>' + threeTopPlayers(elsoCsapat())[1].vezeteknev + ' ' + threeTopPlayers(elsoCsapat())[1].utonev + '</strong>' +
                '<br>' + 'Értéke: ' + threeTopPlayers(elsoCsapat())[1].ertek + ' milliárd euró' + '<br>' +
                '<strong>' + threeTopPlayers(elsoCsapat())[2].vezeteknev + ' ' + threeTopPlayers(elsoCsapat())[2].utonev + '</strong>' +
                '<br>' + 'Értéke: ' + threeTopPlayers(elsoCsapat())[2].ertek + ' milliárd euró';
            document.querySelector('#info2').innerHTML += '<strong>' + threeTopPlayers(masodikCsapat())[0].vezeteknev + ' ' + threeTopPlayers(masodikCsapat())[0].utonev + '</strong>' +
                '<br>' + 'Értéke: ' + threeTopPlayers(masodikCsapat())[0].ertek + ' milliárd euró' + '<br>' +
                '<strong>' + threeTopPlayers(masodikCsapat())[1].vezeteknev + ' ' + threeTopPlayers(masodikCsapat())[1].utonev + '</strong>' +
                '<br>' + 'Értéke: ' + threeTopPlayers(masodikCsapat())[1].ertek + ' milliárd euró' + '<br>' +
                '<strong>' + threeTopPlayers(masodikCsapat())[2].vezeteknev + ' ' + threeTopPlayers(masodikCsapat())[2].utonev + '</strong>' +
                '<br>' + 'Értéke: ' + threeTopPlayers(masodikCsapat())[2].ertek + ' milliárd euró';
            break;
        case 5:
            document.querySelector('#info1').innerHTML = '';
            document.querySelector('#info2').innerHTML = '';
            document.querySelector('#info1').innerHTML += 'Magyar: ' + Nationalities(elsoCsapat()).magyar + '<br>' + 'Külföldi: ' + Nationalities(elsoCsapat()).kulfoldi + '<br>' + 'Kettős állampolgár: ' + Nationalities(elsoCsapat()).kettos;
            document.querySelector('#info2').innerHTML += 'Magyar: ' + Nationalities(masodikCsapat()).magyar + '<br>' + 'Külföldi: ' + Nationalities(elsoCsapat()).kulfoldi + '<br>' + 'Kettős állampolgár: ' + Nationalities(masodikCsapat()).kettos
            break;
        case 6:
            document.querySelector('#info1').innerHTML = '';
            document.querySelector('#info2').innerHTML = '';
            document.querySelector('#info1').innerHTML += '<ul>';
            document.querySelector('#info2').innerHTML += '<ul>';
            for (var i = 0; i < elsoCsapat().length; i++) {
                document.querySelector('#info1').innerHTML += '<li>' + '<a href="/lista.html#' + elsoCsapat()[i].vezeteknev + ' ' + elsoCsapat()[i].utonev + '" target="_blank">' + elsoCsapat()[i].vezeteknev + ' ' + elsoCsapat()[i].utonev + '</a>' + '</li>';
            }
            for (var i = 0; i < masodikCsapat().length; i++) {
                document.querySelector('#info2').innerHTML += '<li>' + '<a href="/lista.html#' + masodikCsapat()[i].vezeteknev + ' ' + masodikCsapat()[i].utonev + '" target="_blank">' + masodikCsapat()[i].vezeteknev + ' ' + masodikCsapat()[i].utonev + '</a>' + '</li>';
            }
            document.querySelector('#info1').innerHTML += '</ul>';
            document.querySelector('#info2').innerHTML += '</ul>';
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
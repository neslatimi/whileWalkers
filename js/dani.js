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

function melyikSzures() {
    var node = document.querySelector('#szures');
    var szures = parseInt(node.value);
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
            document.querySelector('#info1').innerHTML += teamValue(elsoCsapat()) + ' milliárd euro';
            document.querySelector('#info2').innerHTML += teamValue(masodikCsapat()) + ' milliárd euro';
            break;
        case 4:
            document.querySelector('#info1').innerHTML = '';
            document.querySelector('#info2').innerHTML = '';
            document.querySelector('#info1').innerHTML += MaximumAge(elsoCsapat());
            document.querySelector('#info2').innerHTML += MaximumAge(masodikCsapat());
            break;
        case 5:
            document.querySelector('#info1').innerHTML = '';
            document.querySelector('#info2').innerHTML = '';
            document.querySelector('#info1').innerHTML += MaximumAge(elsoCsapat());
            document.querySelector('#info2').innerHTML += MaximumAge(masodikCsapat());
            break;
        case 6:
            document.querySelector('#info1').innerHTML = '';
            document.querySelector('#info2').innerHTML = '';
            document.querySelector('#info1').innerHTML += MaximumAge(elsoCsapat());
            document.querySelector('#info2').innerHTML += MaximumAge(masodikCsapat());
            break;
    }
}


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function AllGoals() {
    var osszesgol = 0;
    for (var i = 0; i < players.length; i++) {
        osszesgol += parseInt(players[i].goals);
    }
    return osszesgol;
}


function AverageAge() {
    var avg = 0;
    var hanyan = 0;
    var osszkor = 0;
    for (var i = 0; i < players.length; i++) {
        osszkor += CalculateAge(players[i].birthdate);
        hanyan++
    }
    avg = osszkor / hanyan;
    return avg;
}

function Goalkeepers() {
    var kapusok = [];
    for (var i = 0; i < players.length; i++) {
        if (players[i].position === 'Goalkeeper') {
            kapusok.push(players[i]);
        }
    }
    return kapusok;
}

function HasPlayerFromClub(pClubName) {
    var result = false;
    for (var i = 0; i < players.length; i++) {
        if (players[i].club.indexOf(pClubName) > -1) {
            result = true;
            break;
        }
    }
    return result;
}

function HasPlayerWithName(pPlayerName) {
    var result = false;
    for (var i = 0; i < players.length; i++) {
        if (players[i].name.indexOf(pPlayerName) > -1) {
            result = true;
            break;
        }
    }
    return result;
}

function FirstPlayerWithName(pPlayerName) {
    var result = {};
    for (var i = 0; i < players.length; i++) {
        if (players[i].name.indexOf(pPlayerName) > -1) {
            result = players[i];
            break;
        }
    }
    return result;
}

function PlayersWithName(pPlayerName) {
    var result = [];
    for (var i = 0; i < players.length; i++) {
        if (players[i].name.indexOf(pPlayerName) > -1) {
            result.push(players[i]);
        }
    }
    return result;
}

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

function PlayersByClub() {
    var result = [];
    var klubbok = ClubsRepresented();
    for (var i = 0; i < klubbok.length; i++) {
        var nev = klubbok[i];
        result.push({ csapat: nev, jatekosok: [] });
    }
    for (var i = 0; i < players.length; i++) {
        for (var j = 0; j < result.length; j++) {
            if (players[i].club === result[j].csapat) {
                result[j].jatekosok.push(players[i]);
            }
        }
    }
    return result;
}
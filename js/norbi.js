  function team(klub){
    var team=[];
    for(var i=0; i<data.length; i++){
        if(data[i].klub==klub){
            team.push(data[i]);
        }
    }
    return team;
}


var adatbazis=[];
function main(csapatnev){
    document.querySelector('#legertekesebb').innerHTML="";
    document.querySelector('#posztkiiratas').innerHTML="";
    var csapatok=[
        {klub:"Vasas FC",nev:"vasas", set:"background-color:#2056b2", logo:"/img/vasas.jpg"},
         {klub:"Ferencvárosi TC", nev:"ftc", set:"background-color:green",logo:"/img/ftc.jpg"},
        {klub: "Balmazújváros FC", nev:"balmaz", set:"background-color:#f45f0e",logo:"/img/balmaz.png" },
        {klub: "Újpest FC", nev:"ujpest", set:"background-color:#700d8e", logo:"/img/ujpest.jpg"},
        {klub: "Diósgyőri VTK", nev:"dios", set:"background-color:#db970f", logo:"/img/dios.png"},
        {klub: "Puskás Akadémia FC", nev:"puskas", set:"background-color:gold", logo:"/img/puskas.jpg"},
        {klub:"Paksi FC", nev:"paks", set:"background-color:#189929", logo:"/img/pakd.jpg"},
        {klub:"Szombathelyi Haladás", nev:"szombathely", set:"background-color:#128e23", logo:"/img/szombathely.png"},
        {klub: "Budapest Honvéd FC",nev:"honved", set:"background-color:#d11208", logo:"/img/honved.png"},
        {klub:"Mezőkövesd Zsóry FC", nev:"mezo", set:"background-color:#e0e80d", logo:"/img/mezo.png"},
        {klub:"Videoton FC", nev:"videoton", set:"background-color:#180a51", logo:"/img/videoton.png"},
        {klub:"Debreceni VSC", nev:"debrecen", set:"background-color:#ce0a0a", logo:"/img/debrecen.png"},
        ];
        
        var logo=document.querySelector('.otpliga');
    var body=document.querySelector('body');
    var set="";
    var picture="";
    var klub="";
    for(var i=0; i<csapatok.length; i++){
        if(csapatnev==csapatok[i].nev){
            set=csapatok[i].set;
            picture=csapatok[i].logo;
            klub=csapatok[i].klub;
            
            break;
        }
    }
   
    body.setAttribute("style", set);
    logo.setAttribute('src',picture);

  adatbazis=team(klub);
  console.log(adatbazis);

}

function poszt(){
    var result=[];
    var keresettPoszt=document.querySelector('#poszt').value;
        for(i=0; i<adatbazis.length; i++){
            if(adatbazis[i].poszt.indexOf(keresettPoszt)!=-1){
                result.push(adatbazis[i].vezeteknev +" "+ adatbazis[i].utonev+" [ "+adatbazis[i].poszt+" ]" );

            }
        }

var kiiras="";
for(j=0; j<result.length; j++){
    kiiras+="<li>"+result[j]+"</li>";
}
document.querySelector('#posztkiiratas').innerHTML=kiiras;
}
function  legertekesebb (){
    
    var ertekesebb=""+ adatbazis[0].vezeteknev + " " +adatbazis[0].utonev;
    var ertek=adatbazis[0].ertek;
    for(i=0; i<adatbazis.length; i++){
        if(ertek<adatbazis[i].ertek){
            ertekesebb=""+ adatbazis[i].vezeteknev + " " +adatbazis[i].utonev;
            ertek=adatbazis[i].ertek;

        }
    }
    console.log(adatbazis);
    console.log(ertekesebb);
    document.querySelector('#legertekesebb').innerHTML="A " + adatbazis[0].klub+ " legértékesebb játékosa:" + ertekesebb +". Értéke  "+ ertek +" millió HUF.";
    
}


    ///////////////////////// Canvas-Initialisierung ///////////////////////////
    var canvas = document.querySelector('canvas');
        img = new Image();

    img.onload = function(){
            if(canvas.getContext){
                var context = canvas.getContext('2d');
                context.drawImage(img, 0, 0, canvas.width, canvas.height);

            }
        }
    
    //Variablen für Datum
    var jetzt = new Date();
        tag = jetzt.getDate();
         monat = jetzt.getMonth();
        
    //Weitere Variablen
    var hypLink;
        

    ////////////////////////////// Testcenter //////////////////////////////////
        //tag = 24;
        //monat = 11; // Immer eins abziehen vom Monat, also für Dez 11 statt 12

    
    /////////////////////// Datenmanagement Kalender ///////////////////////////
    if (monat == 11) { //11=dezember
        switch (tag) {
        case 1:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/36.Kirchberger%20Hirtenlied.mp3";
            linkAnders(this);
            break;
        case 2:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/14.Eine%20Tasse%20Tee%20zur%20Winterszeit.mp3";
            linkAnders(this);
            break;
        case 3:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/01.Wenn%20am%20Kranz%20die%20erste%20Kerze%20brennt.mp3";
            linkAnders(this);
            break;
        case 4:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/25.Tiere%20lieben%20Wintersport.mp3";
            linkAnders(this);
            break;
        case 5:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/17.Weihnachtswuensche%20Roboter.mp3";
            linkAnders(this);
            break;
        case 6:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/12.Der%20Mann%20mit%20Bart%20und%20Bischofsstab.mp3";
            linkAnders(this);
            break;
        case 7:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/04.Kinderaugen%20leuchten.mp3";
            linkAnders(this);
            break;
        case 8:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/19.Seht%20nur,%20wie%20die%20Sterne%20funkeln.mp3";
            linkAnders(this);
            break;
        case 9:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/23.Winter%20h%C3%BCllt%20ein%20Stadt%20und%20Land.mp3";
            linkAnders(this);
            break;
        case 10:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/02.In%20der%20Abendstunde%20im%20Advent.mp3";
            linkAnders(this);
            break;
        case 11:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/24.Schneefloeckchen%20weiss.mp3";
            linkAnders(this);
            break;
        case 12:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/05.Die%20stillste%20Zeit.mp3";
            linkAnders(this);
            break;
        case 13:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/03.Immer,%20wenn%20es%20Weihnacht%20wird.mp3";
            linkAnders(this);
            break;
        case 14:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/15.I%20am%20a%20little%20teapot.mp3";
            linkAnders(this);
            break;
        case 15:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/09.Klingelingeling%20,liebes%20Christkind.mp3";
            linkAnders(this);
            break;
        case 16:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/10.Wir%20sind%20auf%20dem%20Weg%20zur%20Krippe.mp3";
            linkAnders(this);
            break;
        case 17:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/06.Es%20naht%20ein%20Licht.mp3";
            linkAnders(this);
            break;    
        case 18:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/13.Weit%20ist%20der%20Weg.mp3";
            linkAnders(this);
            break;
        case 19:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/26.Spuren%20im%20Schnee.mp3";
            linkAnders(this);
            break;
        case 20:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/31.Friedenslied-In%20der%20Dunkelheit.mp3";
            linkAnders(this);
            break;
        case 21:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/20.Du%20und%20ich.mp3";
            linkAnders(this);
            break;
        case 22:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/38.Christmas%20is%20coming.mp3";
            linkAnders(this);
            break;
        case 23:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/28.In%20der%20Weihnachtsnacht.mp3";
            linkAnders(this);
            break;
        case 24:
            img.src = 'Adventskalender/Adventskalender_2017_Web_' + tag +'.jpg';
            hypLink = "https://www.helbling-verlag.de/media/downloads/wlb/35.Das%20l%C3%A4chelnde%20Christkind.mp3";
            linkAnders(this);
            break;    
        case 25:
            img.src = 'Adventskalender/Adventskalender_2017_Web_25.jpg';
            document.getElementById("canvlink").removeAttribute("href");
            break;   
        case 26:
            img.src = 'Adventskalender/Adventskalender_2017_Web_25.jpg';
            document.getElementById("canvlink").removeAttribute("href");
            break;
        case 27:
            img.src = 'Adventskalender/Adventskalender_2017_Web_25.jpg';
            document.getElementById("canvlink").removeAttribute("href");
            break;
        case 28:
            img.src = 'Adventskalender/Adventskalender_2017_Web_25.jpg';
            document.getElementById("canvlink").removeAttribute("href");
            break;
        case 29:
            img.src = 'Adventskalender/Adventskalender_2017_Web_25.jpg';
            document.getElementById("canvlink").removeAttribute("href");
            break;
        case 30:
            img.src = 'Adventskalender/Adventskalender_2017_Web_25.jpg';
            document.getElementById("canvlink").removeAttribute("href");
            break;   
        case 31:
            img.src = 'Adventskalender/Adventskalender_2017_Web_25.jpg';
            document.getElementById("canvlink").removeAttribute("href");
            break;                                                                 
        default:
            img.src = 'Adventskalender/Adventskalender_2017_Web_Start.jpg';
            break;  
    }
        
        function linkAnders(elmnt) {
                document.getElementById("canvlink").href = hypLink;
            }

    } else if (monat == 10 && (tag == 22 || tag == 23 || tag == 24 || tag == 25 || tag == 26 || tag == 27 || tag == 28 || tag ==29 || tag ==30)) {
        //Es ist november, aber kalender gibts schon, nur lassen sich noch keine Türchen öffnen
        img.src = 'Adventskalender/Adventskalender_2017_Web_Start.jpg';
        document.getElementById("canvlink").removeAttribute("href");

        function bildAnders(elmnt) {
        img.src = 'Adventskalender/Adventskalender_2017_Web_Zwischenbild.jpg';
    }

    } else {
        //Es ist vorbei oder viel zu früh
        alert("Es ist vorbei oder viel zu früh")

    }






 
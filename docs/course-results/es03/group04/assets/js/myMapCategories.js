let myIcon = L.icon({
  iconUrl: '../assets/svg/map/pin01.png',
  iconSize: [27.5, 41],
  iconAnchor: [5, 40],
  popupAnchor: [10, -25],
});

let mapOptions = {}

/*IF atom live-server
let prefix "/pages/";*/
let prefix = "/ItsCheaperAbroad/pages/";

switch (document.location.pathname) {
  case prefix + "belly.html":
    mapOptions.view = [19.45207519930728, -1.8116567150579195];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [32.526118, -117.02126],
        title: '<span class="popUpText"><a href="https://www.instagram.com/sirenesurgeryclinic/" class="textMap" target="_blank">Sirene Surgical Clinic <br> Tijuana, Mexico</a></span>'
      },
      {
        latlong: [32.523374791452376, -117.01309590491408],
        title: '<span class="popUpText"><a href="https://www.instagram.com/balticsurgerytijuana/?hl=it" class="textMap" target="_blank">Baltic Surgery <br> Tijuana, Mexico</a></span>'
      },
      {
        latlong: [7.898500665037002, 98.3679161],
        title: '<span class="popUpText"><a href="https://www.instagram.com/plasticsurgeryphuket/" class="textMap" target="_blank">Plastic Surgery Phuket <br> Phuket, Thailand</a></span>'
      },
      {
        latlong: [11.01127471851537, -74.82809605936626],
        title: '<span class="popUpText"><a href="https://www.instagram.com/pachecoplastic/" class="textMap" target="_blank">Dr. Hernando Pacheco <br> Baranquilla, Colombia</a></span>'
      }
    ];
    break;

  case prefix + "breast.html":
    mapOptions.view = [41.010, 10];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [18.473983358302632, -69.8967334],
        title: '<span class="popUpText"><a href="https://www.instagram.com/drasilviaaviles/" class="textMap" target="_blank">Dra. Silvia Aviles <br> Santo Domingo <br> Dominican Republic</a></span>'
      },
      {
        latlong: [7.898500665037002, 98.3679161],
        title: '<span class="popUpText"><a href="https://www.instagram.com/plasticsurgeryphuket/" class="textMap" target="_blank">Plastic Surgery Phuket <br> Phuket, Thailand</a></span>'
      },
      {
        latlong: [41.06565331567315, 29.001017241413674],
        title: '<span class="popUpText"><a href="https://www.instagram.com/estetikinternational/" class="textMap" target="_blank">Estetik International <br> Istanbul, Turkey</a></span>'
      },
      {
        latlong: [18.47406276988475, -69.89695504602206],
        title: '<span class="popUpText"><a href="https://www.instagram.com/dradeniacarpio/" class="textMap" target="_blank">Dra. Denia Carpio <br> Santo Domingo, <br>Dominican Republic</a></span>'
      },
      {
        latlong: [37.4996, 127.034288],
        title: '<span class="popUpText"><a href="https://www.instagram.com/beautiquekorea/" class="textMap" target="_blank">Beautique Korea <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [32.526118, -117.02126],
        title: '<span class="popUpText"><a href="https://www.instagram.com/sirenesurgeryclinic/" class="textMap" target="_blank">Sirene Surgical Clinic <br> Tijuana, Mexico</a></span>'
      },
    ];
    break;

  case prefix + "butt.html":
    mapOptions.view = [30, 10];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [41.06565331567315, 29.001017241413674],
        title: '<span class="popUpText"><a href="https://www.instagram.com/estetikinternational/" class="textMap" target="_blank">Estetik International <br> Istanbul, Turkey</a></span>'
      },
      {
        latlong: [18.473983358302632, -69.8967334],
        title: '<span class="popUpText"><a href="https://www.instagram.com/drasilviaaviles/" class="textMap" target="_blank">Dra. Silvia Aviles <br> Santo Domingo <br> Dominican Republic</a></span>'
      },
      {
        latlong: [18.79572628416046, 98.97201133863724],
        title: '<span class="popUpText"><a href="https://www.instagram.com/sarinyaclinic/" class="textMap" target="_blank">Sarinya Clinic <br>(ศรินยา คลินิก) <br> Chiang Mai, Thailand</a></span>'
      }
    ];
    break;

  case prefix + "eye.html":
    mapOptions.view = [30, 28.960];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [37.5034850514988, 127.02472141630581],
        title: '<span class="popUpText"><a href="https://www.instagram.com/lasikinbusan/" class="textMap" target="_blank">BGN Eye Clinic Busan <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.523433616202034, 127.02794202593883],
        title: '<span class="popUpText"><a href="https://www.instagram.com/popsurgery_cn/" class="textMap" target="_blank">POP整形外科 <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [36.867934712530776, 30.728576437563394],
        title: '<span class="popUpText"><a href="https://www.instagram.com/morsiamedical/" class="textMap" target="_blank">Morsia Medical <br> Antalya, Turkey</a></span>'
      },
      {
        latlong: [18.47406276988475, -69.89695504602206],
        title: '<span class="popUpText"><a href="https://www.instagram.com/dradeniacarpio/" class="textMap" target="_blank">Dra. Denia Carpio <br> Santo Domingo <br> Dominican Republic</a></span>'
      },
      {
        latlong: [7.035789811760819, -73.06833737019],
        title: '<span class="popUpText"><a href="https://www.instagram.com/drfelipegonzalez/" class="textMap" target="_blank">Dr. Felipe Gonzalez <br> Bucamaranga, Colombia</a></span>'
      }
    ];
    break;

  case prefix + "face.html":
    mapOptions.view = [29.66495282917875, 20];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [37.496518048888824, 127.0277505613608],
        title: '<span class="popUpText"><a href="https://www.instagram.com/seoulguidemedical/" class="textMap" target="_blank">Seoul Guide Medical <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [13.72377309366014, 100.56674017582452],
        title: '<span class="popUpText"><a href="https://www.instagram.com/nirundaclinic" class="textMap" target="_blank">Nirunda International <br>Aesthetic Clinic (นิรันดาคลินิก) <br> Bangkok, Thailand</a></span>'
      },
      {
        latlong: [18.825487130547206, 99.01171333960211],
        title: '<span class="popUpText"><a href="https://www.instagram.com/rinradaclinic/" class="textMap" target="_blank">Rinrada Clinic <br>CM รินรดา เชียงใหม่ <br> Pattaya, Chon Buri, Thailand</a></span>'
      },
      {
        latlong: [18.47406276988475, -69.89695504602206],
        title: '<span class="popUpText"><a href="https://www.instagram.com/dradeniacarpio/" class="textMap" target="_blank">Dra. Denia Carpio <br> Santo Domingo <br> Dominican Republic</a></span>'
      },
      {
        latlong: [36.867934712530776, 30.728576437563394],
        title: '<span class="popUpText"><a href="https://www.instagram.com/morsiamedical/" class="textMap" target="_blank">Morsia Medical <br> Antalya, Turkey</a></span>'
      },
      {
        latlong: [37.49596471735722, 127.02754671818016],
        title: '<span class="popUpText"><a href="https://www.instagram.com/seoulguidemedical/" class="textMap" target="_blank">Seoul Guide Medical <br> Seoul, South Korea</a></span>'
      }
    ];
    break;

  case prefix + "hair.html":
    mapOptions.view = [30, -44.880591087998454];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [20.68511446997661, -103.39514154502761],
        title: '<span class="popUpText"><a href="https://www.instagram.com/hairin1day/?hl=en" class="textMap" target="_blank">Hair in 1 Day <br> Gudalajara, Mexico</a></span>'
      },
      {
        latlong: [19.357103566905515, -99.18463991505979],
        title: '<span class="popUpText"><a href="https://www.instagram.com/clinica.dreo/?hl=en" class="textMap" target="_blank">Clinica DrEO <br> Mexico City, Mexico</a></span>'
      },
      {
        latlong: [41.000874008735956, 29.05510727024624],
        title: '<span class="popUpText"><a href="https://www.instagram.com/arenamedhairclinic/" class="textMap" target="_blank">Arenamed Hair Clinic <br> Istanbul, Turkey</a></span>'
      }
    ];
    break;

  case prefix + "nose.html":
    mapOptions.view = [37.523091480791976, 127.02673587011269];
    mapOptions.zoom = 12;
    mapOptions.markers = [{
        latlong: [37.50544810254444, 127.07881449766033],
        title: '<span class="popUpText"><a href="https://www.instagram.com/medictel_global/" class="textMap" target="_blank">Medictel <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.5232105439706, 127.02794862593731],
        title: '<span class="popUpText"><a href="https://www.instagram.com/jkplasticsurgery/" class="textMap" target="_blank">JK Plastics <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.496518048888824, 127.0277505613608],
        title: '<span class="popUpText"><a href="https://www.instagram.com/seoulguidemedical/" class="textMap" target="_blank">Seoul Guide Medical <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.523091480791976, 127.02673587011269],
        title: '<span class="popUpText"><a href="https://www.instagram.com/misooda_korea/" class="textMap" target="_blank">MISOODA <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.523433616202034, 127.02794202593883],
        title: '<span class="popUpText"><a href="https://www.instagram.com/popsurgery_cn/" class="textMap" target="_blank">POP整形外科 <br> Seoul, South Korea</a></span>'
      }
    ];
    break;

  case prefix + "teeth.html":
    mapOptions.view = [32.838796478998574, -34.15307467841153];
    mapOptions.zoom = 2;
    mapOptions.markers = [{
        latlong: [41.010, 28.960],
        title: '<span class="popUpText"><a href="https://www.instagram.com/starling.health/?hl=en" class="textMap" target="_blank">Starling Health <br> Instanbul, Turkey</a></span>'
      },
      {
        latlong: [6.250197625883222, -75.57088972470223],
        title: '<span class="popUpText"><a href="https://www.instagram.com/perfectsmileexperience/" class="textMap" target="_blank">Perfect Smile Experience <br> Medellín, Colombia</a></span>'
      },
      {
        latlong: [3.3946519617905495, -76.5413944306804],
        title: '<span class="popUpText">"><a href="https://www.instagram.com/sonrisacharry/" class="textMap" target="_blank">Sonrisa Charry <br> Valle del Cauca, Colombia</a></span>'
      },
      {
        latlong: [20.63695910557869, -87.06711544602062],
        title: '<span class="popUpText"><a href="https://www.instagram.com/dentex2020/" class="textMap" target="_blank">Dentex Odontología <br> Playa del Carmen, Mexico</a></span>'
      },
      {
        latlong: [36.84733677305643, 28.254776760987284],
        title: '<span class="popUpText"><a href="https://www.instagram.com/dentalmarmaris_celebidental/" class="textMap" target="_blank">Celebi Dental <br> Marmaris, Turkey</a></span>'
      }
    ];
    break;

  case prefix + "dominicanRep.html":
    mapOptions.view = [18.47406276988475, -69.89695504602206];
    mapOptions.zoom = 17;
    mapOptions.markers = [{
        latlong: [18.47406276988475, -69.89695504602206],
        title: '<span class="popUpText"><a href="https://www.instagram.com/dradeniacarpio/" class="textMap" target="_blank">Dra. Denia Carpio <br> Santo Domingo <br> Dominican Republic</a></span>'
      },
      {
        latlong: [18.473983358302632, -69.8967334],
        title: '<span class="popUpText"><a href="https://www.instagram.com/drasilviaaviles/" class="textMap" target="_blank">Dra. Silvia Aviles <br> Santo Domingo <br> Dominican Republic</a></span>'
      }
    ];
    break;

  case prefix + "colombia.html":
    mapOptions.view = [8, -73.06845903863724];
    mapOptions.zoom = 5;
    mapOptions.markers = [{
        latlong: [11.01127471851537, -74.82809605936626],
        title: '<span class="popUpText"><a href="https://www.instagram.com/pachecoplastic/" class="textMap" target="_blank">Dr. Hernando Pacheco <br> Baranquilla, Colombia</a></span>'
      },
      {
        latlong: [3.3946519617905495, -76.5413944306804],
        title: '<span class="popUpText"><a href="https://www.instagram.com/sonrisacharry/" class="textMap" target="_blank">Sonrisa Charry <br> Valle del Cauca, Colombia</a></span>'
      },
      {
        latlong: [7.036529835292955, -73.06845903863724],
        title: '<span class="popUpText"><a href="https://www.instagram.com/drfelipegonzalez/" class="textMap" target="_blank">Dr. Felipe Gonzalez <br> Santander, Colombia</a></span>'
      }
    ];
    break;

  case prefix + "mexico.html":
    mapOptions.view = [26.68511446997661, -103.39514154502761];
    mapOptions.zoom = 4;
    mapOptions.markers = [{
        latlong: [32.526118, -117.02126],
        title: '<span class="popUpText"><a href="https://www.instagram.com/sirenesurgeryclinic/" class="textMap" target="_blank">Sirene Surgical Clinic <br> Tijuana, Mexico</a></span>'
      },
      {
        latlong: [32.523374791452376, -117.01309590491408],
        title: '<span class="popUpText"><a href="https://www.instagram.com/balticsurgerytijuana/" class="textMap" target="_blank">Baltic Surgery <br> Tijuana, Mexico</a></span>'
      },
      {
        latlong: [20.63695910557869, -87.06711544602062],
        title: '<span class="popUpText"><a href="https://www.instagram.com/dentex2020/" class="textMap" target="_blank">Dentex Odontología <br> Playa del Carmen, Mexico</a></span>'
      },
      {
        latlong: [20.68511446997661, -103.39514154502761],
        title: '<span class="popUpText"><a href="https://www.instagram.com/hairin1day/" class="textMap" target="_blank">Hair in 1 Day <br> Gudalajara, Mexico</a></span>'
      },
      {
        latlong: [19.357103566905515, -99.18463991505979],
        title: '<span class="popUpText"><a href="https://www.instagram.com/clinica.dreo/" class="textMap" target="_blank">Clinica DrEO <br> Mexico City, Mexico</a></span>'
      }
    ];
    break;

  case prefix + "southKorea.html":
    mapOptions.view = [37.52, 127.0277505613608];
    mapOptions.zoom = 12;
    mapOptions.markers = [{
        latlong: [37.50544810254444, 127.07881449766033],
        title: '<span class="popUpText"><a href="https://www.instagram.com/medictel_global/" class="textMap" target="_blank">Medictel <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.5232105439706, 127.02794862593731],
        title: '<span class="popUpText"><a href="https://www.instagram.com/jkplasticsurgery/" class="textMap" target="_blank">JK Plastics <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.496518048888824, 127.0277505613608],
        title: '<span class="popUpText"><a href="https://www.instagram.com/seoulguidemedical/" class="textMap" target="_blank">Seoul Guide Medical <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.523091480791976, 127.02673587011269],
        title: '<span class="popUpText"><a href="https://www.instagram.com/misooda_korea/" class="textMap" target="_blank">MISOODA <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.523433616202034, 127.02794202593883],
        title: '<span class="popUpText"><a href="https://www.instagram.com/popsurgery_cn/" class="textMap" target="_blank">POP整形外科 <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.5034850514988, 127.02472141630581],
        title: '<span class="popUpText"><a href="https://www.instagram.com/lasikinbusan/" class="textMap" target="_blank">BGN Eye <br>Clinic Busan <br> Seoul, South Korea</a></span>'
      },
      {
        latlong: [37.4996, 127.034288],
        title: '<span class="popUpText"><a href="https://www.instagram.com/beautiquekorea/" class="textMap" target="_blank">Beautique Korea <br> Seoul, South Korea</a></span>'
      }
    ];
    break;

  case prefix + "thailand.html":
    mapOptions.view = [13.72377309366014, 100.56674017582452];
    mapOptions.zoom = 4;
    mapOptions.markers = [{
        latlong: [7.898500665037002, 98.3679161],
        title: '<span class="popUpText"><a href="https://www.instagram.com/plasticsurgeryphuket/" class="textMap" target="_blank">Plastic Surgery Phuket <br> Phuket, Thailand</a></span>'
      },
      {
        latlong: [18.79572628416046, 98.97201133863724],
        title: '<span class="popUpText"><a href="https://www.instagram.com/sarinyaclinic/" class="textMap" target="_blank">Sarinya Clinic <br>(ศรินยา คลินิก) <br> Chiang Mai, Thailand</a></span>'
      },
      {
        latlong: [13.72377309366014, 100.56674017582452],
        title: '<span class="popUpText"><a href="https://www.instagram.com/nirundaclinic" class="textMap" target="_blank">Nirunda International<br> Aesthetic Clinic (นิรันดาคลินิก) <br> Bangkok, Thailand</a></span>'
      },
      {
        latlong: [18.825487130547206, 99.01171333960211],
        title: '<span class="popUpText"><a href="https://www.instagram.com/rinradaclinic" class="textMap" target="_blank">Rinrada Clinic <br>CM รินรดา เชียงใหม่ <br> Pattaya, Chon Buri, Thailand</a></span>'
      }
    ];
    break;

  case prefix + "turkey.html":
    mapOptions.view = [39.06565331567315, 29.001017241413674];
    mapOptions.zoom = 5;
    mapOptions.markers = [{
        latlong: [41.06565331567315, 29.001017241413674],
        title: '<span class="popUpText"><a href="https://www.instagram.com/estetikinternational/" class="textMap" target="_blank">Estetik International <br> Istanbul, Turkey</a></span>'
      },
      {
        latlong: [41.010, 28.960],
        title: '<span class="popUpText"><a href="https://www.instagram.com/starling.health/" class="textMap" target="_blank">Starling Health <br> Instanbul, Turkey</a></span>'
      },
      {
        latlong: [36.84733677305643, 28.254776760987284],
        title: '<span class="popUpText"><a href="https://www.instagram.com/dentalmarmaris_celebidental/" class="textMap" target="_blank">Celebi Dental <br> Marmaris, Turkey</a></span>'
      },
      {
        latlong: [36.867934712530776, 30.728576437563394],
        title: '<span class="popUpText"><a href="https://www.instagram.com/morsiamedical/" class="textMap" target="_blank">Morsia Medical <br> Antalya, Turkey</a></span>'
      },
      {
        latlong: [41.000874008735956, 29.05510727024624],
        title: '<span class="popUpText"><a href="https://www.instagram.com/arenamedhairclinic/" class="textMap" target="_blank">Arenamed Hair Clinic <br> Istanbul, Turkey</a></span>'
      }
    ];
    break;

  default:

}
// https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
//https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}/**/
// mapOptions['viewx'],mapOptions['viewy']
// var map = L.map('map').setView(new L.LatLng(0,0), mapOptions.zoom);
// var map = L.map('map').setView(mapOptions.view, mapOptions.zoom);
// var map = L.map('map').setView(new L.LatLng(mapOptions['viewx'],mapOptions['viewy']), mapOptions.zoom);

let map = L.map('map').setView(mapOptions.view, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (let marker of mapOptions.markers) {
  L.marker(marker.latlong, {
      icon: myIcon
    }).addTo(map)
    .bindPopup(marker.title);
};

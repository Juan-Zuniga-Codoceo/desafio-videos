const ReproductorIIFE = (function() {
    function insertarVideo(url, id) {
        const iframe = document.getElementById(id);
        iframe.setAttribute("src", url);
    }

    return {
        playMultimedia: function(url, id) {
            insertarVideo(url, id);
        },
        setInicio: function(url, tiempo) {
            return `${url}?start=${tiempo}`;
        }
    };
})();

class Multimedia {
    constructor(url) {
        let _url = url;

        this.getUrl = function() {
            return _url;
        };

        this.setInicio = function() {
            return "Este método es para realizar un cambio en la URL del video";
        };
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        ReproductorIIFE.playMultimedia(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        const urlWithTime = ReproductorIIFE.setInicio(this.getUrl(), tiempo);
        const iframe = document.getElementById(this.id);
        iframe.setAttribute("src", urlWithTime);
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/y9LlnLTH87U?si=vLb7ti95Cmp7k5QD", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/XZG1FzyB8DI?si=Nbotd4Wvssqx8Js1" , "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/ILWJWR36bIk?si=ZRAg2-148EcqPtfv", "series");

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

serie.setInicio(30); // Iniciar el video de la serie en el segundo 30

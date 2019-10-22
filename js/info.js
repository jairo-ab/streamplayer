const title = document.getElementById('titulo');

let consulta = (url,callback) => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.timeout = 10000; // tempo em milisegundos
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let dados = xmlhttp.responseText.split(",");
            let musica = dados[dados.length - 1] == 'Unknown' ? "Rádio Chat" : dados[dados.length - 1];
            callback(musica);
        }
    };
    xmlhttp.ontimeout = function () {
        callback('Rádio Chat');
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
};

consulta(info, function(response) {
     title.innerHTML = response;
});

setInterval( function() { 
    consulta(info, function(response) {
        title.innerHTML = response;
    });
}, 5000);
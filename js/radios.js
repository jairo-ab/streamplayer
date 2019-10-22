var radios = document.getElementById("radio");

radios.onchange = function(){
	var radioStream = radios.options[radios.selectedIndex].value;
	var nomeRadio = radios.options[radios.selectedIndex].text;

    playPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z";
    var timestamp = Math.round(new Date() / 1000);
    audioSource.src = radioStream + "?nocache=" + timestamp;
    player.load();
    player.play();

    titulo.innerHTML = nomeRadio;
};
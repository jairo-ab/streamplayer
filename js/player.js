var audioPlayer = document.querySelector('.stream-player');
var audioSource = document.querySelector('#audiosource');
var barra = document.querySelector('.volbar');
var titulo = document.getElementById('titulo');
var playPause = audioPlayer.querySelector('#playPause');
var botaoPlay = audioPlayer.querySelector('.play-pause-btn');
var loading = audioPlayer.querySelector('.loading');
var botaoVol = audioPlayer.querySelector('.volume-btn');
var player = audioPlayer.querySelector('audio');
var speaker = audioPlayer.querySelector('#speaker');

const updateVolume = () => {
  if(player.volume >= 0.5) {
    speaker.attributes.d.value = 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z';  
  } else if(player.volume < 0.5 && player.volume > 0.05) {
    speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z';
  } else if(player.volume <= 0.05) {
    speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667';
  }
}

const changeVolume = (event) => {
    player.volume = barra.value / 100;
}

const togglePlay = () => {
  if (typeof radioStream !== 'undefined') {
    stream = radioStream;
  }
  if(player.paused) {
    playPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z";
    var timestamp = Math.round(new Date() / 1000);
    audioSource.src = stream + "?nocache=" + timestamp;
    player.load();
    player.play();
  } else {
    playPause.attributes.d.value = "M18 12L0 24V0";
    player.pause();
  }  
}

const makePlay = () => {
  botaoPlay.style.display = 'block';
  loading.style.display = 'none';
}

barra.addEventListener('input', changeVolume); 
botaoPlay.addEventListener('click', togglePlay);
player.addEventListener('volumechange', updateVolume);
player.addEventListener('canplay', makePlay);

player.addEventListener('ended', () => {
  playPause.attributes.d.value = "M18 12L0 24V0";
  player.currentTime = 0;
});


// FadeIn / FadeOut
//botaoVol.onmouseover = (event) => {
//botaoVol.addEventListener('click', () => {
//botaoVol.addEventListener('mouseover', () => {
botaoVol.addEventListener('mouseenter', () => {
  if (titulo.classList.contains('hidden')) {
    // Mostra o Texto
    barra.classList.add('visuallyhidden');    

    barra.addEventListener('transitionend', function(e) {
      this.classList.add('hidden');
      titulo.classList.remove('hidden');
      //titulo.classList.remove('visuallyhidden');
      },{ capture: false, once: true, passive: false 
    });

    setTimeout(function () {
      titulo.classList.remove('visuallyhidden');
    }, 900);

  } else {
    // Mostra a Barra
    titulo.classList.add('visuallyhidden');

    titulo.addEventListener('transitionend', function(e) {
      this.classList.add('hidden');
      //barra.classList.remove('visuallyhidden');
      barra.classList.remove('hidden');
      },{ capture: false, once: true, passive: false 
    });

    setTimeout(function () {
       barra.classList.remove('visuallyhidden');
    }, 900);

  }
  
}, true);

//audioPlayer.onmouseleave = function (event) {
audioPlayer.onmouseleave = (event) => {
  if (titulo.classList.contains('hidden')) {
    // Mostra o Texto
    barra.classList.add('visuallyhidden');    

    barra.addEventListener('transitionend', function(e) {
      this.classList.add('hidden');
      titulo.classList.remove('hidden');
      },{ capture: false, once: true, passive: false 
    });

    setTimeout(function () {
      titulo.classList.remove('visuallyhidden');
    }, 900);

  }
};

titulo.onmouseover = function (event) {
    titulo.classList.add('visuallyhidden');    

    titulo.addEventListener('transitionend', function(e) {
      titulo.classList.remove('titulo');
      },{ capture: false, once: true, passive: false 
    });

    setTimeout(function () {
      titulo.classList.remove('visuallyhidden');
    }, 900);

};
 
titulo.onmouseleave = function (event) {
    titulo.classList.add('visuallyhidden');    

    titulo.addEventListener('transitionend', function(e) {
      titulo.classList.add('titulo');
      titulo.classList.remove('visuallyhidden');
      },{ capture: false, once: true, passive: false 
    });
};

titulo.onmouseover = function (event) {
    titulo.classList.remove("titulo");
};
 
titulo.onmouseleave = function (event) {
    titulo.classList.add("titulo");
};

// Workaround
setTimeout(function(){
    if (window.getComputedStyle(botaoPlay).display === "none" || window.getComputedStyle(botaoPlay).visibility === "hidden")
        makePlay();
}, 2000);












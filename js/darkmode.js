let estilo = document.getElementById("estilo");
let icone = document.getElementById("darkIcon");
let switcher = document.getElementById("checkbox");
let corpo = document.getElementsByTagName("body")[0];

switcher.checked = false;

if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    if (hash == 'dark') {
        estilo.setAttribute("href", 'css/dark.css');
        corpo.classList.add("dark");
        switcher.checked = true;
        icone.classList.remove("fa-sun");
        icone.classList.add("fa-moon");
    } else {
        corpo.classList.remove("dark");
        estilo.setAttribute("href", 'css/light.css');
        icone.classList.remove("fa-moon");
        icone.classList.add("fa-sun");
    }
}

document.getElementById("checkbox").onclick = function () { 
    if (document.getElementById("checkbox").checked) {
        estilo.setAttribute("href", 'css/dark.css');
        icone.classList.remove("fa-sun");
        corpo.classList.add("dark");
        icone.classList.add("fa-moon");
        location.hash = "dark"; 
    } else {
        estilo.setAttribute("href", 'css/light.css');
        icone.classList.remove("fa-moon");
        corpo.classList.remove("dark");
        icone.classList.add("fa-sun");
        location.hash = "light"; 
    }
};
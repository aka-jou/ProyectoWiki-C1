// Datos de las imágenes y textos
var images = ["shippuden.jpg", "morty.jpg", "jujutsu.jpg", "aventura.jpg"];
var titles = ["Naruto Shippuden", "Rick and Morty", "Jujutsu Kaisen", "Adventure time"];
var texts = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia esse dicta voluptates nesciunt...",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia esse dicta voluptates nesciunt...",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia esse dicta voluptates nesciunt...",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia esse dicta voluptates nesciunt..."
];

// Obtén el elemento de la lista del carrusel
var sliderList = document.getElementById('slider');

// Genera dinámicamente el contenido del carrusel con un ciclo for
for (var i = 0; i < images.length; i++) {
  // Crea un nuevo elemento de lista
  var listItem = document.createElement('li');

  // Crea una nueva imagen y establece su atributo src
  var img = document.createElement('img');
  img.src = "./src/" + images[i];
  img.alt = titles[i];

  // Crea un nuevo div para el texto
  var textoDiv = document.createElement('div');
  textoDiv.className = 'texto';

  // Crea un título h2 y párrafo p dentro del div de texto
  var tituloH2 = document.createElement('h2');
  tituloH2.textContent = titles[i];

  var parrafoP = document.createElement('p');
  parrafoP.textContent = texts[i];

  // Añade la imagen y el div de texto a la lista
  listItem.appendChild(img);
  textoDiv.appendChild(tituloH2);
  textoDiv.appendChild(parrafoP);
  listItem.appendChild(textoDiv);

  // Añade el nuevo elemento de lista a la lista del carrusel
sliderList.appendChild(listItem);
}



function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}




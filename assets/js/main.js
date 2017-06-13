/*Funcionamiento del Slider*/
google_ad_client = "ca-pub-2783044520727903";
/* jQuery_demo */
google_ad_slot = "2780937993";
google_ad_width = 728;
google_ad_height = 90;

var images = Array.from(document.getElementsByClassName("box-images"));
var boxModal = document.getElementById("box-modal");
var closeModal = document.getElementById("close");
var consolas = Array.from(document.getElementsByClassName("consolas"));
var boxContent = document.getElementById("box-content-img");
var boxContentDescription = document.getElementById("box-content-description");
var description = ["El nuevo Sistema PlayStation®4 delgado abre la puerta a viajes extraordinarios a través de nuevos mundos, juegos envolventes y una comunidad de jugadores conectados profundamente.", "Juega la mejor colección de juegos de la historia, incluyendo clásicos de Xbox 360, en una consola 40 % más pequeña. No dejes que su tamaño te engañe: con fuente de poder interna y hasta 2 TB de almacenamiento interno, la Xbox One S es la Xbox más avanzada.", "¿Alguna vez has dejado un juego por falta de tiempo? La consola Nintendo Switch puede transformarse para adaptarse a tu situación, de modo que puedes jugar a los juegos que tú quieras por muy ocupado que estés."]
var precios = ["$399.990" , "S350.000", "$495.000"];
var modalPrecio = document.getElementById("precio");
images.forEach(function(e , i){
	e.addEventListener("click", function(){
		boxContent.innerHTML = e.innerHTML;
		boxModal.classList.remove("noshow");
		boxContentDescription.innerHTML = description[i];
		modalPrecio.innerHTML = precios[i];
	})

})
  closeModal.addEventListener("click", function(){
	boxModal.classList.add("noshow")
})


//traigo una etiqueta del h1

let titulo=document.getElementById("titulo")
console.log(titulo);

//controlando etiquetas
//1. cambiar el texto de una etiqueta solo aplica para las  h---,p,a

titulo.textContent="CHAO"
//2.cambiar la imagen o la fuente

let foto=document.getElementById("foto")
foto.src="https://us.123rf.com/450wm/april909/april9091502/april909150200015/36157353-esta-imagen-es-de-dise%C3%B1o-para-el-amor-y-el-d%C3%ADa-de-san-valent%C3%ADn.jpg?ver=6"

//3.agregando estilos
titulo.classList.add("letra")

//4. dectetando eventos
let boton=document.getElementById("boton")
boton.addEventListener("click",function(){
    console.log("hice clic");
})


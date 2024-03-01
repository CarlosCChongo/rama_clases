
console.log(
    `script de la sesion web07`
);
//get elementById : seleccionar y obtener una referencia a un elemento HTML
document.getElementById(`title`).innerHTML = `El elote en Cdmx cuesta $29.99 pesos`

function handleTitle() {
    document.getElementById("title").style.color = "blue";
}

function changeColor(color) {
    document.getElementById("description").style.color = color;
}

function changeColorTextUsingThis(color,elementRef) {
    console.log(elementRef)
    elementRef.style.color = color;
    //el elemento HTML no tiene elemento ID asignado
    //document.getElementById(?)
}

function changeColorUsingClass(){
   // getElementsByClassName: seleccionar y devolver una colección 
    //de elementos HTML que tienen un atributo de clase específico
    const collection= document.getElementsByClassName("title-article")
    console.log(collection);
    console.log(collection.length);
    for ( index = 0; index< collection.length; index++){
        console.log("Elemento modificado: " + collection[index].innerHTML);
        collection[index].style.color =  "#9FE2BF"
    }
}

function resetColorsParagraph(){
    //opcion 1 ir a todos los paragrph y agregarle una clase. ej. class="paragraph-style"
    const collection= document.getElementsByTagName("p")
    console.log(collection);
    console.log(collection.length);
    for ( index = 0; index< collection.length; index++){
        console.log("Elemento modificado: " + collection[index].innerHTML);
        collection[index].style.color =  "black"

}
}

function changeColorOfCollection( collection, color ){
    console.log( collection );
    console.log( collection.length ); 

    for( index = 0; index < collection.length; index++ ){
        console.log("Elemento modificado: " + collection[index].innerHTML);
        collection[index].style.color = color;

    }
}

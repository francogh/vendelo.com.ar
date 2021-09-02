
guardarLocalStorage();

obtenerLocalStorage();

function obtenerLocalStorage (){

    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse( localStorage.getItem("persona "));

    console.log(nombre);
    console.log(persona);



}

function guardarLocalStorage(){

    let persona = {
        nombre: "Franco",
        apellido: "Ghiotti",
        edad: 34,
        correo: "fracoghiotti@gmail.com",

    };

        let nombre = "juan";

        localStorage.setItem("nombre", nombre);
        localStorage.setItem("persona", JSON.stringify (persona));

}

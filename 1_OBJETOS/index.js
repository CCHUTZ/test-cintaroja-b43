
// OBJETOS LITERALES

let persona = {
    //ATRIBUTOS
    //LLAVE: VALOR
    nombre: 'Arhon',
    apellidos: 'Eli',
    edad: 21,
    pais: 'Mexico',
    esMayor: true,

    //Métodos
    
    //ECMA 5
    despedir (){
        //console.log('Adios!!');
    },

    //ECMA 6 | arrow
    gritar: function (){
        //    console.log('ESTOY GRITANDO');
   },
    // ECMA 6  vanilla 
    //gritar; ()
};
//console.log(persona);
persona.saludar();
persona.despedir();

//ATRIBUTOS
let perrito = {
    color: 'gris',
    patas: 3,
    tienePelo: false, 
    nombre: 'Concha', 
//MÉTODOS 
    ladrar: function (){
        console.log('Guauuu');
    },

    comer: function () {
        console.log('estoy comiendo');

    }
}

perrito.ladrar();

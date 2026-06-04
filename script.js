console.log("Hola mundo");
 const nombre ="jose";
 let apellido = "Narvaez";

 console.log(nombre);
 console.log(apellido);

 //nombre="Christian";
// apellido="Figueroa";
 console.log(apellido);

 //objetos en javaScript
 const persona ={
    nombre: "jose",
    apellido: "nombre",
    edad : 20,
    apodos: [
        "pepe",
        "chepe",
        "Chepito"
        
    ]
 };
 persona.apellido="Narvaes figueroa"
 console.log(persona.apellido);
 console.log("==================fin objetos==============")
 //funciones en javascript

 /*
 function saludar (nombre){
    return "hola" + nombre;

 }
    */
/*
const saludar=(nombre)=> {
    return "hola "+ nombre;

}
    */

const saludar=nombre=> 
     "hola "+ nombre;




const saludo = saludar(persona.nombre);
 console.log(saludo);
console.log("==================fin funciones==============")
console.log("==================listas==============")
const listanumeros=[
    5,8,10,3,9
];
console.log(listanumeros);
listanumeros[3]=7;
console.log(listanumeros);
const numerosmultiplicados = listanumeros.map(
    (numeroEnElqueVOy)=>{
        return numeroEnElqueVOy *3;
    }
    
);
console.log(numerosmultiplicados);
const numerosEnObjetos = listanumeros.map(
    (numeroEnElqueVOy)=> {
        return{
        valor:numeroEnElqueVOy
        }
    }
);

console.log(numerosEnObjetos);

//funcion filter

const numerosX =[90,70,30,10,50];
const numerosFiltrados = numerosX.filter(
    numX=>
      numX > 50
    
)
console.log (numerosFiltrados);
const personas =[
  {
    nombre:"Iker", edad: 18
  },{
    nombre: "Brandon SP",edad: 18
  },{
    nombre:"RicardoSH",edad: 19
},
];
const personasMayores = personas.filter(
    (personaX) => {
        return personaX.edad > 17;
    }
);
console.log(personasMayores);
//funcion reduce

const numerosY = [3,6,9,12,16];

const sumaNumero = numerosY.reduce(
    (valorPersistente,elemento)=>
       
        valorPersistente+elemento
        ,
    
    0
)
console.log(sumaNumero);



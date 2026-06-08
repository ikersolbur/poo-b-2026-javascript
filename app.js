//declaraciond variablees
const estudiantes = [
    { id: 1, nombre: "Ana Lopez",    nota: 90 },
    { id: 2, nombre: "Carlos Ruiz",  nota: 55 },
    { id: 3, nombre: "Maria Torres", nota: 78 },
    { id: 4, nombre: "Luis Mendez",  nota: 45 },
    { id: 5, nombre: "Sofia Rios",   nota: 88 },
    { id: 6, nombre: "Pedro Soto",   nota: 62 },
];
//Un estudiante solito
const estudianteX=[ {
  id: 7, nombre: "Lucia Gomez",   nota:95 },
]
//refeerncias a DOM
const seccionpromedio=document.getElementById("resultado-promedio");
const seccionEstudiantes=document.getElementById("lista-estudiantes");
const btnTodos=document.getElementById("btn-todos");
const btnAprobados=document.getElementById("btn-aprobados");
const btnReprobados=document.getElementById("btn-reprobados");
const btnPromedio=document.getElementById("btn-promedio");
//Funciones
const crearTarjeta = (unEstudiante) =>{
    const estado = unEstudiante.nota > 60? "Aprobado":"Reprobado";
    const clase=unEstudiante.nota > 60?"aprobado":"reprobado";
    const tarjeta=`
      <div class="tarjeta ${clase}">
        <h2>${unEstudiante.nombre}</h2>
        <p>Nota: ${unEstudiante.nota}</p>
        <p>${estado}</p>
      </div>
    `;
    return tarjeta;
}
const renderizarLista = (estudiantesAPintar) => {
   const listaTarjetas=estudiantesAPintar.map(
        (unEstudiante) =>{

           const tarjeta = crearTarjeta(unEstudiante);
           return tarjeta;
        }
    );
seccionEstudiantes.innerHTML=listaTarjetas.join("");

}

const toFixedTrunc=(num,decimales)=>{
    const factor=Math.pow(10,decimales);

    const truncado=Math.trunc(num*factor)/factor;

    return truncado.toFixed(decimales);
}

//Eventos
btnTodos.addEventListener("click", ()=> {
        renderizarLista(estudiantes);
    }
);
btnAprobados.addEventListener("click", ()=>{
      const aprobados=estudiantes.filter(
          (unEstudianteX) =>{
            return  unEstudianteX.nota > 60;
          }
      )
    renderizarLista(aprobados);
    }
);
btnReprobados.addEventListener("click",
    ()=>{
    const reprobados=estudiantes.filter(unEstudianteX => unEstudianteX.nota < 61)
    renderizarLista(reprobados);
})
btnPromedio.addEventListener("click",()=>{
    const sumaNotas=estudiantes.reduce(
        (valorPersistente,estudiante)=>{
            return valorPersistente + estudiante.nota;
        },
        0);
    const promedio=sumaNotas/estudiantes.length;
    console.log(toFixedTrunc(promedio,2));
    seccionpromedio.innerHTML="Promedio: " + toFixedTrunc(promedio,2);
    seccionpromedio.style.display="block";

})

    //Lamadas a funciones

renderizarLista(estudiantes);

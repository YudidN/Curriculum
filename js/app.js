//Llamar JSON desde github
var jsonUrl = 'https://raw.githubusercontent.com/NeverosYudid/JSON/master/app.json';

//ServiceWorker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/serviceworker.js");
}

//Funcion para cargar el JSON
function getDatos(){
    fetch(jsonUrl)
    .then(res=> res.json())
    .then(data => cargarJSON(data))
}
    
getDatos();// Llamar la funcion 


//Codigo HTML del curriculum
curriculum =`
<div id="base">
<div id="derecha">
    <h1>{nombre} </h1>
    <h4 id="titulosder">EXPERIENCIA</h4>
    <hr id="derecha"/>
    
    <p id="subtituloder"> Empresa:</p>
    <p id="textoder">{nombreempresa}</p>
    <p id="subtituloder"> Puesto:</p>
    <p id="textoder">{puestoempresa}</p>
    <p id="subtituloder"> Responsabilidades:</p>
    <ul>
        <li ><p id="texto">{r1}</p></li>
        <li ><p id="texto"> {r2}</p></li>
        <li ><p id="texto"> {r3}</p></li>
    </ul>
    <p id="textoderfe">{fechaempresa}</p>
    <br>
    <h4 id="titulosder">EDUCACION</h4>
    <hr id="derecha"/>

    <p id="subtituloder"> Instituto:</p>
    <p id="textoder">{instituto}</p>
    <p id="subtituloder"> Grado de estudio:</p>
    <p id="textoder">{grado}</p>
    <p id="subtituloder"> Carrera:</p>
    <p id="textoder"> {carrera}</p>
    <p id="textoderfe">{añocarrera}</p>
    <br>
    <h4 id="titulosder">CONOCIMIENTO</h4>
    <hr id="derecha"/>
    <div id="col1">
        <p id="subtituloder"> Lenguages:</p>
    <ul>
        <li ><p id="texto"> {l1}</p></li>
        <li ><p id="texto"> {l2}</p></li>
        <li ><p id="texto"> {l3}</p></li>
        <li ><p id="texto"> {l4}</p></li>
        <li ><p id="texto"> {l5}</p></li>
    </ul>
    </div>

    <div id="col2">
        <p id="subtituloder"> Base de Datos:</p>
    <ul>
        <li ><p id="texto"> {bd1}</p></li>
        <li ><p id="texto"> {bd2}</p></li>
        <li ><p id="texto"> {bd3}</p></li>
    </ul>

    </div>
    <div id="col3">
        <p id="subtituloder"> Paqueteria:</p>
    <ul>
        <li ><p id="texto">{p1}</p></li>
        <li ><p id="texto"> {p2}</p></li>
        <li ><p id="texto"> {p3}</p></li>
    </ul>
    </div>
</div>
<div id="izquierda">
            <img src="/img/yudid.jpg">
            <h4 id="titulos">DATOS PERSONALES</h4>
            <hr id="izquierda"/>
            <p id="subtitulo"> Fecha de nacimiento</p>
            <p id="texto"> {fechanacimiento}</p>
            <p id="subtitulo"> Lugar de nacimiento</p>
            <p id="texto">{lugarnacimiento} </p>
            <p id="subtitulo"> Email</p>
            <p id="texto">{email}</p>
            <p id="subtitulo"> Telefono</p>
            <p id="texto">{telefono}</p>
            <p id="subtitulo">Resumen</p>
            <p id="texto"> {resumen}</p>
            <p id="subtitulo"> Puesto solicitado</p>
            <p id="texto">{puesto}</p>


            <h4 id="titulos">HABILIDADES</h4>
            <hr id="izquierda"/>
            <ul>
                <li><p id="texto"> {h1}</p></li>
                <li><p id="texto"> {h2}</p></li>
                <li><p id="texto"> {h3}</p></li>
            </ul>
        </div>
`



 function cargarJSON(data){
     //Informacion personal
    var Nombre = data.Nombre;
    var FechaNacimiento = data.FechaNacimiento;
    var LugarNacimiento = data.LugarNacimiento;
    var Email = data.Email;
    var Telefono = data.Telefono;
    var Resumen = data.Resumen;
    var PuestoSolicitado = data.PuestoSolicitado;

    //Habilidades
    var Habilidades = data.Habilidades;

    //Experiencia
    var Empresa = data.ExperienciaLaboral[0].Empresa;
    var Puesto = data.ExperienciaLaboral[0].Puesto;
    var Fecha = data.ExperienciaLaboral[0].Fecha;
    var Responsabilidades = data.ExperienciaLaboral[0].Responsabilidades;

    //Educacion
    var Instituto = data.Educacion[0].Instituto;
    var GradoEstudio = data.Educacion[0].GradoEstudio;
    var Carrera = data.Educacion[0].Carrera;
    var fechaIngreso = data.Educacion[0].fechaIngreso;

    //Conocimiento
    var Lenguages = data.Lenguages;
    var BaseDeDatos = data.BaseDeDatos;
    var Paqueteria = data.Paqueteria;


    var information=curriculum;

    //Información personal
    information=information.replace("{nombre}",Nombre);
    information=information.replace("{fechanacimiento}",FechaNacimiento);
    information=information.replace("{lugarnacimiento}",LugarNacimiento);
    information=information.replace("{email}",Email);
    information=information.replace("{telefono}",Telefono);
    information=information.replace("{resumen}",Resumen);
    information=information.replace("{puesto}",PuestoSolicitado);

    //Habilidades
    information=information.replace("{h1}",Habilidades[0]);
    information=information.replace("{h2}",Habilidades[1]);
    information=information.replace("{h3}",Habilidades[2]);

    //Experiencia
    information=information.replace("{nombreempresa}",Empresa);
    information=information.replace("{puestoempresa}",Puesto);
    information=information.replace("{fechaempresa}",Fecha);
    information=information.replace("{r1}",Responsabilidades[0]);
    information=information.replace("{r2}",Responsabilidades[1]);
    information=information.replace("{r3}",Responsabilidades[2]);


    //Educacion
    information = information.replace("{instituto}",Instituto);
    information = information.replace("{grado}",GradoEstudio);
    information = information.replace("{carrera}",Carrera);
    information = information.replace("{añocarrera}",fechaIngreso);

    //Lenguajes
    information = information.replace("{l1}",Lenguages[0]);
    information = information.replace("{l2}",Lenguages[1]);
    information = information.replace("{l3}",Lenguages[2]);
    information = information.replace("{l4}",Lenguages[3]);
    information = information.replace("{l5}",Lenguages[4]);

    //Base de Datos
    information = information.replace("{bd1}",BaseDeDatos[0]);
    information = information.replace("{bd2}",BaseDeDatos[1]);
    information = information.replace("{bd3}",BaseDeDatos[2]);

    //Paqueteria
    information = information.replace("{p1}",Paqueteria[0]);
    information = information.replace("{p2}",Paqueteria[1]);
    information = information.replace("{p3}",Paqueteria[2]);



    document.getElementById('datos').innerHTML+=information;      
    

} 


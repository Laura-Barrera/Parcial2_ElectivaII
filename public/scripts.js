// Traer datos ejemplo
function loadAuthors(){
    return new Promise((resolve, reject) =>{
        // Aca se hace el fetch para acceder a la API
        // Fetch es como una promesa
        fetch('http://localhost:4000/authors')
        // convertir en formato json y pasar a la siguiente linea
        .then(resp => resp.json())
        .then(resp => resolve(resp))
        .catch(err => reject(err))
    })
}

//Visualizar datos Ejemplo
const data = () =>{
    const id = document.getElementById('idAuthor').value
    const name = document.getElementById('nameAuthor').value
    const birthday = document.getElementById('dateAuthor').value
    
    const datos ={"id":`${id}`,"name":`${name}`,"birthday":`${birthday}`}
    return JSON.stringify(datos)
}

//Encontrar por un ID especifico
function findId() {
    const URL = ""
    fetch(URL,{
        method:"GET",
        body: data()
    })
    .then(resp => {

    })
    .catch(err => alert(`error ${err}`))
}

// Envio datos formulario Ejemplo
document.getElementById('botonEnvioAutor').addEventListener('click',()=>{
    const URL = "http://localhost:4000/authors"

    fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: data()
    })
    .then(resp => resp.json())
    .then(resp => {
        if(resp.state){
            alert('ok')
        } else{
            alert('no')
        }
    })
    .catch(err => alert(`error ${err}`))
})
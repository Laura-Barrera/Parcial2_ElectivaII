function loadDishes(){
    return new Promise((resolve, reject) =>{
        fetch('https://api-dishes.vercel.app/')
        .then(resp => resp.json())
        .then(resp => resolve(resp))
        .catch(err => reject(err))
    })
}

function limpiar(){
    location.reload()
}

const newDish = () =>{
    const id = document.getElementById('idDish').value
    const name = document.getElementById('name').value
    const calories = document.getElementById('calories').value
    const isVegetarian = document.getElementById('isVegetarian').value
    const value = document.getElementById('value').value
    const comments = document.getElementById('comments').value
    
    const datos ={"idDish":`${id}`,"name":`${name}`,"calories":`${calories}`,"isVegetarian":`${isVegetarian}`,"value":`${value}`,"comments":`${comments}`}
    return JSON.stringify(datos)
}

document.getElementById('botonEnvioPlato').addEventListener('click',()=>{
    const URL = "https://api-dishes.vercel.app/"

    fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: newDish()
    })
    .then(resp => {
        if(resp.status = 208){
            alert('Ya existe un plato con el mismo id')
            throw new Error('Plato duplicado');
        } else{
            resp.json()
        }
    })
    .then(resp => {
        if(resp.state){
            console.log(resp)
            alert('ok')
            location.reload()
        } else{
            // Falta validar los estados
            console.log(resp)
            alert('no')
        }
    })
    .catch(err => alert(`error ${err}`))
})

function search() {
    const idObj = document.getElementById('idPlato').value;
    return new Promise((resolve, reject) => {
        fetch(`https://api-dishes.vercel.app/${idObj}`)
            .then(resp => resp.json())
            .then(resp => resolve(resp))
            .catch(err => reject(err));
    })
    .then(res => {
        console.log(res.data._id); 
        const objid = document.getElementById("ObjS")
        objid.append(document.createTextNode(`${res.data._id}`))
        const ids= document.getElementById("idS")
        ids.append(document.createTextNode(`${res.data.idDish}`))
        const names = document.getElementById("nameS")
        names.append(document.createTextNode(`${res.data.name}`))
        const calorieS = document.getElementById("caloriesS")
        calorieS.append(document.createTextNode(`${res.data.calories}`))
        const veget= document.getElementById("vegetarianS")
        veget.append(document.createTextNode(`${res.data.isVegetarian}`))
        const valuesS = document.getElementById("valueS")
        valuesS.append(document.createTextNode(`${res.data.value}`))
        const commt = document.getElementById("commentS")
        commt.append(document.createTextNode(`${res.data.comments}`))
    })
    .catch(err => alert(`error ${err} dish no encontrado`))
}


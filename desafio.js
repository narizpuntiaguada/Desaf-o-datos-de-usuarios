// primero dejar en una variable la url de la API
const url ="https://randomuser.me/api/?results=10"

// crear funcion para consumir la API asincroma con fech try catch
const getUsers = async () => {
    // hacer peticion a la API

// el fetch devuelve una promesa y el await espera a que la promesa se "resolve o reject"
    const response = await fetch (url)
    console.log(response)
if(response.ok ===true){
    const users = await response.json();
    console.log(users);
    return users;
    
}else { 
throw new Error (`Ha ocurido un error en la petición${response.status}`)
    console.log(error);
}
}

getUsers();

const userData = async () =>{
const divUsuarios = document.getElementById("user-data")
try{
const usuarios = await getUsers();
usuarios.results.forEach(usuario => {
divUsuarios.innerHTML += `<img src=${usuario.picture.medium}>
<h3<${usuario.name.first}${usuario.name.last}<h3>
<h2>${usuario.email}<h4>
<h2>${usuario.phone}<h2>
`

});
}catch (error){
    console.log(error)
}
};

// crear IIFE
(()=>{
userData();

})();

userData();


const url ="https://randomuser.me/api/?results=10"


const getUsers = async () => {
  

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

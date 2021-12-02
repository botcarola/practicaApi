console.log("alskdjsakld")



// 1) CREAR UN USUARIO NUEVO
// 2) PODER EDITARLO
// 3) PODER ELIMINARLO 
// 4) QUE SE ACTUALICE EN TIEMPO REAL EN LA PÁGINA


fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
.then((res) =>  res.json())
.then((data) => { 
  crearTablaHTML(data)
})

const crearTablaHTML = (data) => {
  const tabla = document.querySelector("#tabla")
  const html = data.reduce((acc, curr) => {
    return acc + `  
    <tr>
      <td>${curr.fullname}</td>
      <td>${curr.email}</td>
      <td>${curr.address}</td>
      <td>${curr.phone}</td>
      <td><button class="botones "id="${curr.id}">Editar usuario</button></td>
    </tr>
    `
  }, `
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Direccion</th>
      <th>Telefono</th>
      <th>Acciones</th>
    </tr>
    `)  

    tabla.innerHTML = html

    const botonesEliminar = document.querySelectorAll(".botones")

    for (let i = 0; i < botonesEliminar.length; i++){
        botonesEliminar[i].onclick = () => {
            console.log(botonesEliminar[i].id)

        }
    }    
}

// 1) POST 

const inputNombre = document.querySelector("#nombre")
const inputEmail = document.querySelector("#email")
const inputDireccion = document.querySelector("#direccion")
const inputTelefono = document.querySelector("#telefono")
const submitBoton = document.querySelector("#subida")
const formulario = document.querySelector("form")
console.log(inputNombre, inputEmail, inputDireccion, inputTelefono, submitBoton)


submitBoton.onclick = (event) => {
    event.preventDefault();

    fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
    method: "POST",
    body: JSON.stringify({
        fullname: inputNombre.value,
        address: inputDireccion.value,
        phone: inputTelefono.value,
        email: inputEmail.value
    }),
    headers: {
        "Content-Type" : "application/json"
    }
}).then((res) =>
res.json())
.then((data) => {    
    console.log(data)
})    
}

// DELETE 

const borrarBotoncitos = () => {

    fetch("https://601da02bbe5f340017a19d60.mockapi.io/users" , {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        }   
    }).then((res) => res.json())
    .then((data) => {          
        
    }) 
}

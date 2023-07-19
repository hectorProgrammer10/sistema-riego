

login();

function login(){
  let imprimir = document.getElementById("login")
  imprimir.innerHTML= `
  <img src="src/images/logo.png" alt="imageLeft" id="logo" />
  <h1>Formulario de inicio de sesión</h1>
  <div id="loginForm">
      <label for="username">Usuario:</label>
      <input type="text" id="username" required>
      <br>
      <label for="password">Contraseña:</label>
      <input type="password" id="password" required>
      <br>
      <button onClick="validarDatos()">Iniciar sesión</button>
  </div>
  <p id="message"></p>
  `;
}

function validarDatos(){
  let imprimir = document.getElementById("login")
  let mensaje = '!incorrecto, vuleve a intentarlo :(';
  let user = "pi";
  let con = "1234";
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");

    // Valida la información ingresada
    if (username === user && password === con) {
        message.innerHTML = `Inicio de sesión correcta :)`;
        message.style.color= "green";
        setTimeout(function(){
          cambiar();
        }, 1500);
        main();
    } else {
      message.innerHTML = `${mensaje}`;

    }
}
function cambiar(){
  let imprimir = document.getElementById("login")
  imprimir.style.display= "none";
}

function main(){
  pintar();
  
}

function pintar(){
  let temperatura = document.getElementById("temperatura");
  let humedad = document.getElementById("humedad");
  let luz = document.getElementById("luz");
  if (temperatura.innerHTML === "Bien") {
        temperatura.style.color = "green";
    }
    else{
      temperatura.style.color = "red";
    }
  if (humedad.innerHTML === "Bien") {
      humedad.style.color = "green";
  }
  else{
    humedad.style.color="red"
  }
  if (luz.innerHTML === "Bien") {
    luz.style.color = "green";
  }
  else{
    luz.style.color= "red"
  }
}
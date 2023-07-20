

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
  mostrarClima();
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

function mostrarClima(){
  let estadoTemperarura = document.getElementById("temperatura");
  let estadoHumedad = document.getElementById("humedad");
  let imprimir = document.getElementById("temperaturaGrados");
  let imprimir2 = document.getElementById("humedadPorcentaje");
  let ciudad= 'Suchiapa';
  let pais= 'mx'
  apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=27da3742e70d879e3b845c9d23567f58`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humedad = data.main.humidity;

      // Convertir la temperatura de Kelvin a Celsius
      const temperatureCelsius = temperature - 273.15;

      // Mostrar el clima actual en el elemento HTML
      console.log(
        `Clima: ${weatherDescription}, Temperatura: ${temperatureCelsius.toFixed(
          1
        )}°C`
      );
      // console.log(temperatureCelsius)
      // if(temperatureCelsius >= 15 && temperatureCelsius <= 25){
      //   estadoTemperarura.innerHTML = `Bien`;

      // }
      imprimir.innerHTML = `${temperatureCelsius.toFixed(
        1
      )}°C`;
      imprimir2.innerHTML = `${humedad}%`;
    })
    .catch((error) => {
      console.log("Error al obtener el clima:", error);
    });

}
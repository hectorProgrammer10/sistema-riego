

main();

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
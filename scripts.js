let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; 

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
} /*oninput: O evento é disparado sempre que o valor do campo muda, enquanto o usuário digita ou altera o valor do campo. Ele é útil para interações em tempo real.

onchange: O evento é disparado quando o campo perde o foco e o valor foi alterado. Ele é mais adequado quando a mudança de valor deve ser capturada após o usuário terminar de editar o campo.*/

function generatePassword() {
  
  let pass = "";
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  } /** cria uma variavel (pass) que recebe a senha aleatoria por meio de um for que capta aleatoriamente cada caracter presente em charset até o numero de caracteres referente a variavel sliderElement */

  containerPassword.classList.remove("hide")
  password.innerHTML = pass;
  novaSenha = pass;

}

function copyPassword() {
  navigator.clipboard.writeText(novaSenha);
  alert("senha copiada!");
}


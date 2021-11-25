const h2 = document.querySelector("h2");
const pedido = document.querySelector("pedido");
const input = document.querySelector("#nombre");
const form = document.querySelector("form");
const main = document.querySelector("main.container");
const turno = document.querySelector("turno");
const div = document.querySelector("form-check");

const evento = 'submit' ;
  
input.addEventListener(evento, inputEvent);
function inputEvent (e) {
    console.log(`nombre: "${e.nombre}`);
    console.log (`pedido: ${e.pedido}`);
    console.log(`turno: ${e.turno}`);
    console.log (`=====================`);
    const div = document.querySelector("#eventos");
    div.innerHTML = `Escuchando el evento <strong> ${evento} </strong>`;
    
}

//esto sirve para ver donde hace click el usuario

main.addEventListener('click', e =>{
    console.log(e.target);
})


form.addEventListener(evento, formSubmit);
function formSubmit(e) {
	e.preventDefault();

	if (input.value.length < 3) {
		input.classList.add('is-invalid');
  		input.classList.remove('is-valid');
        div.innerHTML = "revisar errores";
	} else {
		input.classList.remove('is-invalid');
		input.classList.add('is-valid');
		div.innerHTML = "Formulario enviado";
	}
}


const p = document.createElement("p");
p.textContent ='Gracias ${input} por pedir ${pedido} al Bolson! Te lo vamos a entregar ${turno}';

const div2 = document.querySelector("div.soloagregartexto");
div2.appendChild(p);
console.log(div);

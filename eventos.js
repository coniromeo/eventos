const h2 = document.querySelector("h2");
const input = document.querySelector("#nombre");
const form = document.querySelector("form");
const main = document.querySelector("main.container");
const div = document.querySelector("#eventos");

const evento = 'input' ;
  
input.addEventListener(evento, inputEvent);
function inputEvent (e) {
    console.log('Code: "${e.Code}');
    console.log ('keyCode: ${e.Keycode}');
    console.log('key: ${e.key}');
    console.log('which: ${e.which}');
    console.log ('=====================');
    const div = document.querySelector("#eventos");
    div.innerHTML = 'Escuchando el evento <strong> ${evento} </strong>';
    
}
//esto sirve para ver donde hace click el usuario
/*
main.addEventListener('click', e =>{
    console.log(e.target);
})
*/

/*form.addEventListener(evento, formSubmit);
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
*/
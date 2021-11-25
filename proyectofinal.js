let nombre = prompt("Bienvenido al portal del BOLSON. Cual es tu nombre?");
let pedido = Number ( prompt(`Que estas necesitando
1-Frutas
2-Verduras
3- Frutas y Verduras`));

switch (pedido){
case 1:
    console.log ( `hola  ${nombre} gracias por tu pedido de Frutas! Lo preparamos y te lo mandamos!!` );
    break;
    case 2:
    console.log ( `hola  ${nombre} gracias por tu pedido de verduras! Lo preparamos y te lo mandamos!!` );
    break;
    case 3:
    console.log ( `hola  ${nombre} gracias por tu pedido de Verduras y Frutas! Lo preparamos y te lo mandamos!!` );
    break;
    default:
    alert("Ese número es invalido")
    pedido = Number(prompt(`Que estas necesitando
1-Frutas
2-Verduras
3- Frutas y Verduras`));
    break;
}

  while(pedido == 0 || pedido > 3);
  console.log(pedido)
alert ( `hola  ${nombre} gracias por tu pedido! Lo preparamos y te lo mandamos!!` );



let bolsonFruta = ['manzana', 'banana', 'naranjas', 'mandarinas', 'sandia' ,'melon', 'frutillas', 'ciruelas', 'peras', 'kiwi'];
console.table(bolsonFruta);

let bolsonVerdura = ['lechuga', 'tomate', 'palta', 'zanahorias', 'cebolla' , 'papas', 'batatas', 'zapallitos'];
console.table(bolsonVerdura);

let bolsonVyf = bolsonFruta.concat (bolsonVerdura);
console.table(bolsonVyf);

function sumar ( x,y){
    const resultado = x + y;
}
function restar ( x,y){
    const resultado = x - y;
}
function multiplicar ( x,y){
    const resultado = x * y;
}


const p = document.createElement("p");
p.textContent ='Gracias por hacer tu pedido al Bolson!';

const div = document.querySelector("div.nov1");
div.appendChild(p);
console.log(div);



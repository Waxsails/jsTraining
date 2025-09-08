let nombre1 = { name: "Enrique" };
let nombre2 = person1;  
nombre2.name = "Pradeep";
console.log(nombre1.name);

let numeros1 = [7, 8, 9];
let numeros2 = numeros1; 
numeros2.push(4);
console.log(numeros1); 

function helloWorld() { return "Hello World!"; }
let saludo = helloWorld;  
console.log(saludo()); 

let usuario = { perfil: { edad: 33 } };
let copia = usuario;
copia.perfil.edad = 30;
console.log(usuario.perfil.edad); 

let usuarios = [{ id: 30 }, { id: 34 }];
let copiaUsuarios = usuarios;
copiaUsuarios[0].id = 1;
console.log(usuarios[0].id); 

let fecha1 = new Date();
let fecha2 = fecha1;
fecha2.setFullYear(2077);
console.log(fecha1.getFullYear());

'use strict';

//--------------------1. Inflar las notas---------------------------------------------


const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map( mark => mark +1);
console.log(inflatedMarks);



//--------------------2. Saludar es de buena educación---------------------------------

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const saludos = names.map (name => 'Bienvenida ' + name);
console.log(saludos);

//--------------------3. Gracias por confiar en nosotros---------------------------------

/*const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
  ];

const saludo ='Bienvenida Yolanda. Gracias por confiar en nosotros.';

const premium = users.filter( user => user.isPremium === true);

const saludos2 = premium.map( user => `Bienvenida ${user.name}. Gracias por confiar en nosotros.` );
console.log(saludos2);

const saludos3 = users
                  .filter( user => user.isPremium === true)
                  .map( user => `Bienvenida ${user.name}. Gracias por confiar en nosotros.` );
console.log(saludos3);*/

//--------------------2. Los pares pueden entrar---------------------------------


const pins = [2389, 2384, 2837, 5232, 8998];

const pinPar = pins.filter(pin => pin % 2 === 0);
console.log(pinPar)



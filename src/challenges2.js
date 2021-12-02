// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  arrayTech.sort();
  let objeto = [];

for(let i = 0; i < arrayTech.length; i += 1) {
objeto.push({'tech': arrayTech[i], 'name': name})
}

if(objeto.length === 0) {
return "Vazio!"
} else {
return objeto
}
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

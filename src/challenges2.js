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
function generatePhoneNumber(array) {
  // seu código aqui
  if(array.length !== 11) {
    return "Array com tamanho incorreto."
  }
  let contador = 0
  for(let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1){
      if(array[i] === array[j]) {
        contador += 1
      }
    }
    if(array[i] > 9 || array[i] < 0 || contador >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    contador = 0
  }
  array.splice(0,0,"(");
  array.splice(3,0,")");
  array.splice(4,0," ");
  array.splice(10,0,"-");
  return array.join('');
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

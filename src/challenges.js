// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if(a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
 let espaco = ' '
 return string.split(espaco)
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length -1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1)
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNumero = array[0]
  let contador = 0
  for(let i = 0; i <  array.length; i += 1) {
    if(array[i] > maiorNumero) {
      maiorNumero = array[i]
    }
  }
  for(let i = 0; i < array.length; i += 1) {
    if(array[i] === maiorNumero) {
      contador += 1
    }

  }
  return contador

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let gato1 = Math.abs(mouse - cat1)
  let gato2 = Math.abs(mouse - cat2)

  if(gato1 < gato2) {
    return "cat1"
  } else if (gato2 < gato1) {
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

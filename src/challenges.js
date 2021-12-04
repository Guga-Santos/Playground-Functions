// Desafio 1
// seu código aqui
function compareTrue(a, b) {
  return a === true && b === true;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let espaco = ' ';
  return string.split(espaco);
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
// seu código aqui
  let maiorNumero = Math.max(...array);
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);

  if (gato1 < gato2) {
    return 'cat1';
  } if (gato2 < gato1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  // seu código aqui
//   let code = '';
  for (let i = 0; i < string.length; i += 1) {
    string = string.replace('a', '1').replace('e', '2').replace('i', '3').replace('o', '4')
      .replace('u', '5');
  }
  return string;
}
//     if (string[i] === 'a') {
//       code += '1';
//     } else if (string[i] === 'e') {
//       code += '2';
//     } else if (string[i] === 'i') {
//       code += '3';
//     } else if (string[i] === 'o') {
//       code += '4';
//     } else if (string[i] === 'u') {
//       code += '5';
//     } else {
//       code += string[i];
//     }
//   }
//   return code;
// }

function decode(string) {
  // seu código aqui
  for (let i = 0; i < string.length; i += 1) {
    string = string.replace('1', 'a').replace('2', 'e').replace('3', 'i').replace('4', 'o')
      .replace('5', 'u');
  }
  return string;
}
//     if (string[i] === '1') {
//       code += 'a';
//     } else if (string[i] === '2') {
//       code += 'e';
//     } else if (string[i] === '3') {
//       code += 'i';
//     } else if (string[i] === '4') {
//       code += 'o';
//     } else if (string[i] === '5') {
//       code += 'u';
//     } else {
//       code += string[i];
//     }
//   }
//   return code;
// }

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

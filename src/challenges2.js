// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  arrayTech.sort();
  let objeto = [];

  for (let i = 0; i < arrayTech.length; i += 1) {
    objeto.push({ tech: arrayTech[i], name });
  }

  if (objeto.length === 0) {
    return 'Vazio!';
  }
  return objeto;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < array.length; i += 1) {
    let contador = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        contador += 1;
      }
    }
    if (array[i] > 9 || array[i] < 0 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  array.splice(0, 0, '(');
  array.splice(3, 0, ')');
  array.splice(4, 0, ' ');
  array.splice(10, 0, '-');
  return array.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let absBC = Math.abs(lineB - lineC);
  let absAC = Math.abs(lineA - lineC);
  let absAB = Math.abs(lineA - lineB);

  let somaBC = lineB + lineC;
  let somaAC = lineA + lineC;
  let somaAB = lineA + lineB;

  if (lineA < somaBC && lineA > absBC) {
    return true;
  } if (lineB < somaAC && lineB > absAC) {
    return true;
  } if (lineC < somaAB && lineC > absAB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let quantidade = 0;
  let comparador = '123456789';
  for (let i = 0; i < string.length; i += 1) {
    for (let j = 0; j < comparador.length; j += 1) {
      let soma = string[i];
      if (comparador[j] === string[i]) {
        let conversor = Math.floor(soma);
        quantidade += conversor;
      }
    }
  }
  if (quantidade > 1) {
    return `${quantidade} copos de água`;
  }
  return `${quantidade} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

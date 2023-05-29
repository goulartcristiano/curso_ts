//Multiplos tipos
interface Carro {
  ano: number | string;
  nome: string;
}

interface Bike {
  rodas: number;
}

const funcao = (valida: boolean): Carro | Bike => {
  if (valida) {
    return {
      ano: 2010,
      nome: 'Ecosport',
    };
  }
  return {
    rodas: 2,
  };
};

const resultado = funcao(true);

if ('ano' in resultado) {
  console.log(resultado.nome);
}

if ('rodas' in resultado) {
  console.log(resultado.rodas);
}

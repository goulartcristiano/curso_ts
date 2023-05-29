//Tipos básicos do TS (string, number, boolean e any)
interface Pessoa {
  idade: number;
  nome: string;
  isMaiorIdade: boolean;
}

const pessoa: Pessoa = {
  idade: 38,
  nome: 'Cristiano',
  isMaiorIdade: true,
};

console.log(pessoa);

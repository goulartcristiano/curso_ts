interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  pessoa: Pessoas[];
  cidade: string;
}

const usuario: Usuarios = {
  cidade: 'Imaruí',
  pessoa: [
    {
      nome: 'Cristiano',
      idade: 38,
    },
    {
      nome: 'Daniela',
      idade: 37,
    },
  ],
};

console.log(usuario);
console.log(`Temos ${usuario.pessoa.length} pessoas no array.`);

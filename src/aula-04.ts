//Tipos opicionais
interface Estado {
  nome: string;
}
interface Cidade {
  nome: string;
  estado: Estado;
}
interface Endereco {
  rua: string;
  numero: number;
  complemento?: string;
  bairro: string;
  cidade: Cidade;
}

const endereco: Endereco = {
  rua: 'Rua São João Batista',
  numero: 56,
  //complemento: 'Casa',
  bairro: 'Centro',
  cidade: {
    nome: 'Imaruí',
    estado: {
      nome: 'Santa Catarina',
    },
  },
};
console.log(endereco.complemento?.substring(3) || 'ERRO');
console.log(endereco);

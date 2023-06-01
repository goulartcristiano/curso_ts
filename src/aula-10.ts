// PUBLIC & PRIVATE
class Escola {
  public readonly nome: string;
  private readonly alunos: Aluno[];

  constructor(nome: string) {
    this.nome = nome;
    this.alunos = [];
  }

  public addAluno(aluno: Aluno) {
    this.alunos.push(aluno);
  }
}

class Aluno {
  constructor(public readonly nome: string) {}
}

const escola = new Escola('Portinho Bittencourt');
const aluno1 = new Aluno('Maria');
const aluno2 = new Aluno('Jose');
const aluno3 = new Aluno('Pedro');

escola.addAluno(aluno1);
escola.addAluno(aluno2);
escola.addAluno(aluno3);
escola.addAluno(new Aluno('João'));

console.log('Escola', escola);

//undefined e null
interface Andar {
  passos: number | null;
}

const andar: Andar = {
  passos: null,
};

const funcaoTest = (): undefined | number => {
  if (andar.passos && andar.passos > 5) {
    return 543;
  }
  return undefined;
};
const y = funcaoTest();

if (!andar.passos) {
  console.log('É NULO');
}
if (y) {
  y.toFixed();
}

console.log('Andar', andar);

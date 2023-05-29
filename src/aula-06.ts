// Chamar callback dentro da função
const funcaoCallBack = (): void => {
  console.log('DEU BOM!');
};
const funcaoTeste2 = (valor1: number, valor2: number, callback: () => void): string => {
  if (valor1 > valor2) {
    callback();
  }
  return '';
};
funcaoTeste2(30, 32, funcaoCallBack);

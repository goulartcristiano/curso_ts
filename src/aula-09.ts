//ENUM
enum MarcaBike {
  CALOI = 'caloi',
  COLLI = 'colli',
  SKS = 'sks',
}
interface Bikes {
  marcaBike: MarcaBike;
}
const test: Bikes = {
  marcaBike: MarcaBike.SKS,
};
if (test.marcaBike === MarcaBike.SKS) {
  console.log('A Bike é SKS!');
}

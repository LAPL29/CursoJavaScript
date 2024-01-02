const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
// const hereosCopy = heroes;

const sortedHeroes = heroes.toSorted(); // hizo un nuevo arreglo pero ordenados

const reversedHeroes = heroes.toReversed();

const deletedHeroes = heroes.splice(0,2, 'Green lantern');
const reverseDeletedHeroes = deletedHeroes.toReversed(); 


console.table(heroes);
// console.table(sortedHeroes);
console.table(reversedHeroes);
console.table(deletedHeroes); // Hizo un nuevo arreglo con los heroes que fueron
console.table(reverseDeletedHeroes);



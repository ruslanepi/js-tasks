// проверка на дубли значений в массиве. Если дублей числа нету, оставляем это число, иначе удаляем.


const array = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9];
const uniqueArray = [];


for( let i = 0; i < array.length; i++ ) {
 const currentValue  = array[i];
 let count = 0;

  for( let j = 0; j < array.length; j++ ) {
    if(currentValue === array[j] ) {
      count++;
    }
  } 

  if(count === 1) {
    uniqueArray.push(currentValue);
  }
}

console.log(uniqueArray);
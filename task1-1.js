// проверка на дубли значений в массиве. Если дублей числа нету, оставляем это число, иначе удаляем.


const array = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9];
const uniqueArray = [];

const obj = {}

for( let i = 0; i < array.length; i++ ) {
 const currentValue  = array[i];
 
 if(!(currentValue in obj)) {
   obj[currentValue] = 1;
 } else {
  obj[currentValue] += 1;
 }
}


let keys = Object.keys(obj);
keys.forEach((key) => {
  if(obj[key] == 1) {
    uniqueArray.push(key); 
  }
})

console.log(obj);
console.log(uniqueArray);
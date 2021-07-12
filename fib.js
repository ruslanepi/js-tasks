// 0 1 1 2 3 5 8 13 21 34 55 89 
// 1 2 3 4 5 6 7 8  9  10


// const fib = (num) => {

//   if(num == 1) return 0
//   if(num == 2) return 1
//   return fib(num - 1) + fib(num - 2)
// }



const fib = (num) => {
  const result = [0, 1]
  for(let i = 2; i < num ; i++ ) {
    result.push(result[i - 2] + result[i - 1])
  }
  return result[num - 1]
}

console.log(fib(2));




// 1, 1, 2, 3, 5, 8 , 13, 21, 34, 55 , 89

function fib(number) {
if (number < 0) {
return 0;
}
if (number <= 2) {
return 1;
}
return fib(number - 1) + fib(number - 2) ;
}

console.log(fib(40)); 
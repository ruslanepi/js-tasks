console.log(findVowelsReg("helssioloo")); 2
// console.log(findVowels('why')); 0



function findVowels(str) {
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let arr = str.toLowerCase().split('')

  arr.forEach(( value) => {
    if(vowels.includes(value) ) {
      counter++
    } 
  })

  return counter
}



function findVowelsReg(str) {
  const matched = str.match(/[aeuiu]/gi);
  return matched ? matched.length : 0
}



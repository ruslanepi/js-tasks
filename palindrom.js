



 // console.log(palindrome2('racecar'))
// console.log(palindrome('table'))
// console.log(palindrome('Анна'))
// console.log(palindrome('А роза упала на лапу азора'))
 console.log(palindrome2('А роза упала на лапу азора'))


function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g, '')
  console.log(str);
  return str === str.split(' ').reverse().join(' ')
}


function palindrome2(str) {
  str = str.toLowerCase().replace(/\s/g, '')

  console.log(str);

  let len = Math.floor(str.length / 2)
  for(let i = 0; i < len; i++ ) {
      console.log(str[i], str[str.length - i - 1] );
      if(str[i] !== str[str.length - i - 1] ) {
        return false
      }
    } 
    return true
  }

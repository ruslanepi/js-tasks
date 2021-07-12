console.log(anagram('friend', 'finder')); 
console.log(anagram('hello', 'helol'))


function anagram(str1, str2) {
    str1 = str1.toLowerCase().split('').sort().join('')
    str2 = str2.toLowerCase().split('').sort().join('')
    console.log(str1, str2);
    return str1 === str2
}
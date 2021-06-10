// задача: распознать в строке правильную структура скобок {{}}
// 

const testString = "{{}} {}";

function checkString(testString) {
  let stack = [];
  let flag;


  for(let i = 0; i < testString.length; i++ ) {
    
    if(testString[i] === "{") {
      stack.push(testString[i]);
      
    } else if(testString[i] !== " ") {
      flag = stack.pop();
      if( !flag  ) {
        return false;
      } 
    }
  }

  // if(!stack.length) return false;
  return true
}

console.log(checkString(testString)); 
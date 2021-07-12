function fizbaz(arr) {
  let newArr = [];

  arr.forEach((elem) => {
    if (elem % 3 === 0 && elem % 5 === 0) {
      newArr.push("fizbaz")
    }
     else if (elem % 3 === 0) {
      newArr.push("fiz")
    }
     else if (elem % 5 === 0) {
      newArr.push("baz")
    }
    else {
      newArr.push(elem)
    }
  })
  console.log(newArr);
}

fizbaz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

// spread operator => first use
// const arr = ["apple", "mango", "banana"];
// const newArr = [...arr, "pinapple"];

// console.log(newArr);

// spread operator passing arguments => second use
// function addDiffData(a, b, c, d) {
//   return a + b + c + d;
// }

// let args = [1, 2, 3, 4];

// console.log(addDiffData(...args));

// const num = [1, 2, 3, 4];
// const num1 = [...num];
// num1.push(5);

// console.log(num);
// console.log(num1);

// const con1 = [1, 2, 3];
// const con2 = [4, 5, 6];
// const con = [...con1, ...con2];

// console.log(con);

//pure function
const pureFun = (a, b) => {
  return a + b;
};
console.log(pureFun(1, 2));

//impure function
const c = 3;
const impreFunction = (a, b) => {
  return a + b + c;
};
console.log(impreFunction(1, 2));

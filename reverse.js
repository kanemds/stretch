const input = process.argv.slice(2);


// eslint-disable-next-line func-style
const reverse = (data) =>  {
  for (const item of data) {
    console.log(item.split("").reverse().join(""));
  }
};
reverse(input);
 
// const rever = data => {
 
//   for (const item of data) {
//     let results = "";
//     for (let i = item.length - 1; i >= 0; i--) {
//       results += item[i];
//     }
//     console.log(results);
//   }
// };
// rever(input);
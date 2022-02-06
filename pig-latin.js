const input = process.argv.slice(2);
console.log(input);
const translate = data => {
  let results = "";
  for (const item of data) {
    results += item.substring(1) + item[0] + "ay ";
  }
  console.log(results);
};

translate(input);


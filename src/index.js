// file: src/index.js
import _ from "lodash";

export default function run() {
  console.log(_.last(["one", "two"]));

  const usr = _.capitalize("name");
  console.log(usr);

  console.log("Hello, world!");
  console.log("Goodbye!");

  const calnum = (a, b) => {
    const sum = a * b;
    return sum;
  };

  console.log(calnum(3, 5)); // Пример использования функции
}


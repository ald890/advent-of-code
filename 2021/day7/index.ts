import { runner } from "../../utils";

function factorial(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// P1
const part1 = (data: number[]) => {
  const dataSorted = [...data].sort((a, b) => a - b);
  const min = dataSorted.at(0);
  const max = dataSorted.at(-1);
  const range = max - min;
  const results = new Array<number>(range).fill(0);

  for (let i = 0; i < range; i++) {
    data.forEach((el) => {
      results[i] += Math.abs(el - i);
    });
  }
  return results.sort((a, b) => a - b).at(0);
};

runner((input) => {
  const data = input
    .at(0)
    .split(",")
    .map((e) => parseInt(e));

  return part1(data);
}, "./2021/day7/input.txt");

const part2 = (data: number[]) => {
  const dataSorted = [...data].sort((a, b) => a - b);
  const min = dataSorted.at(0);
  const max = dataSorted.at(-1);
  const range = max - min;
  const results = new Array<number>(range).fill(0);

  for (let i = 0; i <= range; i++) {
    data.forEach((el) => {
      results[i] += factorial(Math.abs(el - i));
    });
  }
  console.log(results.sort((a, b) => a - b));
  return results.sort((a, b) => a - b).at(0);
};

runner((input) => {
  const data = input
    .at(0)
    .split(",")
    .map((e) => parseInt(e));

  return part2(data);
}, "./2021/day7/input.txt");

let nimList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Mission1(nimList1) {
  const evenNumbers = nimList1.filter((number) => number % 2 === 0);
  return evenNumbers;
}
Mission1(nimList1);

let str = "kjfds fdskjvnd fdddfb db dffb  fb fbfbfbfb fbbf errr reer gggg pppp mm";

function Mission2(str) {
  let countOfWords = 0;
  let stringLe = str
    .split(" ")
    .filter((x) => x.length === 4)
    .join(" ");
  for (let i = 0; i < stringLe.length; i++) {
    if (stringLe[i] === " ") {
      countOfWords += 1;
    }
  }
  return countOfWords;
}
Mission2(str);

let towWhyList = [1, 21, 2, 3, [5, 5, 5], 555, 6, 9, [78], ["dfgvdsf"]];

function Mission3(towWhyList) {
  arrrrr = [].concat(...towWhyList);
  return arrrrr;
}
Mission3(towWhyList);

let nimList2 = [1,5,1];
function Mission4(nimList2) {
  let p = 1;
  let incress = Array.from({ length: nimList2.length - 1 }, (_, i) => i).every((i) => nimList2[i] <= nimList2[i + 1]);
  if (incress) {
    return p;
  }
  if (!incress) {
    p += 1;
    let unIncrees = Array.from({ length: nimList2.length - 1 },(_, i) => i).every((i) => nimList2[i] >= nimList2[i + 1]);
    if (unIncrees) {
        return p;
    }
    else {
    return p - 2;
    }
  } 
  
}
Mission4(nimList2);


module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
} // Without 5 and 6
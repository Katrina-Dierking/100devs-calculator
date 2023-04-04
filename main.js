function CalcButton (number, item, size) {
    this.number = number
    this.item = item
    this.size = size

    this.action = function() {
        return (`number: ${number} , item: ${item}, size: ${size}` )
    }
}


let space = new CalcButton ( "", "",  "wide")
let one = new CalcButton(1, "", "small");
let two = new CalcButton(2, "",  "small");
let three = new CalcButton(3, "", "small");
let four = new CalcButton(4, "", "small");
let five = new CalcButton(5, "", "small");
let six = new CalcButton(6, "", "small");
let seven = new CalcButton(7, "", "small");
let eight = new CalcButton(8, "", "small");
let nine = new CalcButton(9, "", "small");
let zero = new CalcButton(0, "", "small");
let divide = new CalcButton("", "/", "small");
let mult = new CalcButton("", "X", "small");
let add = new CalcButton("", "+", "small");
let sub = new CalcButton("", "-", "small");
let equal = new CalcButton("", "=", "small");
let dec = new CalcButton("", ".", "small");

console.log(one.action())
console.log(two.action());
console.log(three.action());
console.log(four.action());
console.log(five.action());
console.log(six.action());
console.log(seven.action());
console.log(eight.action());
console.log(nine.action());
console.log(zero.action());
console.log(divide.action());
console.log(mult.action());
console.log(add.action());
console.log(sub.action());
console.log(equal.action());
console.log(dec.action());
console.log(space.action());
//Sum of numbers 1-100
// var Sum = 0;
// for (var i = 0; i <= 100; i++) {
// 	Sum += i;
// }
// console.log("Sum =",Sum);

//factorial
// var number = +(prompt("Enter a number"));
// var factorial = 1;
// for (var i = 1; i <= number-1; i++) {
// 	factorial *= (i+1);
// }
// console.log("factorial for",number,"=" ,factorial);

//Hayes sequence
var num = +(prompt("Enter a number"));
var count = 0;
// var old = 0;
var sequence = "";
var vertex = num;
while (num != 1) {
	count++;

	if (num % 2 == 0) {
		// old = num;
		num /= 2;
		// console.log (count + ") " + old + " / 2 = " + num);
	} else {
		// old = num;
		num = num*3 + 1;
		// console.log (count + ") " + old + " * 3 + 1 = " + num);
	}

	sequence += num.toString() + " ";

	if (num > vertex) 
		vertex = num;
}

console.log("Sequence ", sequence);
console.log("Steps:", count);
console.log("Vertex:", vertex);
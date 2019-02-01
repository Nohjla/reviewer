function getFactorial(n)
{
	if(n > 0)
		return n * getFactorial(n-1);
	return 1;
}

let number_input = document.querySelector("#number-input");
let output = document.querySelector("#factorial");

function outputFactorial()
{
	let n = parseInt(number_input.value);
	output.innerHTML = getFactorial(n);
}

number_input.addEventListener("input", outputFactorial);











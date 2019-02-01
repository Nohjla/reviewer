let number_input = document.querySelector("#number-input");
let output = document.querySelector("#fibonacci");

function fibonacci(n, j = 1, k = 1)
{
	if(n > 0) 
	{
		output.innerHTML += j + " ";
		fibonacci(n-1, k, k+j);
	}
}

number_input.addEventListener("input", function(){
	output.innerHTML = "";
	fibonacci(parseInt(number_input.value));
})
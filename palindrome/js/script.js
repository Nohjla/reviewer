let string_input = document.querySelector("#palindrome-input");
let output = document.querySelector("#palindrome");

function checkPalindrome(str)
{
	if(str.length < 2) return true;

	return str[0] == str[str.length-1]? checkPalindrome(str.substr(1,str.length-2)) : false;
}

string_input.addEventListener("input", function(){
		let n = string_input.value;
		if(n === "")
			return;
		let par = n;
		par +=  checkPalindrome(n)?" is a":" is not a";
		par += " palindrome";
		output.innerHTML = par;
	});

function fibonacci(n, j = 1, k = 1)
{
	if(n > 0) 
	{
		console.log(j);
		fibonacci(n-1, k, k+j);
	}
}
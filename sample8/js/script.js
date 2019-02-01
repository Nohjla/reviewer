let btn1 = document.querySelector("#one");
let btn2 = document.querySelector("#two");
let btn3 = document.querySelector("#three");

btn1.addEventListener("click", function(e){
	alert("1");
	console.log(e);
	console.log(e.target.innerHTML);
});
btn2.addEventListener("click", function(e){
	alert("2");
	console.log(e);
});
btn3.addEventListener("click", function(e){
	alert("3");
	console.log(e);
});

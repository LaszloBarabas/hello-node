// Hello Worl app
//
// Demo how to use the classic call stack 
//
//
// Start the app 
console.log("Start the day with a  great Hellow World!"); 

// create 2 special functions 
//
function func_A() {
	console.log("func_A() is called");
        	
}

function func_B(){
	console.log("func_B() is calling"); 
	func_A(); 
}

// call func_B() to demonstrate the call stack 
func_B(); 


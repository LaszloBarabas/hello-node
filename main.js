// Hello Worl app
//
// Demo how to use the classic call stack 
//
//
console.log("Hellow World!"); 

// create 2 special functions 
//
function func_A() {
	console.log("func_A() is called");
        	
}

function func_B(){
	console.log("func_B() is calling"); 
	func_A(); 
}


func_B(); 


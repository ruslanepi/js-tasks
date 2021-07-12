var a = 2;

foo();					// работает, так как определение `foo()`
						// "всплыло"

function foo() {
	a = 3;

	console.log( a );	// 3

	var a;				// определение "всплыло"
						// наверх `foo()`
}

console.log( a );
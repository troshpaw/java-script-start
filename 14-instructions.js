
// ИНСТРУКЦИИ
// Отличие инструкции от выражения: выражение всегда возвращает значение, инструкция выполняет действие.
// Инструкция завершается знаком ";" (за искл. if ... или for ... , т.к. блок инструкций заключен в {}).
// ";" в инструкциях можно опускать (не писать).

// Примеры инструкций:
let a; 

const b = 5;

if (a > b) {
    console.log('a is larger');
}

for (let i = 0; i++; i < 5) {
    console.log(i);
}

// Выражение может быть инструкцией
// Примеры выражений-инструкций (при добавлении ";" выражение становится инструкцией):
'abc';

a = a + 3;

c = a + b;

d = 'Good ' + 'Evening!';

console.log(1, 2);

// Инструкция не может быть траснформирована в выражение.

/* Как отличить выражение от инструкции:
Выражения могут быть использованы как аргументы в вызовах функции. */ 
// Примеры:
function myFn(a) {
    console.log(a);
}

const k = true;
let m = 10;

myFn(2 + 3) // 5, т.е. "2 + 3" - выражение
myFn(k) // true => выражение
myFn(m = m + 1) // 11 => выражение
// myFn(n = n + 1;) // SyntaxError, => "n = n + 1;" - инструкция
// myFn(let h) // SyntaxError => инструкция
// myFn(let x = 10) // SyntaxError => инструкция
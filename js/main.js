console.log('Sample JavaScript HW#1');
/*
 * #1
 *
 * Создайте переменные со значениями
 */

var myNum = 10, // имя переменной: myNum, значение: 10
    myStr = 'строка', // имя переменной: myStr, значение: 'строка'
    myBool = true, // имя переменной: myBool, значение: true
    myArr = [1, 2, 3, 4, 5], // имя переменной: myArr, значения: 1, 2, 3, 4, 5
    myObj = { // имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
      first: 'First Name', // значение: first: 'First Name'
      last: 'Last Name' // значение: last: 'Last Name'
    };

console.log('myNum:', myNum);
console.log('myNum:', myStr);
console.log('myNum:', myBool);
console.log('myNum:', myArr);
console.log('myNum:', myObj);

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

var decimal2 = myNum.toFixed(2); // decimal2

console.log(decimal2); 

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

var i = 12; // i

console.log('Начальное значение i =', i);
console.log('Префиксный инкремент (++i):', ++i);
console.log('Постфиксный инкремент (i++):', i++);
console.log('Новое значение i =', i);
console.log('Префиксный декремент (--i):', --i);
console.log('Постфиксный декремент (i--):', i--);
console.log('Очередное значение i =', i);

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

var myTest = 20; // myTest
console.log('myTest:', myTest);

myTest += myNum; // +=
console.log('myTest (+=):', myTest);

myTest -= myNum; // –=
console.log('myTest (-=):', myTest);

myTest *= myNum; // *=
console.log('myTest (*=):', myTest);

myTest /= myNum; // /=
console.log('myTest (/=):', myTest);

myTest %= 8; // %=
console.log('myTest (%=):', myTest);

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

var myPi = Math.PI; // константа Pi → myPi
var myRound = Math.round(89.279); // округленное значение числа 89.279 → myRound
var myRandom = Math.random()*10; // случайное число между 0..10 → myRandom
var myPow = Math.pow(3,5); // 3 в 5 степени → myPow

console.log('myPi (Math.PI):', myPi);
console.log('myRound (Math.round(89.279)):', myRound);
console.log('myRandom (Math.random()*10):', myRandom);
console.log('myPow (Math.pow(3,5)):', myPow);

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

var strObj = {str: 'мама мыла раму, рама мыла маму'}; // мама мыла раму, рама мыла маму
strObj.length = strObj.str.length;

console.log('strObj:', strObj); // strObj

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

var isRamaPos = strObj.str.indexOf('рама'); // isRamaPos

console.log('isRamaPos:', isRamaPos);


/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str.replace('мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму'); // strReplace

console.log('isReplace:', strReplace);

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */

console.log('Верхний регистр:', isReplace.toUpperCase());
console.log('Нижний регистр:', isReplace.toLowerCase());
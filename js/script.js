// const numderOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

// const movieFirst = prompt('Один из последних просмотренных фильмов?', '');
// const movieFirstScore = +prompt('На сколько оцените его?', '');
// const movieSecond = prompt('Один из последних просмотренных фильмов?', '');
// const movieSecondScore = +prompt('На сколько оцените его?', '');

// const personalMovieDB = {
//  count: numderOfFilms,
//  movies: {},
//  actors: {},
//  genres:[],
//  privat: false
// };

// personalMovieDB.movies[movieFirst] = movieFirstScore;
// personalMovieDB.movies[movieSecond] = movieSecondScore;

// console.log(personalMovieDB);

// Problem with a pyramid of stars

// let result = ""
// const length = 7;

// for (let i = 1; i < length; i++){

//     for(let j = 0; j<i; j++){
//         result += '*';
//     }

//     result += '\n';

// }

// console.log(result);

// first: for(let i = 0; i < 3; i++){
//     console.log(`First lvl: ${i}`);

//     for (let j=0; j < 3; j++) {
//         console.log(`Second lvl: ${j}`);

//         for (let k=0; k < 5; k++){

//         if (k === 2) break first;

//         console.log(`Third lvl: ${k}`);

//         }

//     }
// }


// Задачи:

// // При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой:

// let number = 4;
// for (let i = 0; i< 6; i++) {

//     number += 1;
//     console.log(number);
// }

// function firstTask() {

//     let i = 5;
//     while (i <= 10){
//         console.log(i);
//         i++;
//     }

// }

// // При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// let numberSecond = 21;

// first: for (let i = 0; i< 11; i++) {

//     if (numberSecond === 13) break first;
//     numberSecond -= 1;
//     console.log(numberSecond);
// }

// function secondTask() {

//     for (let i = 20; i > 10; i--) {

//    if (i === 13) {
//     break;
//    }
//    console.log(i);
// }

// }

// // При помощи цикла for выведите чётные числа от 2 до 10 включительно

// let numberThird = 0;

// for (let i = 0; i< 5; i++) {

//     numberThird += 2;
//     console.log(numberThird);
// }


// function thirdTask() {

//    for (let i = 2; i <= 10; i++) {

//     if (i % 2 === 0) {
//       console.log(i);  
//     }

// }}
// // Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

// //  Цикл, который нужно переписать:

// //  for (let i = 2; i <= 16; i++) {
// //      if (i % 2 === 0) {
// //          continue;
// //      } else {
// //          console.log(i);
// //      }
// //  }

// let i = 2;

// while (i < 16) {
//     i++;

//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }

// }

// // Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// const arr = [];
// let result = 5;

// for (let i = 0; i < 6; i++) {

//     arr[i] = result;
//     result ++;
// }

// console.log(arr);

// function fifthTask() {
//     const arrayOfNumbers = [];

//      for (let i = 5; i < 11; i++) {
//      arrayOfNumbers[i - 5] = i;
//  }

//  console.log(arrayOfNumbers);

//     // Не трогаем
//     return arrayOfNumbers;
// };


// Задачи:

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);

// // Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// // Для определения типа данных используйте typeof();
// // Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const dataChange = [];

// for (let i = 0; i < data.length; i++) {

//     if (typeof(data[i]) === "string" ) {
//         dataChange[i] = data[i]+`${' - done'}`;
//     } else {
//         dataChange[i] = data[i]*2;
//     }

// }

// console.log(dataChange);

// // Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// // Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// const dataTwo = [5, 10, 'Shopping', 20, 'Homework'];
// const dataChangeSecond = [];

// for (let i = 0; i < dataTwo.length; i++) {

//         dataChangeSecond[(dataTwo.length - 1) - i] = dataTwo[i];

// }

// console.log(dataChangeSecond);


// Через определенное количество уроков вы убедитесь, что эти задачи можно решить чуть проще, без использования циклов. 
//Но пока мы должны понять, как это все работает внутри, на базовом уровне. Прежде, чем использовать готовые команды.


// Задачи:

// // 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// // Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// function sayHello(name) {
//     return `Привет, ${name}!`
// }


// function sayHello(name) {
//     return 'Привет, ' + String (name) + '!';
// }

// console.log(sayHello('Антон'))

// // 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// // Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].


// function returnNeighboringNumbers(n) {
//     const arr = []

//     arr[0] = n-1;
//     arr[1] = n;
//     arr[2] = n+1
//     return arr;
// }

// function returnNeighboringNumbers(number) {
//     return  [number - 1, number, number + 1];
//     }

// console.log(returnNeighboringNumbers(5))

// // 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - 
// // это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), 
// // где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// // Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)


// function getMathResult(x, y) {

//     let result = '';
//     let n = x;

// if (y === 0 || y < 0 || typeof(y) != 'number'){
//     return x;
// }

// for (let i = 0; i < y; i++) {
//    if( i=== y-1){
//     result = result + `${n}`
//    } else {
//     result = result + `${n}` + '---'
//    }
//     n = n + x;
// }

// return result;
//     }

//     console.log( getMathResult(5, 3))
//     console.log( getMathResult(3, 10))
//     console.log( getMathResult(10, 5))

//     console.log( getMathResult(10, '5'))
//     console.log( getMathResult(10, 0))
//     console.log( getMathResult(20, -5))

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, 
// проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. 
// Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. 
// Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

//Tasks fir-tree

// const lines = 5;
// let result = '';


// for (let i = 1; i < 7; i++){

//     for (let k = 6; k > i; k--) {
//         result += ' ';
//     }

//     for(let j = 0; j < 2 * i - 1; j++){
//         result += '*';
//     }

//     result += '\n';

// }

// console.log(result);


// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// Задачи:

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
//(тоже базовая математика, иногда используется в создании анимаций). 
//Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. 
//Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// function calculateVolumeAndArea(n) {

//     let cubeArea = 0;
//     let cubeVolume = 0;

//     if (typeof n !== "string" && Number.isInteger(n) !== false && Math.sign(n) > 0) {
//         cubeVolume = Math.pow(n, 3);
//         cubeArea = 6 * Math.pow(n, 2); 
//         console.log(`Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeArea}`)
//     } else {
//         console.log('При вычислении произошла ошибка')
//     }

// }

// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// // function calculateVolumeAndArea(result) {
// //     if (typeof result === Number) {
// //         return ('Объем куба: ' + String(result*result*result) + ', площадь всей поверхности: ' + String(6*result*result)); 
// //     } else {
// //         return ('При вычислении произошла ошибка');
// //     }

// // }

// calculateVolumeAndArea(5)
// calculateVolumeAndArea(15)
// calculateVolumeAndArea(15.5)
// calculateVolumeAndArea('15')
// calculateVolumeAndArea(-15)

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 
// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"


// function getCoupeNumber(n) {

//     let result = 0;

//     if (n > 36 || n === 0) {
//         console.log("Таких мест в вагоне не существует")
//     } else if (typeof n === "string" || Number.isInteger(n) === false || Math.sign(n) < 0) {
//         console.log("Ошибка. Проверьте правильность введенного номера места")
//     } else if (n % 4 === 0) {
//         result = n / 4;
//         console.log(result)
//     } else if (n % 4 !== 0) {
//         result = Math.trunc(n / 4 + 1)
//         console.log(result)
//     } 

    // else if (n % 4 === 2) {
    //     result = (n + 2) / 4;
    //     console.log(result)
    // }
    // else if (n % 4 === 3) {
    //     result = (n + 1) / 4;
    //     console.log(result)
    // }
// }
// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);

// }
// getCoupeNumber(33)
// getCoupeNumber(7)
// getCoupeNumber(300)
// getCoupeNumber(0)
// getCoupeNumber(7.7)
// getCoupeNumber(-10)
// getCoupeNumber('Hello')


// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
// (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
// Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
// Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes() {
    
}
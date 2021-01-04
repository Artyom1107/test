'use strict';
let a = 5; 
console.log(a);
/*
Переменные
*/
var grid = 1;
let second = 2; 
const pi = 3.14;
var number = 5;
var string = "hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {}; 
let persone = {
    name: "John",
    age: 25,
    isMarried: false
};
 /* как создавать массив*/
 let arr = ['ggg.png','ghh.bmp'];
 console.log(arr[2]);
 // alert("Hello world");
 // confirm("Nnne");
 // let answer = confirm("Nnne");;
 // console.log(answer);
 //  let answer = prompt("сасешь", "да");;
 // console.log(typeof(arr));

 /* ОПЕРАТОРЫ*/
 // let answer = +prompt("сасешь", "да");;
 // console.log(typeof(answer));
 let incr = 10,
     decr = 10;
     // incr++;
     // decr--;
     /*префиксное значение инкремента и дикремента возвращает смененное значение*/
     /*console.log(++incr);
     console.log(--decr);*/
     /*постфиксное значение исходное (10)*/
        console.log(incr++);
     console.log(decr--);
     // остаток от деления
      console.log(5%2);
      // один раз знак "=" - присваивание, два раза - сравнение по значениям, 3 раза - строгая проврека по типам данных

      var isChecked = true,
          isClose = false;
          // && - and (и)
          console.log(isChecked && isClose);
          //  оператор или - ||, ! - ставит в противоположное (правда в ложь и наоборот)
          console.log(isChecked || !isClose);
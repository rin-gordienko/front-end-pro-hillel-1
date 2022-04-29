// 1.Создайте три переменные. Присвойте первой переменной числовое значение. 
// Вторая переменная равна первой переменной, увеличенной в три раза. 
// Третья переменная равна сумме двух первых. Выведите на экран все три.

let firstNumber, secondNumber, thirdNumber;
    firstNumber = 10;
    secondNumber = firstNumber*3;
    thirdNumber = firstNumber+secondNumber;
alert("first="+firstNumber+"\nsecond="+secondNumber+"\nthird="+thirdNumber);

// 2.Создайте переменные firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt. 
// Выведите на экран приветствие “What’s up John Doe”.

let firstName, lastName;
    firstName = prompt('Enter your FirstName');
    lastName = prompt('Enter your LastName');
alert("What's up "+firstName+" "+lastName);

// 3.Создайте переменные x и y для хранения числа. 
// Значения переменные получают из prompt. 
// Рассчитайте произведение, частное, разность и сумму этих значений. 
// Результат последовательно отобразите в модальном окне.

let x, y;
    x = parseInt(prompt('enter your number'));
    y = parseInt(prompt('enter your number'));
alert("x*y="+(x*y)+"\nx/y="+(x/y)+"\nx-y="+(x-y)+"\nx+y="+(x+y));

// 4. Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов, 
//     количество рабочих дней в неделе и рейт за час – переменные значения и читаются из prompt.
//     (Просчитывать какой это месяц, 30 или 31 день не нужно).

let workingHours, weekDays, hourRate;
    workingHours = parseInt(prompt('enter your hours'));
    weekDays = parseInt(prompt('enter your days'));
    hourRate = parseInt(prompt('enter your rate'));
alert("Salary"+"\n"+workingHours*weekDays*4*hourRate);

// 5.Напишите программу, которая без использования оператора сравнения определяет, является ли число, введенное пользователем, нечётным.

let x;
    x=parseInt(prompt(x));
    if (x%2) {
        answer = "нечётное";
    } else {
        answer = "чётное";
    }
alert(answer);

// 6.Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом.

let x;
    x=prompt('enter x');
    if (isNaN(x)) {
        answer = "string";
    } else {
        answer = "integer";
    }
alert(answer);

// 7.Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. 
// Получите второе число из окна prompt. 
// Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.

let x = Math.random(), y, answer;
    x = Math.round(x*100);
    y = parseInt(prompt("Enter second number"));
    if(x<y){
        answer = "первое число меньше второго";
    }
    else{
        answer = "первое число больше второго";
    }
alert(answer + "\n первое число "+ x + "\n второе число " +y);


// 8.Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». 
// Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. 
// С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. 
// Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в переменной. 
// Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать. 
// Отобразите результат в модальном окне.

let str, str2, answer, strleft, result;
    str = prompt('Enter: Мне нравится изучать Front-end','Мне нравится изучать Front-end' );
    str2 = prompt('Что вам нравится изучать?');

    if (str.includes(str2)){
        answer = 'То что вам нравится содержится в исходной строке';
    }else{
        answer = 'То что вам нравится не содержится в исходной строке';
    }
    strleft = str.substring(0,21);
    result = strleft + str2;
alert(answer+"\n"+result);

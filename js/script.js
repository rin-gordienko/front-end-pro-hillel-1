1.

let firstNumber, secondNumber, thirdNumber;
    firstNumber = 10;
    secondNumber = firstNumber*3;
    thirdNumber = firstNumber+secondNumber;
alert("first="+firstNumber+"\nsecond="+secondNumber+"\nthird="+thirdNumber);



2.

let firstName, lastName;
    firstName = prompt('Enter your FirstName');
    lastName = prompt('Enter your LastName');
alert("What's up "+firstName+" "+lastName);


3.

let x, y;
    x = parseInt(prompt('enter your number'));
    y = parseInt(prompt('enter your number'));
// alert(x*y);
// alert(x/y);
// alert(x-y);
// alert(x+y);
alert("x*y="+(x*y)+"\nx/y="+(x/y)+"\nx-y="+(x-y)+"\nx+y="+(x+y));


4.

let workingHours, weekDays, hourRate;
    workingHours = parseInt(prompt('enter your hours'));
    weekDays = parseInt(prompt('enter your days'));
    hourRate = parseInt(prompt('enter your rate'));
alert("Salary"+"\n"+workingHours*weekDays*4*hourRate);


5.

let x;
    x=parseInt(prompt(x));
    if (x%2) {
        answer = "нечётное";
    } else {
        answer = "чётное";
    }
alert(answer);


6.

let x;
    x=prompt('enter x');
    if (isNaN(x)) {
        answer = "string";
    } else {
        answer = "integer";
    }
alert(answer);

7.

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


8.

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
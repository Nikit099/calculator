// const btn = document.createElement('buttone');
// var html = document.querySelector('body');
// btn.textContent = 'Привет';
// btn.setAttribute('class', 'btn');
// btn.onclick = function() {
//     alert('Привет лошара')
// }
// html.appendChild(btn);


// Реализовать калькулятор. Выводим 10 кнопок цифр от 0 до 10. Кнопки: умножить, поделить, сложить, 
// вычесть, вычислить. При нажатии на кнопки в любом порядке
//  выводиться в отдельном блоке строка
//  (5-4+3*2...) и при нажатии на кнопку посчитать, 
//  заменяем в блоке данную строку на результат
//  её вычисления, при этом можно потом дальше 
//  вычислять с уже этим вычеслением.
var body = document.querySelector('body');
for (let i = 0; i < 10; i++) {
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btnt');
    btn.textContent = i;
    body.appendChild(btn);
}

const array = ['*', '/', '+', '-', '=', '<']
for (let ii = 0; ii < 6; ii++) {
    const btn = document.createElement('button');
    btn.setAttribute('class', 'count');
    btn.textContent = array[ii];
    body.appendChild(btn);
}
var para = document.createElement('p');
body.appendChild(para);
para.textContent = ' ';
para.setAttribute('class', 'text');
let Btn = document.querySelectorAll('.count');
Btn[0].onclick = function() {

    para.textContent = para.textContent + '*';
}
Btn[1].onclick = function() {

    para.textContent = para.textContent + '/';
}
Btn[2].onclick = function() {

    para.textContent = para.textContent + '+';
}
Btn[3].onclick = function() {

    para.textContent = para.textContent + '-';
}
Btn[5].onclick = function() {

    para.textContent = para.textContent.slice(0, -1);
}


let Btnt = document.querySelectorAll('.btnt');

Btnt[0].onclick = function() {

    para.textContent = para.textContent + 0;

}
Btnt[1].onclick = function() {

    para.textContent = para.textContent + 1;
}
Btnt[2].onclick = function() {

    para.textContent = para.textContent + 2;
}
Btnt[3].onclick = function() {

    para.textContent = para.textContent + 3;
}
Btnt[4].onclick = function() {

    para.textContent = para.textContent + 4;
}
Btnt[5].onclick = function() {

    para.textContent = para.textContent + 5;
}
Btnt[6].onclick = function() {

    para.textContent = para.textContent + 6;
}
Btnt[7].onclick = function() {

    para.textContent = para.textContent + 7;
}
Btnt[8].onclick = function() {

    para.textContent = para.textContent + 8;
}
Btnt[9].onclick = function() {

    para.textContent = para.textContent + 9;
}
Btn[4].onclick = function() {
    para.textContent = eval(para.textContent);

}
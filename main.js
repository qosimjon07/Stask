const input = document.querySelector('#input-text');
const submit = document.querySelector('#btn-submit');
const qiymatlar = document.querySelector('.qiymatlar');
const tasks = document.querySelector('.tasks');
const clearAll = document.querySelector('.clearAll');


const bodyClearComplate = document.querySelector('.complate')
const bodyValueBox = document.querySelectorAll('.value-box')
const bodyInputValue = document.querySelectorAll('.input-value');
const bodyValueClose = document.querySelectorAll('.value-close');

let sanoq = 1;
for (let i = 0; i < bodyInputValue.length; i++) {

    bodyInputValue[i].addEventListener('click', () => {
        bodyInputValue[i].classList.toggle('decoration');
        if (bodyInputValue[i].classList.contains('decoration')) {
            sanoq--;
        } else {
            sanoq++;
        }
        if (sanoq > 0) {
            tasks.innerText = `(${sanoq})`;
        } else {
            tasks.innerText = ''
        }
    })
}

for (let i = 0; i < bodyValueClose.length; i++) {

    bodyValueClose[i].addEventListener('click', () => {
        bodyValueBox[i].remove()
        if (!bodyInputValue[i].classList.contains('decoration')) {
            sanoq--;
        }
        if (sanoq > 0) {
            tasks.innerText = `(${sanoq})`;
        } else {
            tasks.innerText = ''
        }
    })
}

submit.addEventListener('click', onClick);
clearAll.addEventListener('click', clear);
bodyClearComplate.addEventListener('click', complate);

function complate() {

    for (let i = 0; i < bodyInputValue.length; i++) {
        if (bodyInputValue[i].classList.contains('decoration')) {
            bodyValueBox[i].remove()
        }
    }
}

function clear() {
    qiymatlar.innerHTML = '';
    sanoq = 0;
    tasks.innerText = ''
}


function onClick(e) {
    e.preventDefault();

    const valueBox = document.createElement('div');
    const inputValue = document.createElement('p');
    const valueClose = document.createElement('p');
    const clearComplate = document.querySelector('.complate')

    valueBox.classList.add('value-box');
    inputValue.classList.add('input-value');
    valueClose.classList.add('value-close')


    if (input.value != '') {
        inputValue.innerText = input.value;

        valueBox.append(inputValue, valueClose);
        qiymatlar.append(valueBox)

        input.value = '';
        sanoq++;

        if (sanoq > 0) {
            tasks.innerText = `(${sanoq})`;
        } else {
            tasks.innerText = ''
        }
    }


    clearComplate.addEventListener('click', () => {
        if (inputValue.classList.contains('decoration')) {
            valueBox.remove();
        }
    })


    valueClose.addEventListener('click', () => {
        valueBox.remove();
        if (!inputValue.classList.contains('decoration')) {
            sanoq--;
        }

        if (sanoq > 0) {
            tasks.innerText = `(${sanoq})`;
        } else {
            tasks.innerText = ''
        }
    })


    inputValue.addEventListener('click', () => {
        inputValue.classList.toggle('decoration');
        if (inputValue.classList.contains('decoration')) {
            sanoq--;
        } else {
            sanoq++;
        }

        if (sanoq > 0) {
            tasks.innerText = `(${sanoq})`;
        } else {
            tasks.innerText = ''
        }
    })

}

if (sanoq > 0) {
    tasks.innerText = `(${sanoq})`;
}
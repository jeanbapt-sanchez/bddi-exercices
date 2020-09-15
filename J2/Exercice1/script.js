const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')

const ul = document.querySelector('ul')

button1.addEventListener('click', event => {
    let valueOfInput = document.getElementById('input1').value
    let newElement = document.createElement('li')
    newElement.append(valueOfInput)
    ul.append(newElement)
});

button2.addEventListener('click', event => {
    let valueOfInput = document.getElementById('input1').value
    let newElement = document.createElement('li')
    newElement.append(valueOfInput)
    ul.prepend(newElement)
});

button3.addEventListener('click', event => {
    ul.removeChild(ul.lastChild)
});

button4.addEventListener('click', event => {
    ul.removeChild(ul.firstChild)
});
const textInput = document.getElementById('textArea');

const btn1 = document.getElementById('btn-1');
btn1.addEventListener("click", ()=> {
    textInput.classList.toggle('bold');
    btn1.classList.toggle('border')
    
})


const btn2 = document.getElementById('btn-2');
btn2.addEventListener('click', ()=> {
    textInput.classList.toggle('italic');
    btn2.classList.toggle('border')
})

const btn3 = document.getElementById('btn-3'); 
btn3.addEventListener('click', () => {
    textInput.classList.toggle('underline');
    btn3.classList.toggle('border')
})

const btn4 = document.getElementById('btn-4');
btn4.addEventListener('click', ()=>{
    textInput.classList.toggle('blueColor');
    btn4.classList.toggle('border')

})

function increaseFontSize() {
    let style = window.getComputedStyle(textInput).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    textInput.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFontSize () {
    let style = window.getComputedStyle(textInput).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    textInput.style.fontSize = (currentSize - 2) + 'px';
}

const btn5 = document.getElementById('btn-5');
btn5.addEventListener('click', increaseFontSize)

const btn6 = document.getElementById('btn-6');
btn6.addEventListener('click', decreaseFontSize);


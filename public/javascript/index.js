const textarea = document.querySelector('textarea')
const lineNumbers = document.querySelector('.line-numbers')
const colors = ["green", "red", "blue", "pink"];
textarea.addEventListener('keyup', event => {
    const numberOfLines = event.target.value.split('\n').length

    lineNumbers.innerHTML = Array(numberOfLines)
        .fill('<span></span>')
        .join('')
})
textarea.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
        const start = textarea.selectionStart
        const end = textarea.selectionEnd

        textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end)

        event.preventDefault()
    }
})





const input1 = document.getElementById('myInput1');
input1.addEventListener('focus', function () {
    this.style.backgroundColor = '#404040';
});
input1.addEventListener('blur', function () {
    this.style.backgroundColor = '#1b1c1b';
});

const input2 = document.getElementById("myInput2");
input2.addEventListener('focus', function () {
    this.style.backgroundColor = '#404040';
});
input2.addEventListener('blur', function () {
    this.style.backgroundColor = '#1b1c1b';
});

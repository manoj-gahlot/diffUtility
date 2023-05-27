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

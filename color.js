const palatte = ['#31c0fb', '#ffa019', '#aae200', '#ff197a'];
const colors = document.querySelectorAll('.color');
const right = document.querySelector('.right');
const left = document.querySelector('.left');

for (let i = 0; i < colors.length; i++) {
    colors[i].style.background = palatte[i];

    colors[i].addEventListener('click' , function(){
        right.style.background = palatte[i];
    })
};

const button = document.querySelector('.button');

button.addEventListener('click' , function(){
    if (button.innerHTML == 'Hide') {
        button.innerHTML = 'Show'
        left.style.transform = 'translateX(-500px) rotate(720deg) scale(0)';
        right.style.transform = 'translateX(500px) rotate(720deg) scale(0)';
    } else {
        button.innerHTML = 'Hide'
        left.style.transform = 'translateX(0) rotate(-720deg) scale(1)';
        right.style.transform = 'translateX(0) rotate(-720deg) scale(1)';
    }
})
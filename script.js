// script.js
document.getElementById('reveal-button').addEventListener('click', function() {
    document.getElementById('popup1').classList.add('visible');
});

document.getElementById('reveal-girlfriend').addEventListener('click', function() {
    document.getElementById('popup1').classList.remove('visible');
    document.getElementById('popup2').classList.add('visible');
    document.getElementById('song').play();
});

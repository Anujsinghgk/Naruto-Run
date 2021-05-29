score = 0;
cross = true;

audio = new Audio('naruto_theme_song.mp3');
audio.loop=true;
audiogo = new Audio('naruto_jutsu.mp3');
setTimeout(() => {
    audio.play()
}, 1500);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        kakashi = document.querySelector('.kakashi');
        kakashi.classList.add('animatekakashi');
        setTimeout(() => {
            kakashi.classList.remove('animatekakashi')
        }, 700);
    }
    if (e.keyCode == 39) {
        kakashi = document.querySelector('.kakashi');
        kakashiX = parseInt(window.getComputedStyle(kakashi, null).getPropertyValue('left'));
        kakashi.style.left = kakashiX + 112 + "px";
    }
    if (e.keyCode == 37) {
        kakashi = document.querySelector('.kakashi');
        kakashiX = parseInt(window.getComputedStyle(kakashi, null).getPropertyValue('left'));
        kakashi.style.left = (kakashiX - 112) + "px";
    }
}

setInterval(() => {
    kakashi = document.querySelector('.kakashi');
    gameOver = document.querySelector('.gameOver');
    uchiha = document.querySelector('.uchiha');

    dx = parseInt(window.getComputedStyle(kakashi, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(kakashi, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(uchiha, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(uchiha, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        uchiha.classList.remove('uchihaAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(uchiha, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            uchiha.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
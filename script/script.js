function MoveCircle() {
    console.log("TXT");
    const circle = document.querySelector('.circle');
    const play = document.querySelector('.icon-play');
    const pause = document.querySelector('.icon-pause');
    if (circle.style.animationPlayState === 'running') {
        circle.style.animationPlayState = 'paused';
        pause.style.display = "none"
        play.style.display = "block"
    } else {
        circle.style.animationPlayState = 'running';
        play.style.display = "none"
        pause.style.display = "block"

    }
}

function AdditionalText(){
    const answer = document.querySelector(".faq-answer");
    answer.classList.toggle("visible");
}
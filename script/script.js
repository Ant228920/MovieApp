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
    const img = document.querySelector(".faq-toggle");

    if (answer.classList.contains("visible")) {
        img.src = "../images/minus.svg";
    } else {
        img.src = "../images/plus.svg";
    }
    answer.classList.toggle("visible");
}

let bool = false;
function ShowMore(event){
    const expandedInfo = document.querySelector(".episodes-list");
    const btn = event.currentTarget;

    btn.style.animation = "none";

    if(!bool){
        expandedInfo.style.display = "flex";
        bool = true;
        setTimeout(() => {
            btn.style.animation = "arrow-animation 1s ease-in-out forwards";
        }, 10);
    }
    else{
        expandedInfo.style.display = "none";
        bool = false;
        setTimeout(() => {
            btn.style.animation = "arrow-animation 1s ease-in-out reverse";
        }, 10);
    }
}

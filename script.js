const cardEl=document.querySelector('.card');
function showCard(){
    cardEl.classList.toggle('visible');
}
cardEl.addEventListener('click',showCard);
class MixOrMatch{
    constructor(totalTime, cards){
        this.cardsArray=cards;
        this.totalTime=totalTime;
        this.timeRemaining=totalTime;
        this.timer=document.querySelector('#time-remaining');
        this.ticker=document.querySelector('#flips');
    }
    startGame(){
        
    }
}
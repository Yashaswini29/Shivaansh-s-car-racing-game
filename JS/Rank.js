class Rank{
    constructor(){

    }
    display(){
        var victory = createElement('h3');
        victory.position(displayWidth/2-100, displayHeight/2);
        victory.html("Player Rank: " + player.rank);
    }
}
class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

        this.rank = null;
    }
    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value", function(data){
            playerCount = data.val()
        })
    }
    updateCount(playerCount){
        database.ref('/').update({
            playerCount: playerCount
        })
    }
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            Name: this.name,
            Distance: this.distance,
            rank: this.rank
        });
    }
    static getPlayerInfo(){

        var playerInforef = database.ref('players');
        playerInforef.on("value", (data) => {
            allplayers = data.val();
            
        });


    }
    static updatecarsatend(rank){
        database.ref('/').update({
            carsatend: rank
        })
    }
    getcarsatend(){
        database.ref('carsatend').on('value', (data) => {
            this.rank = data.val();
        });
    }
    getplayerrank(){
        database.ref('players/player').on("value", (data) => {
            playerrank = data.val();
        });
    }
}
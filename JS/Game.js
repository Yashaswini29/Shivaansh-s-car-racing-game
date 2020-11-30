class Game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value", function(data){
            gameState = data.val()
        })
    }
    update(gameState){
        database.ref('/').update({
            gameState: gameState
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Img);
    
        car2 = createSprite(300,200);
        car2.addImage(car2Img);
    
        car3 = createSprite(500,200);
        car3.addImage(car3Img);
        
        car4 = createSprite(700,200);
        car4.addImage(car4Img);

        cars = [car1, car2, car3, car4];
    }
    play(){

        form.hide();
        textSize(30);
        text("Game Start", 120, 100);

        Player.getPlayerInfo();
        player.getcarsatend();
            

        if(allplayers !== undefined){
            var index = 0
            var x = 185;
            var y;

            background("grey");
            image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);

            for(var plr in allplayers){
                index = index + 1;
                x = x+235;
                y = displayHeight-100 - allplayers[plr].Distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){

                cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;

                    fill("red");
                    ellipse(x, y, 60, 60);
                }

            }
        }
        if(player.distance > 4150){
            gameState = 2
            //game.update(gameState);

            player.rank+=1
            Player.updatecarsatend(player.rank);
            if(player.rank===4){
                gameState=2;
              }
            player.getplayerrank();

            clear();
            rank = new Rank();
            rank.display();

        }
        if(keyDown(UP_ARROW) && player.index !== null){
            player.distance+=50;
            player.update();
        }
        if(player.distance < 4150){
            drawSprites();
        }
        
    }
    end(){
        console.log("Game Ended");
    }

}
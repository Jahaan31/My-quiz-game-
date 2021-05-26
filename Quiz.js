class Quiz {

    getState(){
        var quiz = database.ref("Gamestate").on("value", function (data){
            gamestate = data.val();
        })

    }

    updateGamestate(abcd){
        database.ref('/').update({
            Gamestate : abcd
        })
    }

    async start(){
        if(gameState === 0){
            contestant1 = new Contestant();
            question1 = new Question();
            question1.display();
        }

    }
}
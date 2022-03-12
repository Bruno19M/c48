class Game{
    constructor(){}
    getState(){
        var getStateRef = database.ref('gameState')
        getStateRef.on('value',function(data){
            gameState=data.val()
        })    
    }
    update(){
        database.ref('/').update({gameState:state})
    }
    start(){
        if(gameState==0){
            player1=new Player();
            player1.getCount();
            form1=new Form();
            form1.display();
        }
    }
}
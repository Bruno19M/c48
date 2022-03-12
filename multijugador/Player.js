class Player{
    constructor(){}
    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on('value',function(data){
            playerCount=data.val()
        })
    }
    updateCount(){
        databse.ref('/').update({playerCount:playerCount})
    }
    update(name){
        var playerIndex='jugador: '+playerCount
    database.ref(playerIndex).set({nombre:name})
    }
}
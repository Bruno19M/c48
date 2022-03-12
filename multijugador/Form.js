class Form{
    constructor(){
        
    }

display(){
    var title = createElement("h2")
    title.html("Gato multijugador")
    title.position(500,windowHeight/4)
    var input = createInput("escribe aqui tu nombre")
    var button = createButton("Listo")
    var welcome = createElement("h3")
    input.position(500,windowHeight/2)
    button.position(500,windowHeight/2+windowHeight/4)
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playerCount+=1;
        player1.update(name)
        player1.updateCount(playerCount)
        welcome.html("Hola: "+name)
        welcome.position(500,windowHeight/2)
    })
}
}
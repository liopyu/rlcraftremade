
NetworkEvents.dataReceived('packet', e =>{
    const {player,player:{persistentData}} = e
    Utils.server.schedule(100, e =>{
        player.sendData('packet2')
    })
    Utils.server.schedule(10, e =>{
        player.sendData('packet2')
    })
    Utils.server.schedule(5, e =>{
        player.sendData('packet2')
    })
    Utils.server.schedule(1, e =>{
        player.sendData('packet2')
    })
    console.log('recieved client packet')
})


// priority: 20

const $InputConstants = Java.loadClass("com.mojang.blaze3d.platform.InputConstants")
const $SophisticatedKeybinds = Java.loadClass('net.p3pp3rf1y.sophisticatedbackpacks.client.KeybindHandler')
ClientEvents.tick(e => {
    const {player,player:{persistentData}} = e
    if($SophisticatedKeybinds.BACKPACK_OPEN_KEYBIND.isUnbound()) return
    if($SophisticatedKeybinds.BACKPACK_OPEN_KEYBIND.isDown()) {
        player.sendData('packet')
        $SophisticatedKeybinds.BACKPACK_OPEN_KEYBIND.setKey($InputConstants.UNKNOWN)
        player.displayClientMessage(Component.of(`I think I should place this down to open it.`).bold().green(), true)
    }
})
NetworkEvents.dataReceived('packet2', e =>{
    const {player,player:{persistentData}} = e
    Client.setCurrentScreen(null)
    console.log('recieved server packet')
})






ForgeEvents.onEvent('net.minecraftforge.client.event.ClientChatReceivedEvent', e => global.cancelMessage(e))
/**
 * jsdoc for typings to work correctly
 * credit to donald :)
 * @param {Internal.ClientChatReceivedEvent} e
 * @returns {any}
 */
global.cancelMessage = e => {
    if (e.message.string.includes('Stage 0')) {
        e.setCanceled(true)
    }else if (e.message.string.includes('You chosen to have no grave')) {
        e.setCanceled(true)
    }else if (e.message.string.includes('Stage 1')) {
        e.setCanceled(true)
    }else if (e.message.string.includes('Stage 2')) {
        e.setCanceled(true)
    }else if (e.message.string.includes('Stage 3')) {
        e.setCanceled(true)
    }else if (e.message.string.includes('new physics version available')) {
        e.setCanceled(true)
    }

}

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent", event => {
    global.jump(event)
})
global.jump = event => {
    const {entity} = event
    if (!entity.isPlayer()) return
    let pData = entity.persistentData
    if (pData.jump != 1) { return }
    pData.jump = 0;
    entity.level.server.schedule(200, () => {
      pData.jump = 1;
    });
    entity.level.server.runCommandSilent(`execute as ${entity.username} run playsound environs:jump player @s ${entity.x} ${entity.y} ${entity.z} 0.5 1`)
}

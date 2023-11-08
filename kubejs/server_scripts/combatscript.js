EntityEvents.hurt(event => {
    const {entity,server,damage,source} = event
    let meleexp = (damage*0.5).toFixed(0)
    let magicxp = (damage*0.3).toFixed(0)
    if (!source.player) return
    if (source.getType() == 'indirectMagic') {
        if (source.player.username == entity.username) return
        server.runCommandSilent(`puffish_skills experience add ${source.player.username} arcane ${magicxp}`)
        server.tell(magicxp)
    }else if (source.getType() != 'indirectMagic') {
        server.runCommandSilent(`puffish_skills experience add ${source.player.username} combat ${meleexp}`)
        server.tell(meleexp)
    }
})
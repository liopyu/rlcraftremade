let Block = Java.loadClass('net.minecraft.world.level.block.Block')
BlockEvents.rightClicked(event => {
    const {block,player,server,level} = event
    const {x,y,z} = block
    if (block.hasTag('minecraft:crops')) {
        let mcLevel = level
        let blockState = mcLevel.getBlockState(block.pos)
        let mcBlock = blockState.block
        let mcPlayer = player
        if (mcBlock.isMaxAge(blockState)) {
            let loot = Block.getDrops(blockState, mcLevel, block.pos, null, mcPlayer, mcPlayer.getMainHandItem())
            let seedYeeted = false
            for (let i in loot) {
                if (loot[i].id == mcBlock.getCloneItemStack(mcLevel, block.pos, blockState).id) {
                    loot[i].count--
                    seedYeeted = true
                    break
                }
            }
            loot.forEach(item => {
                Block.popResource(mcLevel, block.pos, item)
            })
            if (seedYeeted) {
                
                block.set(block.id, {age: '0'})
                server.runCommandSilent(`playsound minecraft:block.crop.break block @a ${block.x} ${block.y} ${block.z}`)
                server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup block @a ${block.x} ${block.y} ${block.z} 0.1 1`)
                player.addXP(2)
            } else { //if no seed was dropped for some odd reason
                mcLevel.destroyBlock(block.pos, true, null, 32)
            }
            player.swing()
            event.cancel()
        }
    }
})

BlockEvents.broken(event => {
    const {block,player,server,level} = event
    const {x,y,z} = block
    if (block.hasTag('minecraft:crops')) {
        let mcLevel = level
        let blockState = mcLevel.getBlockState(block.pos)
        let mcBlock = blockState.block
        if (mcBlock.isMaxAge(blockState)) {
            server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup block @a ${block.x} ${block.y} ${block.z} 0.1 1`)
            player.addXP(2)
        }
    }
})

ItemEvents.rightClicked(event => {
    const {item,player,hand,player:{mainHandItem,offHandItem}} = event
    let offhand = player.getHeldItem('off_hand');
    let mainhand = player.getHeldItem('main_hand');
    let apply = (item1, item2, result) => {
      if((mainHandItem.hasTag(item1) && offHandItem.id == item2)||(mainHandItem.id == item2 && offHandItem.hasTag(item1))) {
        if (offhand.count <= 0 || mainhand.count <= 0) {return}
        if(hand != 'MAIN_HAND') {return}
        mainHandItem.count--
        offHandItem.count--
        player.give(result)
      } 
    }
    apply('forge:stripped_logs', 'create:andesite_alloy', 'create:andesite_casing')
})
BlockEvents.placed(event => {
    const {server,block,player,player:{mainHandItem,offHandItem,persistentData}} = event
    let offhand = player.getHeldItem('off_hand');
    let mainhand = player.getHeldItem('main_hand');
    let apply = (item1, item2, result) => {
      if((mainHandItem.hasTag(item1) && offHandItem.id == item2)) {
        if (offhand.count <= 0 || mainhand.count <= 0) {return}
        server.schedule(10, event => {
            mainHandItem.count--
            offHandItem.count--
        })
        player.give(result)
        event.cancel()
      } else if((mainHandItem.id == item2 && offHandItem.hasTag(item1))) {
        if (offhand.count <= 0 || mainhand.count <= 0) {return}
        event.cancel()
      } 
    }
    apply('forge:stripped_logs', 'create:andesite_alloy', 'create:andesite_casing')
})

BlockEvents.broken(event => {
    const {player,block,player:{persistentData}} = event
    if (player.isCreative() || player.isSpectator()) return
    if (player.hasEffect('kubejs:tool_debility')) {
        player.displayClientMessage(Component.of(`A powerful force prevents you from breaking blocks.`).bold().darkRed(), true)
      event.cancel()
    }
  })
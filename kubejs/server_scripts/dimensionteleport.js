EntityEvents.hurt(event => {
    const {entity, source, level, player} = event
    if(!entity.isPlayer()) return
    const { x, y, z } = player
    
    if (player.persistentData.teleporting == 1) return


    if(source == 'DamageSource (outOfWorld)' && player.y < -64){
        if (player.level.dimension.path == 'overworld') {
            player.persistentData.teleporting = 1
            player.teleportTo(`wabworldgen:tutorial`, x, 200, z, 0, 0)
            let potion = event.player.potionEffects
            potion.add('minecraft:slow_falling', 500, 0, false, false)
            Utils.server.schedule(1000, () => {
            event.player.persistentData.teleporting = 0
        });
            
        }else if (player.level.dimension.path == 'tutorial') {
            player.persistentData.teleporting = 1
            player.teleportTo(`tectonicworld:tectonic`, x, 200, z, 0, 0)
            let potion = event.player.potionEffects
            potion.add('minecraft:slow_falling', 500, 0, false, false)
            Utils.server.schedule(1000, () => {
            event.player.persistentData.teleporting = 0
        });
            
        }else if (player.level.dimension.path == 'tectonic') {
            player.persistentData.teleporting = 1
            player.teleportTo(`minecraft:the_nether`, x, 60, z, 0, 0)
            let potion = event.player.potionEffects
            potion.add('minecraft:fire_resistance', 500, 0, false, false)
            potion.add('minecraft:slow_falling', 500, 0, false, false)
            Utils.server.schedule(1000, () => {
            event.player.persistentData.teleporting = 0
        });
            
        }else if (player.level.dimension.path == 'the_nether') {
            player.persistentData.teleporting = 1
            player.teleportTo(`minecraft:the_end`, 10, 140, 10, 0, 0)
            let potion = event.player.potionEffects
            potion.add('minecraft:slow_falling', 500, 0, false, false)
            Utils.server.schedule(1000, () => {
            event.player.persistentData.teleporting = 0
        });
            
        }else if (player.level.dimension.path == 'the_end') {
            player.persistentData.teleporting = 1
            player.teleportTo(`deepwhisperer:deep_space`, x, 200, z, 0, 0)
            Utils.server.schedule(1000, () => {
            event.player.persistentData.teleporting = 0
        });
            let potion = event.player.potionEffects
            potion.add('minecraft:slow_falling', 500, 0, false, false)
            Utils.server.schedule(1000, () => {
            event.player.persistentData.teleporting = 0
        });
            
        }else if (player.level.dimension.path == 'deep_space') {
            player.persistentData.teleporting = 1
            player.teleportTo(`theabyss:the_abyss`, x, 200, z, 0, 0)
            let potion = event.player.potionEffects
            potion.add('minecraft:slow_falling', 500, 0, false, false)
            Utils.server.schedule(1000, () => {
            event.player.persistentData.teleporting = 0
        });
            
        }
        
        event.cancel()
    }
})
PlayerEvents.loggedIn(event => {
    event.player.persistentData.teleporting = 0
})
PlayerEvents.tick(event => {
    const {player} = event
    const { x, y, z } = player
    let potion = event.player.potionEffects
    let pData = player.persistentData
    if (pData.timer >= 1) return;
        if (y >= 360 && player.level.dimension.path == 'tutorial') {
            player.teleportTo(`minecraft:overworld`, x, 60, z, 0, 0)
            potion.add('minecraft:slow_falling', 500, 0, false, false)
        }else if (y >= 280 && player.level.dimension.path == 'tectonic') {
            player.teleportTo(`wabworldgen:tutorial`, x, 60, z, 0, 0)
        }else if (y >= 250 && player.level.dimension.path == 'the_nether') {
            player.teleportTo(`tectonicworld:tectonic`, x, -20, z, 0, 0)
        }else if (y >= 300 && player.level.dimension.path == 'the_end') {
            player.teleportTo(`minecraft:the_nether`, x, 20, z, 0, 0)
            potion.add('minecraft:fire_resistance', 500, 0, false, false)
            potion.add('minecraft:slow_falling', 500, 0, false, false)
        }else if (y >= 270 && player.level.dimension.path == 'deep_space') {
            player.teleportTo(`minecraft:the_end`, 10, 150, 10, 0, 0)
            potion.add('minecraft:slow_falling', 500, 5, false, false)
        }else if (y >= 310 && player.level.dimension.path == 'the_abyss') {
            player.teleportTo(`deepwhisperer:deep_space`, x, 50, z, 0, 0)
        }
        
})

EntityEvents.death(event =>{
    const {entity,player,server} = event
    if (!player) return;
    const {x, y, z} = player
    let pData = player.persistentData
    pData.deathx = x.toFixed(0)
    pData.deathy = y.toFixed(0)
    pData.deathz = z.toFixed(0)
    pData.deathreset = 1
    if (player.level.dimension.path == 'spatial_storage') {
        pData.deathdimension = 1
    }else if (player.level.dimension.path == 'deep_space') {
        pData.deathdimension = 2
    }else if (player.level.dimension.path == 'overworld') {
        pData.deathdimension = 3
    }else if (player.level.dimension.path == 'the_end') {
        pData.deathdimension = 4
    }else if (player.level.dimension.path == 'the_nether') {
        pData.deathdimension = 5
    }else if (player.level.dimension.path == 'panthalassa') {
        pData.deathdimension = 6
    }else if (player.level.dimension.path == 'tectonic') {
        pData.deathdimension = 7
    }else if (player.level.dimension.path == 'frost_world') {
        pData.deathdimension = 8
    }else if (player.level.dimension.path == 'pocket_dimension') {
        pData.deathdimension = 9
    }else if (player.level.dimension.path == 'the_abyss') {
        pData.deathdimension = 10
    }else if (player.level.dimension.path == 'tutorial') {
        pData.deathdimension = 11
    }
})
EntityEvents.spawned(event => {
    if (event.entity.getType() == 'mutationcraft:helicopter') {
        event.cancel()
    }
    if (event.entity.getType() == 'vinery:wandering_winemaker') {
        console.log(`Vinery's Wandering Winemaker is disabled in this pack because of conflicts with fresh animations. To re-enable this edit the kubejs>server_scripts>disablemobspawn.js`)
        event.cancel()
    }
})

EntityEvents.spawned(event => {
    if (!event.entity.type.includes('mutationcraft')) return
    if (event.entity.level.dimension.path == 'spatial_storage') {
        console.log(event.entity.x)
        console.log(event.entity.y)
        console.log(event.entity.z)
        console.log('Assimilated Being Tried Spawning Where It Shouldnt')
        event.cancel()
    } else if (event.entity.level.dimension.path == 'overworld') {
        console.log(event.entity.x)
        console.log(event.entity.y)
        console.log(event.entity.z)
        console.log('Assimilated Being Tried Spawning Where It Shouldnt')
        event.cancel()
    } else if (event.entity.level.dimension.path == 'the_end') {
        console.log(event.entity.x)
        console.log(event.entity.y)
        console.log(event.entity.z)
        console.log('Assimilated Being Tried Spawning Where It Shouldnt')
        event.cancel()
    } else if (event.entity.level.dimension.path == 'the_nether') {
        console.log(event.entity.x)
        console.log(event.entity.y)
        console.log(event.entity.z)
        console.log('Assimilated Being Tried Spawning Where It Shouldnt')
        event.cancel()
    } else if (event.entity.level.dimension.path == 'panthalassa') {
        console.log(event.entity.x)
        console.log(event.entity.y)
        console.log(event.entity.z)
        console.log('Assimilated Being Tried Spawning Where It Shouldnt')
        event.cancel()
    } else if (event.entity.level.dimension.path == 'tectonic') {
        console.log(event.entity.x)
        console.log(event.entity.y)
        console.log(event.entity.z)
        console.log('Assimilated Being Tried Spawning Where It Shouldnt')
        event.cancel()
    } else if (event.entity.level.dimension.path == 'tutorial') {
        console.log(event.entity.x)
        console.log(event.entity.y)
        console.log(event.entity.z)
        console.log('Assimilated Being Tried Spawning Where It Shouldnt')
        event.cancel()
    }


})

BlockEvents.broken(event => {
    const { block, player, server } = event
    const { x, y, z } = block

    if (block.id == 'minecraft:spawner') {
        server.runCommandSilent(`summon minecraft:experience_orb ${x} ${y} ${z} {Value:35,Age:0,Invulnerable:0}`)
    }
    /*if (block.hasTag('minecraft:crops')) {
        server.runCommandSilent(`summon minecraft:experience_orb ${x} ${y} ${z} {Value:15,Age:0,Invulnerable:0}`)
    }*/
})
BlockEvents.rightClicked(event => {
    const { block, player, server } = event
    const { x, y, z } = block
    let righthand = player.getHeldItem('main_hand')
    let lefthand = player.getHeldItem('off_hand')
    if (block.hasTag('minecraft:beds') && (player.level.dimension.path == 'deep_space' || player.level.dimension.path == 'the_abyss' || player.level.dimension.path == 'frost_world')) {
        player.tell(`§dYou'll need a campfire to set your spawn because don't feel like sleeping in an unknown dimension..`)
        event.cancel()
    }
    if (block.hasTag('comforts:sleeping_bags') && (player.level.dimension.path == 'deep_space' || player.level.dimension.path == 'the_abyss' || player.level.dimension.path == 'frost_world')) {
        player.tell(`§dYou don't feel like falling asleep in an unknown dimension..`)
        event.cancel()
    }

    if (block.id == 'hexfortress:locked_chest' && (righthand.id != 'hexfortress:blaze_key')) {
        player.tell(`§aIt looks like I need a key to open this. Maybe the Guardian has it?`)
    }
})
BlockEvents.placed(event => {
    const { block, player, server } = event
    const { x, y, z } = block
    let namespace = player.level.dimension.namespace
    let path = player.level.dimension.path
    if (block.hasTag('waystones:waystone')) {
        event.server.runCommandSilent(`execute in ${namespace}:${path} run spawnpoint ${player.username} ${player.x.toFixed(0)} ${player.y.toFixed(0)} ${player.z.toFixed(0)}`)
        //player.tell('test')
    }
})

BlockEvents.rightClicked(event => {
    const { block, player, server } = event
    let namespace = player.level.dimension.namespace
    let path = player.level.dimension.path
    if (block.hasTag('waystones:waystone')) {
        event.server.runCommandSilent(`execute in ${namespace}:${path} run spawnpoint ${player.username} ${player.x.toFixed(0)} ${player.y.toFixed(0)} ${player.z.toFixed(0)}`)
    }
})

ItemEvents.rightClicked(event => {
    if (!event.entity.isPlayer()) return
    const { player, server, item, item: { id }, player: { username } } = event
    if (!player.getSpawnLocation()) return
    const { x, y, z } = player.getSpawnLocation()
    let dim = player.getRespawnDimension().location()
    if (id == 'magicmirror:magicmirror') {
        server.runCommandSilent(`execute in ${dim} run execute as ${player.username} run tp ${x} ${y} ${z}`)
        player.addItemCooldown('magicmirror:magicmirror', 25)
        server.runCommandSilent(`execute as ${username} run playsound minecraft:teleport ambient @s ${player.x} ${player.y} ${player.z} 1 1`)
    }
    if (id == 'sophisticatedbackpacks:backpack') {
        server.runCommandSilent(`title ${username} actionbar {"text":"I think I should place this down to open it.","bold":true,"color":"green"}`);
        event.cancel()
    }
    if (id == 'sophisticatedbackpacks:iron_backpack') {
        server.runCommandSilent(`title ${username} actionbar {"text":"I think I should place this down to open it.","bold":true,"color":"green"}`);
        event.cancel()
    }
    if (id == 'sophisticatedbackpacks:gold_backpack') {
        server.runCommandSilent(`title ${username} actionbar {"text":"I think I should place this down to open it.","bold":true,"color":"green"}`);
        event.cancel()
    }
    if (id == 'sophisticatedbackpacks:diamond_backpack') {
        server.runCommandSilent(`title ${username} actionbar {"text":"I think I should place this down to open it.","bold":true,"color":"green"}`);
        event.cancel()
    }
    if (id == 'sophisticatedbackpacks:netherite_backpack') {
        server.runCommandSilent(`title ${username} actionbar {"text":"I think I should place this down to open it.","bold":true,"color":"green"}`);
        event.cancel()
    }
    if (id == 'kubejs:grave_scroll') {
        server.runCommandSilent(`playsound minecraft:block.portal.trigger ambient ${username} ${player.x} ${player.y} ${player.z} 0.4 1.2`)
    }


})
EntityEvents.death(event => {
    const { entity, entity: { x, y, z, tags, type }, server } = event
    let mob = type.toString()
    //console.log(mob)
    if (tags.contains('slime_tower_guardian_spawn')) {
        if (mob != 'minecraft:bat') return
        server.runCommandSilent(`summon minecraft:slime ${x} ${y} ${z} {Size:3,CustomName:'[{"text":"ֆʟɨʍʏ ǟɮօʍɨռǟȶɨօռ","color":"green","bold":true}]',DeathLootTable:"keebsz:entities/slime_tower_guardian",Tags:["slime_tower_guardian"],Health:200,ArmorItems:[{},{},{id:"hexfortress:blaze_key",tag:{display:{Lore:[' "Tower Guardian Key" '],Name:' "гเ๓ยгย" '}},Count:1},{id:"hexfortress:blaze_key",tag:{display:{Lore:[' "Tower Guardian Key" '],Name:' "гเ๓ยгย" '}},Count:1}],ArmorDropChances:[1f,1f,1f,1f],Attributes:[{Name:"generic.max_health",Base:200d}],Passengers:[{id:"slime",Size:2,Passengers:[{id:"slime",Size:1}]}]}`)
    } else if (tags.contains('blazeguardian')) {
        if (mob != 'minecraft:bat') return
        server.runCommandSilent(`summon mutantmore:mutant_blaze ${x} ${y} ${z} {CustomName:'[{"text":"IПFΣЯПΛL ƬIƬΛП","bold":true,"color":"gray"}]',Health:150,NoGravity:1b,PersistenceRequired:1b,Tags:[blaze_tower_guardian],DeathLootTable:"keebsz:entities/blaze_guardian",Attributes:[{Name:"generic.max_health",Base:150d},{Name:"generic.follow_range",Base:40d}]}`)
    } else if (tags.contains('trader')) {
        if (mob != 'minecraft:silverfish') return
        server.runCommandSilent(`summon wandering_trader ${x} ${y} ${z}`)
        server.runCommandSilent(`summon wandering_trader ${x} ${y} ${z}`)
    }

})
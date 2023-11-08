
PlayerEvents.tick(event => {
    const {player,server,entity, entity:{username,maxHealth,persistentData}} = event
    let dragonmax = (maxHealth *0.25).toFixed(0)
    let fairymax = -(maxHealth *0.75).toFixed(0)
    let faelesmax = -(maxHealth *0.2).toFixed(0)
    let titanmax = (maxHealth *1).toFixed(0)
    let healthylevel = player.persistentData.getInt("healthyLevel")
    let undyinglevel = player.persistentData.getInt("undyingLevel")
    let healthymax = (healthylevel *2)
    let undyingmax = (undyinglevel *2)
    if(!(player.age % 20 == 0)) return
        player.modifyAttribute('minecraft:generic.max_health', '-123924,1111,155221,-3120', `${healthymax}`, "addition")
        player.modifyAttribute('minecraft:generic.max_health', '-123924,1112,155221,-3120', `${undyingmax}`, "addition")
    
    let curios = player.nbt.ForgeCaps['curios:inventory']
    if (curios.toString().contains('kubejs:dragon_ring')) {
        if (persistentData.hasdragonring == 1) return
        persistentData.hasdragonring = 1
        player.modifyAttribute('minecraft:generic.max_health', '-123924,5550,155221,-3120', `${dragonmax}`, "addition")
        //event.player.tell('fire dragon!')
        server.runCommandSilent(`execute as ${username} run origin set @s origins:origin genesis:arcanite`)
        server.runCommandSilent(`execute as ${username} run tag @s remove lightningdragon`),
            server.runCommandSilent(`execute as ${username} run tag @s remove oceandragon`)
    } else if (curios.toString().contains('kubejs:ring_of_faeles')) {
        if (persistentData.hasfaelesring == 1) return
        persistentData.hasfaelesring = 1
        player.modifyAttribute('minecraft:generic.max_health', '-123924,5551,155221,-3120', `${faelesmax}`, "addition")

        //event.player.tell('faeles!')
        server.runCommandSilent(`execute as ${username} run origin set @s origins:origin whiskers:elytratwo`)
        server.runCommandSilent(`execute as ${username} run tag @s remove lightningdragon`),
            server.runCommandSilent(`execute as ${username} run tag @s remove oceandragon`)

    } else if (curios.toString().contains('kubejs:fairy_ring')) {
        if (persistentData.hasfairyring == 1) return
        persistentData.hasfairyring = 1
        player.modifyAttribute('minecraft:generic.max_health', '-123924,5552,155221,-3120', `${fairymax}`, "addition")

        //event.player.tell('fairy!')
        server.runCommandSilent(`execute as ${username} run origin set @s origins:origin fae:fae`)
        server.runCommandSilent(`execute as ${username} run tag @s remove lightningdragon`),
            server.runCommandSilent(`execute as ${username} run tag @s remove oceandragon`)

    } else if (curios.toString().contains('kubejs:elf_ring')) {
        

        //event.player.tell('elf!')
        server.runCommandSilent(`execute as ${username} run origin set @s origins:origin elfring:elf`)
        server.runCommandSilent(`execute as ${username} run tag @s remove lightningdragon`),
            server.runCommandSilent(`execute as ${username} run tag @s remove oceandragon`)
    } else if (curios.toString().contains('kubejs:lightning_dragon_ring')) {
        if (persistentData.haslightningdragonring == 1) return
        persistentData.haslightningdragonring = 1
        player.modifyAttribute('minecraft:generic.max_health', '-123924,5553,155221,-3120', `${dragonmax}`, "addition")

        //event.player.tell('lightning dragon!')
        server.runCommandSilent(`execute as ${username} run origin set @s origins:origin genesis:lightningdragon`)
        server.runCommandSilent(`execute as ${username} run tag @s add lightningdragon`)
        server.runCommandSilent(`execute as ${username} run tag @s remove oceandragon`)
    } else if (curios.toString().contains('kubejs:ocean_dragon_ring')) {
        if (persistentData.hasoceandragonring == 1) return
        persistentData.hasoceandragonring = 1
        player.modifyAttribute('minecraft:generic.max_health', '-123924,5554,155221,-3120', `${dragonmax}`, "addition")

        //event.player.tell('ocean dragon!')
        server.runCommandSilent(`execute as ${username} run origin set @s origins:origin genesis:oceandragon`)
        server.runCommandSilent(`execute as ${username} run tag @s add oceandragon`)
        server.runCommandSilent(`execute as ${username} run tag @s remove lightningdragon`)
    } else if (curios.toString().contains('kubejs:titan_ring')) {
        if (persistentData.hastitanring == 1) return
        persistentData.hastitanring = 1
        player.modifyAttribute('minecraft:generic.max_health', '-123924,5555,155221,-3120', `${titanmax}`, "addition")

        //event.player.tell('titan!')
        server.runCommandSilent(`execute as ${username} run origin set @s origins:origin titan:titan`)
        server.runCommandSilent(`execute as ${username} run tag @s remove oceandragon`)
        server.runCommandSilent(`execute as ${username} run tag @s remove lightningdragon`)
    }
})

PlayerEvents.loggedOut(event => {
    const {player,server,entity, entity:{username,maxHealth,persistentData}} = event
    persistentData.loggedout = 1
    console.log(persistentData.loggedout)
})
PlayerEvents.loggedIn(event => {
    const { player, server, entity, entity: { username, maxHealth, persistentData } } = event
    console.log(persistentData.loggedout)
    let dragonmax = (maxHealth * 0.25).toFixed(0)
    let fairymax = -(maxHealth * 0.75).toFixed(0)
    let faelesmax = -(maxHealth * 0.2).toFixed(0)
    let titanmax = (maxHealth * 1).toFixed(0)
    let healthylevel = player.persistentData.getInt("healthyLevel")
    let undyinglevel = player.persistentData.getInt("undyingLevel")
    let healthymax = (healthylevel * 2)
    let undyingmax = (undyinglevel * 2)
    player.modifyAttribute('minecraft:generic.max_health', '-123924,1111,155221,-3120', `${healthymax}`, "addition")
    player.modifyAttribute('minecraft:generic.max_health', '-123924,1112,155221,-3120', `${undyingmax}`, "addition")
    let curios = player.nbt.ForgeCaps['curios:inventory']
    if (curios.toString().contains('kubejs:dragon_ring')) {
        if (persistentData.hasdragonring == 1) {
            player.modifyAttribute('minecraft:generic.max_health', '-123924,5550,155221,-3120', `${dragonmax}`, "addition")
        }
    } else if (curios.toString().contains('kubejs:ring_of_faeles')) {
        if (persistentData.hasfaelesring == 1) {
            player.modifyAttribute('minecraft:generic.max_health', '-123924,5551,155221,-3120', `${faelesmax}`, "addition")
        }
    } else if (curios.toString().contains('kubejs:fairy_ring')) {
        if (persistentData.hasfairyring == 1) {
            player.modifyAttribute('minecraft:generic.max_health', '-123924,5552,155221,-3120', `${fairymax}`, "addition")
        }
    } else if (curios.toString().contains('kubejs:lightning_dragon_ring')) {
        if (persistentData.haslightningdragonring == 1) {
            player.modifyAttribute('minecraft:generic.max_health', '-123924,5553,155221,-3120', `${dragonmax}`, "addition")
        }

    } else if (curios.toString().contains('kubejs:ocean_dragon_ring')) {
        if (persistentData.hasoceandragonring == 1) {
            player.modifyAttribute('minecraft:generic.max_health', '-123924,5554,155221,-3120', `${dragonmax}`, "addition")
        }
    } else if (curios.toString().contains('kubejs:titan_ring')) {
        if (persistentData.hastitanring == 1) {
            player.modifyAttribute('minecraft:generic.max_health', '-123924,5555,155221,-3120', `${titanmax}`, "addition")
        }
    }
    server.schedule(120, () => {
        persistentData.loggedout = 0
        console.log(persistentData.loggedout)
    });

})

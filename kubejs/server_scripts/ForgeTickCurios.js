

PlayerEvents.tick(event => {
    let item = event.player.getHeldItem('main_hand')
    let air = event.player.getMainHandItem().id == 'minecraft:air'
    let pData = event.player.persistentData
    let chance = Math.random() *2.75
    
    if(pData.timer == 0 || pData.timer == 5 || pData.timer == 10 || pData.timer == 15 || pData.timer == 20) {
    if(item.hasTag('kubejs:trinkets') & item.hasNBT() && !item.nbt.Reforger) {
        if (!item.nbt.Reforged){
        if (chance <= 0.05) {
            //event.player.tell('Arcane')
            item.nbt.merge(`{Arcane:1b,Reforged:1b}`)
        }else if (chance <= 0.15 & chance >= 0.06) {
            //event.player.tell('Aiming')
            item.nbt.merge(`{Aiming:1b,Reforged:1b}`)
        }else if (chance <= 0.25 & chance >= 0.16) {
            //event.player.tell('Armored')
            item.nbt.merge(`{Armored:1b,Reforged:1b}`)
        }else if (chance <= 0.35 & chance >= 0.26) {
            //event.player.tell('Athletic')
            item.nbt.merge(`{Athletic:1b,Reforged:1b}`)
        }else if (chance <= 0.45 & chance >= 0.36) {
            //event.player.tell('Clunky')
            item.nbt.merge(`{Clunky:1b,Reforged:1b}`)
        }else if (chance <= 0.55 & chance >= 0.46) {
            //event.player.tell('Flailing')
            item.nbt.merge(`{Flailing:1b,Reforged:1b}`)
        }else if (chance <= 0.65 & chance >= 0.56) {
            //event.player.tell('Focusing')
            item.nbt.merge(`{Focusing:1b,Reforged:1b}`)
        }else if (chance <= 0.75 & chance >= 0.66) {
            //event.player.tell('Graceful')
            item.nbt.merge(`{Graceful:1b,Reforged:1b}`)
        }else if (chance <= 0.85 & chance >= 0.76) {
            //event.player.tell('Healthy')
            item.nbt.merge(`{Healthy:1b,Reforged:1b}`)
        }else if (chance <= 0.95 & chance >= 0.86) {
            //event.player.tell('Horrible')
            item.nbt.merge(`{Horrible:1b,Reforged:1b}`)
        }else if (chance <= 0.105 & chance >= 0.96) {
            //event.player.tell('Lucky')
            item.nbt.merge(`{Lucky:1b,Reforged:1b}`)
        }else if (chance <= 1.15 & chance >= 1.06) {
            //event.player.tell('Prospecting')
            item.nbt.merge(`{Prospecting:1b,Reforged:1b}`)
        }else if (chance <= 1.35 & chance >= 1.26) {
            //event.player.tell('Shielding')
            item.nbt.merge(`{Shielding:1b,Reforged:1b}`)
        }else if (chance <= 1.45 & chance >= 1.36) {
            //event.player.tell('Speedy')
            item.nbt.merge(`{Speedy:1b,Reforged:1b}`)
        }else if (chance <= 1.55 & chance >= 1.46) {
            //event.player.tell('Springy')
            item.nbt.merge(`{Springy:1b,Reforged:1b}`)
        }else if (chance <= 1.65 & chance >= 1.56) {
            //event.player.tell('Strengthening')
            item.nbt.merge(`{Strengthening:1b,Reforged:1b}`)
        }else if (chance <= 2.65 & chance >= 1.66) {
            //event.player.tell('Normal')
            item.nbt.merge(`{Reforged:1b}`)
        }else if (chance <= 2.7 & chance >= 2.66) {
            //event.player.tell('Punishing')
            item.nbt.merge(`{Punishing:1b,Reforged:1b}`)
        }else if (chance <= 2.75 & chance >= 2.71) {
            //event.player.tell('Undying')
            item.nbt.merge( `{Undying:1b,Reforged:1b}`)
        }
}
    }else if (item.hasTag('kubejs:trinkets') & !item.hasNBT() & !air) {
       
        if (chance <= 0.05) {
            //event.player.tell('1Arcane')
            item.nbt = `{Arcane:1b,Reforged:1b}`
        }else if (chance <= 0.15 & chance >= 0.06) {
            //event.player.tell('1Aiming')
            item.nbt = `{Aiming:1b,Reforged:1b}`
        }else if (chance <= 0.25 & chance >= 0.16) {
            //event.player.tell('1Armored')
            item.nbt = `{Armored:1b,Reforged:1b}`
        }else if (chance <= 0.35 & chance >= 0.26) {
            //event.player.tell('1Athletic')
            item.nbt = `{Athletic:1b,Reforged:1b}`
        }else if (chance <= 0.45 & chance >= 0.36) {
            //event.player.tell('1Clunky')
            item.nbt = `{Clunky:1b,Reforged:1b}`
        }else if (chance <= 0.55 & chance >= 0.46) {
            //event.player.tell('1Flailing')
            item.nbt = `{Flailing:1b,Reforged:1b}`
        }else if (chance <= 0.65 & chance >= 0.56) {
            //event.player.tell('1Focusing')
            item.nbt = `{Focusing:1b,Reforged:1b}`
        }else if (chance <= 0.75 & chance >= 0.66) {
            //event.player.tell('1Graceful')
            item.nbt = `{Graceful:1b,Reforged:1b}`
        }else if (chance <= 0.85 & chance >= 0.76) {
            //event.player.tell('1Healthy')
            item.nbt = `{Healthy:1b,Reforged:1b}`
        }else if (chance <= 0.95 & chance >= 0.86) {
            //event.player.tell('1Horrible')
            item.nbt = `{Horrible:1b,Reforged:1b}`
        }else if (chance <= 0.105 & chance >= 0.96) {
            //event.player.tell('1Lucky')
            item.nbt = `{Lucky:1b,Reforged:1b}`
        }else if (chance <= 1.15 & chance >= 1.06) {
            //event.player.tell('1Prospecting')
            item.nbt = `{Prospecting:1b,Reforged:1b}`
        }else if (chance <= 1.35 & chance >= 1.26) {
            //event.player.tell('1Shielding')
            item.nbt = `{Shielding:1b,Reforged:1b}`
        }else if (chance <= 1.45 & chance >= 1.36) {
            //event.player.tell('1Speedy')
            item.nbt = `{Speedy:1b,Reforged:1b}`
        }else if (chance <= 1.55 & chance >= 1.46) {
            //event.player.tell('1Springy')
            item.nbt = `{Springy:1b,Reforged:1b}`
        }else if (chance <= 1.65 & chance >= 1.56) {
            //event.player.tell('1Strengthening')
            item.nbt = `{Strengthening:1b,Reforged:1b}`
        }else if (chance <= 2.65 & chance >= 1.66) {
            //event.player.tell('Normal')
            item.nbt = `{Reforged:1b}`
        }else if (chance <= 2.7 & chance >= 2.66) {
            //event.player.tell('1Punishing')
            item.nbt = `{Punishing:1b,Reforged:1b}`
        }else if (chance <= 2.75 & chance >= 2.71) {
            //event.player.tell('1Undying')
            item.nbt = `{Undying:1b,Reforged:1b}`
        }
    }
}
})
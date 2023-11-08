/*const $KegEntity = Java.loadClass('PlayerInteractEvent.RightClickBlock')
const PROGRESS = */
/*global.Bonemeal = (event) => {
    console.log('test')
    console.log(Client.player.mainHandItem.id)
    if (Client.player.mainHandItem.id == 'minecraft:bone_meal') event.cancel()
    else if (Client.player.mainHandItem.id == 'forbidden_arcanus:arcane_bone_meal') event.cancel()
    
}*/
/*global.Bonemeal = (event) => {
    console.log('test')
    console.log(Client.player.mainHandItem.id)
    if (Client.player.mainHandItem.id == 'minecraft:bone_meal') event.setCanceled(true)
    else if (Client.player.mainHandItem.id == 'forbidden_arcanus:arcane_bone_meal') event.setCanceled(true)
}*/
BlockEvents.rightClicked('alcocraftplus:hop_plant', event => {
    //global.Bonemeal()
    //event.cancel()
    if (event.player.mainHandItem == 'minecraft:bone_meal') {
    return event.cancel()
}
    else if (event.player.mainHandItem == 'forbidden_arcanus:arcane_bone_meal') {
    return event.cancel()
}
    return true
    
})


BlockEvents.rightClicked('alcocraftplus:hop', event => {
    //global.Bonemeal()
    //event.cancel()
    if (event.player.mainHandItem == 'minecraft:bone_meal') {
    return event.cancel()
}
    else if (event.player.mainHandItem == 'forbidden_arcanus:arcane_bone_meal') {
    return event.cancel()
}
    return true
    
})

ItemEvents.rightClicked('endrem:magical_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true
})
ItemEvents.rightClicked('endrem:black_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:cold_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:corrupted_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:lost_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:nether_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:old_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:rogue_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:cursed_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:evil_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:guardian_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:wither_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:witch_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:undead_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})
ItemEvents.rightClicked('endrem:exotic_eye', event => {
    //global.Bonemeal()
    
    if(event.player.level.dimension == 'minecraft:overworld'){
        event.cancel() 
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
    }else if(event.player.level.dimension == 'wabworldgen:tutorial'){
        
        event.server.runCommandSilent(`execute as ${event.entity.username} run title @s actionbar {"text":"I should try descending to a lower world before using this..","bold":true,"color":"red"}`)
        event.cancel() 
    }
    return true

    
    
})



//const $block = Java.loadClass("net.minecraftforge.event.entity.player.BonemealEvent")
/*ForgeEvents.onEvent("net.minecraftforge.event.entity.player.BonemealEvent", event => {
    //BlockEvents.rightClicked('alcocraftplus:hop_plant', event => {
        global.Bonemeal()
        event.getBlock() 
    event.cancel()
})

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Added", event => {
    
    event.cancel()
    console.log('test')
    
})*/









   /* global.WailaFunc = (event) => {
        console.log('test')
        console.log(Client.player.mainHandItem.id)
        if (Client.player.mainHandItem.id != 'kubejs:prospecting_glass') event.setCanceled(true)
        console.log(event.isCanceled())
    }
    
    onForgeEvent('mcp.mobius.waila.api.event.WailaRenderEvent$Pre', event => {
        global.WailaFunc(event)
    })*/
    /*global.Bonemeal = (event) => {
        console.log('test')
        console.log(Client.player.mainHandItem.id)
        if (Client.player.mainHandItem.id == 'minecraft:bone_meal') event.cancel()
        else if (Client.player.mainHandItem.id == 'forbidden_arcanus:arcane_bone_meal') event.cancel()
    }*/

    //const $block = Java.loadClass("net.minecraftforge.event.entity.player.BonemealEvent")
    

    /*const $AXE_DIG  = java('net.minecraftforge.common.ToolAction').get('axe_dig')

    onEvent('tags.items', event => {
      //Change the 'twilight:allowed_tools' to any tag you want and tool action you declared above.
      Ingredient.all.stacks.forEach(ingredient => {
        var item = Item.of(ingredient)
        if (item.getItemStack().canPerformAction($AXE_DIG)){
          event.add('twilight:allowed_tools', item.getId())
        }
      })
    })*/
    /*=> {
        if (rl.toString() == "minecraft:protection") {
          return false
        } else if (rl.toString() == "minecraft:projectile_protection") {
          return false
        } else if (rl.toString() == "minecraft:blast_protection") {
            return false
        } else if (rl.toString() == "minecraft:fire_protection") {
            return false
        }
        return true
      })*/


    
      
PlayerEvents.tick(event => {
    //event.player.tell(event.server.getLevel().dayTime())
    let pData = event.player.persistentData
    //event.entity.tell(event.level.dayTime())
    if (pData.timer >= 1) return;
    if (pData.firstsleep == 0) return;
    if (pData.firstsleep == 2) return;
    //event.player.tell('test')
    if (pData.firstsleep == 1) {
        ++pData.sleeptimer
    }
    if (pData.sleeptimer >= 2 && pData.sleeptimer <= 5 && pData.firstsleep == 1){
        Utils.server.schedule(10, () => {
            Utils.server.runCommandSilent(`effect give ${event.player.username} theabyss:fear 15 0`)
        });
    }
    if (pData.sleeptimer >= 40){
        if (pData.dimension == 1) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            
            event.server.runCommandSilent(`execute in ae2:spatial_storage run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            
            }else if (pData.dimension == 2) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            event.server.runCommandSilent(`execute in deepwhisperer:deep_space run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            }else if (pData.dimension == 3) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            
            event.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            }else if (pData.dimension == 4) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            event.server.runCommandSilent(`execute in minecraft:the_end run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            }else if (pData.dimension == 5) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            event.server.runCommandSilent(`execute in minecraft:the_nether run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            }else if (pData.dimension == 6) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            event.server.runCommandSilent(`execute in panthalassa:panthalassa run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            }else if (pData.dimension == 7) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            event.server.runCommandSilent(`execute in tectonicworld:tectonic run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            }else if (pData.dimension == 8) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            
            event.server.runCommandSilent(`execute in theabyss:frost_world run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            }else if (pData.dimension == 9) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            event.server.runCommandSilent(`execute in theabyss:pocket_dimension run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            }else if (pData.dimension == 10) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            event.server.runCommandSilent(`execute in theabyss:the_abyss run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
            }else if (pData.dimension == 11) {
            Utils.server.schedule(1, () => {
                event.server.runCommandSilent(`effect clear ${event.player.username}`)
                event.server.runCommandSilent(`tellraw ${event.player.username} {"text":"Whoa.. was that a nightmare??..... that place.. it looked so familiar..","bold":true,"color":"dark_red"}`)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 100`)
            });
            event.server.runCommandSilent(`execute in wabworldgen:tutorial run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        }
    }
})
//Debugging Stuff
/*ItemEvents.rightClicked('minecraft:diamond_sword', event => {
    let pData = event.player.persistentData
    event.player.tell(event.player.persistentData.fsx)
    event.player.tell(event.player.persistentData.fsy)
    event.player.tell(event.player.persistentData.fsz)
    event.player.tell(pData.fsn)
    event.player.tell(pData.fsp)
    event.player.tell(pData.sleeptimer)
    event.player.tell(pData.firstsleep)
    pData.firstsleep = 0
    pData.sleeptimer = 0
})*/
PlayerEvents.loggedIn(event => {
    let pData = event.player.persistentData
    if (pData.firstsleep == 1) return;
    if (pData.firstsleep == 2) return;
    pData.sleeptimer = 0
})

BlockEvents.broken(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.cancel()
    }
})
BlockEvents.placed(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.cancel()
    }
})
BlockEvents.rightClicked(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.cancel()
    }
})
BlockEvents.leftClicked(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.cancel()
    }
})
/*EntityEvents.hurt(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.entity.setHealth(20)
        //event.cancel()

    }
})*/
EntityEvents.death(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.entity.setHealth(20)
        event.server.runCommandSilent(`effect give ${event.player.username} minecraft:instant_health 1 100`)
        event.cancel()
        
    }
})



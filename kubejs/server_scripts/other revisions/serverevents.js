// priority: 100
ServerEvents.loaded(event => {
    const {server,server: {persistentData}} = event
    if(!persistentData.servertimer) persistentData.servertimer = 0
    if (!persistentData.firstLoad) {
        server.runCommandSilent(`scoreboard objectives add aiming dummy`)
        server.runCommandSilent(`scoreboard objectives add athletic dummy`)
        server.runCommandSilent(`scoreboard objectives add arcane dummy`)
        server.runCommandSilent(`scoreboard objectives add armored dummy`)
        server.runCommandSilent(`scoreboard objectives add clunky dummy`)
        server.runCommandSilent(`scoreboard objectives add flailing dummy`)
        server.runCommandSilent(`scoreboard objectives add focusing dummy`)
        server.runCommandSilent(`scoreboard objectives add graceful dummy`)
        server.runCommandSilent(`scoreboard objectives add healthy dummy`)
        server.runCommandSilent(`scoreboard objectives add horrible dummy`)
        server.runCommandSilent(`scoreboard objectives add lucky dummy`)
        server.runCommandSilent(`scoreboard objectives add prospecting dummy`)
        server.runCommandSilent(`scoreboard objectives add punishing dummy`)
        server.runCommandSilent(`scoreboard objectives add shielding dummy`)
        server.runCommandSilent(`scoreboard objectives add speedy dummy`)
        server.runCommandSilent(`scoreboard objectives add springy dummy`)
        server.runCommandSilent(`scoreboard objectives add strengthening dummy`)
        server.runCommandSilent(`scoreboard objectives add undying dummy`)

        server.runCommandSilent(`scoreboard objectives add arcanehLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add crumblinghLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add dentedhLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add heavyhLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add masterfulhLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add protectivehLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add luckyhLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add thickhLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add toughhLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add solidcLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add cumbersomecLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add arcanecLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add crumblingcLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add dentedcLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add protectivecLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add thickcLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add toughcLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add arcanelLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add crumblinglLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add dentedlLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add heavylLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add masterfullLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add protectivelLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add thicklLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add toughlLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add springylLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add arcanebLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add crumblingbLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add dentedbLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add heavybLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add heavycLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add masterfulbLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add masterfulcLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add protectivebLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add thickbLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add toughbLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add tallbLevel dummy`)
        server.runCommandSilent(`scoreboard objectives add speedybLevel dummy`)
        //Disable Nether Until Unlocked
        server.runCommandSilent(`scoreboard objectives add nether dummy`)
        server.runCommandSilent(`scoreboard objectives add spawncomplete dummy`)
        server.runCommandSilent(`scoreboard objectives add spawntimer dummy`)
        //Bossbars
        server.runCommandSilent(`bossbar add lichtowerguardian2 "❂ ⳜƘƸȴƸƬⰙƝ ⰙƑ Ɩ爪ꝒƸⱤƬƖƝƸƝƇƸ ❂"`)
        server.runCommandSilent(`bossbar set lichtowerguardian2 color white`)
        server.runCommandSilent(`bossbar set lichtowerguardian2 players @a`)
        server.runCommandSilent(`bossbar set lichtowerguardian2 style notched_6`)
        server.runCommandSilent(`bossbar add creeper_tower_guardian "Ɗ𐌴ㄒ𐍈𐍀𐌰ㄒ𐍊𐍀𐌾 ꡕ𐍈𐍀Ⲋㄒ𐌴𐍂"`)
        server.runCommandSilent(`bossbar set creeper_tower_guardian color yellow`)
        server.runCommandSilent(`bossbar set creeper_tower_guardian players @a`)
        server.runCommandSilent(`bossbar set creeper_tower_guardian style notched_6`)
        server.runCommandSilent(`bossbar add blaze_tower_guardian "ཫ IПFΣЯПΛL ƬIƬΛП ཀ"`)
        server.runCommandSilent(`bossbar set blaze_tower_guardian color red`)
        server.runCommandSilent(`bossbar set blaze_tower_guardian players @a`)
        server.runCommandSilent(`bossbar set blaze_tower_guardian style notched_6`)
        server.runCommandSilent(`bossbar add wither_tower_guardian "ƈąɬąƈƖყʂɱıƈ ɛҳ℘ɛཞıɱɛŋɬ"`)
        server.runCommandSilent(`bossbar set wither_tower_guardian color blue`)
        server.runCommandSilent(`bossbar set wither_tower_guardian players @a`)
        server.runCommandSilent(`bossbar set wither_tower_guardian style notched_6`)
        server.runCommandSilent(`bossbar add slimetowerguardian "ֆʟɨʍʏ ǟɮօʍɨռǟȶɨօռ"`)
        server.runCommandSilent(`bossbar set slimetowerguardian color green`)
        server.runCommandSilent(`bossbar set slimetowerguardian players @a`)
        server.runCommandSilent(`bossbar set slimetowerguardian style notched_6`)
        server.runCommandSilent(`bossbar add hulk_tower_guardian "─╤╦︻ ƇȴⰙƊ ︻╦╤─"`)
        server.runCommandSilent(`bossbar set hulk_tower_guardian color green`)
        server.runCommandSilent(`bossbar set hulk_tower_guardian players @a`)
        server.runCommandSilent(`bossbar set hulk_tower_guardian style notched_6`)
        server.runCommandSilent(`bossbar add thrasher_tower_guardian "⧼T̼⧽⧼H̼⧽⧼R̼⧽⧼E̼⧽⧼S̼⧽⧼H̼⧽⧼E̼⧽⧼R̼⧽"`)
        server.runCommandSilent(`bossbar set thrasher_tower_guardian color white`)
        server.runCommandSilent(`bossbar set thrasher_tower_guardian players @a`)
        server.runCommandSilent(`bossbar set thrasher_tower_guardian style notched_6`)
        //Generic First Load Functions
        server.runCommandSilent(`scoreboard objectives add lesslagg dummy`)
        server.runCommandSilent(`gamerule spawnRadius 1000`)
        server.runCommandSilent(`scoreboard objectives add testcount dummy`)
        server.runCommandSilent(`gamerule reducedDebugInfo true`)
        server.runCommandSilent(`scoreboard players set #lio lesslagg 20`)
        server.runCommandSilent(`scoreboard objectives add TiempoEnCama minecraft.custom:minecraft.sleep_in_bed`)
        server.schedule(10, () => { server.runCommandSilent('scoreboard objectives add dragonring dummy') });
        server.runCommandSilent('scoreboard players set dragonringdummy dragonring 1');
        server.schedule(10, () => { server.runCommandSilent('scoreboard objectives add lightningattack dummy') });
        server.schedule(10, () => { server.runCommandSilent('scoreboard objectives add lightningattack2 dummy') });
        server.schedule(10, () => { server.runCommandSilent('scoreboard players set lesslaggy lightningattack 15') });
        server.schedule(10, () => { server.runCommandSilent('scoreboard players set lesslaggyy lightningattack 7') });
        server.schedule(10, () => { server.runCommandSilent('scoreboard players set randolightning lightningattack2 350') });
        persistentData.firstLoad = true
      }
      if (persistentData.firstLoad && !persistentData.secondLoad) {
      server.runCommandSilent(`function firstload:tht`)
      server.runCommandSilent('function improved_pickaxes:setup');
      persistentData.secondLoad = true
      }
  })
ServerEvents.tick(event => {
    const {server,server: {persistentData}} = event
    let sData = persistentData
    sData.servertimer = (++sData.servertimer) % 20
    if(sData.servertimer != 0) return
    //Bossbars
    server.runCommandSilent(`execute as @e[type=mutantmonsters:mutant_skeleton,tag=lich_tower_guardian2] at @s run bossbar set lichtowerguardian2 players @a[distance=..30]`)
    server.runCommandSilent(`execute store result bossbar lichtowerguardian2 max run attribute @e[tag=lich_tower_guardian2,limit=1] generic.max_health get`)
    server.runCommandSilent(`execute store result bossbar lichtowerguardian2 value run data get entity @e[tag=lich_tower_guardian2,limit=1] Health`)
    server.runCommandSilent(`execute unless entity @e[type=mutantmonsters:mutant_skeleton,tag=lich_tower_guardian2,limit=1] run bossbar set lichtowerguardian2 visible false`)
    server.runCommandSilent(`execute if entity @e[type=mutantmonsters:mutant_skeleton,tag=lich_tower_guardian2,limit=1] run bossbar set lichtowerguardian2 visible true`)
    server.runCommandSilent(`execute as @e[type=minecraft:slime,tag=slime_tower_guardian] at @s run bossbar set slimetowerguardian players @a[distance=..30]`)
    server.runCommandSilent(`execute store result bossbar slimetowerguardian max run attribute @e[type=minecraft:slime,tag=slime_tower_guardian,limit=1] generic.max_health get`)
    server.runCommandSilent(`execute store result bossbar slimetowerguardian value run data get entity @e[type=minecraft:slime,tag=slime_tower_guardian,limit=1] Health`)
    server.runCommandSilent(`execute unless entity @e[type=minecraft:slime,tag=slime_tower_guardian,limit=1] run bossbar set slimetowerguardian visible false`)
    server.runCommandSilent(`execute if entity @e[type=minecraft:slime,tag=slime_tower_guardian,limit=1] run bossbar set slimetowerguardian visible true`)
    server.runCommandSilent(`execute as @e[type=mutantmonsters:mutant_creeper,tag=creeper_tower_guardian] at @s run bossbar set creeper_tower_guardian players @a[distance=..30]`)
    server.runCommandSilent(`execute store result bossbar creeper_tower_guardian max run attribute @e[type=mutantmonsters:mutant_creeper,tag=creeper_tower_guardian,limit=1] generic.max_health get`)
    server.runCommandSilent(`execute store result bossbar creeper_tower_guardian value run data get entity @e[type=mutantmonsters:mutant_creeper,tag=creeper_tower_guardian,limit=1] Health`)
    server.runCommandSilent(`execute unless entity @e[type=mutantmonsters:mutant_creeper,tag=creeper_tower_guardian,limit=1] run bossbar set creeper_tower_guardian visible false`)
    server.runCommandSilent(`execute if entity @e[type=mutantmonsters:mutant_creeper,tag=creeper_tower_guardian,limit=1] run bossbar set creeper_tower_guardian visible true`)
    server.runCommandSilent(`execute as @e[type=mutantmore:mutant_blaze,tag=blaze_tower_guardian] at @s run bossbar set blaze_tower_guardian players @a[distance=..30]`)
    server.runCommandSilent(`execute store result bossbar blaze_tower_guardian max run attribute @e[type=mutantmore:mutant_blaze,tag=blaze_tower_guardian,limit=1] generic.max_health get`)
    server.runCommandSilent(`execute store result bossbar blaze_tower_guardian value run data get entity @e[type=mutantmore:mutant_blaze,tag=blaze_tower_guardian,limit=1] Health`)
    server.runCommandSilent(`execute unless entity @e[type=mutantmore:mutant_blaze,tag=blaze_tower_guardian,limit=1] run bossbar set blaze_tower_guardian visible false`)
    server.runCommandSilent(`execute if entity @e[type=mutantmore:mutant_blaze,tag=blaze_tower_guardian,limit=1] run bossbar set blaze_tower_guardian visible true`)
    server.runCommandSilent(`execute as @e[type=mutantmore:mutant_wither_skeleton,tag=wither_tower_guardian] at @s run bossbar set wither_tower_guardian players @a[distance=..30]`)
    server.runCommandSilent(`execute store result bossbar wither_tower_guardian max run attribute @e[type=mutantmore:mutant_wither_skeleton,tag=wither_tower_guardian,limit=1] generic.max_health get`)
    server.runCommandSilent(`execute store result bossbar wither_tower_guardian value run data get entity @e[type=mutantmore:mutant_wither_skeleton,tag=wither_tower_guardian,limit=1] Health`)
    server.runCommandSilent(`execute unless entity @e[type=mutantmore:mutant_wither_skeleton,tag=wither_tower_guardian,limit=1] run bossbar set wither_tower_guardian visible false`)
    server.runCommandSilent(`execute if entity @e[type=mutantmore:mutant_wither_skeleton,tag=wither_tower_guardian,limit=1] run bossbar set wither_tower_guardian visible true`)
    server.runCommandSilent(`execute as @e[type=mutantmonsters:mutant_zombie,tag=hulk_tower_guardian] at @s run bossbar set hulk_tower_guardian players @a[distance=..30]`)
    server.runCommandSilent(`execute store result bossbar hulk_tower_guardian max run attribute @e[type=mutantmonsters:mutant_zombie,tag=hulk_tower_guardian,limit=1] generic.max_health get`)
    server.runCommandSilent(`execute store result bossbar hulk_tower_guardian value run data get entity @e[type=mutantmonsters:mutant_zombie,tag=hulk_tower_guardian,limit=1] Health`)
    server.runCommandSilent(`execute unless entity @e[type=mutantmonsters:mutant_zombie,tag=hulk_tower_guardian,limit=1] run bossbar set hulk_tower_guardian visible false`)
    server.runCommandSilent(`execute if entity @e[type=mutantmonsters:mutant_zombie,tag=hulk_tower_guardian,limit=1] run bossbar set hulk_tower_guardian visible true`)
    server.runCommandSilent(`execute as @e[type=born_in_chaos_v1:skeleton_thrasher,tag=thrasher_tower_guardian] at @s run bossbar set thrasher_tower_guardian players @a[distance=..30]`)
    server.runCommandSilent(`execute store result bossbar thrasher_tower_guardian max run attribute @e[type=born_in_chaos_v1:skeleton_thrasher,tag=thrasher_tower_guardian,limit=1] generic.max_health get`)
    server.runCommandSilent(`execute store result bossbar thrasher_tower_guardian value run data get entity @e[type=born_in_chaos_v1:skeleton_thrasher,tag=thrasher_tower_guardian,limit=1] Health`)
    server.runCommandSilent(`execute unless entity @e[type=born_in_chaos_v1:skeleton_thrasher,tag=thrasher_tower_guardian,limit=1] run bossbar set thrasher_tower_guardian visible false`)
    server.runCommandSilent(`execute if entity @e[type=born_in_chaos_v1:skeleton_thrasher,tag=thrasher_tower_guardian,limit=1] run bossbar set thrasher_tower_guardian visible true`)

    
   //Spawn Structure Mobs/Bosses
    server.runCommandSilent(`execute as @e[type=minecraft:silverfish,tag=trader] run kill @s`)
    server.runCommandSilent(`execute as @e[type=minecraft:bat,tag=blazeguardian] run kill @s`)
    server.runCommandSilent(`kill @e[type=minecraft:bat,tag=slime_tower_guardian_spawn]`)
    //Mob AOE Effects
    server.runCommandSilent(`execute at @e[tag=bossprotected] run effect give @a[distance=..30] kubejs:tool_debility 1 0 true`)
    server.runCommandSilent(`execute at @e[type=ylf_mod:ylf] run effect give @a[distance=..10] minecraft:instant_health 1 0 true`)
    server.runCommandSilent(`execute at @e[type=gothic:warg] run effect give @a[distance=..3] kubejs:paralysis 2 0 true`)


})

ServerEvents.tick((event) => {
    const {server,server: {persistentData}} = event
    //Normal Tick Functions

    server.runCommandSilent('execute unless score #lio spawncomplete matches 1 run function disablenether:run_once');
    server.runCommandSilent('execute if score #lio itemkill matches 1 run kill @e[type=item]');
    server.runCommandSilent('scoreboard players add lesslagger lightningattack 1');
    server.runCommandSilent('function genesis:randoburn');
    server.runCommandSilent('execute if score lesslagger lightningattack > lesslaggy lightningattack run scoreboard players set lesslagger lightningattack 0');

    //Lightning Dragon Attack Damage

    server.runCommandSilent('execute if score lesslagger lightningattack >= lesslaggy lightningattack run function genesis:randoattack');

    //Water Dragon Attack Damage

    server.runCommandSilent('execute if score lesslagger lightningattack >= lesslaggy lightningattack run function genesis:waterattack');
    server.runCommandSilent('execute if score randolightning2 lightningattack2 >= randolightning lightningattack2 run scoreboard players set randolightning2 lightningattack2 0');
    server.runCommandSilent('scoreboard players add randolightning2 lightningattack2 1');
    server.runCommandSilent('execute if score randolightning2 lightningattack2 = randolightning lightningattack2 run function genesis:randoattack2');

    //Lightning/Ocean Dragon Ring Attack Animation

    server.runCommandSilent('execute as @e[type=area_effect_cloud,tag=FLD] at @s run function particles:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 1 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 2 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 3 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 12 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 4 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 11 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 6 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 8 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 5 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 7 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 9 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 10 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 13 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 14 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 15 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');        
    
    //One Player Sleep Function

    server.runCommandSilent(`execute as @a if score @s TiempoEnCama matches 1 at @s if block ~ ~0.1 ~ #minecraft:beds run time add 5.3s`)
    server.runCommandSilent(`execute as @a if score @s TiempoEnCama matches 1 at @s unless block ~ ~0.05 ~ #minecraft:beds run scoreboard players reset @s TiempoEnCama`)

});

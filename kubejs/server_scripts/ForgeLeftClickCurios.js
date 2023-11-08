//Thank you @pie (Jerry Rig Everything) for this script simplification, without it these files would be thousands of lines longer!!
const ATTRIBUTE_LIST = [
    "Undying",
    "Punishing",
    "Arcane",
    "Strengthening",
    "Springy",
    "Speedy",
    "Shielding",
    "Prospecting",
    "Lucky",
    "Horrible",
    "Healthy",
    "Graceful",
    "Focusing",
    "Flailing",
    "Clunky",
    "Athletic",
    "Armored",
    "Aiming",
  ];
  function generateRandomAttributeList(random) {
      let output = '{';
      let chance = Math.ceil(random * ATTRIBUTE_LIST.length);
      for(let i=0; i<ATTRIBUTE_LIST.length; i++) {
          let attr = ATTRIBUTE_LIST[i];
          output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
          if (i+1 != ATTRIBUTE_LIST.length){
              output += ',';
          }
      }
      
      output += ",Reforged:1b";
      output += '}';
      return output;
  }
  BlockEvents.leftClicked(event => {
      let offHandItem = event.player.getHeldItem('off_hand');
      let item = event.player.getHeldItem('main_hand');
      let pData = event.player.persistentData;
      let air = event.player.getMainHandItem().id == 'minecraft:air'
      if (pData.timestall != 1) {
          return;
      }
      if (event.block.id != 'kubejs:reforging_station'){
        return;
      }
      if (air){
        return;
      }
      //event.player.tell(event.block.id)
      event.player.sendInventoryUpdate()
      pData.timestall = 0;
      event.server.schedule(1200, () => {
          pData.timestall = 1;
      });
      if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_gold') && event.player.offHandItem == 'minecraft:gold_ingot')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_spectral_silt') && event.player.offHandItem == 'kubejs:spectral_silt') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_ars') && event.player.offHandItem == 'ars_nouveau:source_gem') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_leather') && event.player.offHandItem == 'minecraft:leather') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_cosmic_cloud') && event.player.offHandItem == 'kubejs:cosmic_cloud') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_unspecified') && event.player.offHandItem == 'kubejs:cosmic_cloud') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }
      
      else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_arcane_powder') && event.player.offHandItem == 'iter_rpg:arcane_powder') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_iron') && event.player.offHandItem == 'minecraft:iron_ingot') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_netherite') && event.player.offHandItem == 'minecraft:netherite_scrap') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_diamond') && event.player.offHandItem == '#forge:gems/diamond') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if (offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_dragon_breath') && event.player.offHandItem == 'minecraft:dragon_breath') && item.nbt.Reforged) {
        event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
      item.nbt.merge(generateRandomAttributeList(Math.random()));
      offHandItem.count--
      if (item.nbt.Arcane){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Arcane","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Undying){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Undying","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Punishing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Punishing","bold":true,"color":"light_purple"}`);
    }else if (item.nbt.Graceful){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Graceful","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Athletic){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Athletic","bold":true,"color":"aqua"}`);
    }else if (item.nbt.Strengthening){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Strengthening","bold":true,"color":"blue"}`);
    }else if (item.nbt.Springy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Springy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Speedy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Speedy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Shielding){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Shielding","bold":true,"color":"blue"}`);
    }else if (item.nbt.Prospecting){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Prospecting","bold":true,"color":"blue"}`);
    }else if (item.nbt.Lucky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Lucky","bold":true,"color":"blue"}`);
    }else if (item.nbt.Healthy){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Healthy","bold":true,"color":"blue"}`);
    }else if (item.nbt.Focusing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Focusing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Flailing){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Flailing","bold":true,"color":"blue"}`);
    }else if (item.nbt.Armored){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Armored","bold":true,"color":"blue"}`);
    }else if (item.nbt.Aiming){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Aiming","bold":true,"color":"blue"}`);
    }else if (item.nbt.Clunky){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Clunky","bold":true,"color":"dark_gray"}`);
    }else if (item.nbt.Horrible){
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Horrible","bold":true,"color":"dark_gray"}`);
    }else event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar {"text":"Your fingers fumble and you smash your thumb","bold":true,"color":"red"}`);
      }else if ((item.hasTag('kubejs:trinkets_gold') && event.player.offHandItem != 'minecraft:gold_ingot')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Gold Ingot ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_gold'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Gold Ingot ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_ars') && event.player.offHandItem != 'ars_nouveau:source_gem')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Source Gem ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_ars'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Source Gem ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_leather') && event.player.offHandItem != 'minecraft:leather')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Leather ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_leather'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Leather ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_cosmic_cloud') && event.player.offHandItem != 'kubejs:cosmic_cloud')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Cosmic Cloud ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_cosmic_cloud'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Cosmic Cloud ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_unspecified') && event.player.offHandItem != 'kubejs:cosmic_cloud')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Cosmic Cloud ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_unspecified'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Cosmic Cloud ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_arcane_powder') && event.player.offHandItem != 'iter_rpg:arcane_powder')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Arcane Powder ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_arcane_powder'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Arcane Powder ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_dragon_breath') && event.player.offHandItem != 'minecraft:dragon_breath')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Dragon Breath ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_dragon_breath'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Dragon Breath ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_spectral_silt') && event.player.offHandItem != 'kubejs:spectral_silt')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Spectral Silt ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_spectral_silt'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Spectral Silt ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_certus_quartz') && event.player.offHandItem != '#forge:gems/quartz')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Quartz ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_certus_quartz'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Quartz ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_redstone') && event.player.offHandItem != 'minecraft:redstone')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Redstone Dust ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_redstone'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Redstone Dust ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_iron') && event.player.offHandItem != 'minecraft:iron_ingot')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Iron Ingot ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_iron'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Iron Ingot ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_diamond') && event.player.offHandItem != '#forge:gems/diamond')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Diamond ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_diamond'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Diamond ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if ((item.hasTag('kubejs:trinkets_netherite') && event.player.offHandItem != 'minecraft:netherite_scrap')) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Netherite Scrap ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_netherite'))) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Netherite Scrap ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }else return;
  });
  PlayerEvents.loggedIn(event => {
    let pData = event.player.persistentData
    //pData.forgecheck = 0
    pData.timestall = 1
    pData.timestalllllllll = 1
})
BlockEvents.rightClicked(event => {
    let offHandItem = event.player.getHeldItem('off_hand');
    let item = event.player.getHeldItem('main_hand');
    let pData = event.player.persistentData;
    let air = event.player.getMainHandItem().id == 'minecraft:air'
    if (pData.timestalllllllll != 1) {
        return;
    }
    if (event.block.id != 'kubejs:reforging_station'){
      return;
    }
    if (air){
      return;
    }
    //event.player.tell(event.block.id)
    event.player.sendInventoryUpdate()
    pData.timestalllllllll = 0;
    event.server.schedule(1200, () => {
        pData.timestalllllllll = 1;
    });
    if ((item.hasTag('kubejs:trinkets_gold') && event.player.offHandItem != 'minecraft:gold_ingot')) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Gold Ingot ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_gold'))) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Gold Ingot ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if ((item.hasTag('kubejs:trinkets_ars') && event.player.offHandItem != 'ars_nouveau:source_gem')) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Source Gem ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_ars'))) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Source Gem ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if ((item.hasTag('kubejs:trinkets_leather') && event.player.offHandItem != 'minecraft:leather')) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Leather ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_leather'))) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Leather ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if ((item.hasTag('kubejs:trinkets_cosmic_cloud') && event.player.offHandItem != 'kubejs:cosmic_cloud')) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Cosmic Cloud ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_cosmic_cloud'))) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Cosmic Cloud ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if ((item.hasTag('kubejs:trinkets_unspecified') && event.player.offHandItem != 'kubejs:cosmic_cloud')) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Cosmic Cloud ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_unspecified'))) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Cosmic Cloud ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if ((item.hasTag('kubejs:trinkets_arcane_powder') && event.player.offHandItem != 'iter_rpg:arcane_powder')) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Arcane Powder ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_arcane_powder'))) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Arcane Powder ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if ((item.hasTag('kubejs:trinkets_dragon_breath') && event.player.offHandItem != 'minecraft:dragon_breath')) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Dragon Breath ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_dragon_breath'))) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Dragon Breath ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if ((item.hasTag('kubejs:trinkets_spectral_silt') && event.player.offHandItem != 'kubejs:spectral_silt')) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Spectral Silt ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_spectral_silt'))) {
      event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Spectral Silt ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
  }else if ((item.hasTag('kubejs:trinkets_certus_quartz') && event.player.offHandItem != '#forge:gems/quartz')) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Quartz ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_certus_quartz'))) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Quartz ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else if ((item.hasTag('kubejs:trinkets_redstone') && event.player.offHandItem != 'minecraft:redstone')) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Redstone Dust ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_redstone'))) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Redstone Dust ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else if ((item.hasTag('kubejs:trinkets_iron') && event.player.offHandItem != 'minecraft:iron_ingot')) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Iron Ingot ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_iron'))) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Iron Ingot ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else if ((item.hasTag('kubejs:trinkets_diamond') && event.player.offHandItem != '#forge:gems/diamond')) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Diamond ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_diamond'))) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Diamond ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else if ((item.hasTag('kubejs:trinkets_netherite') && event.player.offHandItem != 'minecraft:netherite_scrap')) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Netherite Scrap ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else if (!offHandItem.count > 0 && (item.hasTag('kubejs:trinkets_netherite'))) {
    event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Netherite Scrap ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
}else return;
});


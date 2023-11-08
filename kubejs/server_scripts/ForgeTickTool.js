PlayerEvents.tick(event => {
  let item = event.player.getHeldItem('main_hand')
  let air = event.player.getMainHandItem().id == 'minecraft:air'
  let pData = event.player.persistentData
  let chance = Math.random() *2.75
  
  if (!item.hasTag('kubejs:tool_reforge')) return
  if(pData.timer == 0 || pData.timer == 5 || pData.timer == 10 || pData.timer == 15 || pData.timer == 20) {
  if(item.hasTag('forge:tools') & item.hasNBT() && !item.nbt.Reforger) {
      if (!item.nbt.Reforged){
      if (chance <= 0.05) {
          //event.player.tell('Worthless')
          item.nbt.merge(`{Worthless:1b,Reforged:1b}`)
      }else if (chance <= 0.15 & chance >= 0.06) {
          //event.player.tell('Broken')
          item.nbt.merge(`{Broken:1b,Reforged:1b}`)
      }else if (chance <= 0.25 & chance >= 0.16) {
          //event.player.tell('Bulky')
          item.nbt.merge(`{Bulky:1b,Reforged:1b}`)
      }else if (chance <= 0.35 & chance >= 0.26) {
          //event.player.tell('Rusted')
          item.nbt.merge(`{Rusted:1b,Reforged:1b}`)
      }else if (chance <= 0.45 & chance >= 0.36) {
          //event.player.tell('Clumsy')
          item.nbt.merge(`{Clumsy:1b,Reforged:1b}`)
      }else if (chance <= 0.55 & chance >= 0.46) {
          //event.player.tell('Chipped')
          item.nbt.merge(`{Chipped:1b,Reforged:1b}`)
      }else if (chance <= 0.65 & chance >= 0.56) {
          //event.player.tell('Short')
          item.nbt.merge(`{Short:1b,Reforged:1b}`)
      }else if (chance <= 0.75 & chance >= 0.66) {
          //event.player.tell('Broad')
          item.nbt.merge(`{Broad:1b,Reforged:1b}`)
      }else if (chance <= 0.85 & chance >= 0.76) {
          //event.player.tell('Broad')
          item.nbt.merge(`{Broad:1b,Reforged:1b}`)
      }else if (chance <= 0.95 & chance >= 0.86) {
          //event.player.tell('Thin')
          item.nbt.merge(`{Thin:1b,Reforged:1b}`)
      }else if (chance <= 0.105 & chance >= 0.96) {
          //event.player.tell('Pokey')
          item.nbt.merge(`{Pokey:1b,Reforged:1b}`)
      }else if (chance <= 1.15 & chance >= 1.06) {
          //event.player.tell('Vicious')
          item.nbt.merge(`{Vicious:1b,Reforged:1b}`)
      }else if (chance <= 1.35 & chance >= 1.26) {
          //event.player.tell('Long')
          item.nbt.merge(`{Long:1b,Reforged:1b}`)
      }else if (chance <= 1.45 & chance >= 1.36) {
          //event.player.tell('Sharp')
          item.nbt.merge(`{Sharp:1b,Reforged:1b}`)
      }else if (chance <= 1.55 & chance >= 1.46) {
          //event.player.tell('Keen')
          item.nbt.merge(`{Keen:1b,Reforged:1b}`)
      }else if (chance <= 1.65 & chance >= 1.56) {
          //event.player.tell('Elegant')
          item.nbt.merge(`{Elegant:1b,Reforged:1b}`)
      }else if (chance <= 2.65 & chance >= 1.66) {
          //event.player.tell('Normal')
          item.nbt.merge(`{Reforged:1b}`)
      }else if (chance <= 2.7 & chance >= 2.66) {
          //event.player.tell('Sweeping')
          item.nbt.merge(`{Sweeping:1b,Reforged:1b}`)
      }else if (chance <= 2.75 & chance >= 2.71) {
          //event.player.tell('Legendary')
          item.nbt.merge( `{Legendary:1b,Reforged:1b}`)
      }
}
  }else if (item.hasTag('forge:tools') & !item.hasNBT() & !air) {
     
    if (chance <= 0.05) {
      //event.player.tell('Worthless')
      item.nbt = `{Worthless:1b,Reforged:1b}`
      }else if (chance <= 0.15 & chance >= 0.06) {
      //event.player.tell('Broken')
      item.nbt = `{Broken:1b,Reforged:1b}`
      }else if (chance <= 0.25 & chance >= 0.16) {
      //event.player.tell('Bulky')
      item.nbt = `{Bulky:1b,Reforged:1b}`
      }else if (chance <= 0.35 & chance >= 0.26) {
      //event.player.tell('Rusted')
      item.nbt = `{Rusted:1b,Reforged:1b}`
      }else if (chance <= 0.45 & chance >= 0.36) {
      //event.player.tell('Clumsy')
      item.nbt = `{Clumsy:1b,Reforged:1b}`
      }else if (chance <= 0.55 & chance >= 0.46) {
      //event.player.tell('Chipped')
      item.nbt = `{Chipped:1b,Reforged:1b}`
      }else if (chance <= 0.65 & chance >= 0.56) {
      //event.player.tell('Short')
      item.nbt = `{Short:1b,Reforged:1b}`
      }else if (chance <= 0.75 & chance >= 0.66) {
      //event.player.tell('Broad')
      item.nbt = `{Broad:1b,Reforged:1b}`
      }else if (chance <= 0.85 & chance >= 0.76) {
      //event.player.tell('Broad')
      item.nbt = `{Broad:1b,Reforged:1b}`
      }else if (chance <= 0.95 & chance >= 0.86) {
      //event.player.tell('Thin')
      item.nbt = `{Thin:1b,Reforged:1b}`
      }else if (chance <= 0.105 & chance >= 0.96) {
      //event.player.tell('Pokey')
      item.nbt = `{Pokey:1b,Reforged:1b}`
      }else if (chance <= 1.15 & chance >= 1.06) {
      //event.player.tell('Vicious')
      item.nbt = `{Vicious:1b,Reforged:1b}`
      }else if (chance <= 1.35 & chance >= 1.26) {
      //event.player.tell('Long')
      item.nbt = `{Long:1b,Reforged:1b}`
      }else if (chance <= 1.45 & chance >= 1.36) {
      //event.player.tell('Sharp')
      item.nbt = `{Sharp:1b,Reforged:1b}`
      }else if (chance <= 1.55 & chance >= 1.46) {
      //event.player.tell('Keen')
      item.nbt = `{Keen:1b,Reforged:1b}`
      }else if (chance <= 1.65 & chance >= 1.56) {
      //event.player.tell('Elegant')
      item.nbt = `{Elegant:1b,Reforged:1b}`
      }else if (chance <= 2.65 & chance >= 1.66) {
      //event.player.tell('Normal')
      item.nbt = `{Reforged:1b}`
      }else if (chance <= 2.7 & chance >= 2.66) {
      //event.player.tell('Sweeping')
      item.nbt = `{Sweeping:1b,Reforged:1b}`
      }else if (chance <= 2.75 & chance >= 2.71) {
      //event.player.tell('Legendary')
      item.nbt =  `{Legendary:1b,Reforged:1b}`
      }
  }
}
})
/*ItemEvents.canPickUp(event => {
  let chance = Math.floor(Math.random() * 15)
  let nbt = event.item.nbt.toString()
  console.log(nbt)
    if (!event.item.nbt.Reforged && event.item.hasTag('forge:tools') & chance == 1){
      //event.player.tell('Sharp')
    event.item.nbt.merge = `{Reforged:1b,Rusted:0b,Sharp:1b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §9Sharp","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §9+10% Attack Damage","italic":false}]']}}`
  }else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 2){
    //event.player.tell('legendary')
  event.item.nbt = `{Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §dLegendary","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §9+10% Dig Speed","italic":false}]','[{"text":"§9 §9+10% Attack Speed","italic":false}]','[{"text":"§9 §9+15% Attack Damage","italic":false}]','[{"text":"§9 §9+0.5 Reach Distance","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 3){
  //event.player.tell('broken')
event.item.nbt = `{Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §8Broken","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §c-15% Attack Damage","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 4){
  //event.player.tell('broad!')
event.item.nbt = `{Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §ePokey","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §c-10% Dig Speed","italic":false}]','[{"text":"§9 §9+5% Attack Damage","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 5){
  //event.player.tell('broad!')
event.item.nbt = `{Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:1b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §bSweeping","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §9+20% Attack Speed","italic":false}]','[{"text":"§9 §9+0.5 Reach Distance","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 6){
  //event.player.tell('broad!')
event.item.nbt = `{Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §bGraceful","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §9+15% Dig Speed","italic":false}]','[{"text":"§9 §9+15% Attack Speed","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 7){
  //event.player.tell('broad!')
event.item.nbt = `{Broad:0b,Broken:0b,Bulky:0b,Chipped:1b,Clumsy:0b,Damage:0,Graceful:0b,Keen:0b,Legendary:0b,Long:0b,Pokey:0b,Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §cChipped","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §c-5% Attack Speed","italic":false}]','[{"text":"§9 §c-5% Attack Damage","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 8){
  //event.player.tell('broad!')
event.item.nbt = `{Broad:0b,Broken:0b,Bulky:0b,Chipped:0b,Clumsy:0b,Damage:0,Graceful:0b,Keen:1b,Legendary:0b,Long:0b,Pokey:0b,Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §9Keen","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §9+10% Attack Speed","italic":false}]','[{"text":"§9 §9+10% Attack Damage","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 9){
  //event.player.tell('broad!')
event.item.nbt = `{Broad:0b,Broken:0b,Bulky:0b,Chipped:0b,Clumsy:1b,Damage:0,Graceful:0b,Keen:0b,Legendary:0b,Long:0b,Pokey:0b,Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §cClumsy","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §c-5% Dig Speed","italic":false}]','[{"text":"§9 §c-5% Attack Damage","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 10){
  //event.player.tell('broad!')
event.item.nbt = `{Broad:1b,Broken:0b,Bulky:0b,Chipped:0b,Clumsy:0b,Damage:0,Graceful:0b,Keen:0b,Legendary:0b,Long:0b,Pokey:0b,Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §eBroad","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §c-5% Dig Speed","italic":false}]','[{"text":"§9 §c-5% Attack Speed","italic":false}]','[{"text":"§9 §9+10% Attack Damage","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 11){
  //event.player.tell('broad!')
event.item.nbt = `{Broad:0b,Broken:0b,Bulky:0b,Chipped:0b,Clumsy:0b,Damage:0,Graceful:0b,Keen:0b,Legendary:0b,Long:0b,Pokey:0b,Reforged:1b,Rusted:0b,Sharp:0b,Short:1b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §cShort","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §c-1 Reach Distance","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 12){
  //event.player.tell('broad!')
event.item.nbt = `{Broad:0b,Broken:0b,Bulky:0b,Chipped:0b,Clumsy:0b,Damage:0,Graceful:0b,Keen:0b,Legendary:0b,Long:0b,Pokey:0b,Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:1b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §eVicious","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §9+15% Attack Damage","italic":false}]','[{"text":"§9 §c-0.5 Reach Distance","italic":false}]']}}`
}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 13){
  //event.player.tell('broad!')
event.item.nbt = `{Broad:0b,Broken:0b,Bulky:0b,Chipped:0b,Clumsy:0b,Damage:0,Graceful:0b,Keen:0b,Legendary:0b,Long:1b,Pokey:0b,Reforged:1b,Rusted:0b,Sharp:0b,Short:0b,Sweeping:0b,Thin:0b,Vicious:0b,Worthless:0b,display:{Lore:['[{"text":"§9 ","italic":false}]','[{"text":"§7Quality: §9Long","italic":false}]','[{"text":"§7When in Main Hand:","italic":false}]','[{"text":"§9 §9+0.5 Reach Distance","italic":false}]']}}`
}
  else {
    if (event.item.nbt.Reforged & event.item.hasTag('forge:tools')){
      //event.player.tell('already forged!')
    } else if (event.item.nbt.Reforged & event.item.hasTag('forge:tools')){
      //event.player.tell('FAILED FORGE!')
      event.item.nbt = {Reforged: true}
    }
  }
}) 

ItemEvents.canPickUp(event => {
  let chance = Math.floor(Math.random() * 2)
  let nbt = event.item.nbt.toString()
  //console.log(nbt)
    //if (!event.item.nbt.Reforged & event.item.hasTag('forge:armors/chestplates') & chance == 1){
      //event.player.tell('Crumblingchest')
      event.item.nbt.merge(`{Crumblingchest:1b,HideFlags:2,AttributeModifiers:[{AttributeName:"generic.armor",Amount:-2.5,Slot:chest,Name:"generic.armor",UUID:[I;-123718,21914,20337,-43828]},{AttributeName:"generic.armor_toughness",Amount:-1,Slot:chest,Name:"generic.armor_toughness",UUID:[I;-123718,22014,20337,-44028]}]}`)
      //event.item.nbt.merge(`{AttributeModifiers:[{AttributeName:"generic.max_health",Amount:30,Slot:chest,Name:"generic.max_health",UUID:[I;-123718,19722,184510,-39444]}]},{AttributeName:"generic.armor_toughness",Amount:-1,Slot:chest,Name:"generic.armor_toughness",UUID:[I;-123718,22014,20337,-44028]}]}`)
      //event.item.nbt.merge = {Crumbling: true}
      //event.item.nbt.merge = `{AttributeModifiers:[{AttributeName:"generic.armor_toughness",Amount:-1,Slot:chest,Name:"generic.armor_toughness",UUID:[I;-123718,21914,20337,-43828]}]}`

      //event.item.nbt.merge = `{AttributeModifiers:[{AttributeName:"generic.max_health",Amount:30,Slot:chest,Name:"generic.max_health",UUID:[I;-123718,19722,184510,-39444]}]}`
  /*}else if (!event.item.nbt.Reforged & event.item.hasTag('forge:tools') & chance == 11){
    //event.player.tell('broad!')
    event.item.nbt = `{AttributeModifiers:[{AttributeName:"generic.max_health",Amount:30,Slot:chest,Name:"generic.max_health",UUID:[I;-123718,19722,184510,-39444]}]}`
  }*/
  /*else {
    if (event.item.nbt.Reforged){
      //event.player.tell('already forged!')
    } else {
      //event.player.tell('FAILED FORGE!')
      event.item.nbt = {Reforged: true}
    }
  }
}) */

//{AttributeModifiers:[{AttributeName:"generic.armor_toughness",Amount:3,Name:"generic.armor_toughness",UUID:[I;-123718,12585,112622,-25170]}]}


/*["Locational Armor".Armor]
		multiplierHead = 5.0
		multiplierChest = 2.4
		multiplierLegs = 2.6
		multiplierFeet = 4.0
		offsetHead = 0.0
		offsetChest = 0.0
		offsetLegs = 0.0
		offsetFeet = 0.0

	["Locational Armor".Toughness]
		multiplierHead = 1.0
		multiplierChest = 1.0
		multiplierLegs = 1.0
		multiplierFeet = 1.0
		offsetHead = 0.0
		offsetChest = 0.0
		offsetLegs = 0.0
		offsetFeet = 0.0*/
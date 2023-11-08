const ATTRIBUTE_LIST_LEGGINGS = [
  "Arcanel",
  "Crumblingl",
  "Dentedl",
  "Heavyl",
  "Masterfull",
  "Protectivel",
  "Springyl",
  "Thickl",
  "Toughl",
  "Normal",
  "Normal",
  "Normal",
  "Normal",
];
function generateRandomAttributeListleggings(random) {
console.log(ATTRIBUTE_LIST_LEGGINGS)
    let output = '{';
    let chance = Math.ceil(random * ATTRIBUTE_LIST_LEGGINGS.length);
    for(let i=0; i<ATTRIBUTE_LIST_LEGGINGS.length; i++) {
        let attr = ATTRIBUTE_LIST_LEGGINGS[i];
        output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
        if (i+1 != ATTRIBUTE_LIST_LEGGINGS.length){
            output += ',';
        }
    }
    
    output += ",Reforged:1b,Leggings:1b";
    output += '}';
    return output;
  
}

const ATTRIBUTE_LIST_HELMET = [
  "Arcaneh",
  "Crumblingh",
  "Dentedh",
  "Heavyh",
  "Masterfulh",
  "Protectiveh",
  "Luckyh",
  "Thickh",
  "Toughh",
  "Normal",
  "Normal",
  "Normal",
  "Normal",
];
function generateRandomAttributeListhelmet(random) {
console.log(ATTRIBUTE_LIST_HELMET)
    let output = '{';
    let chance = Math.ceil(random * ATTRIBUTE_LIST_HELMET.length);
    for(let i=0; i<ATTRIBUTE_LIST_HELMET.length; i++) {
        let attr = ATTRIBUTE_LIST_HELMET[i];
        output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
        if (i+1 != ATTRIBUTE_LIST_HELMET.length){
            output += ',';
        }
    }
    
    output += ",Reforged:1b,Helmet:1b";
    output += '}';
    return output;
  
}

const ATTRIBUTE_LIST_CHEST = [
  "Arcanec",
  "Crumblingc",
  "Dentedc",
  "Heavyc",
  "Masterfulc",
  "Protectivec",
  "Solidc",
  "Cumbersomec",
  "Thickc",
  "Toughc",
  "Normal",
  "Normal",
  "Normal",
  "Normal",
];
function generateRandomAttributeListchest(random) {
console.log(ATTRIBUTE_LIST_CHEST)
    let output = '{';
    let chance = Math.ceil(random * ATTRIBUTE_LIST_CHEST.length);
    for(let i=0; i<ATTRIBUTE_LIST_CHEST.length; i++) {
        let attr = ATTRIBUTE_LIST_CHEST[i];
        output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
        if (i+1 != ATTRIBUTE_LIST_CHEST.length){
            output += ',';
        }
    }
    
    output += ",Reforged:1b,Chest:1b";
    output += '}';
    return output;
  
}

const ATTRIBUTE_LIST_BOOTS = [
  "Arcaneb",
  "Crumblingb",
  "Dentedb",
  "Heavyb",
  "Masterfulb",
  "Protectiveb",
  "Speedyb",
  "Tallb",
  "Thickb",
  "Toughb",
  "Normal",
  "Normal",
  "Normal",
  "Normal",
];
function generateRandomAttributeListboots(random) {
console.log(ATTRIBUTE_LIST_BOOTS)
    let output = '{';
    let chance = Math.ceil(random * ATTRIBUTE_LIST_BOOTS.length);
    for(let i=0; i<ATTRIBUTE_LIST_BOOTS.length; i++) {
        let attr = ATTRIBUTE_LIST_BOOTS[i];
        output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
        if (i+1 != ATTRIBUTE_LIST_BOOTS.length){
            output += ',';
        }
    }
    
    output += ",Reforged:1b,Boots:1b";
    output += '}';
    return output;
  
}

PlayerEvents.tick(event => {
    let item = event.player.getHeldItem('main_hand')
    
    let air = event.player.getMainHandItem().id == 'minecraft:air'
    let pData = event.player.persistentData
    
    if (air) return

    if(pData.timer == 0 || pData.timer == 5 || pData.timer == 10 || pData.timer == 15 || pData.timer == 20) {
    if(item.hasTag('forge:helmets') & item.hasNBT() && !item.nbt.Reforged) {
        item.nbt.merge(generateRandomAttributeListhelmet(Math.random()));
    }else if (item.hasTag('forge:helmets') & !item.hasNBT()) {
        item.nbt = `${generateRandomAttributeListhelmet(Math.random())}`
    } else if(item.hasTag('forge:chestplates') & item.hasNBT() && !item.nbt.Reforged) {
        item.nbt.merge(generateRandomAttributeListchest(Math.random()));
    }else if (item.hasTag('forge:chestplates') & !item.hasNBT()) {
        item.nbt = `${generateRandomAttributeListchest(Math.random())}`
    }else if(item.hasTag('forge:boots') & item.hasNBT() && !item.nbt.Reforged) {
        item.nbt.merge(generateRandomAttributeListboots(Math.random()));
    }else if (item.hasTag('forge:boots') & !item.hasNBT()) {
        item.nbt = `${generateRandomAttributeListboots(Math.random())}`
    } else if(item.hasTag('forge:leggings') & item.hasNBT() && !item.nbt.Reforged) {
        item.nbt.merge(generateRandomAttributeListleggings(Math.random()));
    }else if (item.hasTag('forge:leggings') & !item.hasNBT()) {
        item.nbt = `${generateRandomAttributeListleggings(Math.random())}`
    }
}
})

/*PlayerEvents.tick(event => {
    const {player,server} = event
    let pData = player.persistentData
    if(pData.timer != 0) return
    let helmet = player.headArmorItem.id
    player.tell(helmet)
})*/
//Credit to @ʇʎouıplɐuop (ping if you reply)
const helmet = [
    'iron_helmet',
    'leather_helmet',
    'golden_helmet',
    'minecraft:turtle_helmet',
    'alexsmobs:froststalker_helmet',
    'pneumaticcraft:compressed_iron_helmet'
]
let generateRandomHelmet = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]

const chest = [
    'iron_chestplate',
    'leather_chestplate',
    'golden_chestplate',
    'pneumaticcraft:compressed_iron_chestplate'
]
let generateRandomChest = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]

const legs = [
    'iron_leggings',
    'leather_leggings',
    'golden_leggings',
    'pneumaticcraft:compressed_iron_leggings'
]
let generateRandomLegs = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]

const boots = [
    'iron_boots',
    'leather_boots',
    'golden_boots',
    'pneumaticcraft:compressed_iron_boots'
]
let generateRandomBoots = armorArray => armorArray[Math.floor(armorArray.length * Math.random())]
//onEvent('entity.spawned', event =>{
EntityEvents.spawned(event => {
    let rando = Math.random().toFixed(2)
    let rando2 = Math.random().toFixed(1)
    let rando3 = Math.random().toFixed(1)
    let rando4 = Math.random().toFixed(1)
    let rando5 = Math.random().toFixed(1)
    
    if (event.entity.level.getDimension() != 'tectonicworld:tectonic') return
    if (rando >= 0.4) return
    if(event.entity.type.toString() == 'minecraft:skeleton'){
        if (rando2 >= 0.3){
    event.entity.setItemSlot(5, generateRandomHelmet(helmet))}
    if (rando3 >= 0.3){
    event.entity.setItemSlot(4, generateRandomHelmet(chest))}
    if (rando4 >= 0.3){
    event.entity.setItemSlot(3, generateRandomHelmet(legs))}
    if (rando5 >= 0.3){
    event.entity.setItemSlot(2, generateRandomHelmet(boots))}
    } else if (event.entity.type.toString() == 'minecraft:zombie') {
        if (rando2 >= 0.3){
    event.entity.setItemSlot(5, generateRandomHelmet(helmet))}
    if (rando3 >= 0.3){
    event.entity.setItemSlot(4, generateRandomHelmet(chest))}
    if (rando4 >= 0.3){
    event.entity.setItemSlot(3, generateRandomHelmet(legs))}
    if (rando5 >= 0.3){
    event.entity.setItemSlot(2, generateRandomHelmet(boots))}
    }else if (event.entity.type.toString() == 'minecraft:zombie_villager') {
        if (rando2 >= 0.8){
    event.entity.setItemSlot(5, generateRandomHelmet(helmet))}
    if (rando3 >= 0.8){
    event.entity.setItemSlot(4, generateRandomHelmet(chest))}
    if (rando4 >= 0.8){
    event.entity.setItemSlot(3, generateRandomHelmet(legs))}
    if (rando5 >= 0.8){
    event.entity.setItemSlot(2, generateRandomHelmet(boots))}
    }
})

EntityEvents.spawned(event => {
    let rando = Math.random().toFixed(2)
    let rando2 = Math.random().toFixed(1)
    let rando3 = Math.random().toFixed(1)
    let rando4 = Math.random().toFixed(1)
    let rando5 = Math.random().toFixed(1)
    if (rando >= 0.2) return
    if (event.entity.level.getDimension() != ('minecraft:overworld' || 'wabworldgen:tutorial')) return
    if(event.entity.type.toString() == 'minecraft:skeleton'){
        if (rando2 >= 0.5){
    event.entity.setItemSlot(5, generateRandomHelmet(helmet))}
    if (rando3 >= 0.5){
    event.entity.setItemSlot(4, generateRandomHelmet(chest))}
    if (rando4 >= 0.5){
    event.entity.setItemSlot(3, generateRandomHelmet(legs))}
    if (rando5 >= 0.5){
    event.entity.setItemSlot(2, generateRandomHelmet(boots))}
    } else if (event.entity.type.toString() == 'minecraft:zombie') {
        if (rando2 >= 0.5){
    event.entity.setItemSlot(5, generateRandomHelmet(helmet))}
    if (rando3 >= 0.5){
    event.entity.setItemSlot(4, generateRandomHelmet(chest))}
    if (rando4 >= 0.5){
    event.entity.setItemSlot(3, generateRandomHelmet(legs))}
    if (rando5 >= 0.5){
    event.entity.setItemSlot(2, generateRandomHelmet(boots))}
    }else if (event.entity.type.toString() == 'minecraft:zombie_villager') {
        if (rando2 >= 0.8){
    event.entity.setItemSlot(5, generateRandomHelmet(helmet))}
    if (rando3 >= 0.8){
    event.entity.setItemSlot(4, generateRandomHelmet(chest))}
    if (rando4 >= 0.8){
    event.entity.setItemSlot(3, generateRandomHelmet(legs))}
    if (rando5 >= 0.8){
    event.entity.setItemSlot(2, generateRandomHelmet(boots))}
    }
})



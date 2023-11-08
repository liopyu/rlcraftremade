/*ItemEvents.rightClicked('minecraft:stick', event => {
  const {entity,entity:{persistentData}} = event
  entity.activeEffects.forEach(effect => {
    if(effect.amplifier >= 2) return
    let nbt = effect.save({})
    console.log("Old: " + nbt)
    nbt.Amplifier = NBT.b(nbt.Amplifier + 1)
    let newInstance = effect.load(nbt)
    console.log("New: " + newInstance.save({}))
    entity.forceAddEffect(newInstance, entity)
    })
})*/




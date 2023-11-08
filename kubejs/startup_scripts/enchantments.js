StartupEvents.registry("enchantment", event => {
    event.create("advanced_protection")
        .maxLevel(4)
        .veryRare()
        .armor()
        .damageProtection((level, source) => 2 * level)
        .displayName("§6Advanced Protection")
        .checkCompatibility((rl) => {
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
          })
        
        
})

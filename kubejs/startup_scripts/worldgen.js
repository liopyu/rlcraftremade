WorldgenEvents.remove(event => {
  // print all features for a given biome filter
  
  //event.printFeatures('', 'minecraft:plains')
    // remove features by their id (first argument is a generation step)
    event.removeFeatureById('underground_ores', ['gothic:magic_ore_stone', 'minecraft:magic_ore_deepslate'])
  })
/*

  WorldgenEvents.add(event => {
    // use the anchors helper from the event
    const { anchors } = event
  
    event.addOre(ore => {
      ore.id = 'kubejs:gravel' // (optional, but recommended) custom id for the feature
      ore.biomes = {					// see above for an explanation of these filters
        tag: 'minecraft:is_ocean',
      }
  
      // examples on how to use targets
      ore.addTarget([
        'minecraft:grass_block',     // or any kind of dirt (including coarse, rooted, etc.)...
      ], 'minecraft:gravel')       // with TNT (trust me, it'll be funny)
  
      ore.count([15, 50])  
             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
        .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
        .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
          anchors.aboveBottom(100),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
          anchors.absolute(320)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
        )								              // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32
  
      // more, optional parameters (default values are shown here)
      ore.size = 15                          // max. vein size
      ore.noSurface = 1                   // chance to discard if the ore would be exposed to air
      ore.worldgenLayer = 'underground_ores'  // what generation step the ores should be generated in (see below)
      ore.chance = 0							            // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
    })
  
    // oh yeah, and did I mention lakes exist, too?
    // (for now at least, Vanilla is likely to remove them in the future)
    event.addLake(lake => {
      lake.id = 'kubejs:oceanlake' // BlockStatePredicate
      lake.chance = 4
      lake.fluid = 'minecraft:water'
      lake.barrier = 'minecraft:sand'
    })
  })
  */
  
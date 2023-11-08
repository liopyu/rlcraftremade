LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("#minecraft:leaves")
        .randomChance(0.2)
        .addLoot("minecraft:stick");
        event
        .addBlockLootModifier("minecraft:grass")
        .randomChance(0.4)
        .matchMainHand(Item.of("kubejs:flint_knife"))
        .addLoot("kubejs:grass_fiber");
        event
        .addBlockLootModifier("minecraft:tall_grass")
        .randomChance(0.8)
        .matchMainHand(Item.of("kubejs:flint_knife"))
        .addLoot("kubejs:grass_fiber");

        event
        .addBlockLootModifier("minecraft:grass")
        .randomChance(0.4)
        .matchMainHand(Item.of("kubejs:bronze_knife"))
        .addLoot("kubejs:grass_fiber");
        event
        .addBlockLootModifier("minecraft:tall_grass")
        .randomChance(0.8)
        .matchMainHand(Item.of("kubejs:bronze_knife"))
        .addLoot("kubejs:grass_fiber");

        event
        .addBlockLootModifier("minecraft:grass")
        .randomChance(0.4)
        .matchMainHand(Item.of("kubejs:copper_knife"))
        .addLoot("kubejs:grass_fiber");
        event
        .addBlockLootModifier("minecraft:tall_grass")
        .randomChance(0.8)
        .matchMainHand(Item.of("kubejs:copper_knife"))
        .addLoot("kubejs:grass_fiber");

        event
        .addBlockLootModifier("minecraft:grass")
        .randomChance(0.4)
        .matchMainHand(Item.of("kubejs:diamond_knife"))
        .addLoot("kubejs:grass_fiber");
        event
        .addBlockLootModifier("minecraft:tall_grass")
        .randomChance(0.8)
        .matchMainHand(Item.of("kubejs:diamond_knife"))
        .addLoot("kubejs:grass_fiber");

        event
        .addBlockLootModifier("minecraft:grass")
        .randomChance(0.4)
        .matchMainHand(Item.of("kubejs:gold_knife"))
        .addLoot("kubejs:grass_fiber");
        event
        .addBlockLootModifier("minecraft:tall_grass")
        .randomChance(0.8)
        .matchMainHand(Item.of("kubejs:gold_knife"))
        .addLoot("kubejs:grass_fiber");

        event
        .addBlockLootModifier("minecraft:grass")
        .randomChance(0.4)
        .matchMainHand(Item.of("kubejs:iron_knife"))
        .addLoot("kubejs:grass_fiber");
        event
        .addBlockLootModifier("minecraft:tall_grass")
        .randomChance(0.8)
        .matchMainHand(Item.of("kubejs:iron_knife"))
        .addLoot("kubejs:grass_fiber");

        event
        .addBlockLootModifier("minecraft:grass")
        .randomChance(0.4)
        .matchMainHand(Item.of("kubejs:steel_knife"))
        .addLoot("kubejs:grass_fiber");
        event
        .addBlockLootModifier("minecraft:tall_grass")
        .randomChance(0.8)
        .matchMainHand(Item.of("kubejs:steel_knife"))
        .addLoot("kubejs:grass_fiber");

        event
        .addLootTypeModifier(LootType.ENTITY)
        .removeLoot('tameablebeasts:purple_allay')
});
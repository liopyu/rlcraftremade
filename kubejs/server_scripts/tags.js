ServerEvents.tags('item', event => {
    event.add('kubejs:trinkets', [
        '#curios:curio', 
        '#curios:back',
        '#curios:belt',
        '#curios:body',
        '#curios:bracelet',
        '#curios:charm',
        '#curios:head',
        '#curios:hands',
        '#curios:necklace',
        '#curios:ring',
        '#curios:feet',
    ])
    event.add('kubejs:race_rings', [
        'kubejs:dragon_ring',
        'kubejs:ring_of_faeles',
        'kubejs:elf_ring',
        'kubejs:fairy_ring',
        'kubejs:lightning_dragon_ring',
        'kubejs:ocean_dragon_ring',
        'kubejs:titan_ring',
    ])
    event.remove('curios:hands', [
        'artifacts:feral_claws',

    ])
    event.add('curios:ring', [
        'kubejs:dragon_ring',
        'kubejs:ring_of_faeles',
        'kubejs:elf_ring',
        'kubejs:fairy_ring',
        'kubejs:lightning_dragon_ring',
        'kubejs:ocean_dragon_ring',
        'kubejs:titan_ring',
        'artifacts:feral_claws',
    ])
    event.add('kubejs:trinkets_iron', [
        'sophisticatedbackpacks:iron_backpack',
    ])
    event.add('kubejs:trinkets_netherite', [
        'sophisticatedbackpacks:netherite_backpack',
    ])
    event.add('kubejs:trinkets_diamond', [
        'sophisticatedbackpacks:diamond_backpack',
    ])
    event.add('kubejs:trinkets_gold', [
        'potion_rings_rebooted:potion_ring_of_jump_boost',
        'potion_rings_rebooted:potion_ring',
        'potion_rings_rebooted:potion_ring_of_speed',
        'potion_rings_rebooted:potion_ring_of_regeneration',
        'potion_rings_rebooted:potion_ring_of_strength',
        'potion_rings_rebooted:potion_ring_of_haste',
        'potion_rings_rebooted:potion_ring_of_resistance',
        'ars_nouveau:alchemists_crown',
        'pneumaticcraft:memory_stick',
        'sophisticatedbackpacks:gold_backpack',
        'create:goggles'
    ])
    event.add('kubejs:trinkets_ars', [
        'ars_nouveau:amulet_of_mana_boost',
        'ars_nouveau:amulet_of_mana_regen',
        'ars_nouveau:ring_of_greater_discount',
        'ars_nouveau:ring_of_lesser_discount',
        'ars_nouveau:belt_of_levitation',
        'ars_nouveau:belt_of_unstable_gifts',
        'ars_nouveau:summon_focus',
        'ars_nouveau:shapers_focus',
        'ars_nouveau:alchemists_crown',
    ])
    event.add('kubejs:trinkets_leather', [
        'sophisticatedbackpacks:backpack',
        'supplementaries:quiver',
        'toolbelt:belt',
        'tetra:modular_toolbelt',
    ])
    event.add('kubejs:trinkets_spectral_silt', [
        '#artifacts:artifacts',
        'artifacts:villager_hat',
        'artifacts:superstitious_hat',
        'artifacts:cross_necklace',
        'artifacts:panic_necklace',
        'artifacts:charm_of_sinking',
        'artifacts:cloud_in_a_bottle',
        'artifacts:antidote_vessel',
        'artifacts:universal_attractor',
        'artifacts:feral_claws',
        'artifacts:running_shoes',
        'artifacts:steadfast_spikes',
        'artifacts:flippers'
    ])
    event.add('kubejs:trinkets_cosmic_cloud', [
        'kubejs:dragon_ring',
        'kubejs:ring_of_faeles',
        'kubejs:elf_ring',
        'kubejs:fairy_ring',
        'kubejs:lightning_dragon_ring',
        'kubejs:ocean_dragon_ring',
        'kubejs:titan_ring',
    ])
    event.add('kubejs:trinkets_unspecified', [
        'doom:daisy',
        'doom:soulcube',
    ])
    event.add('kubejs:trinkets_arcane_powder', [
        'iter_rpg:arcane_bouquet',
        'iter_rpg:ametrine_geode',
        'iter_rpg:possession',
        'iter_rpg:creative_catalyst',
        'iter_rpg:whetstone',
        'iter_rpg:forgotten_knowledge',
        'iter_rpg:sharp_bone',
    ])
    event.add('kubejs:trinkets_dragon_breath', [
        'unusualend:golem_orb',
        'unusualend:nether_orb',
        'unusualend:wither_orb',
        'unusualend:shulker_orb',
    ])
    event.add('kubejs:trinkets_certus_quartz', [
        'ae2:wireless_crafting_terminal',
        'ae2wtlib:wireless_pattern_access_terminal',
        'ae2wtlib:wireless_pattern_encoding_terminal',
        'ae2wtlib:wireless_universal_terminal',
    ])
    event.add('kubejs:trinkets_redstone', [
        'iter_rpg:calibrated_lens',
    ])

    event.add('forge:tools/wooden', [
        'minecraft:wooden_sword',
        'minecraft:wooden_shovel',
        'minecraft:wooden_pickaxe',
        'minecraft:wooden_axe',
        'minecraft:wooden_hoe',
        'magistuarmory:wood_stylet',
        'magistuarmory:wood_shortsword',
        'magistuarmory:wood_pike',
        'magistuarmory:wood_ranseur',
        'magistuarmory:wood_ahlspiess',
        'magistuarmory:wood_chivalrylance',
        'magistuarmory:wood_estoc',
        'magistuarmory:wood_zweihander',
        'magistuarmory:wood_flamebladedsword',
        'magistuarmory:wood_lochaberaxe',
        'magistuarmory:wood_concavehalberd',
        'magistuarmory:wood_heavywarhammer',
        'magistuarmory:wood_lucernhammer',
        'forbidden_arcanus:wooden_blacksmith_gavel',
        'stalwart_dungeons:wooden_hammer',
        'iter_rpg:wooden_scythe',
        'aquaculture:wooden_fillet_knife',
        'better_katanas:wood_sword',
    ])
    event.add('forge:tools/stone', [
        'minecraft:stone_sword',
        'minecraft:stone_shovel',
        'minecraft:stone_pickaxe',
        'minecraft:stone_axe',
        'minecraft:stone_hoe',
        'magistuarmory:stone_stylet',
        'magistuarmory:stone_shortsword',
        'magistuarmory:stone_pike',
        'magistuarmory:stone_ranseur',
        'magistuarmory:stone_ahlspiess',
        'magistuarmory:stone_chivalrylance',
        'magistuarmory:stone_estoc',
        'magistuarmory:stone_zweihander',
        'magistuarmory:stone_flamebladedsword',
        'magistuarmory:stone_lochaberaxe',
        'magistuarmory:stone_concavehalberd',
        'magistuarmory:stone_heavywarhammer',
        'magistuarmory:stone_lucernhammer',
        'forbidden_arcanus:stone_blacksmith_gavel',
        'stalwart_dungeons:stone_hammer',
        'iter_rpg:stone_scythe',
        'aquaculture:stone_fillet_knife',
        'better_katanas:stone_katana',
    ])

    event.add('forge:tools/iron', [
        'magistuarmory:iron_stylet',
        'magistuarmory:iron_shortsword',
        'magistuarmory:iron_pike',
        'magistuarmory:iron_ranseur',
        'magistuarmory:iron_ahlspiess',
        'magistuarmory:iron_chivalrylance',
        'magistuarmory:iron_estoc',
        'magistuarmory:iron_zweihander',
        'magistuarmory:iron_flamebladedsword',
        'magistuarmory:iron_lochaberaxe',
        'magistuarmory:iron_concavehalberd',
        'magistuarmory:iron_heavywarhammer',
        'magistuarmory:iron_lucernhammer',
        'magistuarmory:messer_sword',
        'forbidden_arcanus:iron_blacksmith_gavel',
        'stalwart_dungeons:iron_hammer',
        'iter_rpg:iron_scythe',
        'aquaculture:iron_fillet_knife',
        'better_katanas:iron_katana',
        'minecolonies:iron_scimitar',
        'mutantmonsters:hulk_hammer',
        'kubejs:iron_saw',
        'kubejs:iron_knife',
    ])

    event.add('forge:tools/gold', [
        'magistuarmory:gold_stylet',
        'magistuarmory:gold_shortsword',
        'magistuarmory:gold_pike',
        'magistuarmory:gold_ranseur',
        'magistuarmory:gold_ahlspiess',
        'magistuarmory:gold_chivalrylance',
        'magistuarmory:gold_estoc',
        'magistuarmory:gold_zweihander',
        'magistuarmory:gold_flamebladedsword',
        'magistuarmory:gold_lochaberaxe',
        'magistuarmory:gold_concavehalberd',
        'magistuarmory:gold_heavywarhammer',
        'magistuarmory:gold_lucernhammer',
        'forbidden_arcanus:golden_blacksmith_gavel',
        'stalwart_dungeons:golden_hammer',
        'iter_rpg:golden_scythe',
        'aquaculture:gold_fillet_knife',
        'better_katanas:gold_katana',
        'kubejs:gold_saw',
        'kubejs:gold_knife',
    ])

    event.add('forge:tools/diamond', [
        'magistuarmory:diamond_stylet',
        'magistuarmory:diamond_shortsword',
        'magistuarmory:diamond_pike',
        'magistuarmory:diamond_ranseur',
        'magistuarmory:diamond_ahlspiess',
        'magistuarmory:diamond_chivalrylance',
        'magistuarmory:diamond_estoc',
        'magistuarmory:diamond_zweihander',
        'magistuarmory:diamond_flamebladedsword',
        'magistuarmory:diamond_lochaberaxe',
        'magistuarmory:diamond_concavehalberd',
        'magistuarmory:diamond_heavywarhammer',
        'magistuarmory:diamond_lucernhammer',
        'forbidden_arcanus:diamond_blacksmith_gavel',
        'stalwart_dungeons:diamond_hammer',
        'iter_rpg:diamond_scythe',
        'aquaculture:diamond_fillet_knife',
        'better_katanas:diamond_katana',
        'minecolonies:chiefsword',
        'kubejs:diamond_saw',
        'kubejs:diamond_knife',
    ])

    event.add('forge:tools/netherite', [
        'magistuarmory:netherite_stylet',
        'magistuarmory:netherite_shortsword',
        'magistuarmory:netherite_pike',
        'magistuarmory:netherite_ranseur',
        'magistuarmory:netherite_ahlspiess',
        'magistuarmory:netherite_chivalrylance',
        'magistuarmory:netherite_estoc',
        'magistuarmory:netherite_zweihander',
        'magistuarmory:netherite_flamebladedsword',
        'magistuarmory:netherite_lochaberaxe',
        'magistuarmory:netherite_concavehalberd',
        'magistuarmory:netherite_heavywarhammer',
        'magistuarmory:netherite_lucernhammer',
        'forbidden_arcanus:netherite_blacksmith_gavel',
        'stalwart_dungeons:netherite_hammer',
        'iter_rpg:netherite_scythe',
        'better_katanas:netherite_katana',
        'better_katanas:snake_sword',
    ])
    event.add('forge:tools/silver', [
        'magistuarmory:silver_stylet',
        'magistuarmory:silver_shortsword',
        'magistuarmory:silver_pike',
        'magistuarmory:silver_ranseur',
        'magistuarmory:silver_ahlspiess',
        'magistuarmory:silver_chivalrylance',
        'magistuarmory:silver_estoc',
        'magistuarmory:silver_zweihander',
        'magistuarmory:silver_flamebladedsword',
        'magistuarmory:silver_lochaberaxe',
        'magistuarmory:silver_concavehalberd',
        'magistuarmory:silver_heavywarhammer',
        'magistuarmory:silver_lucernhammer',
    ])
    event.add('forge:tools/steel', [
        'magistuarmory:steel_stylet',
        'magistuarmory:steel_shortsword',
        'magistuarmory:steel_pike',
        'magistuarmory:steel_ranseur',
        'magistuarmory:steel_ahlspiess',
        'magistuarmory:steel_chivalrylance',
        'magistuarmory:steel_estoc',
        'magistuarmory:steel_zweihander',
        'magistuarmory:steel_flamebladedsword',
        'magistuarmory:steel_lochaberaxe',
        'magistuarmory:steel_concavehalberd',
        'magistuarmory:steel_heavywarhammer',
        'magistuarmory:steel_lucernhammer',
        'kubejs:steel_saw',
        'kubejs:steel_knife',
    ])

    event.add('forge:tools/draco', [
        'forbidden_arcanus:draco_arcanus_sword',
        'forbidden_arcanus:draco_arcanus_shovel',
        'forbidden_arcanus:draco_arcanus_pickaxe',
        'forbidden_arcanus:draco_arcanus_axe',
        'forbidden_arcanus:draco_arcanus_hoe',
        'forbidden_arcanus:draco_arcanus_scepter',
        'forbidden_arcanus:draco_arcanus_staff',
    ])

    event.add('forge:tools/deorum', [
        'forbidden_arcanus:deorum_sword',
        'forbidden_arcanus:deorum_shovel',
        'forbidden_arcanus:deorum_pickaxe',
        'forbidden_arcanus:deorum_axe',
        'forbidden_arcanus:deorum_hoe',
        'forbidden_arcanus:deorum_blacksmith_gavel',
        'forbidden_arcanus:mystical_dagger',
        'forbidden_arcanus:slimec_pickaxe',
    ])
    event.add('forge:tools/fusion', [
        'theabyss:fusion_sword',
        'theabyss:fusion_shovel',
        'theabyss:fusion_pickaxe',
        'theabyss:fusion_axe',
        'theabyss:fusion_hoe',
    ])
    event.add('forge:tools/flint', [
        'kubejs:flint_knife',
        'kubejs:flint_pickaxe',
        'kubejs:flint_shovel',
        'kubejs:flint_hoe',
    ])

    
    
    
    event.add('forge:tools/incorythe', [
        'theabyss:incorythe_sword',
        'theabyss:incorythe_shovel',
        'theabyss:incorythe_pickaxe',
        'theabyss:incorythe_axe',
        'theabyss:incorythe_hoe',
    ])
    
    event.add('forge:tools/phantom', [
        'theabyss:phantom_sword',
        'theabyss:phantom_shovel',
        'theabyss:phantom_pickaxe',
        'theabyss:phantom_axe',
        'theabyss:phantom_hoe',
    ])
    event.add('forge:tools/garnite', [
        'theabyss:garnite_sword',
        'theabyss:garnite_shovel',
        'theabyss:garnite_pickaxe',
        'theabyss:garnite_axe',
        'theabyss:garnite_hoe',
    ])
    event.add('forge:tools/unorithe', [
        'theabyss:unorithe_sword',
        'theabyss:unorithe_shovel',
        'theabyss:unorithe_pick_axe',
        'theabyss:unorithe_axe',
        'theabyss:unorithe_hoe',
    ])
    event.add('forge:tools/knight', [
        'theabyss:knight_sword',
        'theabyss:knight_shovel',
        'theabyss:knight_pick_axe',
        'theabyss:knight_axe',
        'theabyss:knight_hoe',
        'theabyss:bricked_knight_sword',
        'theabyss:abyss_sword',
    ])
    event.add('forge:tools/ignisithe', [
        'theabyss:ignisithe_sword',
    ])
    event.add('forge:tools/titan_bone', [
        'theabyss:bone_sword_item',
        'theabyss:bone_shovel',
        'theabyss:bone_pickaxe',
        'theabyss:bone_axe',
        'theabyss:bone_hoe',
    ])
    event.add('forge:tools/tungsten', [
        'stalwart_dungeons:tungsten_sword',
        'stalwart_dungeons:tungsten_shovel',
        'stalwart_dungeons:tungsten_pickaxe',
        'stalwart_dungeons:tungsten_axe',
        'stalwart_dungeons:tungsten_hoe',
        'stalwart_dungeons:tungsten_hammer',
    ])
    event.add('forge:tools/chorundum', [
        'stalwart_dungeons:chorundum_sword',
        'stalwart_dungeons:chorundum_shovel',
        'stalwart_dungeons:chorundum_pickaxe',
        'stalwart_dungeons:chorundum_axe',
        'stalwart_dungeons:chorundum_hoe',
    ])
    event.add('forge:tools/forest', [
        'iter_rpg:forest_sword',
        'iter_rpg:forest_shovel',
        'iter_rpg:forest_pickaxe',
        'iter_rpg:forest_axe',
        'iter_rpg:forest_hoe',
        'better_katanas:swordoftempest',
    ])

    event.add('forge:tools/ocean', [
        'iter_rpg:ocean_sword',
        'iter_rpg:ocean_shovel',
        'iter_rpg:ocean_pickaxe',
        'iter_rpg:ocean_axe',
        'iter_rpg:ocean_hoe',
    ])
    event.add('forge:tools/end', [
        'iter_rpg:end_sword',
        'better_katanas:yami_katana',
    ])
    event.add('forge:tools/elemental', [
        'iter_rpg:elemental_sword',
    ])
    event.add('forge:tools/sky', [
        'iter_rpg:sky_sword',
        'iter_rpg:sky_shovel',
        'iter_rpg:sky_pickaxe',
        'iter_rpg:sky_axe',
        'iter_rpg:sky_hoe',
    ])
    event.add('forge:tools/hell', [
        'iter_rpg:hell_sword',
        'iter_rpg:hell_shovel',
        'iter_rpg:hell_pickaxe',
        'iter_rpg:hell_axe',
        'iter_rpg:hell_hoe',
        'better_katanas:murasame',
    ])
    event.add('forge:tools/adamantite', [
        'enlightened_end:adamantite_sword',
        'enlightened_end:adamantite_shovel',
        'enlightened_end:adamantite_pickaxe',
        'enlightened_end:adamantite_axe',
        'enlightened_end:adamantite_hoe',
    ])
    event.add('forge:tools/neptunium', [
        'aquaculture:neptunium_sword',
        'aquaculture:neptunium_shovel',
        'aquaculture:neptunium_pickaxe',
        'aquaculture:neptunium_axe',
        'aquaculture:neptunium_hoe',
        'aquaculture:neptunium_fillet_knife',
    ])
    event.add('forge:tools/nether_star', [
        'theabyss:nosaj_sword',
        'theabyss:incorythe_sword_mkii',
        'better_katanas:void_katana',
        'doom:axe_marauder_open',
        'doom:sentinelhammer',
        'doom:darklordcrucible',
    ])
    event.add('forge:tools/aberythe', [
        'theabyss:aberythe_sword',
        'theabyss:aberythe_hoe',
        'theabyss:aberythe_shovel',
        'theabyss:aberythe_pickaxe',
        'theabyss:aberythe_axe',
    ])
    event.add('forge:tools/ars', [
        'ars_nouveau:enchanters_sword',
    ])
    event.add('forge:tools/chaos', [
        'born_in_chaos_v1:spiritual_sword',
        'born_in_chaos_v1:dark_ritual_dagger',
    ])
    event.add('forge:tools/dark_metal', [
        'born_in_chaos_v1:sharpened_dark_metal_sword',
        'born_in_chaos_v1:skullbreaker_hammer',
        'born_in_chaos_v1:intoxicating_dagger',
        'born_in_chaos_v1:trident_hayfork',
        'born_in_chaos_v1:soul_cutlass',
        'born_in_chaos_v1:great_reaper_axe',
        'born_in_chaos_v1:nightmare_scythe',
    ])
    event.add('forge:tools/ametrine', [
        'iter_rpg:tormentor',
    ])
    event.add('forge:tools/infected', [
        'mutationcraft:cavalry_sword',
        'mutationcraft:rapier',
        'mutationcraft:battle_axe',
        'mutationcraft:nordic_axe',
        'mutationcraft:pole_axe',
        'mutationcraft:halberd',
        'mutationcraft:flanged_mace',
    ])
    event.add('forge:tools/obsidian', [
        'better_katanas:obsidian_katana',
    ])
    event.add('forge:tools/emerald', [
        'better_katanas:emerald_katana',
    ])
    event.add('forge:tools/amethyst', [
        'better_katanas:amethyst_katana',
    ])
    event.add('forge:tools/nether_brick', [
        'stalwart_dungeons:nether_hammer',
    ])
    event.add('forge:tools/wither_bone', [
        'mutantmore:blazing_scimitar',
    ])
    event.add('forge:tools/arcane_powder', [
        'iter_rpg:shimmer',
    ])
    event.add('forge:tools/gobsteel', [
        'iter_rpg:humie_butcher',
        'iter_rpg:very_good_and_cheerful_rapier',
    ])
    event.add('forge:tools/bone', [
        'iter_rpg:bloodthirst',
    ])
    event.add('forge:tools/awful', [
        'stalwart_dungeons:awful_dagger',
    ])
    event.add('forge:tools/nautilus_shell', [
        'minecraft:trident',
    ])
    event.add('forge:tools/atomic', [
        'mekanism:atomic_disassembler',
    ])
    event.add('forge:tools/copper', [
        'kubejs:copper_saw',
        'kubejs:copper_knife',
    ])
    event.add('forge:tools/bronze', [
        'kubejs:bronze_saw',
        'kubejs:bronze_knife',
    ])
    event.add('forge:tools/argent_energy', [
        'doom:argent_axe',
        'doom:argent_hoe',
        'doom:argent_paxel',
        'doom:argent_pickaxe',
        'doom:argent_shovel',
        'doom:argent_sword',
    ])
    event.add('forge:tools', [
        '#forge:tools/gold',
        '#forge:tools/wooden',
        '#forge:tools/stone',
        '#forge:tools/iron',
        '#forge:tools/diamond',
        '#forge:tools/netherite',
        '#forge:tools/silver',
        '#forge:tools/steel',
        '#forge:tools/draco',
        '#forge:tools/deorum',
        '#forge:tools/fusion',
        '#forge:tools/incorythe',
        '#forge:tools/phantom',
        '#forge:tools/garnite',
        '#forge:tools/unorithe',
        '#forge:tools/knight',
        '#forge:tools/ignisithe',
        '#forge:tools/titan_bone',
        '#forge:tools/tungsten',
        '#forge:tools/chorundum',
        '#forge:tools/forest',
        '#forge:tools/ocean',
        '#forge:tools/end',
        '#forge:tools/elemental',
        '#forge:tools/sky',
        '#forge:tools/hell',
        '#forge:tools/adamantite',
        '#forge:tools/neptunium',
        '#forge:tools/nether_star',
        '#forge:tools/aberythe',
        '#forge:tools/ars',
        '#forge:tools/chaos',
        '#forge:tools/dark_metal',
        '#forge:tools/ametrine',
        '#forge:tools/infected',
        '#forge:tools/obsidian',
        '#forge:tools/emerald',
        '#forge:tools/amethyst',
        '#forge:tools/nether_brick',
        '#forge:tools/wither_bone',
        '#forge:tools/arcane_powder',
        '#forge:tools/gobsteel',
        '#forge:tools/bone',
        '#forge:tools/awful',
        '#forge:tools/nautilus_shell',
        '#forge:tools/atomic',
        '#forge:tools/argent_energy',
        '#forge:tools/flint',
        
    ])
    event.add('forge:helmets', [
        'minecraft:chainmail_helmet',
        'alexsmobs:froststalker_helmet',
        'create:copper_diving_helmet',
        'create:netherite_diving_helmet',
        'bygonenether:gilded_netherite_helmet',
        'forbidden_arcanus:draco_arcanus_helmet',
        'forbidden_arcanus:tyr_helmet',
        'forbidden_arcanus:mortem_helmet',
        'mekanism:mekasuit_helmet',
        'minecolonies:plate_armor_helmet',
        'pneumaticcraft:compressed_iron_helmet',
        'pneumaticcraft:pneumatic_helmet',
        'theabyss:fusion_armor_helmet',
        'theabyss:incorythe_armor_helmet',
        'theabyss:phantom_armor_helmet',
        'theabyss:ignisithe_armor_helmet',
        'theabyss:unorithe_armor_helmet',
        'theabyss:garnite_armor_helmet',
        'theabyss:glacerythe_armor_helmet',
        'theabyss:bone_armor_helmet',
        'theabyss:aberythe_armor_helmet',
        'born_in_chaos_v1:dark_metal_armor_helmet',
        'stalwart_dungeons:tungsten_helmet',
        'stalwart_dungeons:warted_tungsten_helmet',
        'stalwart_dungeons:chorundum_armor_helmet',
        'iter_rpg:sky_armor_helmet',
        'iter_rpg:forest_armor_helmet',
        'iter_rpg:ocean_armor_helmet',
        'iter_rpg:hell_armor_helmet',
        'iter_rpg:end_armor_helmet',
        'enlightened_end:adamantite_armor_helmet',
        'aquaculture:neptunium_helmet',
        'mutationcraft:rusted_metal_armor_helmet',
        'mutationcraft:metal_armor_helmet',
        'magistuarmory:maximilian_helmet',
        'magistuarmory:ceremonialarmet',
        'minecraft:leather_helmet',
        'alexsmobs:fedora',
        'minecolonies:pirate_hat',
        'minecolonies:pirate_cap',
        'quark:forgotten_hat',
        'minecraft:turtle_helmet',
        'alexsmobs:moose_headgear',
        'alexsmobs:frontier_cap',
        'alexsmobs:spiked_turtle_shell',
        'alexsmobs:novelty_hat',
        'ars_nouveau:novice_hood',
        'ars_nouveau:apprentice_hood',
        'ars_nouveau:archmage_hood',
        'mutantmore:mutant_wither_skeleton_skull',

    ])
    event.add('forge:chestplates', [
        'minecraft:chainmail_chestplate',
        'create:copper_backtank',
        'create:netherite_backtank',
        'bygonenether:gilded_netherite_chestplate',
        'forbidden_arcanus:draco_arcanus_chestplate',
        'forbidden_arcanus:tyr_chestplate',
        'forbidden_arcanus:mortem_chestplate',
        'mekanism:mekasuit_bodyarmor',
        'minecolonies:plate_armor_chest',
        'pneumaticcraft:compressed_iron_chestplate',
        'pneumaticcraft:pneumatic_chestplate',
        'theabyss:fusion_armor_chestplate',
        'theabyss:incorythe_armor_chestplate',
        'theabyss:phantom_armor_chestplate',
        'theabyss:ignisithe_armor_chestplate',
        'theabyss:unorithe_armor_chestplate',
        'theabyss:garnite_armor_chestplate',
        'theabyss:glacerythe_armor_chestplate',
        'theabyss:bone_armor_chestplate',
        'theabyss:aberythe_armor_chestplate',
        'born_in_chaos_v1:dark_metal_armor_chestplate',
        'stalwart_dungeons:tungsten_chestplate',
        'stalwart_dungeons:warted_tungsten_chestplate',
        'stalwart_dungeons:chorundum_armor_chestplate',
        'iter_rpg:sky_armor_chestplate',
        'iter_rpg:forest_armor_chestplate',
        'iter_rpg:ocean_armor_chestplate',
        'iter_rpg:hell_armor_chestplate',
        'iter_rpg:end_armor_chestplate',
        'enlightened_end:adamantite_armor_chestplate',
        'aquaculture:neptunium_chestplate',
        'mutationcraft:rusted_metal_armor_chestplate',
        'mutationcraft:metal_armor_chestplate',
        'magistuarmory:maximilian_chestplate',
        'magistuarmory:crusader_chestplate',
        'magistuarmory:ceremonial_chestplate',
        'minecraft:leather_chestplate',
        'minecolonies:pirate_top',
        'minecolonies:pirate_chest',
        'alexsmobs:crocodile_chestplate',
        'alexsmobs:tarantula_hawk_elytra',
        'minecraft:elytra',
        'alexsmobs:rocky_chestplate',
        'alexsmobs:unsettling_kimono',
        'mekanism:jetpack_armored',
        'ars_nouveau:novice_robes',
        'ars_nouveau:apprentice_robes',
        'ars_nouveau:archmage_robes',
        'mutantmonsters:mutant_skeleton_chestplate',
        'mutantmore:mutant_wither_skeleton_chestplate',

    ])
    event.add('forge:leggings', [
        'minecraft:chainmail_leggings',
        'bygonenether:gilded_netherite_leggings',
        'forbidden_arcanus:draco_arcanus_leggings',
        'forbidden_arcanus:tyr_leggings',
        'forbidden_arcanus:mortem_leggings',
        'mekanism:mekasuit_pants',
        'minecolonies:plate_armor_legs',
        'pneumaticcraft:compressed_iron_leggings',
        'pneumaticcraft:pneumatic_leggings',
        'theabyss:fusion_armor_leggings',
        'theabyss:incorythe_armor_leggings',
        'theabyss:phantom_armor_leggings',
        'theabyss:ignisithe_armor_leggings',
        'theabyss:unorithe_armor_leggings',
        'theabyss:garnite_armor_leggings',
        'theabyss:glacerythe_armor_leggings',
        'theabyss:bone_armor_leggings',
        'theabyss:aberythe_armor_leggings',
        'born_in_chaos_v1:dark_metal_armor_leggings',
        'stalwart_dungeons:tungsten_leggings',
        'stalwart_dungeons:warted_tungsten_leggings',
        'stalwart_dungeons:chorundum_armor_leggings',
        'iter_rpg:sky_armor_leggings',
        'iter_rpg:forest_armor_leggings',
        'iter_rpg:ocean_armor_leggings',
        'iter_rpg:hell_armor_leggings',
        'iter_rpg:end_armor_leggings',
        'enlightened_end:adamantite_armor_leggings',
        'aquaculture:neptunium_leggings',
        'mutationcraft:rusted_metal_armor_leggings',
        'mutationcraft:metal_armor_leggings',
        'magistuarmory:maximilian_leggings',
        'minecraft:leather_leggings',
        'magistuarmory:cuirassier_leggings',
        'minecolonies:pirate_leggins',
        'minecolonies:pirate_legs',
        'alexsmobs:centipede_leggings',
        'alexsmobs:emu_leggings',
        'mekanism:free_runners_armored',
        'ars_nouveau:novice_leggings',
        'ars_nouveau:apprentice_leggings',
        'ars_nouveau:archmage_leggings',
        'mutantmore:mutant_wither_skeleton_leggings',

    ])
    event.add('forge:boots', [
        'minecraft:chainmail_boots',
        'create:copper_diving_boots',
        'create:netherite_diving_boots',
        'bygonenether:gilded_netherite_boots',
        'forbidden_arcanus:draco_arcanus_boots',
        'forbidden_arcanus:tyr_boots',
        'forbidden_arcanus:mortem_boots',
        'mekanism:mekasuit_boots',
        'minecolonies:plate_armor_boots',
        'pneumaticcraft:compressed_iron_boots',
        'pneumaticcraft:pneumatic_boots',
        'theabyss:fusion_armor_boots',
        'theabyss:incorythe_armor_boots',
        'theabyss:phantom_armor_boots',
        'theabyss:ignisithe_armor_boots',
        'theabyss:unorithe_armor_boots',
        'theabyss:garnite_armor_boots',
        'theabyss:glacerythe_armor_boots',
        'theabyss:bone_armor_boots',
        'theabyss:aberythe_armor_boots',
        'born_in_chaos_v1:dark_metal_armor_boots',
        'stalwart_dungeons:tungsten_boots',
        'stalwart_dungeons:warted_tungsten_boots',
        'stalwart_dungeons:chorundum_armor_boots',
        'iter_rpg:sky_armor_boots',
        'iter_rpg:forest_armor_boots',
        'iter_rpg:ocean_armor_boots',
        'iter_rpg:hell_armor_boots',
        'iter_rpg:end_armor_boots',
        'enlightened_end:adamantite_armor_boots',
        'aquaculture:neptunium_boots',
        'mutationcraft:rusted_metal_armor_boots',
        'mutationcraft:metal_armor_boots',
        'magistuarmory:maximilian_boots',
        'magistuarmory:ceremonial_boots',
        'minecraft:leather_boots',
        'alexsmobs:roadrunner_boots',
        'minecolonies:pirate_boots',
        'minecolonies:pirate_shoes',
        'alexsmobs:flying_fish_boots',
        'ars_nouveau:novice_boots',
        'ars_nouveau:apprentice_boots',
        'ars_nouveau:archmage_boots',
        'mutantmore:mutant_wither_skeleton_boots',

    ])
    event.add('forge:armor/chain', [
        'minecraft:chainmail_helmet',
        'minecraft:chainmail_chestplate',
        'minecraft:chainmail_leggings',
        'minecraft:chainmail_boots',
    ])
    event.add('forge:armor/frost', [
        'alexsmobs:froststalker_helmet',
    ])
    event.add('forge:armor/copper', [
        'create:copper_diving_boots',
        'create:copper_diving_helmet',
        'create:copper_backtank',

    ])
    event.add('forge:armor/netherite', [
        'create:netherite_diving_boots',
        'create:netherite_diving_helmet',
        'create:netherite_backtank',
        'bygonenether:gilded_netherite_helmet',
        'bygonenether:gilded_netherite_chestplate',
        'bygonenether:gilded_netherite_leggings',
        'bygonenether:gilded_netherite_boots',
    ])
    event.add('forge:armor/draco', [
        'forbidden_arcanus:draco_arcanus_helmet',
        'forbidden_arcanus:draco_arcanus_chestplate',
        'forbidden_arcanus:draco_arcanus_leggings',
        'forbidden_arcanus:draco_arcanus_boots',
        'forbidden_arcanus:tyr_helmet',
        'forbidden_arcanus:tyr_chestplate',
        'forbidden_arcanus:tyr_leggings',
        'forbidden_arcanus:tyr_boots',
    ])
    event.add('forge:armor/mortem', [
        'forbidden_arcanus:mortem_helmet',
        'forbidden_arcanus:mortem_chestplate',
        'forbidden_arcanus:mortem_leggings',
        'forbidden_arcanus:mortem_boots',
        
    ])
    event.add('forge:armor/hdpe', [
        'mekanism:mekasuit_helmet',
        'mekanism:mekasuit_bodyarmor',
        'mekanism:mekasuit_pants',
        'mekanism:mekasuit_boots',
        
    ])
    event.add('forge:armor/iron', [
        'minecolonies:plate_armor_helmet',
        'minecolonies:plate_armor_chest',
        'minecolonies:plate_armor_legs',
        'minecolonies:plate_armor_boots',
        
    ])
    event.add('forge:armor/compressed_iron', [
        'pneumaticcraft:compressed_iron_helmet',
        'pneumaticcraft:compressed_iron_chestplate',
        'pneumaticcraft:compressed_iron_leggings',
        'pneumaticcraft:compressed_iron_boots',
        'pneumaticcraft:pneumatic_helmet',
        'pneumaticcraft:pneumatic_chestplate',
        'pneumaticcraft:pneumatic_leggings',
        'pneumaticcraft:pneumatic_boots',
        
    ])
    event.add('forge:armor/fusion', [
        'theabyss:fusion_armor_helmet',
        'theabyss:fusion_armor_chestplate',
        'theabyss:fusion_armor_leggings',
        'theabyss:fusion_armor_boots',
        
    ])
    event.add('forge:armor/incorythe', [
        'theabyss:incorythe_armor_helmet',
        'theabyss:incorythe_armor_chestplate',
        'theabyss:incorythe_armor_leggings',
        'theabyss:incorythe_armor_boots',
    ])
    event.add('forge:armor/phantom', [
        'theabyss:phantom_armor_helmet',
        'theabyss:phantom_armor_chestplate',
        'theabyss:phantom_armor_leggings',
        'theabyss:phantom_armor_boots',
    ])
    event.add('forge:armor/ignisithe', [
        'theabyss:ignisithe_armor_helmet',
        'theabyss:ignisithe_armor_chestplate',
        'theabyss:ignisithe_armor_leggings',
        'theabyss:ignisithe_armor_boots',
    ])
    event.add('forge:armor/unorithe', [
        'theabyss:unorithe_armor_helmet',
        'theabyss:unorithe_armor_chestplate',
        'theabyss:unorithe_armor_leggings',
        'theabyss:unorithe_armor_boots',
    ])
    event.add('forge:armor/garnite', [
        'theabyss:garnite_armor_helmet',
        'theabyss:garnite_armor_chestplate',
        'theabyss:garnite_armor_leggings',
        'theabyss:garnite_armor_boots',
    ])
    event.add('forge:armor/glacerythe', [
        'theabyss:glacerythe_armor_helmet',
        'theabyss:glacerythe_armor_chestplate',
        'theabyss:glacerythe_armor_leggings',
        'theabyss:glacerythe_armor_boots',
    ])
    event.add('forge:armor/titan_bone', [
        'theabyss:bone_armor_helmet',
        'theabyss:bone_armor_chestplate',
        'theabyss:bone_armor_leggings',
        'theabyss:bone_armor_boots',
    ])
    event.add('forge:armor/aberythe', [
        'theabyss:aberythe_armor_helmet',
        'theabyss:aberythe_armor_chestplate',
        'theabyss:aberythe_armor_leggings',
        'theabyss:aberythe_armor_boots',
    ])
    event.add('forge:armor/dark_metal', [
        'born_in_chaos_v1:dark_metal_armor_helmet',
        'born_in_chaos_v1:dark_metal_armor_chestplate',
        'born_in_chaos_v1:dark_metal_armor_leggings',
        'born_in_chaos_v1:dark_metal_armor_boots',
    ])
    event.add('forge:armor/tungsten', [
        'stalwart_dungeons:tungsten_helmet',
        'stalwart_dungeons:tungsten_chestplate',
        'stalwart_dungeons:tungsten_leggings',
        'stalwart_dungeons:tungsten_boots',
        'stalwart_dungeons:warted_tungsten_helmet',
        'stalwart_dungeons:warted_tungsten_chestplate',
        'stalwart_dungeons:warted_tungsten_leggings',
        'stalwart_dungeons:warted_tungsten_boots',
    ])
    event.add('forge:armor/chorundum', [
        'stalwart_dungeons:chorundum_armor_helmet',
        'stalwart_dungeons:chorundum_armor_chestplate',
        'stalwart_dungeons:chorundum_armor_leggings',
        'stalwart_dungeons:chorundum_armor_boots',
    ])
    event.add('forge:armor/sky', [
        'iter_rpg:sky_armor_helmet',
        'iter_rpg:sky_armor_chestplate',
        'iter_rpg:sky_armor_leggings',
        'iter_rpg:sky_armor_boots',
    ])
    event.add('forge:armor/forest', [
        'iter_rpg:forest_armor_helmet',
        'iter_rpg:forest_armor_chestplate',
        'iter_rpg:forest_armor_leggings',
        'iter_rpg:forest_armor_boots',
    ])
    event.add('forge:armor/ocean', [
        'iter_rpg:ocean_armor_helmet',
        'iter_rpg:ocean_armor_chestplate',
        'iter_rpg:ocean_armor_leggings',
        'iter_rpg:ocean_armor_boots',
    ])
    event.add('forge:armor/hell', [
        'iter_rpg:hell_armor_helmet',
        'iter_rpg:hell_armor_chestplate',
        'iter_rpg:hell_armor_leggings',
        'iter_rpg:hell_armor_boots',
    ])
    event.add('forge:armor/end', [
        'iter_rpg:end_armor_helmet',
        'iter_rpg:end_armor_chestplate',
        'iter_rpg:end_armor_leggings',
        'iter_rpg:end_armor_boots',
    ])
    event.add('forge:armor/adamantite', [
        'enlightened_end:adamantite_armor_helmet',
        'enlightened_end:adamantite_armor_chestplate',
        'enlightened_end:adamantite_armor_leggings',
        'enlightened_end:adamantite_armor_boots',
    ])
    event.add('forge:armor/neptunium', [
        'aquaculture:neptunium_helmet',
        'aquaculture:neptunium_chestplate',
        'aquaculture:neptunium_leggings',
        'aquaculture:neptunium_boots',
    ])
    event.add('forge:armor/steel', [
        'mutationcraft:rusted_metal_armor_helmet',
        'mutationcraft:rusted_metal_armor_chestplate',
        'mutationcraft:rusted_metal_armor_leggings',
        'mutationcraft:rusted_metal_armor_boots',
        'mutationcraft:metal_armor_helmet',
        'mutationcraft:metal_armor_chestplate',
        'mutationcraft:metal_armor_leggings',
        'mutationcraft:metal_armor_boots',
        'magistuarmory:maximilian_helmet',
        'magistuarmory:maximilian_chestplate',
        'magistuarmory:maximilian_leggings',
        'magistuarmory:maximilian_boots',
        'magistuarmory:crusader_chestplate',
        'magistuarmory:ceremonialarmet',
        'magistuarmory:ceremonial_chestplate',
        'magistuarmory:ceremonial_boots',
    ])
    event.add('forge:armor/leather', [
        'minecraft:leather_helmet',
        'minecraft:leather_chestplate',
        'minecraft:leather_leggings',
        'minecraft:leather_boots',
        'alexsmobs:roadrunner_boots',
        'alexsmobs:fedora',
        'magistuarmory:cuirassier_leggings',
        'minecolonies:pirate_leggins',
        'minecolonies:pirate_hat',
        'minecolonies:pirate_top',
        'minecolonies:pirate_boots',
        'minecolonies:pirate_cap',
        'minecolonies:pirate_chest',
        'minecolonies:pirate_legs',
        'minecolonies:pirate_shoes',
        'quark:forgotten_hat',
    ])
    event.add('forge:armor/scute', [
        'minecraft:turtle_helmet',
    ])
    event.add('forge:armor/crocodile_scute', [
        'alexsmobs:crocodile_chestplate',
    ])
    event.add('forge:armor/centipede_leg', [
        'alexsmobs:centipede_leggings',
    ])
    event.add('forge:armor/moose_antler', [
        'alexsmobs:moose_headgear',
    ])
    event.add('forge:armor/raccoon_tail', [
        'alexsmobs:frontier_cap',
    ])
    event.add('forge:armor/spiked_scute', [
        'alexsmobs:spiked_turtle_shell',
    ])
    event.add('forge:armor/kangaroo_hide', [
        'alexsmobs:emu_leggings',
    ])
    event.add('forge:armor/tarantula_hawk_wing', [
        'alexsmobs:tarantula_hawk_elytra',
    ])
    event.add('forge:armor/phantom_membrane', [
        'minecraft:elytra',
    ])
    event.add('forge:armor/rocky_shell', [
        'alexsmobs:rocky_chestplate',
    ])
    event.add('forge:armor/flying_fish', [
        'alexsmobs:flying_fish_boots',
    ])
    event.add('forge:armor/fish_bones', [
        'alexsmobs:novelty_hat',
    ])
    event.add('forge:armor/red_wool', [
        'alexsmobs:unsettling_kimono',
    ])
    event.add('forge:armor/bronze', [
        'mekanism:free_runners_armored',
        'mekanism:jetpack_armored',
    ])
    event.add('forge:armor/magebloom_fiber', [
        'ars_nouveau:novice_boots',
        'ars_nouveau:novice_leggings',
        'ars_nouveau:novice_robes',
        'ars_nouveau:novice_hood',
        'ars_nouveau:apprentice_boots',
        'ars_nouveau:apprentice_leggings',
        'ars_nouveau:apprentice_robes',
        'ars_nouveau:apprentice_hood',
        'ars_nouveau:archmage_boots',
        'ars_nouveau:archmage_leggings',
        'ars_nouveau:archmage_robes',
        'ars_nouveau:archmage_hood',
    ])
    event.add('forge:armor/bone', [
        'mutantmonsters:mutant_skeleton_chestplate',
    ])
    event.add('forge:armor/wither_bone', [
        'mutantmore:mutant_wither_skeleton_chestplate',
        'mutantmore:mutant_wither_skeleton_skull',
        'mutantmore:mutant_wither_skeleton_leggings',
        'mutantmore:mutant_wither_skeleton_boots',
    ])
    event.add('kubejs:saws', [
        'kubejs:bronze_saw',
        'kubejs:copper_saw',
        'kubejs:diamond_saw',
        'kubejs:gold_saw',
        'kubejs:iron_saw',
        'kubejs:steel_saw',
    ])
    event.add('kubejs:knives', [
        'kubejs:bronze_knife',
        'kubejs:copper_knife',
        'kubejs:diamond_knife',
        'kubejs:gold_knife',
        'kubejs:iron_knife',
        'kubejs:steel_knife',
        'kubejs:flint_knife',
    ])
    event.add('forge:string', [
        'kubejs:grass_string',
    ])
    event.add('forge:tools/axes', [
        'forbidden_arcanus:draco_arcanus_axe',
        'forbidden_arcanus:deorum_axe',
        'theabyss:fusion_axe',
        'theabyss:incorythe_axe',
        'theabyss:phantom_axe',
        'theabyss:knight_axe',
        'theabyss:unorithe_axe',
        'theabyss:garnite_axe',
        'stalwart_dungeons:tungsten_axe',
        'theabyss:bone_axe',
        'stalwart_dungeons:chorundum_axe',
        'iter_rpg:forest_axe',
        'iter_rpg:ocean_axe',
        'iter_rpg:sky_axe',
        'enlightened_end:adamantite_axe',
        'iter_rpg:hell_axe',
        'aquaculture:neptunium_axe',
        'theabyss:aberythe_axe',
        'born_in_chaos_v1:great_reaper_axe',
        'mutationcraft:nordic_axe',
        'doom:argent_paxel',
        'kubejs:bronze_saw',
        'kubejs:copper_saw',
        'kubejs:diamond_saw',
        'kubejs:gold_saw',
        'kubejs:iron_saw',
        'kubejs:steel_saw',
        'kubejs:flint_hatchet',




    ])
    event.add('kubejs:tool_reforge', [
        '#forge:tools/gold',
        '#forge:tools/wooden',
        '#forge:tools/stone',
        '#forge:tools/iron',
        '#forge:tools/diamond',
        '#forge:tools/netherite',
        '#forge:tools/silver',
        '#forge:tools/steel',
        '#forge:tools/draco',
        '#forge:tools/deorum',
        '#forge:tools/fusion',
        '#forge:tools/incorythe',
        '#forge:tools/phantom',
        '#forge:tools/garnite',
        '#forge:tools/unorithe',
        '#forge:tools/knight',
        '#forge:tools/ignisithe',
        '#forge:tools/titan_bone',
        '#forge:tools/tungsten',
        '#forge:tools/chorundum',
        '#forge:tools/forest',
        '#forge:tools/ocean',
        '#forge:tools/end',
        '#forge:tools/elemental',
        '#forge:tools/sky',
        '#forge:tools/hell',
        '#forge:tools/adamantite',
        '#forge:tools/neptunium',
        '#forge:tools/nether_star',
        '#forge:tools/aberythe',
        '#forge:tools/ars',
        '#forge:tools/chaos',
        '#forge:tools/dark_metal',
        '#forge:tools/ametrine',
        '#forge:tools/infected',
        '#forge:tools/obsidian',
        '#forge:tools/emerald',
        '#forge:tools/amethyst',
        '#forge:tools/nether_brick',
        '#forge:tools/wither_bone',
        '#forge:tools/arcane_powder',
        '#forge:tools/gobsteel',
        '#forge:tools/bone',
        '#forge:tools/awful',
        '#forge:tools/nautilus_shell',
        '#forge:tools/atomic',
        '#forge:tools/argent_energy',
        '#forge:tools/flint',
        '#forge:tools/copper',
        '#forge:tools/bronze',
    ])
    event.add('forge:seeds', [
        'alcocraftplus:hop_seeds'
    ])

    event.add('forge:ender_pearls', [
        'theabyss:mutated_enderpearl',
        'bygonenether:warped_ender_pearl'
    ])
    

})
ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', [
        'kubejs:reforging_station',
        'kubejs:charred_stone',
    ])
    event.add('minecraft:mineable/shovel', [
        'kubejs:charred_dirt',
        'kubejs:charred_grass',
        'kubejs:charred_earth',
    ])
    event.add('ars_nouveau:stripped_logs', [
        'ars_nouveau:stripped_blue_archwood_log',
        'ars_nouveau:stripped_green_archwood_log',
        'ars_nouveau:stripped_red_archwood_log',
        'ars_nouveau:stripped_purple_archwood_log',
    ])
    event.add('minecraft:beds', [
        '#comforts:sleeping_bags',
    ])

})

ServerEvents.tags('worldgen/biome', event => {
    event.add('minecraft:is_overworld', [
        "#tectonic:all_tectonic_biomes",
        "#wythers:is_america",
        "#wythers:is_asia",
        "#wythers:is_australia",
        "#wythers:is_dark_forest",
        "#wythers:is_desert",
        "#wythers:is_swamp",
        "wythers:ancient_copper_beech_forest",
    "wythers:ancient_emerald_beech_forest",
    "wythers:ancient_golden_beech_forest",
    "wythers:ancient_mossy_swamp",
    "wythers:ancient_moss_forest",
    "wythers:ancient_oak_swamp",
    "wythers:ancient_taiga",
    "wythers:andesite_crags",
    "wythers:aspen_crags",
    "wythers:autumnal_birch_forest",
    "wythers:autumnal_crags",
    "wythers:autumnal_flower_forest",
    "wythers:autumnal_forest",
    "wythers:autumnal_forest_edge",
    "wythers:autumnal_plains",
    "wythers:autumnal_swamp",
    "wythers:ayers_rock",
    "wythers:badlands_canyon",
    "wythers:badlands_desert",
    "wythers:badlands_river",
    "wythers:bamboo_jungle_canyon",
    "wythers:bamboo_jungle_highlands",
    "wythers:bamboo_jungle_swamp",
    "wythers:bamboo_swamp",
    "wythers:bayou",
    "wythers:berry_bog",
    "wythers:billabong",
    "wythers:birch_swamp",
    "wythers:birch_taiga",
    "wythers:black_beach",
    "wythers:black_river",
    "wythers:boreal_forest_red",
    "wythers:boreal_forest_yellow",
    "wythers:cactus_desert",
    "wythers:calcite_caverns",
    "wythers:calcite_coast",
    "wythers:chaparral",
    "wythers:coastal_mangroves",
    "wythers:cold_island",
    "wythers:cold_plains",
    "wythers:cold_stony_shore",
    "wythers:cool_forest",
    "wythers:cool_forest_edge",
    "wythers:cool_plains",
    "wythers:cool_stony_canyons",
    "wythers:cool_stony_peaks",
    "wythers:crimson_tundra",
    "wythers:danakil_desert",
    "wythers:deepslate_shore",
    "wythers:deep_dark_forest",
    "wythers:deep_dark_incursion",
    "wythers:deep_desert",
    "wythers:deep_desert_river",
    "wythers:deep_icy_ocean",
    "wythers:deep_snowy_taiga",
    "wythers:deep_underground",
    "wythers:desert_beach",
    "wythers:desert_island",
    "wythers:desert_lakes",
    "wythers:desert_pinnacles",
    "wythers:desert_river",
    "wythers:dripleaf_swamp",
    "wythers:dry_savanna",
    "wythers:dry_tropical_forest",
    "wythers:dry_tropical_grassland",
    "wythers:eucalyptus_deanei_forest",
    "wythers:eucalyptus_jungle",
    "wythers:eucalyptus_jungle_canyon",
    "wythers:eucalyptus_salubris_woodland",
    "wythers:eucalyptus_woodland",
    "wythers:fen",
    "wythers:flooded_jungle",
    "wythers:flooded_rainforest",
    "wythers:flooded_savanna",
    "wythers:flooded_temperate_rainforest",
    "wythers:flowering_pantanal",
    "wythers:forbidden_forest",
    "wythers:forested_highlands",
    "wythers:forest_edge",
    "wythers:frigid_island",
    "wythers:frozen_island",
    "wythers:fungous_dripstone_caves",
    "wythers:giant_sequoia_forest",
    "wythers:glacial_cliffs",
    "wythers:granite_canyon",
    "wythers:gravelly_beach",
    "wythers:gravelly_river",
    "wythers:guelta",
    "wythers:harvest_fields",
    "wythers:highlands",
    "wythers:highland_plains",
    "wythers:highland_tropical_rainforest",
    "wythers:huangshan_highlands",
    "wythers:humid_tropical_grassland",
    "wythers:ice_cap",
    "wythers:icy_crags",
    "wythers:icy_ocean",
    "wythers:icy_river",
    "wythers:icy_shore",
    "wythers:icy_volcano",
    "wythers:jacaranda_savanna",
    "wythers:jade_highlands",
    "wythers:jungle_canyon",
    "wythers:jungle_island",
    "wythers:jungle_river",
    "wythers:kwongan_heath",
    "wythers:lantern_river",
    "wythers:lapacho_plains",
    "wythers:larch_taiga",
    "wythers:lichenous_caves",
    "wythers:lichenous_dripstone_caves",
    "wythers:lush_dripstone_caves",
    "wythers:lush_fungous_dripstone_caves",
    "wythers:lush_shroom_caves",
    "wythers:maple_mountains",
    "wythers:marsh",
    "wythers:mediterranean_island",
    "wythers:mediterranean_island_thermal_springs",
    "wythers:mossy_caves",
    "wythers:mossy_dripstone_caves",
    "wythers:mud_pools",
    "wythers:mushroom_caves",
    "wythers:mushroom_island",
    "wythers:old_growth_taiga_crags",
    "wythers:old_growth_taiga_swamp",
    "wythers:outback",
    "wythers:outback_desert",
    "wythers:pantanal",
    "wythers:phantasmal_forest",
    "wythers:phantasmal_swamp",
    "wythers:pine_barrens",
    "wythers:red_desert",
    "wythers:red_rock_canyon",
    "wythers:sakura_forest",
    "wythers:salt_lakes_pink",
    "wythers:salt_lakes_turquoise",
    "wythers:salt_lakes_white",
    "wythers:sandy_jungle",
    "wythers:sand_dunes",
    "wythers:savanna_badlands",
    "wythers:savanna_basaltic_incursions",
    "wythers:savanna_river",
    "wythers:scrubland",
    "wythers:scrub_forest",
    "wythers:snowy_bog",
    "wythers:snowy_canyon",
    "wythers:snowy_fen",
    "wythers:snowy_peaks",
    "wythers:snowy_thermal_taiga",
    "wythers:snowy_tundra",
    "wythers:sparse_bamboo_jungle",
    "wythers:sparse_eucalyptus_jungle",
    "wythers:sparse_eucalyptus_woodland",
    "wythers:spring_flower_fields",
    "wythers:spring_flower_forest",
    "wythers:stony_canyon",
    "wythers:subtropical_forest",
    "wythers:subtropical_forest_edge",
    "wythers:subtropical_grassland",
    "wythers:taiga_crags",
    "wythers:tangled_forest",
    "wythers:temperate_island",
    "wythers:temperate_rainforest",
    "wythers:temperate_rainforest_crags",
    "wythers:tepui",
    "wythers:thermal_taiga",
    "wythers:thermal_taiga_crags",
    "wythers:tibesti_mountains",
    "wythers:tropical_beach",
    "wythers:tropical_forest",
    "wythers:tropical_forest_canyon",
    "wythers:tropical_forest_river",
    "wythers:tropical_grassland",
    "wythers:tropical_island",
    "wythers:tropical_rainforest",
    "wythers:tropical_volcano",
    "wythers:tsingy_forest",
    "wythers:tundra",
    "wythers:underground",
    "wythers:volcanic_chamber",
    "wythers:volcanic_crater",
    "wythers:volcano",
    "wythers:warm_birch_forest",
    "wythers:warm_stony_shore",
    "wythers:waterlily_swamp",
    "wythers:windswept_jungle",
    "wythers:wistman_woods",
    "wythers:wooded_desert",
    "wythers:wooded_savanna"
    ])
    event.add('wythers:is_america', [
        "minecraft:badlands",
        "minecraft:wooded_badlands",
        "minecraft:eroded_badlands",
        "wythers:badlands_canyon",
        "wythers:badlands_river",
        "wythers:badlands_desert",
        "wythers:giant_sequoia_forest"
    ])
    event.add('wythers:is_asia', [
        "minecraft:bamboo_jungle",
        "wythers:sakura_forest",
        "wythers:sparse_bamboo_jungle",
        "wythers:bamboo_jungle_highlands",
        "wythers:huangshan_highlands",
        "wythers:waterlily_swamp",
        "wythers:bamboo_swamp",
        "wythers:bamboo_jungle_swamp",
        "wythers:jade_highlands",
        "wythers:maple_mountains",
        "wythers:warm_birch_forest"
    ])
    event.add('wythers:is_australia', [
        "wythers:ayers_rock",
        "wythers:outback",
        "wythers:outback_desert",
        "wythers:kwongan_heath",
        "wythers:billabong",
        "wythers:eucalyptus_woodland",
        "wythers:sparse_eucalyptus_woodland",
        "wythers:eucalyptus_salubris_woodland",
        "wythers:eucalyptus_jungle",
        "wythers:sparse_eucalyptus_jungle",
        "wythers:eucalyptus_deanei_forest",
        "wythers:eucalyptus_jungle_canyon",
        "wythers:desert_pinnacles"
    ])
    event.add('wythers:is_dark_forest', [
        "minecraft:dark_forest",
        "wythers:forbidden_forest",
        "wythers:phantasmal_forest",
        "wythers:deep_dark_forest",
        "wythers:ancient_emerald_beech_forest",
        "wythers:ancient_golden_beech_forest",
        "wythers:ancient_copper_beech_forest",
        "wythers:ancient_moss_forest",
        "wythers:ancient_oak_swamp",
        "wythers:ancient_mossy_swamp",
        "wythers:phantasmal_swamp"
    ])
    event.add('wythers:is_desert', [
        "minecraft:desert",
        "wythers:desert_lakes",
        "wythers:deep_desert",
        "wythers:tibesti_mountains",
        "wythers:mud_pools",
        "wythers:salt_lakes_pink",
        "wythers:salt_lakes_turquoise",
        "wythers:salt_lakes_white",
        "wythers:cactus_desert",
        "wythers:danakil_desert",
        "wythers:desert_beach",
        "wythers:desert_pinnacles",
        "wythers:desert_river",
        "wythers:wooded_desert"
    ])
    event.add('wythers:is_swamp', [
        "minecraft:swamp",
        "minecraft:mangrove_swamp",
        "wythers:coastal_mangroves",
        "wythers:desert_lakes",
        "wythers:mud_pools",
        "wythers:flooded_rainforest",
        "wythers:flooded_temperate_rainforest",
        "wythers:flooded_savanna",
        "wythers:bamboo_swamp",
        "wythers:waterlily_swamp",
        "wythers:dripleaf_swamp",
        "wythers:birch_swamp",
        "wythers:autumnal_swamp",
        "wythers:ancient_oak_swamp",
        "wythers:ancient_mossy_swamp",
        "wythers:old_growth_taiga_swamp",
        "wythers:marsh",
        "wythers:fen",
        "wythers:snowy_fen",
        "wythers:berry_bog",
        "wythers:pantanal",
        "wythers:flowering_pantanal",
        "wythers:phantasmal_swamp",
        "wythers:thermal_taiga",
        "wythers:bayou",
        "wythers:salt_lakes_pink",
        "wythers:salt_lakes_turquoise",
        "wythers:salt_lakes_white",
        "wythers:snowy_bog",
        "wythers:bamboo_jungle_swamp"
    ])
})
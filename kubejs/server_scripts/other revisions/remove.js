

ServerEvents.recipes(event => {
    [
      //minecraft
      'minecraft:air',
      'minecraft:chain',
      'minecraft:end_crystal',
      'minecraft:bundle',
      'minecraft:gold_nugget_from_blasting',
      'minecraft:gold_nugget_from_smelting',
      'minecraft:white_wool_from_string',



      //Quark
      'quark:building/crafting/compressed/charcoal_block',
      

      // Unusual End
      'unusualend:end_crystal_via_chiseled_glass',

      

      // The Abyss
      'theabyss:anima_nugget',

      // Alexs Mobs
      'alexsmobs:flying_fish_boots',

      //Atlas
      'map_atlases:dummy_crafting_atlas',
      
      //Chiseled Bookshelfs
      "chiseled_bookshelves:bf_empty",

      //Beer Mod
      /*'drinkbeer:beer_mug_blaze_stout',
      'drinkbeer:beer_mug_blaze_milk_stout',
      'drinkbeer:beer_mug_sweet_berry_kriek',
      'drinkbeer:beer_mug_haars_icey_pale_lager',
      'drinkbeer:beer_mug_pumpkin_kvass',
      'drinkbeer:beer_mug_night_howl_kvass',
      'drinkbeer:beer_mug_frothy_pink_eggnog',*/
      'drinkbeer:beer_mug_sweet_berry_kriek',
      'drinkbeer:empty_beer_mug',
      'drinkbeer:beer_barrel',

      
      

      // MineColonies
      'minecolonies:chainmailhelmet', 
      'minecolonies:chainmailchestplate', 
      'minecolonies:chainmailleggings', 
      'minecolonies:chainmailboots', 

      
      // Ars Nouveau
      'ars_nouveau:novice_spell_book',
      'ars_nouveau:apprentice_spell_book_upgrade',
      'ars_nouveau:archmage_spell_book_upgrade',
      
      //Sophisticated Backpacks
      'sophisticatedbackpacks:backpack',

      //More Mekanism Processing
      'moremekanismprocessing:processing/bismuth/ingot/from_dust_blasting',
      'moremekanismprocessing:processing/bismuth/ingot/from_dust_smelting',
      'moremekanismprocessing:processing/zinc/ingot/from_dust_smelting',
      'moremekanismprocessing:processing/zinc/ingot/from_dust_blasting',
      'mekanism:processing/steel/ingot/from_dust_blasting',
      'mekanism:processing/steel/ingot/from_dust_smelting',

      // Forbidden Arcanus
      'forbidden_arcanus:enchanted_golden_apple',
      'forbidden_arcanus:boom_arrow',

      // Epic Knights Mod
      'magistuarmory:steel_ingot_blasting',
      'magistuarmory:furnace/steel_ingot_blasting',

      // Upgrade Aquatic
      'upgrade_aquatic:trident',

      //Waystones
      'waystones:warp_scroll',
      'waystones:warp_dust',

      //Alcocraft
      'alcocraftplus:beer_brewing',
      'alcocraftplus:spruce_keg',
      'alcocraftplus:mug_of_wither_stout',




      

      /*

      //Solar Panels
      'solarflux:solar_panel_2',
      'solarflux:solar_panel_3',
      'solarflux:solar_panel_4',
      'solarflux:solar_panel_5',
      'solarflux:solar_panel_6',
      'solarflux:solar_panel_7',
      'solarflux:solar_panel_8',
      'solarflux:photovoltaic_cell_1',
      'solarflux:photovoltaic_cell_2',
      'solarflux:photovoltaic_cell_3',
      'solarflux:photovoltaic_cell_4',
      'solarflux:photovoltaic_cell_5',
      'solarflux:photovoltaic_cell_6',
      */
     //Mekanism
     'mekanism:storage_blocks/steel',
     'minecraft:oak_planks',
     'minecraft:spruce_planks',
     'minecraft:birch_planks',
     'minecraft:jungle_planks',
     'minecraft:acacia_planks',
     'minecraft:dark_oak_planks',
     'minecraft:mangrove_planks',
     'minecraft:crimson_planks',
     'minecraft:warped_planks',
     'iter_rpg:sacred_planks_craft_wood',
     'theabyss:s_blaru_planks_rcp',
     'theabyss:s_jungle_planks_rcp',
     'theabyss:s_bog_planks_rcp',
     'theabyss:sal_planks_rcp',
     'theabyss:slimed_planks_rcp',
     'theabyss:s_frozen_planks_rcp',
     'born_in_chaos_v1:scorched_planks_k',
     'desolation:c_harred_plans_rcp',
     'enlightened_end:seldge_planks',
     'enlightened_end:ebony_stalk_to_planks',
     'enlightened_end:seldge_planks',
     'upgrade_aquatic:driftwood_planks',
     'upgrade_aquatic:river_planks',
     'ars_nouveau:archwood_planks',
     'quark:building/crafting/woodsets/bamboo/planks',
     'quark:world/crafting/woodsets/blossom/planks',
     'quark:world/crafting/woodsets/azalea/planks',
     'quark:world/crafting/woodsets/ancient/planks',
     'forbidden_arcanus:fungyss_planks',
     'forbidden_arcanus:cherry_planks',
     'forbidden_arcanus:cherrywood_planks_from_thin_cherrywood_log',
     'forbidden_arcanus:edelwood_planks',
     'vinery:cherry_planks',
     'vinery:oak_planks_from_wood',
     'vinery:oak_planks',
     'forbidden_arcanus:aurum_planks',
     'minecraft:stick',
     'quark:tweaks/crafting/utility/misc/easy_sticks_bamboo',
     'quark:tweaks/crafting/utility/misc/easy_sticks',
     'iter_rpg:sacred_sticks_craft',


      

      

      


  
    ].forEach((recipeID) => event.remove({id: recipeID}));

    
  
  
    [
      'pneumaticcraft:raw_salmon_tempura',
      'pneumaticcraft:salmon_tempura',
      "quark:raw_iron_bricks",
      "quark:raw_gold_bricks",
      "quark:raw_copper_bricks",
      'create:potato_cannon',
      '/:.*magic_ore/'
      

    
  
    ].forEach((ingredientID) => event.remove({input: ingredientID}));

    
    
  
    [
      // Minecraft
      'minecraft:barrier',
      'minecraft:jigsaw',
      'minecraft:light',
      'minecraft:structure_block',
      'minecraft:structure_void',
      'minecraft:shield',
      'minecraft:fishing_rod',
      
      //Chiseled Bookshelves
      'chiseled_bookshelves:bf_empty',
      'chiseled_bookshelves:bookshelf',
      'chiseled_bookshelves:bf_2',
      'chiseled_bookshelves:bf_3',
      'chiseled_bookshelves:bf_4',
      'chiseled_bookshelves:bf_5',
      'chiseled_bookshelves:bf_1',

      //YLF
      "ylf_mod:bird_cage",
      "ylf_mod:filledbirdcage",

      //Supplementaries
      'supplementaries:rope',

      //Aquaculture
      'aquaculture:neptunium_fishing_rod',
      'aquaculture:diamond_fishing_rod',
      'aquaculture:gold_fishing_rod',
      'aquaculture:iron_fishing_rod',

      //Pneumaticcraft
      'pneumaticcraft:cod_n_chips',

      //Dynamic Trees
      'dynamictrees:dendro_potion',

      //MC DOOM
      
      'doom:inmortalsphere',
      'doom:megasphere',
      'doom:darklord_boots',
      'doom:darklord_leggings',
      'doom:darklord_chestplate',
      'doom:darklord_helmet',
      '/:.*doom_helmet/',
      '/:.*doom_boots/',
      '/:.*doom_chestplate/',
      '/:.*doom_leggings/',
      'doom:twenty_five_helmet',
      'doom:twenty_five_chestplate',
      'doom:twenty_five_leggings',
      'doom:twenty_five_boots',
      'doom:classic_red_chestplate',
      'doom:classic_red_leggings',
      '/:.*classic_black/',
      '/:.*classic_bronze/',
      '/:.*redneck_doom/',
      '/:.*hotrod/',
      '/:.*santa_helmet/',
      'doom:gun_table',

      //Gothic
      
      '/:.*magic_ore_armor/',
      '/:.*guru_armor/',
      '/:.*ravens_guard/',
      '/:.*citizen_armor/',
      '/:.*peasant_armor/',
      '/:.*crawler_armor/',
      '/:.*miner_leggings/',
      '/:.*guardian_armor/',
      '/:.*ghost_armor/',
      '/:.*magic_ore/',
      'gothic:wolfs_tooth',
      'gothic:old_mineshaft_pickaxe',
      'gothic:torturers_axe',
      'gothic:club',
      'gothic:mace',
      'gothic:urizel',

      //Vinery
      'vinery:straw_hat',
      'vinery:vinemaker_apron',
      'vinery:vinemaker_leggings',
      'vinery:vinemaker_boots',
      'vinery:fermentation_barrel',

      //AlcocraftPlus


      //BNO
      'bno:aluminum_nugget',
      'bno:aluminum_block',
      'bno:aluminum_ingot',
      'bno:zinc_ingot',

      //Mutation Craft
      'mutationcraft:metal_scrap',

      //Tombstone
      'tombstone:book_of_disenchantment',

      //Tetra
      'tetra:forged_mesh',

      //Tameable Beasts
      'tameablebeasts:iron_big_hoe',
      
      

      //Supplimentaries
      'supplementaries:rope',
      'supplementaries:bomb_spiky',
      'supplementaries:bomb',
      'supplementaries:quiver',
      'supplementaries:hourglass',
      'supplementaries:sack',
      'supplementaries:slingshot',

      /*

      //Solar Panels
      'solarflux:sp_2',
      'solarflux:sp_3',
      'solarflux:sp_4',
      'solarflux:sp_5',
      'solarflux:sp_6',
      'solarflux:sp_7',
      'solarflux:sp_8',
      'solarflux:photovoltaic_cell_1',
      'solarflux:photovoltaic_cell_2',
      'solarflux:photovoltaic_cell_3',
      'solarflux:photovoltaic_cell_4',
      'solarflux:photovoltaic_cell_5',
      'solarflux:photovoltaic_cell_6',
      */



      // The Abyss
      'theabyss:fusion_axe',
      'theabyss:fusion_hoe',
      'theabyss:fusion_shovel',
      'theabyss:fusion_pickaxe',
      'theabyss:fusion_sword',
      'theabyss:knight_axe',
      'theabyss:knight_hoe',
      'theabyss:knight_shovel',
      'theabyss:knight_pick_axe',
      'theabyss:knight_sword',
      'theabyss:phantom_axe',
      'theabyss:phantom_hoe',
      'theabyss:phantom_shovel',
      'theabyss:phantom_pickaxe',
      'theabyss:phantom_sword',
      'theabyss:ignisithe_sword',
      'theabyss:incorythe_axe',
      'theabyss:incorythe_hoe',
      'theabyss:incorythe_shovel',
      'theabyss:incorythe_pickaxe',
      'theabyss:incorythe_sword',
      'theabyss:incorythe_sword_mkii',
      'theabyss:garnite_axe',
      'theabyss:garnite_hoe',
      'theabyss:garnite_shovel',
      'theabyss:garnite_pickaxe',
      'theabyss:garnite_sword',
      'theabyss:the_abyss',
      'theabyss:shuriken',
      'theabyss:shuriken_explosive',
      'theabyss:healing_camp_fire',
      'theabyss:shield_camp_fire',

      //Upgrade Aquatic
      "upgrade_aquatic:bedroll",
            "upgrade_aquatic:white_bedroll",
            "upgrade_aquatic:orange_bedroll",
            "upgrade_aquatic:magenta_bedroll",
            "upgrade_aquatic:light_blue_bedroll",
            "upgrade_aquatic:yellow_bedroll",
            "upgrade_aquatic:lime_bedroll",
            "upgrade_aquatic:pink_bedroll",
            "upgrade_aquatic:gray_bedroll",
            "upgrade_aquatic:light_gray_bedroll",
            "upgrade_aquatic:cyan_bedroll",
            "upgrade_aquatic:purple_bedroll",
            "upgrade_aquatic:blue_bedroll",
            "upgrade_aquatic:brown_bedroll",
            "upgrade_aquatic:green_bedroll",
            "upgrade_aquatic:red_bedroll",
            "upgrade_aquatic:black_bedroll",

      
  
      // Applied Energistics 2
      'ae2:facade',
      'ae2:fluix_pickaxe',
      'ae2:nether_quartz_pickaxe',
      'ae2:certus_quartz_pickaxe',
      'ae2:wireless_receiver',
      'ae2:inscriber',
      'ae2things:advanced_inscriber',
      'ae2:crafting_terminal',
      'ae2:certus_quartz_axe',
      'ae2:certus_quartz_hoe',
      'ae2:certus_quartz_shovel',
      'ae2:certus_quartz_sword',
      'ae2:nether_quartz_axe',
      'ae2:nether_quartz_hoe',
      'ae2:nether_quartz_shovel',
      'ae2:nether_quartz_sword',
      'ae2:fluix_axe',
      'ae2:fluix_hoe',
      'ae2:fluix_shovel',
      'ae2:fluix_sword',

      //Ae2 Things
      'ae2things:disk_housing',
      'ae2things:disk_drive_4k',
      'ae2things:disk_drive_16k',
      'ae2things:disk_drive_1k',
      'ae2things:disk_drive_64k',
      'ae2things:disk_drive_256k',

  
      // Ars Nouveau
      'ars_nouveau:creative_spell_book',
      'ars_nouveau:novice_spell_book',
      'ars_nouveau:apprentice_spell_book',
      'ars_nouveau:archmage_spell_book',

      
      // Citadel
      'citadel:debug',
      'citadel:citadel_book',
      'citadel:effect_item',
      'citadel:fancy_item',

      // Tool Belts
      'toolbelt:belt',
      'toolbelt:pouch',
  
      // Create
      'create:copper_backtank_placeable',

      //quark
      'quark:charcoal_block',
      'quark:oak_chest',

      // Mekanism
      'mekanism:creative_fluid_tank',
      'mekanism:creative_chemical_tank',
      'mekanismgenerators:fission_reactor_logic_adapter',
      'mekanism:mekasuit_helmet',
      'mekanism:mekasuit_bodyarmor',
      'mekanism:mekasuit_pants',
      'mekanism:mekasuit_boots',
      'mekanism:personal_chest',
      'mekanism:personal_barrel',

      
  
      // Mekanism Additions
      'mekanismadditions:baby_creeper_spawn_egg',
      'mekanismadditions:baby_enderman_spawn_egg',
      'mekanismadditions:baby_wither_skeleton_spawn_egg',
  
      // Mekanism Tools
      /*'mekanismtools:lapis_lazuli_helmet',
      'mekanismtools:lapis_lazuli_chestplate',
      'mekanismtools:lapis_lazuli_leggings',
      'mekanismtools:lapis_lazuli_boots',
      'mekanismtools:lapis_lazuli_sword',
      'mekanismtools:lapis_lazuli_pickaxe',
      'mekanismtools:lapis_lazuli_axe',
      'mekanismtools:lapis_lazuli_shovel',
      'mekanismtools:lapis_lazuli_hoe',
      'mekanismtools:lapis_lazuli_paxel',
      'mekanismtools:lapis_lazuli_shield',
      'mekanismtools:steel_helmet',
      'mekanismtools:steel_chestplate',
      'mekanismtools:steel_leggings',
      'mekanismtools:steel_boots',
      'mekanismtools:bronze_pickaxe',
      'mekanismtools:bronze_axe',
      'mekanismtools:bronze_shovel',
      'mekanismtools:bronze_hoe',
      'mekanismtools:bronze_sword',
      'mekanismtools:bronze_paxel',
      'mekanismtools:bronze_helmet',
      'mekanismtools:bronze_chestplate',
      'mekanismtools:bronze_leggings',
      'mekanismtools:bronze_boots',
      'mekanismtools:bronze_shield',
      'mekanismtools:osmium_pickaxe',
      'mekanismtools:osmium_axe',
      'mekanismtools:osmium_shovel',
      'mekanismtools:osmium_hoe',
      'mekanismtools:osmium_sword',
      'mekanismtools:osmium_paxel',
      'mekanismtools:osmium_helmet',
      'mekanismtools:osmium_chestplate',
      'mekanismtools:osmium_leggings',
      'mekanismtools:osmium_boots',
      'mekanismtools:osmium_shield',
      'mekanismtools:refined_glowstone_pickaxe',
      'mekanismtools:refined_glowstone_axe',
      'mekanismtools:refined_glowstone_shovel',
      'mekanismtools:refined_glowstone_hoe',
      'mekanismtools:refined_glowstone_sword',
      'mekanismtools:refined_glowstone_paxel',
      'mekanismtools:refined_glowstone_helmet',
      'mekanismtools:refined_glowstone_chestplate',
      'mekanismtools:refined_glowstone_leggings',
      'mekanismtools:refined_glowstone_boots',
      'mekanismtools:refined_glowstone_shield',*/
  
      // Quark
      'quark:carrot_crate',
      'quark:potato_crate',
      'quark:beetroot_crate',

      //Apotheosis
      'apotheosis:iron_mining_arrow',
      'apotheosis:diamond_mining_arrow',
      'apotheosis:potion_charm',
      'apotheosis:explosive_arrow',
  
      // Structure Gel API
      'structure_gel:red_gel',
      'structure_gel:blue_gel',
      'structure_gel:green_gel',
      'structure_gel:cyan_gel',
      'structure_gel:orange_gel',
      'structure_gel:yellow_gel',

      //Healing Flasks
      'healingflasks:t_3_healing_flask',
      'healingflasks:flask_shard',

      //Mutant Creatures
      'mutantmore:heatstorm_generator',
      'mutantmore:mutant_shulker_shield',
      'mutantmore:mutant_blaze_shields',
      'mutantmore:rodling_shields',
      'mutantmore:mutant_shulker_turret',

      //Epic Knights Mod
      'magistuarmory:face_helmet',
      'magistuarmory:wood_rondache',
      'magistuarmory:lamellar_chestplate',
      'magistuarmory:lamellar_boots',
      'magistuarmory:chainmail_horse_armor',
      'magistuarmory:kastenbrust_boots',
      'magistuarmory:kastenbrust_leggings',
      'magistuarmory:kastenbrust_chestplate',
      'magistuarmory:grand_bascinet',
      'magistuarmory:cuirassier_boots',
      'magistuarmory:cuirassier_chestplate',
      'magistuarmory:cuirassier_helmet',
      'magistuarmory:wingedhussar_chestplate',
      'magistuarmory:xivcenturyknight_boots',
      'magistuarmory:xivcenturyknight_leggings',
      'magistuarmory:xivcenturyknight_chestplate',
      'magistuarmory:bascinet',
      'magistuarmory:rustedkettlehat',
      'magistuarmory:rustedchainmail_boots',
      'magistuarmory:rustedchainmail_leggings',
      'magistuarmory:rustedchainmail_chestplate',
      'magistuarmory:rustedchainmail_helmet',
      'magistuarmory:rustednorman_helmet',
      'magistuarmory:rustedcrusader_boots',
      'magistuarmory:rustedcrusader_chestplate',
      'magistuarmory:rustedgreathelm',
      'magistuarmory:rustedhalfarmor_chestplate',
      'magistuarmory:rustedbarbute',
      'magistuarmory:shishak',
      'magistuarmory:norman_helmet',
      'magistuarmory:brigandine_chestplate',
      'magistuarmory:gambeson_boots',
      'magistuarmory:pantyhose',
      'magistuarmory:gambeson_chestplate',
      'magistuarmory:coif',
      'magistuarmory:crusader_boots',
      'magistuarmory:crusader_leggings',
      'magistuarmory:greathelm',
      'magistuarmory:halfarmor_chestplate',
      'magistuarmory:barbute',
      'magistuarmory:maximilian_boots',
      'magistuarmory:maximilian_leggings',
      'magistuarmory:maximilian_chestplate',
      'magistuarmory:maximilian_helmet',
      'magistuarmory:gothic_boots',
      'magistuarmory:gothic_leggings',
      'magistuarmory:gothic_chestplate',
      'magistuarmory:sallet',
      'magistuarmory:jousting_boots',
      'magistuarmory:jousting_leggings',
      'magistuarmory:jousting_chestplate',
      'magistuarmory:stechhelm',
      'magistuarmory:armet',
      'magistuarmory:knight_chestplate',
      'magistuarmory:knight_leggings',
      'magistuarmory:knight_boots',
      'magistuarmory:copper_stylet',
      'magistuarmory:tin_stylet',
      'magistuarmory:bronze_stylet',
      'magistuarmory:copper_shortsword',
      'magistuarmory:tin_shortsword',
      'magistuarmory:bronze_shortsword',
      'magistuarmory:copper_katzbalger',
      'magistuarmory:tin_katzbalger',
      'magistuarmory:bronze_katzbalger',
      'magistuarmory:copper_pike',
      'magistuarmory:tin_pike',
      'magistuarmory:bronze_pike',
      'magistuarmory:copper_ranseur',
      'magistuarmory:tin_ranseur',
      'magistuarmory:bronze_ranseur',
      'magistuarmory:copper_ahlspiess',
      'magistuarmory:tin_ahlspiess',
      'magistuarmory:bronze_ahlspiess',
      'magistuarmory:copper_chivalrylance',
      'magistuarmory:tin_chivalrylance',
      'magistuarmory:bronze_chivalrylance',
      'magistuarmory:copper_bastardsword',
      'magistuarmory:tin_bastardsword',
      'magistuarmory:bronze_bastardsword',
      'magistuarmory:copper_estoc',
      'magistuarmory:tin_estoc',
      'magistuarmory:bronze_estoc',
      'magistuarmory:copper_claymore',
      'magistuarmory:tin_claymore',
      'magistuarmory:bronze_claymore',
      'magistuarmory:copper_zweihander',
      'magistuarmory:tin_zweihander',
      'magistuarmory:bronze_zweihander',
      'magistuarmory:copper_flamebladedsword',
      'magistuarmory:tin_flamebladedsword',
      'magistuarmory:bronze_flamebladedsword',
      'magistuarmory:copper_lochaberaxe',
      'magistuarmory:tin_lochaberaxe',
      'magistuarmory:bronze_lochaberaxe',
      'magistuarmory:copper_concavehalberd',
      'magistuarmory:tin_concavehalberd',
      'magistuarmory:bronze_concavehalberd',
      'magistuarmory:copper_heavymace',
      'magistuarmory:tin_heavymace',
      'magistuarmory:bronze_heavymace',
      'magistuarmory:copper_heavywarhammer',
      'magistuarmory:tin_heavywarhammer',
      'magistuarmory:bronze_heavywarhammer',
      'magistuarmory:copper_lucernhammer',
      'magistuarmory:tin_lucernhammer',
      'magistuarmory:bronze_lucernhammer',
      'magistuarmory:copper_morgenstern',
      'magistuarmory:tin_morgenstern',
      'magistuarmory:bronze_morgenstern',
      'magistuarmory:copper_chainmorgenstern',
      'magistuarmory:tin_chainmorgenstern',
      'magistuarmory:bronze_chainmorgenstern',
      'magistuarmory:copper_guisarme',
      'magistuarmory:tin_guisarme',
      'magistuarmory:bronze_guisarme',
      'magistuarmory:blacksmith_hammer',
      'magistuarmory:barbedclub',
      'magistuarmory:pitchfork',
      'magistuarmory:noble_sword',
      'magistuarmory:rusted_bastardsword',
      'magistuarmory:rusted_heavymace',
      'magistuarmory:club',
      'magistuarmory:wood_heatershield',
      'magistuarmory:stone_heatershield',
      'magistuarmory:iron_heatershield',
      'magistuarmory:gold_heatershield',
      'magistuarmory:diamond_heatershield',
      'magistuarmory:netherite_heatershield',
      'magistuarmory:copper_heatershield',
      'magistuarmory:steel_heatershield',
      'magistuarmory:silver_heatershield',
      'magistuarmory:tin_heatershield',
      'magistuarmory:bronze_heatershield',
      'magistuarmory:wood_target',
      'magistuarmory:stone_target',
      'magistuarmory:iron_target',
      'magistuarmory:gold_target',
      'magistuarmory:diamond_target',
      'magistuarmory:netherite_target',
      'magistuarmory:copper_target',
      'magistuarmory:steel_target',
      'magistuarmory:silver_target',
      'magistuarmory:tin_target',
      'magistuarmory:bronze_target',
      'magistuarmory:wood_buckler',
      'magistuarmory:stone_buckler',
      'magistuarmory:iron_buckler',
      'magistuarmory:gold_buckler',
      'magistuarmory:diamond_buckler',
      'magistuarmory:netherite_buckler',
      'magistuarmory:copper_buckler',
      'magistuarmory:steel_buckler',
      'magistuarmory:silver_buckler',
      'magistuarmory:tin_buckler',
      'magistuarmory:bronze_buckler',
      'magistuarmory:copper_rondache',
      'magistuarmory:tin_rondache',
      'magistuarmory:bronze_rondache',
      'magistuarmory:wood_tartsche',
      'magistuarmory:stone_tartsche',
      'magistuarmory:iron_tartsche',
      'magistuarmory:gold_tartsche',
      'magistuarmory:diamond_tartsche',
      'magistuarmory:netherite_tartsche',
      'magistuarmory:copper_tartsche',
      'magistuarmory:steel_tartsche',
      'magistuarmory:silver_tartsche',
      'magistuarmory:tin_tartsche',
      'magistuarmory:bronze_tartsche',
      'magistuarmory:wood_ellipticalshield',
      'magistuarmory:stone_ellipticalshield',
      'magistuarmory:iron_ellipticalshield',
      'magistuarmory:gold_ellipticalshield',
      'magistuarmory:diamond_ellipticalshield',
      'magistuarmory:netherite_ellipticalshield',
      'magistuarmory:copper_ellipticalshield',
      'magistuarmory:steel_ellipticalshield',
      'magistuarmory:silver_ellipticalshield',
      'magistuarmory:tin_ellipticalshield',
      'magistuarmory:bronze_ellipticalshield',
      'magistuarmory:stone_roundshield',
      'magistuarmory:iron_roundshield',
      'magistuarmory:gold_roundshield',
      'magistuarmory:diamond_roundshield',
      'magistuarmory:netherite_roundshield',
      'magistuarmory:copper_roundshield',
      'magistuarmory:steel_roundshield',
      'magistuarmory:silver_roundshield',
      'magistuarmory:tin_roundshield',
      'magistuarmory:bronze_roundshield',
      'magistuarmory:copper_pavese',
      'magistuarmory:tin_pavese',
      'magistuarmory:bronze_pavese',
      'magistuarmory:wood_kiteshield',
      'magistuarmory:stone_kiteshield',
      'magistuarmory:iron_kiteshield',
      'magistuarmory:gold_kiteshield',
      'magistuarmory:diamond_kiteshield',
      'magistuarmory:netherite_kiteshield',
      'magistuarmory:copper_kiteshield',
      'magistuarmory:steel_kiteshield',
      'magistuarmory:silver_kiteshield',
      'magistuarmory:tin_kiteshield',
      'magistuarmory:bronze_kiteshield',
      'magistuarmory:corruptedroundshield',
      'magistuarmory:apostolic_cross_pattern',
      'magistuarmory:bowl_pattern',
      'magistuarmory:bull_pattern',
      'magistuarmory:chess_pattern',
      'magistuarmory:crusader_cross_pattern',
      'magistuarmory:dragon_pattern',
      'magistuarmory:eagle_pattern',
      'magistuarmory:horse_pattern',
      'magistuarmory:lily_pattern',
      'magistuarmory:lion1_pattern',
      'magistuarmory:lion2_pattern',
      'magistuarmory:orthodox_cross_pattern',
      'magistuarmory:snake_pattern',
      'magistuarmory:sun_pattern',
      'magistuarmory:swords_pattern',
      'magistuarmory:tower_pattern',
      'magistuarmory:tree_pattern',
      'magistuarmory:two-headed_eagle_pattern',
      'magistuarmory:laceration',
      'magistuarmory:lamellar_rows',
      'magistuarmory:small_steel_plate',
      'magistuarmory:wood_chainmorgenstern',
      'magistuarmory:stone_chainmorgenstern',
      'magistuarmory:iron_chainmorgenstern',
      'magistuarmory:gold_chainmorgenstern',
      'magistuarmory:diamond_chainmorgenstern',
      'magistuarmory:netherite_chainmorgenstern',
      'magistuarmory:copper_chainmorgenstern',
      'magistuarmory:steel_chainmorgenstern',
      'magistuarmory:silver_chainmorgenstern',
      'magistuarmory:tin_chainmorgenstern',
      'magistuarmory:bronze_chainmorgenstern',
      'magistuarmory:steel_nugget',
      'magistuarmory:wood_bastardsword',
      'magistuarmory:stone_bastardsword',
      'magistuarmory:iron_bastardsword',
      'magistuarmory:gold_bastardsword',
      'magistuarmory:diamond_bastardsword',
      'magistuarmory:netherite_bastardsword',
      'magistuarmory:steel_bastardsword',
      'magistuarmory:silver_bastardsword',
      'magistuarmory:wood_katzbalger',
      'magistuarmory:stone_katzbalger',
      'magistuarmory:iron_katzbalger',
      'magistuarmory:gold_katzbalger',
      'magistuarmory:diamond_katzbalger',
      'magistuarmory:netherite_katzbalger',
      'magistuarmory:steel_katzbalger',
      'magistuarmory:silver_katzbalger',
      'magistuarmory:wood_claymore',
      'magistuarmory:stone_claymore',
      'magistuarmory:iron_claymore',
      'magistuarmory:gold_claymore',
      'magistuarmory:diamond_claymore',
      'magistuarmory:netherite_claymore',
      'magistuarmory:steel_claymore',
      'magistuarmory:silver_claymore',
      'magistuarmory:wood_heavymace',
      'magistuarmory:stone_heavymace',
      'magistuarmory:iron_heavymace',
      'magistuarmory:gold_heavymace',
      'magistuarmory:diamond_heavymace',
      'magistuarmory:netherite_heavymace',
      'magistuarmory:steel_heavymace',
      'magistuarmory:silver_heavymace',
      'magistuarmory:wood_morgenstern',
      'magistuarmory:stone_morgenstern',
      'magistuarmory:iron_morgenstern',
      'magistuarmory:gold_morgenstern',
      'magistuarmory:diamond_morgenstern',
      'magistuarmory:netherite_morgenstern',
      'magistuarmory:steel_morgenstern',
      'magistuarmory:silver_morgenstern',
      'magistuarmory:wood_guisarme',
      'magistuarmory:stone_guisarme',
      'magistuarmory:iron_guisarme',
      'magistuarmory:gold_guisarme',
      'magistuarmory:diamond_guisarme',
      'magistuarmory:netherite_guisarme',
      'magistuarmory:steel_guisarme',
      'magistuarmory:silver_guisarme',

      //Crayfish Gun Mod
      'cgm:stun_grenade',
      

      //Forbidden Arcanus
      'forbidden_arcanus:deorum_helmet',
      'forbidden_arcanus:deorum_chestplate',
      'forbidden_arcanus:deorum_leggings',
      'forbidden_arcanus:deorum_boots',
      'forbidden_arcanus:reinforced_deorum_sword',
      'forbidden_arcanus:reinforced_deorum_shovel',
      'forbidden_arcanus:reinforced_deorum_pickaxe',
      'forbidden_arcanus:reinforced_deorum_axe',
      'forbidden_arcanus:reinforced_deorum_hoe',
      'forbidden_arcanus:spectral_eye_amulet',
      'forbidden_arcanus:draco_arcanus_helmet',
      'forbidden_arcanus:draco_arcanus_chestplate',
      'forbidden_arcanus:draco_arcanus_leggings',
      'forbidden_arcanus:draco_arcanus_boots',
      'forbidden_arcanus:draco_arcanus_staff',
      'forbidden_arcanus:draco_arcanus_sword',
      'forbidden_arcanus:draco_arcanus_shovel',
      'forbidden_arcanus:draco_arcanus_pickaxe',
      'forbidden_arcanus:draco_arcanus_axe',
      'forbidden_arcanus:draco_arcanus_hoe',
      'forbidden_arcanus:draco_arcanus_sword',
      'forbidden_arcanus:golden_dragon_scale',
      'forbidden_arcanus:dark_nether_star',


      // Waystones
      'waystones:warp_stone',
      'waystones:warp_plate',

      // Better Katanas
      'better_katanas:iron_katana',
      'better_katanas:murasame',
      'better_katanas:yami_katana',
      'better_katanas:snake_sword',
      'better_katanas:swordoftempest',

      //iter Rpg
      'iter_rpg:wooden_spear',
      'iter_rpg:magmanum_armor_helmet',
      'iter_rpg:magmanum_sword',
      'iter_rpg:magmanum_pickaxe',
      'iter_rpg:magmanum_armor_chestplate',
      'iter_rpg:magmanum_armor_leggings',
      'iter_rpg:magmanum_armor_boots',
      'iter_rpg:stone_spear',
      'iter_rpg:iron_spear',
      'iter_rpg:golden_spear',
      'iter_rpg:diamond_spear',
      'iter_rpg:netherite_spear',
      'iter_rpg:forest_spear',
      'iter_rpg:ocean_spear',
      'iter_rpg:sky_spear',
      'iter_rpg:hell_spear',
      'iter_rpg:wooden_flail',
      'iter_rpg:stone_flail',
      'iter_rpg:iron_flail',
      'iter_rpg:golden_flail',
      'iter_rpg:diamond_flail',
      'iter_rpg:netherite_flail',
      'iter_rpg:forest_flail',
      'iter_rpg:ocean_flail',
      'iter_rpg:sky_flail',
      'iter_rpg:hell_flail',
      'iter_rpg:air_rune',

      //Comforts
      '/:.*hammock/',
      'comforts:rope_and_nail',

      //Shields Plus
      
      'shieldsplus:netherite_shield',
      
      //Sophisticated Backpacks
      /*'sophisticatedbackpacks:iron_backpack',
      'sophisticatedbackpacks:gold_backpack',
      'sophisticatedbackpacks:diamond_backpack',
      'sophisticatedbackpacks:netherite_backpack',*/
      'sophisticatedbackpacks:crafting_upgrade',
      'sophisticatedbackpacks:jukebox_upgrade',
      'sophisticatedbackpacks:compacting_upgrade',
      'sophisticatedbackpacks:inception_upgrade',
      'sophisticatedbackpacks:pickup_upgrade',
      'sophisticatedbackpacks:stack_upgrade_tier_1',
      'sophisticatedbackpacks:stack_upgrade_tier_2',
      'sophisticatedbackpacks:stack_upgrade_tier_3',
      'sophisticatedbackpacks:stack_upgrade_tier_4',
      'sophisticatedbackpacks:smelting_upgrade',
      'sophisticatedbackpacks:smoking_upgrade',
      'sophisticatedbackpacks:filter_upgrade',
      'sophisticatedbackpacks:blasting_upgrade',
      'sophisticatedbackpacks:refill_upgrade',
      'sophisticatedbackpacks:deposit_upgrade',
      'sophisticatedbackpacks:restock_upgrade',
      'sophisticatedbackpacks:stonecutter_upgrade',
      'sophisticatedbackpacks:tool_swapper_upgrade',
      'sophisticatedbackpacks:feeding_upgrade',
      'sophisticatedbackpacks:advanced_feeding_upgrade',
      'sophisticatedbackpacks:tank_upgrade',


      //Unusual End
      'unusualend:blob_shield',
      'unusualend:chorus_helmet',

      //First Aid
      'firstaid:bandage',

      //More Mekanism Processing
      'moremekanismprocessing:tungsten_ingot',
      'moremekanismprocessing:tungsten_nugget',

      /* Bedrock Miner
      'bedrockminer:bedrock_boots',
      'bedrockminer:bedrock_leggings',
      'bedrockminer:bedrock_chestplate',
      'bedrockminer:bedrock_helmet',
      'bedrockminer:bedrock_hoe',
      'bedrockminer:bedrock_shovel',
      'bedrockminer:bedrock_axe',
      'bedrockminer:bedrock_sword',
      'bedrockminer:bedrock_pickaxe',
      */

      // Stalwart Dungeons
      
      'stalwart_dungeons:tungsten_shield',
      'stalwart_dungeons:chorundum_shield',
      'stalwart_dungeons:warted_tungsten_shield',

      //Alex's Mobs
      'alexsmobs:ghostly_pickaxe',
      'alexsmobs:banner_pattern_bear',
      'alexsmobs:banner_pattern_australia_0',
      'alexsmobs:banner_pattern_australia_1',
      'alexsmobs:banner_pattern_new_mexico',
      'alexsmobs:banner_pattern_brazil',
      'alexsmobs:ancient_dart',
      'alexsmobs:dimensional_carver',
      'alexsmobs:shattered_dimensional_carver',

      // Panthalassa
      'panthalassa:diving_suit_helmet',
      'panthalassa:diving_suit_chest',
      'panthalassa:diving_suit_legs',
      'panthalassa:diving_suit_boots',

      // Potion Rings
      'potion_rings_rebooted:potion_ring_of_jump_boost',
      'potion_rings_rebooted:potion_ring_of_speed',
      'potion_rings_rebooted:potion_ring_of_regeneration',
      'potion_rings_rebooted:potion_ring_of_strength',
      'potion_rings_rebooted:potion_ring_of_haste',
      'potion_rings_rebooted:potion_ring_of_resistance',
      'potion_rings_rebooted:potion_ring_of_configuration',

      //Kubejs
      'kubejs:cancelcraft',

      //MC DOOM
      
      'doom:argent_hoe',
      'doom:argent_axe',
      'doom:argent_pickaxe',
      'doom:argent_sword',
      'doom:argent_shovel',
      'doom:argent_paxel',
      'doom:energy_cells',
      'doom:argent_bolt',
      'doom:unmaykr_bolt',
      'doom:shotgun_shells',
      'doom:chaingunbullets',
      'doom:bfg_cell',
      'doom:inmortalsphere',
      'doom:megasphere',
      'doom:energy_cells',
      'doom:chaingunbullets',
      'doom:shotgun_shells',
      'doom:gas_barrel',
      'doom:rocket',
      'doom:bullets',
      'doom:darklord_boots',
      'doom:darklord_leggings',
      'doom:darklord_chestplate',
      'doom:darklord_helmet',



  
      
    ].forEach((itemID) => event.remove({output: itemID}));
    
  
  });
  

    ServerEvents.recipes(event => {
      event.remove({mod: 'medieval_craft_structures'})
      event.remove({mod: 'medieval_craft_weapons'})
      event.remove({mod: 'weirdmobs'})
      
    })
    
    

    
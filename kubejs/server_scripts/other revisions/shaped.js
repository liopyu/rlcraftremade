
ServerEvents.recipes(event => {


  // Minecraft
  event.shapeless('4x minecraft:string', [
    '#forge:wool'
  ]);
  event.shapeless('minecraft:white_wool', [
    '4x #forge:string'
  ]);

  event.shaped('minecraft:fishing_rod', [
    '  E',
    ' EA',
    'E B'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    E: 'minecraft:stick'
  });


  event.shapeless('4x minecraft:paper', [
    'minecraft:birch_log',
    'minecraft:birch_log'
  ]);

  event.shapeless('4x minecraft:paper', [
    'minecraft:birch_wood',
    'minecraft:birch_wood'
  ]);

  event.shapeless('4x minecraft:paper', [
    'minecraft:stripped_birch_wood',
    'minecraft:stripped_birch_wood'
  ]);

  event.shapeless('4x minecraft:paper', [
    'minecraft:stripped_birch_log',
    'minecraft:stripped_birch_log'
  ]);



  event.shaped('minecraft:chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: '#minecraft:planks'
  });


  event.shaped('minecraft:chain', [
    'A',
    'A',
    'A'
  ], {
    A: 'minecraft:iron_nugget'
  });

  event.shaped('minecraft:end_crystal', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: 'mekanism:structural_glass',
    B: 'minecraft:ender_eye',
    C: 'minecraft:ghast_tear'
  });

  //Chiseled Bookshelf
  event.shaped('chiseled_bookshelves:bf_empty', [
    'AAA',
    '   ',
    'AAA'
  ], {
    A: '#minecraft:planks',
  });
  //Mekanism
  event.shaped('mekanism:block_steel', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: '#forge:ingots/steel',
  });

  //Kubejs
  event.shapeless('minecraft:nether_star', [
    'kubejs:cosmic_cloud',
    'kubejs:cosmic_cloud',
    'kubejs:cosmic_cloud',
    'kubejs:cosmic_cloud',
    'kubejs:cosmic_cloud',
    'kubejs:cosmic_cloud',
    'kubejs:cosmic_cloud',
    'kubejs:cosmic_cloud',
    'kubejs:cosmic_cloud',
  ]);
  event.shaped('kubejs:reforging_station', [

    'ABA',
    'CDC'
  ], {
    A: 'minecraft:smooth_stone_slab',
    B: 'minecraft:anvil',
    C: 'minecraft:obsidian',
    D: 'minecraft:crafting_table'
  });


  //Aquaculture
  event.shaped('aquaculture:iron_fishing_rod', [
    '  D',
    ' DA',
    'ECB'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    C: 'aquaculture:bobber',
    D: 'minecraft:iron_ingot',
    E: 'minecraft:stick'
  });

  event.shaped('aquaculture:gold_fishing_rod', [
    '  D',
    ' DA',
    'ECB'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    C: 'aquaculture:bobber',
    D: 'minecraft:gold_ingot',
    E: 'minecraft:stick'
  });

  event.shaped('aquaculture:diamond_fishing_rod', [
    '  D',
    ' DA',
    'ECB'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    C: 'aquaculture:bobber',
    D: 'minecraft:diamond',
    E: 'minecraft:stick'
  });
  event.shaped('aquaculture:neptunium_fishing_rod', [
    '  D',
    ' DA',
    'ECB'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    C: 'aquaculture:bobber',
    D: 'aquaculture:neptunium_ingot',
    E: 'minecraft:stick'
  });


  //Tombstone
  /*event.shaped('tombstone:book_of_disenchantment', [
    'ACA',
    'CBC',
    'ACA'
  ], {
    A: 'tombstone:grave_dust',
    B: 'minecraft:book',
    C: 'kubejs:spectral_silt'
  });*/

  //First Aid
  event.shaped('2x firstaid:bandage', [
    'ACA'
  ], {
    A: '#forge:string',
    C: '#forge:wool'
  });


  //Atlas
  event.shapeless('map_atlases:atlas', [
    'minecraft:compass',
    'minecraft:writable_book'

  ]);


  //Better Nether Ores
  event.shapeless('bno:aluminum_block', [
    '#forge:ingots/aluminum',
    '#forge:ingots/aluminum',
    '#forge:ingots/aluminum',
    '#forge:ingots/aluminum',
    '#forge:ingots/aluminum',
    '#forge:ingots/aluminum',
    '#forge:ingots/aluminum',
    '#forge:ingots/aluminum',
    '#forge:ingots/aluminum',
  ]);

  event.shapeless('9x moremekanismprocessing:aluminum_ingot', [
    '#forge:storage_blocks/aluminum',
  ]);



  /* More Babies //rendering error with iris
  event.shaped('more_babies:cursed_clock_on_a_stick', [
    '  A',
    ' B ',
    'C  '
  ], {
    A: 'more_babies:cursed_clock',
    B: 'tetra:forged_beam',
    C: 'supplementaries:hourglass'
  });

  event.shaped('more_babies:cursed_clock', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: 'minecraft:clock',
    B: 'mekanism:ingot_refined_glowstone',
    C: 'xtraarrows:breeding_ointment'
  });
  */


  // Bedrock Ores


  /* Bedrock Miner
  event.shaped('bedrockminer:bedrock_breaker', [
    '',
    '',
    ''
  ], {
    A: 'tetra:chthonic_extractor',
    B: 'pneumaticcraft:drill_bit_netherite',
    C: '',
    D: ''
  });*/

  //Tetra
  event.shapeless('tetra:forged_mesh', [
    'minecraft:iron_nugget',
    'minecraft:iron_nugget',
    'minecraft:iron_nugget',
    'minecraft:iron_nugget',
  ]);
  event.shapeless('3x tetra:metal_scrap', [
    'minecraft:netherite_scrap',
    'minecraft:netherite_scrap',
  ]);

  // The Abyss
  event.shaped('theabyss:anima_nugget', [
    'AB'
  ], {
    A: '#forge:nuggets/steel',
    B: 'theabyss:anima_dust'
  });

  event.shaped('theabyss:fusion_axe', [
    'AA',
    'BA',
    'B '
  ], {
    A: 'theabyss:fusion_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:fusion_hoe', [
    'AA',
    'B ',
    'B '
  ], {
    A: 'theabyss:fusion_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:fusion_shovel', [
    'A',
    'B',
    'B'
  ], {
    A: 'theabyss:fusion_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:fusion_pickaxe', [
    'AAA',
    ' B ',
    ' B '
  ], {
    A: 'theabyss:fusion_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:fusion_sword', [
    'A',
    'A',
    'B'
  ], {
    A: 'theabyss:fusion_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:knight_axe', [
    'CAA ',
    ' BA ',
    ' BC '
  ], {
    A: 'theabyss:knight_ingot',
    B: 'tetra:forged_beam',
    C: 'theabyss:icora_stone'
  });

  event.shaped('theabyss:knight_hoe', [
    ' AA',
    'CBC',
    ' B '
  ], {
    A: 'theabyss:knight_ingot',
    B: 'tetra:forged_beam',
    C: 'theabyss:icora_stone'
  });

  event.shaped('theabyss:knight_shovel', [
    ' A ',
    'CBC',
    ' B '
  ], {
    A: 'theabyss:knight_ingot',
    B: 'tetra:forged_beam',
    C: 'theabyss:icora_stone'
  });

  event.shaped('theabyss:knight_pick_axe', [
    'AAA',
    'CBC',
    ' B '
  ], {
    A: 'theabyss:knight_ingot',
    B: 'tetra:forged_beam',
    C: 'theabyss:icora_stone'
  });

  event.shaped('theabyss:knight_sword', [
    ' A ',
    'CAC',
    ' B '
  ], {
    A: 'theabyss:knight_ingot',
    B: 'tetra:forged_beam',
    C: 'theabyss:icora_stone'
  });

  event.shaped('theabyss:phantom_axe', [
    'AA',
    'BA',
    'B '
  ], {
    A: 'theabyss:phantom_ingot',
    B: 'tetra:forged_beam',
  });

  event.shaped('theabyss:phantom_hoe', [
    'AA',
    'B ',
    'B '
  ], {
    A: 'theabyss:phantom_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:phantom_shovel', [
    'A',
    'B',
    'B'
  ], {
    A: 'theabyss:phantom_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:phantom_pickaxe', [
    'AAA',
    ' B ',
    ' B '
  ], {
    A: 'theabyss:phantom_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:phantom_sword', [
    ' A ',
    'CAC',
    ' B '
  ], {
    A: 'theabyss:phantom_ingot',
    B: 'tetra:forged_beam',
    C: 'theabyss:phantom_soul_item'
  });

  event.shaped('theabyss:ignisithe_sword', [
    ' A ',
    'CAC',
    ' B '
  ], {
    A: 'theabyss:ignisithe_gem',
    B: 'tetra:forged_beam',
    C: 'theabyss:anima_nugget'
  });

  event.shaped('theabyss:incorythe_axe', [
    'AA',
    'BA',
    'B '
  ], {
    A: 'theabyss:incorythe_gem',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:incorythe_hoe', [
    'AA',
    'B ',
    'B '
  ], {
    A: 'theabyss:incorythe_gem',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:incorythe_shovel', [
    'A',
    'B',
    'B'
  ], {
    A: 'theabyss:incorythe_gem',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:incorythe_pickaxe', [
    'AAA',
    ' B ',
    ' B '
  ], {
    A: 'theabyss:incorythe_gem',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:incorythe_sword', [
    'A',
    'A',
    'B'
  ], {
    A: 'theabyss:incorythe_gem',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:incorythe_sword_mkii', [
    'ABA',
    'ECE',
    'ADA'
  ], {
    A: 'apotheosis:gem_dust',
    B: 'quark:diamond_heart',
    C: 'theabyss:incorythe_sword',
    D: 'tetra:planar_stabilizer',
    E: 'born_in_chaos_v1:dark_metal_ingot'
  });

  event.shaped('theabyss:garnite_axe', [
    'AA',
    'BA',
    'B '
  ], {
    A: 'theabyss:garnite_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:garnite_hoe', [
    'AA',
    'B ',
    'B '
  ], {
    A: 'theabyss:garnite_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:garnite_shovel', [
    'A',
    'B',
    'B'
  ], {
    A: 'theabyss:garnite_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:garnite_pickaxe', [
    'AAA',
    ' B ',
    ' B '
  ], {
    A: 'theabyss:garnite_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:garnite_sword', [
    'A',
    'A',
    'B'
  ], {
    A: 'theabyss:garnite_ingot',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:the_abyss', [ //portal activator
    'AAA',
    ' B ',
    ' A '
  ], {
    A: 'theabyss:loran',
    B: 'tetra:forged_beam'
  });

  event.shaped('theabyss:shuriken', [
    'A A',
    ' B ',
    'A A'
  ], {
    A: '#forge:ingots/steel',
    B: 'theabyss:loran'
  });

  event.shaped('theabyss:shuriken_explosive', [
    'AB'
  ], {
    A: 'theabyss:shuriken',
    B: 'supplementaries:bomb'
  });

  // Ars Nouveau
  event.shaped('ars_nouveau:novice_spell_book', [
    'ABC',
    'DE ',
    '   ',
  ], {
    A: 'minecraft:book',
    B: 'forbidden_arcanus:deorum_shovel',
    C: 'forbidden_arcanus:deorum_pickaxe',
    D: 'forbidden_arcanus:deorum_axe',
    E: 'forbidden_arcanus:deorum_sword',
  });

  event.shaped('ars_nouveau:apprentice_spell_book', [
    'ABC',
    'CCD',
    'DEE',
  ], {
    A: 'ars_nouveau:novice_spell_book',
    B: 'forbidden_arcanus:obsidian_skull',
    C: 'apotheosis:gem_dust',
    D: 'create:polished_rose_quartz',
    E: 'minecraft:blaze_rod',
  });

  event.shaped('ars_nouveau:archmage_spell_book', [
    'ABC',
    'DDE',
    'EEF',
  ], {
    A: 'ars_nouveau:apprentice_spell_book',
    B: 'forbidden_arcanus:dark_nether_star',
    C: 'ars_nouveau:wilden_tribute',
    D: 'forbidden_arcanus:golden_dragon_scale',
    E: 'ae2:fluix_pearl',
    F: 'minecraft:totem_of_undying',
  });

  // Forbidden & Arcanus
  event.shaped('forbidden_arcanus:spectral_eye_amulet', [
    ' A ',
    'ABA',
    'CDC'
  ], {
    A: 'forbidden_arcanus:deorum_nugget',
    B: 'ars_nouveau:scryers_oculus',
    C: 'forbidden_arcanus:deorum_ingot',
    D: 'minecraft:nether_star'

  });
  event.shaped('forbidden_arcanus:dark_nether_star', [
    ' A ',
    'ADA',
    ' A '
  ], {
    A: 'enlightened_end:bismuth_ingot',
    D: 'minecraft:nether_star'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_helmet', [
    'ABA',
    'B B'
  ], {
    A: 'forbidden_arcanus:dragon_scale',
    B: 'theabyss:fusion_ingot'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_chestplate', [
    'A A',
    'ACA',
    'BBB'
  ], {
    A: 'forbidden_arcanus:dragon_scale',
    B: 'theabyss:fusion_ingot',
    C: 'minecraft:dragon_breath'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_leggings', [
    'BAB',
    'A A',
    'B B'
  ], {
    A: 'forbidden_arcanus:dragon_scale',
    B: 'theabyss:fusion_ingot'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_boots', [
    'A A',
    'B B'
  ], {
    A: 'forbidden_arcanus:dragon_scale',
    B: 'theabyss:fusion_ingot'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_staff', [
    ' AB',
    'AAA',
    'CA '
  ], {
    A: 'forbidden_arcanus:obsidian_ingot',
    B: 'theabyss:mutated_enderpearl',
    C: 'forbidden_arcanus:ender_pearl_fragment'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_sword', [
    ' CC',
    'CBC',
    'AC '
  ], {
    A: 'forbidden_arcanus:draco_arcanus_staff',
    B: 'theabyss:aberythe_gem',
    C: 'forbidden_arcanus:dragon_scale'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_shovel', [
    ' CD',
    ' BC',
    'A  '
  ], {
    A: 'forbidden_arcanus:draco_arcanus_staff',
    B: 'theabyss:aberythe_gem',
    C: 'forbidden_arcanus:dragon_scale',
    D: 'forbidden_arcanus:obsidian_ingot'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_pickaxe', [
    'CDD',
    ' BD',
    'A C'
  ], {
    A: 'forbidden_arcanus:draco_arcanus_staff',
    B: 'theabyss:aberythe_gem',
    C: 'forbidden_arcanus:dragon_scale',
    D: 'forbidden_arcanus:obsidian_ingot'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_axe', [
    'CD ',
    'DBD',
    'ADC'
  ], {
    A: 'forbidden_arcanus:draco_arcanus_staff',
    B: 'theabyss:aberythe_gem',
    C: 'forbidden_arcanus:dragon_scale',
    D: 'forbidden_arcanus:obsidian_ingot'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_hoe', [
    'CDD',
    ' B ',
    'A  '
  ], {
    A: 'forbidden_arcanus:draco_arcanus_staff',
    B: 'theabyss:aberythe_gem',
    C: 'forbidden_arcanus:dragon_scale',
    D: 'forbidden_arcanus:obsidian_ingot'

  });

  event.shaped('forbidden_arcanus:draco_arcanus_sword', [
    ' BC',
    ' DB',
    'A  '
  ], {
    A: 'forbidden_arcanus:draco_arcanus_staff',
    B: 'theabyss:aberythe_gem',
    C: 'forbidden_arcanus:dark_nether_star',
    D: 'forbidden_arcanus:obsidian_ingot'

  });

  event.shaped('forbidden_arcanus:golden_dragon_scale', [
    'BAB',
    'ACA',
    'BAB'
  ], {
    A: 'forbidden_arcanus:deorum_ingot',
    B: 'ars_nouveau:blaze_fiber',
    C: 'forbidden_arcanus:dragon_scale'

  });

  //Mutant Creatures
  event.shaped('mutantmore:heatstorm_generator', [
    'CGC',
    'DED',
    'DFD'
  ], {
    D: '#forge:cobblestone',
    C: 'minecraft:iron_bars',
    E: 'minecraft:blast_furnace',
    F: 'iter_rpg:fire_rune',
    G: 'mutantmore:mutant_blaze_core'
  });

  event.shaped('mutantmore:mutant_shulker_shield', [
    'DGD',
    'DED',
    'DCD'
  ], {
    D: '#forge:ingots/steel',
    C: 'pneumaticcraft:cannon_barrel',
    E: 'magistuarmory:wood_roundshield',
    G: 'mutantmore:mutant_shulker_shell'
  });

  event.shaped('mutantmore:mutant_blaze_shields', [
    'CDC',
    'DED',
    'CGC'
  ], {
    C: 'minecraft:blaze_powder',
    D: 'mutantmore:rodling_shields',
    G: 'forbidden_arcanus:obsidian_skull',
    E: 'mutantmore:mutant_blaze_core'
  });

  event.shaped('mutantmore:mutant_shulker_turret', [
    'CGC',
    'DED',
    'CGC'
  ], {
    C: 'minecraft:shulker_shell',
    D: 'theabyss:mutated_enderpearl',
    G: 'mutantmore:mutant_shulker_shell',
    E: 'quark:ender_watcher'
  });

  event.shaped('mutantmore:rodling_shields', [
    'C C',
    'D D',
    'C C'
  ], {
    C: 'minecraft:blaze_powder',
    D: 'magistuarmory:wood_roundshield'
  });

  // Sophisticated Backpacks
  event.shaped('sophisticatedbackpacks:backpack', [
    'ACA',
    'BDB',
    'EEE'
  ], {
    A: 'supplementaries:rope',
    B: 'magistuarmory:leather_strip',
    C: 'mekanism:ingot_bronze',
    D: '#forge:chests/wooden',
    E: 'minecraft:leather'
  });

  /*event.shaped('sophisticatedbackpacks:iron_backpack', [
    'B B',
    'ACA',
    'AAA'
  ], {
    A: '#forge:ingots/steel',
    B: 'magistuarmory:steel_chain',
    C: 'sophisticatedbackpacks:backpack'

  });
  
  event.shaped('sophisticatedbackpacks:gold_backpack', [
    'B B',
    'ACA',
    'DAD'
  ], {
    A: 'forbidden_arcanus:deorum_ingot',
    B: 'forbidden_arcanus:cloth',
    C: 'sophisticatedbackpacks:iron_backpack',
    D: 'toolbelt:pouch'


  });

  event.shaped('sophisticatedbackpacks:diamond_backpack', [
    'BEB',
    'ACA',
    'DAD'
  ], {
    A: 'minecraft:diamond',
    B: 'ars_nouveau:blaze_fiber',
    C: 'sophisticatedbackpacks:gold_backpack',
    D: 'toolbelt:pouch',
    E: 'quark:diamond_heart'

  });

  event.shaped('sophisticatedbackpacks:netherite_backpack', [
    'D D',
    'BCB',
    'AAA'
  ], {
    A: 'minecraft:netherite_scrap',
    B: 'tetra:forged_bolt',
    C: 'sophisticatedbackpacks:diamond_backpack',
    D: 'ars_nouveau:end_fiber'
  });*/

  event.shaped('sophisticatedbackpacks:crafting_upgrade', [
    ' A ',
    'BCB',
    ' D '
  ], {
    A: 'minecraft:crafting_table',
    B: '#forge:ingots/steel',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: '#forge:chests'
  });

  event.shaped('sophisticatedbackpacks:jukebox_upgrade', [
    ' A ',
    'BCB',
    ' D '
  ], {
    A: 'minecraft:jukebox',
    B: '#forge:ingots/steel',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: 'minecraft:redstone'
  });

  event.shaped('sophisticatedbackpacks:compacting_upgrade', [
    'BAB',
    'ACA',
    'DAD'
  ], {
    A: 'minecraft:piston',
    B: '#forge:ingots/steel',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: 'minecraft:redstone'
  });

  event.shaped('sophisticatedbackpacks:inception_upgrade', [
    'BDB',
    'ACA',
    'BAB'
  ], {
    A: 'mekanism:alloy_reinforced',
    B: 'bygonenether:warped_ender_pearl',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: 'ae2:singularity'
  });

  event.shaped('sophisticatedbackpacks:pickup_upgrade', [
    ' D ',
    'ACA',
    'BBB'
  ], {
    A: 'forbidden_arcanus:cloth',
    B: 'minecraft:redstone',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: 'create:sticky_mechanical_piston'
  });

  event.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'mekanism:basic_tier_installer',
    B: 'magistuarmory:steel_plate',
    C: 'sophisticatedbackpacks:upgrade_base'
  });

  event.shaped('sophisticatedbackpacks:stack_upgrade_tier_2', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'mekanism:advanced_tier_installer',
    B: 'ae2:logic_processor',
    C: 'sophisticatedbackpacks:stack_upgrade_tier_1'
  });

  event.shaped('sophisticatedbackpacks:stack_upgrade_tier_3', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'mekanism:elite_tier_installer',
    B: 'ae2:engineering_processor',
    C: 'sophisticatedbackpacks:stack_upgrade_tier_2'
  });

  event.shaped('sophisticatedbackpacks:stack_upgrade_tier_4', [
    'ADA',
    'DCD',
    'ABA'
  ], {
    A: 'mekanism:ultimate_tier_installer',
    B: 'tetra:planar_stabilizer',
    C: 'sophisticatedbackpacks:stack_upgrade_tier_3',
    D: 'minecraft:netherite_ingot'
  });

  event.shaped('sophisticatedbackpacks:smelting_upgrade', [
    'ADA',
    'DCD',
    'ABA'
  ], {
    A: 'minecraft:redstone',
    B: 'minecraft:furnace',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: '#forge:ingots/steel'
  });

  event.shaped('sophisticatedbackpacks:smoking_upgrade', [
    'ADA',
    'DCD',
    'ABA'
  ], {
    A: 'minecraft:redstone',
    B: 'minecraft:smoker',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: '#forge:ingots/steel'
  });

  event.shaped('sophisticatedbackpacks:filter_upgrade', [
    'ADA',
    'DCD',
    'ADA'
  ], {
    A: 'minecraft:redstone',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: 'forbidden_arcanus:cloth'
  });

  event.shaped('sophisticatedbackpacks:blasting_upgrade', [
    'ADA',
    'DCD',
    'ABA'
  ], {
    A: 'minecraft:redstone',
    B: 'minecraft:blast_furnace',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: '#forge:ingots/steel'
  });

  event.shaped('sophisticatedbackpacks:refill_upgrade', [
    ' B ',
    'DCD',
    'AEA'
  ], {
    A: 'minecraft:redstone',
    B: 'minecraft:ender_pearl',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: '#forge:ingots/steel',
    E: '#balm:wooden_chests'
  });

  event.shaped('sophisticatedbackpacks:deposit_upgrade', [
    ' B ',
    'DCD',
    'AEA'
  ], {
    A: 'minecraft:redstone',
    B: 'create:mechanical_piston',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: '#forge:ingots/steel',
    E: '#balm:wooden_chests'
  });

  event.shaped('sophisticatedbackpacks:restock_upgrade', [
    ' B ',
    'DCD',
    'AEA'
  ], {
    A: 'minecraft:redstone',
    B: 'create:sticky_mechanical_piston',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: '#forge:ingots/steel',
    E: '#balm:wooden_chests'
  });

  event.shaped('sophisticatedbackpacks:stonecutter_upgrade', [
    ' B ',
    'DCD',
    ' A '
  ], {
    A: 'minecraft:redstone',
    B: 'minecraft:stonecutter',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: '#forge:ingots/steel'
  });

  event.shaped('sophisticatedbackpacks:tool_swapper_upgrade', [
    'ABA',
    'GCE',
    'DFD'
  ], {
    A: 'minecraft:redstone',
    B: 'minecraft:wooden_sword',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: '#forge:ingots/steel',
    E: 'minecraft:wooden_axe',
    F: 'minecraft:wooden_pickaxe',
    G: 'minecraft:wooden_shovel'
  });

  event.shaped('sophisticatedbackpacks:feeding_upgrade', [
    ' A ',
    'ECB',
    ' D '
  ], {
    A: 'create:brass_hand',
    B: 'minecraft:golden_carrot',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: 'minecraft:ender_pearl',
    E: 'minecraft:golden_apple'
  });

  event.shaped('sophisticatedbackpacks:advanced_feeding_upgrade', [
    ' A ',
    'ECE',
    'BDB'
  ], {
    A: 'create:mechanical_arm',
    B: 'minecraft:redstone',
    C: 'sophisticatedbackpacks:upgrade_base',
    D: 'minecolonies:sifter_mesh_string',
    E: 'minecraft:gold_ingot'
  });

  event.shaped('sophisticatedbackpacks:tank_upgrade', [
    'AAA',
    'ACA',
    'AAA'
  ], {
    A: 'mekanism:structural_glass',
    C: 'sophisticatedbackpacks:upgrade_base'
  });

  // Waystones
  event.shaped('waystones:warp_stone', [
    'WPW',
    'PEP',
    'WPW'
  ], {
    W: 'theabyss:anima_nugget',
    P: '#forge:ender_pearls',
    E: '#forge:nether_stars'
  });

  event.shaped('waystones:warp_plate', [
    'WPW',
    'PEP',
    'WPW'
  ], {
    W: 'minecraft:stone_bricks',
    P: 'waystones:warp_dust',
    E: 'theabyss:anima_nugget'
  });

  event.shaped('3x waystones:warp_scroll', [
    'WFW',
    'EEE',
    'PFP'
  ], {
    W: 'minecraft:ender_pearl',
    P: 'minecraft:gold_nugget',
    E: 'minecraft:paper',
    F: '#forge:dyes/purple'
  });
  event.shapeless('2x waystones:warp_dust', [
    'minecraft:ender_pearl',
    'minecraft:amethyst_shard',
    'apotheosis:gem_dust',
    'forbidden_arcanus:mundabitur_dust'
  ]);


  // Supplementaries
  event.shaped('3x supplementaries:rope', [
    'A',
    'A',
    'A'
  ], {
    A: '#forge:string'
  });

  event.shaped('4x supplementaries:bomb_spiky', [
    ' AC',
    'ABA',
    ' A '
  ], {
    A: '#forge:ingots/lead',
    B: 'minecraft:tnt',
    C: 'forbidden_arcanus:cloth'
  });

  event.shaped('4x supplementaries:bomb', [
    ' AC',
    'ABA',
    ' A '
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:tnt',
    C: 'forbidden_arcanus:cloth'
  });

  event.shaped('supplementaries:quiver', [
    'F F',
    'LSL',
    ' L '
  ], {
    S: '#forge:string',
    L: '#forge:leather',
    F: 'supplementaries:rope'
  });

  event.shaped('supplementaries:hourglass', [
    'FLF',
    ' F ',
    'FLF'
  ], {
    L: 'create:brass_ingot',
    F: 'forbidden_arcanus:runic_glass'
  });

  event.shaped('supplementaries:sack', [
    'FLF',
    'F F',
    'FFF'
  ], {
    L: 'supplementaries:rope',
    F: 'forbidden_arcanus:cloth'
  });

  // AE2
  event.shaped('ae2:wireless_receiver', [
    ' L ',
    'FMF',
    ' F '
  ], {
    L: 'ae2:fluix_pearl',
    F: '#forge:ingots/steel',
    M: 'ae2:quartz_fiber'
  });

  event.shaped('ae2:inscriber', [
    'FLF',
    'M F',
    'FLF'
  ], {
    L: 'create:sticky_mechanical_piston',
    F: 'minecraft:iron_ingot',
    M: 'minecraft:copper_ingot'
  });

  /*event.shaped('ae2things:advanced_inscriber', [
    'FLF',
    'MNM',
    'FLF'
  ], {
    L: 'pneumaticcraft:transfer_gadget',
    F: '#forge:ingots/steel',
    M: 'ae2:engineering_processor',
    N: 'ae2:inscriber'
  });*/

  event.shapeless('ae2:crafting_terminal', [
    'ae2:terminal',
    'ae2:calculation_processor',
    'sophisticatedbackpacks:crafting_upgrade'
  ]);

  /*event.shaped('ae2things:disk_housing', [
    'FMF',
    'M M',
    'NLN'
  ], {
    L: 'waystones:warp_dust',
    F: 'ae2:quartz_glass',
    M: 'mekanism:alloy_reinforced',
    N: 'minecraft:netherite_ingot'
  });

  event.shaped('ae2things:disk_drive_4k', [
    'FMF',
    'MOM',
    'NLN'
  ], {
    L: 'waystones:warp_dust',
    F: 'ae2:quartz_glass',
    M: 'mekanism:alloy_reinforced',
    N: 'minecraft:netherite_ingot',
    O: 'ae2:cell_component_4k'
  });
  event.shaped('ae2things:disk_drive_16k', [
    'FMF',
    'MOM',
    'NLN'
  ], {
    L: 'waystones:warp_dust',
    F: 'ae2:quartz_glass',
    M: 'mekanism:alloy_reinforced',
    N: 'minecraft:netherite_ingot',
    O: 'ae2:cell_component_16k'
  });
  event.shaped('ae2things:disk_drive_1k', [
    'FMF',
    'MOM',
    'NLN'
  ], {
    L: 'waystones:warp_dust',
    F: 'ae2:quartz_glass',
    M: 'mekanism:alloy_reinforced',
    N: 'minecraft:netherite_ingot',
    O: 'ae2:cell_component_1k'
  });
  event.shaped('ae2things:disk_drive_64k', [
    'FMF',
    'MOM',
    'NLN'
  ], {
    L: 'waystones:warp_dust',
    F: 'ae2:quartz_glass',
    M: 'mekanism:alloy_reinforced',
    N: 'minecraft:netherite_ingot',
    O: 'ae2:cell_component_64k'
  });
  event.shaped('ae2things:disk_drive_256k', [
    'FMF',
    'MOM',
    'NLN'
  ], {
    L: 'waystones:warp_dust',
    F: 'ae2:quartz_glass',
    M: 'mekanism:alloy_reinforced',
    N: 'minecraft:netherite_ingot',
    O: 'ae2:cell_component_256k'
  });*/

  // Tool Belt
  event.shaped('toolbelt:belt', [
    'LKL',
    'K K',
    'MFM'
  ], {
    L: 'supplementaries:rope',
    F: '#forge:ingots/steel',
    M: 'toolbelt:pouch',
    K: 'magistuarmory:leather_strip'
  });

  event.shaped('toolbelt:pouch', [
    'LFL',
    'K K',
    'LKL'
  ], {
    L: 'supplementaries:rope',
    F: 'minecraft:gold_ingot',
    K: 'minecraft:leather'
  });

  //Iter_rpg
  event.shaped('iter_rpg:air_rune', [
    'LLL',
    'LKL',
    'LLL'
  ], {
    L: '#kubejs:essence',
    K: 'iter_rpg:empty_rune'
  });


  //Better Katanas
  event.shaped('better_katanas:iron_katana', [
    'L K',
    ' F ',
    'F  '
  ], {
    L: 'kubejs:wetstone',
    F: '#forge:ingots/steel',
    K: 'kubejs:katana_hilt'
  });

  event.shaped('better_katanas:murasame', [
    'L K',
    ' F ',
    'F  '
  ], {
    L: 'kubejs:wetstone',
    F: 'iter_rpg:hell_ingot',
    K: 'kubejs:murasame_hilt'
  });

  event.shaped('better_katanas:yami_katana', [
    'L K',
    ' F ',
    'F  '
  ], {
    L: 'kubejs:wetstone',
    F: 'iter_rpg:end_ingot',
    K: 'kubejs:yamis_katana_hilt'
  });

  event.shaped('better_katanas:snake_sword', [
    'L K',
    ' F ',
    'F  '
  ], {
    L: 'kubejs:wetstone',
    F: 'minecraft:netherite_ingot',
    K: 'kubejs:snake_sword_hilt'
  });

  event.shaped('better_katanas:swordoftempest', [
    'L K',
    ' F ',
    'F  '
  ], {
    L: 'kubejs:wetstone',
    F: 'iter_rpg:forest_ingot',
    K: 'kubejs:rimurus_katana_hilt'
  });

  // Solar Flux Reborn
  event.shaped('solarflux:sp_2', [
    'BBB',
    'BFB',
    'BBB'
  ], {
    B: 'solarflux:sp_1',
    F: 'mekanism:basic_control_circuit',
  });

  event.shaped('solarflux:sp_3', [
    'DDD',
    'ABA',
    'ACA'
  ], {
    A: 'solarflux:sp_2',
    B: 'mekanism:advanced_control_circuit',
    C: 'minecraft:iron_block',
    D: 'solarflux:photovoltaic_cell_1'
  });

  event.shaped('solarflux:photovoltaic_cell_1', [
    'DDD',
    'CCC',
    'BBB'
  ], {
    B: 'solarflux:mirror',
    C: 'pneumaticcraft:upgrade_matrix',
    D: '#forge:glass'
  });

  event.shaped('solarflux:sp_4', [
    'DDD',
    'ABA',
    'ACA'
  ], {
    A: 'solarflux:sp_3',
    B: 'mekanism:elite_control_circuit',
    C: 'pneumaticcraft:compressed_iron_block',
    D: 'solarflux:photovoltaic_cell_2'
  });

  event.shaped('solarflux:photovoltaic_cell_2', [
    'CDC',
    'DCD',
    'BAB'
  ], {
    D: 'pneumaticcraft:upgrade_matrix',
    C: 'minecraft:clay_ball',
    B: 'solarflux:mirror',
    A: 'solarflux:photovoltaic_cell_1'
  });

  event.shaped('solarflux:sp_5', [
    'DDD',
    'ABA',
    'ACA'
  ], {
    A: 'solarflux:sp_4',
    B: 'mekanism:ultimate_control_circuit',
    C: 'pneumaticcraft:printed_circuit_board',
    D: 'solarflux:photovoltaic_cell_3'
  });

  event.shaped('solarflux:photovoltaic_cell_3', [
    'CCC',
    'DDD',
    'BAB'
  ], {
    D: 'minecraft:glowstone_dust',
    C: 'ae2:quartz_glass',
    B: 'mekanism:ingot_refined_obsidian',
    A: 'solarflux:photovoltaic_cell_2'
  });

  event.shaped('solarflux:sp_6', [
    'DDD',
    'ABA',
    'ACA'
  ], {
    A: 'solarflux:sp_5',
    B: 'mekanism:ultimate_tier_installer',
    C: 'pneumaticcraft:module_expansion_card',
    D: 'solarflux:photovoltaic_cell_4'
  });

  event.shaped('solarflux:photovoltaic_cell_4', [
    'CCC',
    'BDB',
    'EAE'
  ], {
    D: 'enlightened_end:refined_magnetite',
    C: 'solarflux:blazing_coating',
    B: 'mekanism:ingot_refined_glowstone',
    A: 'solarflux:photovoltaic_cell_3',
    E: 'ae2:energy_cell'
  });

  event.shaped('solarflux:sp_7', [
    'DDD',
    'ABA',
    'ACA'
  ], {
    A: 'solarflux:sp_6',
    B: 'tetra:planar_stabilizer',
    C: 'mekanism:supercharged_coil',
    D: 'solarflux:photovoltaic_cell_5'
  });

  event.shaped('solarflux:photovoltaic_cell_5', [
    'CCC',
    'BDB',
    'EAE'
  ], {
    D: 'solarflux:capacity_upgrade',
    C: 'solarflux:emerald_glass',
    B: 'create:electron_tube',
    A: 'ae2:dense_energy_cell',
    E: 'solarflux:photovoltaic_cell_4'
  });

  event.shaped('solarflux:sp_8', [
    'DDD',
    'ABA',
    'ACA'
  ], {
    A: 'solarflux:sp_7',
    B: 'megacells:radioactive_chemical_cell',
    C: 'mekanism:qio_drive_supermassive',
    D: 'solarflux:photovoltaic_cell_6'
  });

  event.shaped('solarflux:photovoltaic_cell_6', [
    'CCC',
    'BDB',
    'EAE'
  ], {
    D: 'mekanismgenerators:fission_reactor_logic_adapter',
    C: 'solarflux:ender_glass',
    B: 'mekanismgenerators:laser_focus_matrix',
    A: 'mekanism:sps_casing',
    E: 'solarflux:photovoltaic_cell_5'
  });

  // Mekanism

  event.shaped('mekanismgenerators:fission_reactor_logic_adapter', [
    ' C ',
    'CDC',
    ' C '
  ], {
    D: 'mekanismgenerators:fission_reactor_casing',
    C: 'mekanism:basic_control_circuit'
  });

  event.shaped('mekanism:mekasuit_helmet', [
    'DCD',
    'DED',
    'FGF'
  ], {
    D: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    E: 'enlightened_end:adamantite_armor_helmet',
    F: 'mekanism:pellet_polonium',
    G: 'mekanism:basic_induction_cell'
  });

  event.shaped('mekanism:mekasuit_bodyarmor', [
    'DCD',
    'DED',
    'FGF'
  ], {
    D: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    E: 'enlightened_end:adamantite_armor_chestplate',
    F: 'mekanism:pellet_polonium',
    G: 'mekanism:basic_induction_cell'
  });

  event.shaped('mekanism:mekasuit_pants', [
    'DCD',
    'DED',
    'FGF'
  ], {
    D: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    E: 'enlightened_end:adamantite_armor_leggings',
    F: 'mekanism:pellet_polonium',
    G: 'mekanism:basic_induction_cell'
  });

  event.shaped('mekanism:mekasuit_boots', [
    'DCD',
    'DED',
    'FGF'
  ], {
    D: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    E: 'enlightened_end:adamantite_armor_boots',
    F: 'mekanism:pellet_polonium',
    G: 'mekanism:basic_induction_cell'
  });

  // Potion Rings

  event.shaped('potion_rings_rebooted:potion_ring_of_jump_boost', [
    'CD ',
    'DED',
    ' D '
  ], {
    D: 'minecraft:rabbit_foot',
    C: 'minecraft:slime_block',
    E: 'potion_rings_rebooted:potion_ring'
  });

  event.shaped('potion_rings_rebooted:potion_ring_of_speed', [
    'CD ',
    'DED',
    ' D '
  ], {
    D: 'minecraft:sugar',
    C: 'panthalassa:giant_orthocone_shell',
    E: 'potion_rings_rebooted:potion_ring'
  });

  event.shaped('potion_rings_rebooted:potion_ring_of_regeneration', [
    'CD ',
    'DED',
    ' D '
  ], {
    D: 'minecraft:ghast_tear',
    C: '#forge:nether_stars',
    E: 'potion_rings_rebooted:potion_ring'
  });

  event.shaped('potion_rings_rebooted:potion_ring_of_strength', [
    'CD ',
    'DED',
    ' D '
  ], {
    D: 'minecraft:blaze_powder',
    C: 'iter_rpg:arcane_powder',
    E: 'potion_rings_rebooted:potion_ring'
  });

  event.shaped('potion_rings_rebooted:potion_ring_of_haste', [
    'CD ',
    'DED',
    ' D '
  ], {
    D: 'minecraft:prismarine_crystals',
    C: 'forbidden_arcanus:deorum_ingot',
    E: 'potion_rings_rebooted:potion_ring'
  });

  event.shaped('potion_rings_rebooted:potion_ring_of_resistance', [
    'CD ',
    'DED',
    ' D '
  ], {
    D: 'tetra:metal_scrap',
    C: 'quark:diamond_heart',
    E: 'potion_rings_rebooted:potion_ring'
  });

  // Panthalassa Custom Food

  event.shapeless('kubejs:ancient_tempura', [
    'panthalassa:cooked_primal_crustacean_meat',
    'panthalassa:cooked_primal_shark_meat',
    '#kubejs:kelp',
    '#kubejs:kelp'
  ]);

  event.shaped('kubejs:bruces_burger', [
    'GCG',
    'EDF',
    'GGG'
  ], {
    D: 'panthalassa:cooked_primal_shark_meat',
    C: 'panthalassa:cooked_primal_whale_meat',
    E: 'panthalassa:cooked_plesiosaur_meat',
    F: 'panthalassa:cooked_primal_turtle_meat',
    G: 'minecraft:bread'
  });

  event.shaped('kubejs:mosasaur_on_a_stick', [
    '  D',
    ' C ',
    'FE '
  ], {
    D: 'panthalassa:cooked_mosasaur_meat',
    C: 'minecraft:beetroot',
    E: 'minecraft:baked_potato',
    F: 'minecraft:stick'
  });

  event.shapeless('kubejs:nemos_mix', [
    'panthalassa:cooked_mosasaur_meat',
    'panthalassa:cooked_primal_calamari',
    'panthalassa:cooked_primal_crustacean_meat',
    'panthalassa:cooked_pliosaur_meat',
    'minecraft:bowl'
  ]);

  event.shapeless('kubejs:pliosaur_nigiri', [
    'panthalassa:cooked_pliosaur_meat',
    '#kubejs:kelp',
    'minecraft:wheat'
  ]);

  event.shaped('kubejs:primal_calaplio_pie', [
    ' E ',
    'GDC',
    ' F '
  ], {
    D: 'panthalassa:cooked_primal_calamari',
    C: 'panthalassa:cooked_pliosaur_meat',
    E: 'panthalassa:cooked_plesiosaur_meat',
    F: 'minecraft:bowl',
    G: '#forge:flour'
  });

  event.shapeless('kubejs:primal_crabcake', [
    'panthalassa:cooked_primal_crustacean_meat',
    'minecraft:bread',
    'minecraft:turtle_egg'
  ]);

  event.shapeless('kubejs:primal_whale_shark_roll', [
    'panthalassa:cooked_primal_whale_meat',
    'panthalassa:cooked_primal_shark_meat',
    '#kubejs:kelp',
    '#kubejs:kelp'
  ]);

  event.shapeless('kubejs:primal_fish_sticks', [
    'panthalassa:cooked_primal_fish_meat',
    '#forge:flour',
    '#forge:eggs'
  ]);

  event.shapeless('kubejs:primal_takoyaki', [
    'panthalassa:cooked_primal_calamari',
    '#forge:flour',
    '#kubejs:seagrass'
  ]);

  event.shapeless('kubejs:primal_calamosa_taco', [
    'panthalassa:cooked_primal_calamari',
    'panthalassa:cooked_mosasaur_meat',
    '#forge:flour',
    '#forge:eggs',
    'minecraft:seagrass'
  ]);

  event.shapeless('kubejs:primal_terrapin_soup', [
    'panthalassa:cooked_primal_turtle_meat',
    'minecraft:turtle_egg',
    '#kubejs:wetkelp',
    'minecraft:bowl'
  ]);

  event.shapeless('kubejs:whale_steak_lasagna', [
    'panthalassa:cooked_primal_whale_meat',
    '#forge:milk',
    '#forge:eggs',
    '#forge:flour'
  ]);

  event.shapeless('kubejs:whale_steak_lasagna', [
    'panthalassa:cooked_primal_whale_meat',
    'minecolonies:milky_bread',
    '#forge:eggs'
  ]);

  //Healing Flasks
  event.shapeless('healingflasks:flask_shard', [
    'minecraft:blaze_powder',
    'iter_rpg:ametrine_shard',
    'minecraft:blaze_powder',
    'minecraft:blaze_powder'
  ]);

  event.shaped('healingflasks:t_3_healing_flask', [
    ' DE',
    'DCD',
    ' D '
  ], {
    D: 'healingflasks:flask_shard',
    C: 'healingflasks:t_2_healing_flask',
    E: 'theabyss:anima_nugget'
  });


  //Custom Bountiful Bauble Items
  event.shaped('kubejs:disintegration_tablet', [
    'EDE',
    'DCD',
    'EDE'
  ], {
    D: 'minecraft:blaze_powder',
    C: 'forbidden_arcanus:mundabitur_dust',
    E: '#ae2:all_quartz'
  }).keepIngredient('kubejs:disintegration_tablet');


  /*event.shapeless('kubejs:spectral_silt', [
    "artifacts:steadfast_spikes",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');*/

  event.shapeless('kubejs:spectral_silt', [
    "artifacts:panic_necklace",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  event.shapeless('kubejs:spectral_silt', [
    "artifacts:villager_hat",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  event.shapeless('kubejs:spectral_silt', [
    "artifacts:superstitious_hat",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  event.shapeless('kubejs:spectral_silt', [
    "magicmirror:magicmirror",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:cross_necklace",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  event.shapeless('kubejs:spectral_silt', [
    "artifacts:charm_of_sinking",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  event.shapeless('kubejs:spectral_silt', [
    "artifacts:cloud_in_a_bottle",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  event.shapeless('kubejs:spectral_silt', [
    "artifacts:antidote_vessel",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  event.shapeless('kubejs:spectral_silt', [
    "artifacts:universal_attractor",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  event.shapeless('kubejs:spectral_silt', [
    "artifacts:feral_claws",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  /*event.shapeless('kubejs:spectral_silt', [
    "artifacts:running_shoes",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');*/



  /*event.shapeless('kubejs:spectral_silt', [
    "artifacts:flippers",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');*/

  event.shapeless('kubejs:spectral_silt', [
    "#quark:runes",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  event.shaped('artifacts:villager_hat', [
    'EDE',
    'DCD',
    '   '
  ], {
    C: 'minecolonies:sifter_mesh_string',
    E: 'kubejs:spectral_silt',
    D: 'minecraft:wheat'
  });

  event.shaped('artifacts:superstitious_hat', [
    'DDD',
    'DCD',
    'E E'
  ], {
    C: 'numismaticoverhaul:gold_coin',
    E: 'kubejs:spectral_silt',
    D: 'minecraft:lime_wool'
  });

  event.shaped('artifacts:cross_necklace', [
    'DDD',
    'D D',
    'EFE'
  ], {
    E: 'kubejs:spectral_silt',
    D: 'forbidden_arcanus:deorum_chain',
    F: 'minecraft:gold_ingot'
  });

  event.shaped('artifacts:panic_necklace', [
    'DED',
    'DED',
    ' C '
  ], {
    C: 'scalinghealth:heart_crystal',
    E: 'kubejs:spectral_silt',
    D: '#forge:string'
  });

  event.shaped('artifacts:charm_of_sinking', [
    'DED',
    'D D',
    ' C '
  ], {
    C: 'minecraft:heart_of_the_sea',
    E: 'kubejs:spectral_silt',
    D: '#forge:string'
  });

  event.shaped('artifacts:cloud_in_a_bottle', [
    'DED',
    'DCD',
    'DDD'
  ], {
    C: 'iter_rpg:cloud_block',
    E: 'kubejs:spectral_silt',
    D: '#quark:shards'
  });

  event.shaped('artifacts:antidote_vessel', [
    'E E',
    'DCD',
    'DDD'
  ], {
    C: 'minecraft:honey_bottle',
    E: 'kubejs:spectral_silt',
    D: 'create:copper_sheet'
  });

  event.shaped('artifacts:universal_attractor', [
    'DED',
    'CEC',
    'CCC'
  ], {
    C: 'minecraft:iron_ingot',
    E: 'kubejs:spectral_silt',
    D: 'create:golden_sheet'
  });

  event.shaped('artifacts:feral_claws', [
    'CDE',
    'C D',
    'CDE'
  ], {
    C: 'minecraft:prismarine_shard',
    E: 'kubejs:spectral_silt',
    D: '#forge:string'
  });

  /*event.shaped('artifacts:running_shoes', [
    'D D',
    'DFD',
    'E E'
  ], {
    F: '#forge:string',
    E: 'kubejs:spectral_silt',
    D: 'minecraft:red_wool'
  });*/

  /*event.shaped('artifacts:steadfast_spikes', [
    'CEC',
    'CEC',
    'F F'
  ], {
    C: 'magistuarmory:leather_strip',
    F: 'ars_nouveau:wilden_spike',
    E: 'kubejs:spectral_silt'
  });*/

  /*event.shaped('artifacts:flippers', [
    'FFE',
    ' CF',
    'FFE'
  ], {
    C: 'alexsmobs:flying_fish_boots',
    F: 'pneumaticcraft:plastic',
    E: 'kubejs:spectral_silt'
  });*/

  //Magic Mirror
  event.shaped('magicmirror:magicmirror', [
    ' E ',
    'EFE',
    ' E '
  ], {
    F: 'panthalassa:hpr_glass_sphere',
    E: 'kubejs:spectral_silt'
  });

  //Alexs Mobs
  event.shaped('alexsmobs:flying_fish_boots', [
    'C C',
    'F F'
  ], {
    F: 'alexsmobs:flying_fish',
    C: 'magistuarmory:leather_strip'
  });

  //Mutation Craft
  event.shaped('mutationcraft:metal_scrap', [
    ' C ',
    'F F',
    ' C '
  ], {
    F: 'minecraft:iron_nugget',
    C: 'magistuarmory:steel_ingot'
  });

  //DOOM
  event.shaped('doom:gun_table', [
    'FGF',
    'CCC'
  ], {
    C: 'mekanism:block_steel',
    F: 'mekanism:elite_control_circuit',
    G: 'minecraft:anvil'
  });
  event.shaped('doom:argent_hoe', [
    'FF',
    'C ',
    'C '
  ], {
    F: 'doom:argent_plate',
    C: 'tetra:forged_beam'
  });
  event.shaped('doom:argent_axe', [
    'FF',
    'CF',
    'C '
  ], {
    F: 'doom:argent_plate',
    C: 'tetra:forged_beam'
  });
  event.shaped('doom:argent_pickaxe', [
    'FFF',
    ' C ',
    ' C '
  ], {
    F: 'doom:argent_plate',
    C: 'tetra:forged_beam'
  });
  event.shaped('doom:argent_sword', [
    'F',
    'F',
    'C'
  ], {
    F: 'doom:argent_plate',
    C: 'tetra:forged_beam'
  });
  event.shaped('doom:argent_shovel', [
    'F',
    'C',
    'C'
  ], {
    F: 'doom:argent_plate',
    C: 'tetra:forged_beam'
  });
  event.shaped('doom:argent_paxel', [
    'EFD',
    ' C ',
    ' C '
  ], {
    F: 'doom:argent_pickaxe',
    C: 'tetra:forged_beam',
    D: 'doom:argent_shovel',
    E: 'doom:argent_axe'
  });
  event.shapeless('doom:gas_barrel', [
    'minecraft:gunpowder',
    'mekanism:basic_chemical_tank',
    'minecraft:blaze_powder',
  ]);
  event.shaped('doom:energy_cells', [
    'FFF',
    'CDC',
    'FFF'
  ], {
    F: 'magistuarmory:steel_plate',
    C: 'mekanism:ingot_uranium',
    D: 'doom:argent_energy',
  });
  event.shaped('doom:argent_bolt', [
    'F',
    'C',
    'G'
  ], {
    F: 'mekanism:nugget_steel',
    C: 'minecraft:blaze_rod',
    G: 'doom:argent_energy'
  });
  event.shaped('doom:unmaykr_bolt', [
    ' F ',
    ' C ',
    'GGG'
  ], {
    F: 'mekanism:nugget_steel',
    C: 'minecraft:end_rod',
    G: 'doom:argent_energy'
  });
  event.shaped('doom:shotgun_shells', [
    'F',
    'C',
    'G'
  ], {
    F: 'magistuarmory:steel_plate',
    C: 'minecraft:gunpowder',
    G: 'minecraft:blaze_powder'
  });
  event.shaped('doom:chaingunbullets', [
    'FFF',
    'FCF',
    ' F '
  ], {
    F: 'magistuarmory:steel_ingot',
    C: 'minecraft:gunpowder'
  });
  event.shaped('doom:rocket', [
    ' F ',
    ' C ',
    'FGF'
  ], {
    F: 'magistuarmory:steel_ingot',
    C: 'doom:argent_energy',
    G: 'minecraft:tnt'
  });
  event.shapeless('doom:bullets', [
    'minecraft:gunpowder',
    'minecraft:blaze_powder',
    'minecraft:iron_ingot'
  ]);
  event.shaped('doom:bfg_cell', [
    'CFC',
    'DDD',
    'CFC'
  ], {
    F: 'magistuarmory:steel_plate',
    C: 'mekanism:ingot_uranium',
    D: 'doom:argent_energy',
  });
  event.shapeless('kubejs:spectral_silt', [
    "doom:daisy",
    "kubejs:disintegration_tablet",

  ]).keepIngredient('kubejs:disintegration_tablet');

  //Vinery
  event.shaped('vinery:fermentation_barrel', [
    'FDF',
    'CEC',
    'FDF'
  ], {
    F: 'minecraft:iron_ingot',
    C: 'minecraft:tripwire_hook',
    D: '#minecraft:logs',
    E: 'minecraft:barrel',
  });

  //Drink Beer
  event.shaped('drinkbeer:beer_barrel', [
    'DFD',
    'DEC',
    'DFD'
  ], {
    F: 'minecraft:iron_ingot',
    C: 'minecraft:tripwire_hook',
    D: '#minecraft:logs',
    E: 'minecraft:barrel',
  });

  //Kubejs

  event.shapeless('3x minecraft:oak_planks', [
    '#minecraft:oak_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:spruce_planks', [
    '#minecraft:spruce_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:birch_planks', [
    '#minecraft:birch_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:jungle_planks', [
    '#minecraft:jungle_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:acacia_planks', [
    '#minecraft:acacia_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:dark_oak_planks', [
    '#minecraft:dark_oak_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:mangrove_planks', [
    '#minecraft:mangrove_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:crimson_planks', [
    '#minecraft:crimson_stems',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:warped_planks', [
    '#minecraft:warped_stems',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x iter_rpg:sacred_planks', [
    'iter_rpg:sacred_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x theabyss:blaru_planks', [
    'theabyss:blaru_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x theabyss:jungle_planks', [
    'theabyss:jungle_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x theabyss:bog_planks', [
    'theabyss:bog_shroom_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x theabyss:sal_planks', [
    'theabyss:sal_shroom_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x theabyss:slimed_planks', [
    'theabyss:slimed_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x theabyss:frozen_planks', [
    'theabyss:frozen_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x theabyss:vigilant_planks', [
    'theabyss:vigilant_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x born_in_chaos_v1:scorched_planks', [
    '#minecraft:woodkr',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  /*event.shapeless('3x desolation:charred_planks', [
    'desolation:charredlog',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)*/

  event.shapeless('3x enlightened_end:congealed_planks', [
    '#enlightened_end:seldge_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x enlightened_end:ebony_planks', [
    'enlightened_end:ebony_stalk_bundle',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  /*event.shapeless('3x upgrade_aquatic:driftwood_planks', [
    '#upgrade_aquatic:driftwood_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x upgrade_aquatic:river_planks', [
    '#upgrade_aquatic:river_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)*/

  event.shapeless('3x ars_nouveau:archwood_planks', [
    '#forge:logs/archwood',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x quark:bamboo_planks', [
    '#quark:bamboo_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x quark:blossom_planks', [
    '#quark:blossom_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x quark:azalea_planks', [
    '#quark:azalea_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x quark:ancient_planks', [
    '#quark:ancient_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x forbidden_arcanus:fungyss_planks', [
    '#forbidden_arcanus:fungyss_stems',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x forbidden_arcanus:cherry_planks', [
    '#forbidden_arcanus:cherrywood_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x forbidden_arcanus:aurum_planks', [
    '#forbidden_arcanus:mysterywood_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x forbidden_arcanus:edelwood_planks', [
    '#forbidden_arcanus:edelwood_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x vinery:cherry_planks', [
    'vinery:cherry_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('2x minecraft:stick', [
    '#minecraft:planks',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shaped('kubejs:bronze_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/bronze',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:copper_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/copper',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:diamond_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:gems/diamond',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:gold_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/gold',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:iron_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/iron',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:steel_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/steel',
    D: 'minecraft:stick',
  });

  event.shapeless('kubejs:grass_string', [
    '3x kubejs:grass_fiber',
  ])

  event.shaped('kubejs:flint_hatchet', [
    ' EC',
    ' D ',
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
    E: '#forge:string',
  });
  event.shaped('kubejs:flint_pickaxe', [
    'CEC',
    ' D ',
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
    E: '#forge:string',
  });
  event.shaped('kubejs:flint_shovel', [
    ' C ',
    ' E ',
    ' D '
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
    E: '#forge:string',
  });
  event.shaped('kubejs:flint_hoe', [
    'CCE',
    '  D',
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
    E: '#forge:string',
  });
  event.shaped('kubejs:flint_knife', [
    ' C ',
    ' D ',
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:bronze_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/bronze',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:copper_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/copper',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:diamond_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:gems/diamond',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:gold_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/gold',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:iron_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/iron',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:steel_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/steel',
    D: 'minecraft:stick',
  });

  event.shapeless('kubejs:grave_scroll', [
    'minecraft:rotten_flesh',
    'minecraft:paper',
    '#forge:ender_pearls'
  ]
  );


  

});
ServerEvents.recipes(e => {
    e.custom({
        type: 'vinery:wine_fermentation',
        ingredients: [
            { item: 'minecraft:glow_berries' },
            { item: '#minecraft:grapejuice_white' }
        ],
        result: { item: 'kubejs:white_wine' }
    })
})

ItemEvents.crafted(event => {
  const { item, player, server } = event
  let pData = player.persistentData
  if (pData.craftsaw != 1) { return }
  pData.craftsaw = 0;
  server.schedule(2000, () => {

    pData.craftsaw = 1;
  });
  server.runCommandSilent(`execute as ${player.username} run playsound minecraft:craftsaw ambient @s ${player.x} ${player.y} ${player.z} 0.5 1`)


})




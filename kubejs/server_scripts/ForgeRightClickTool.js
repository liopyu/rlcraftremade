
const reforgeable = [
    { item: "forge:tools/diamond", offhand: "minecraft:diamond" },
    { item: "forge:tools/iron", offhand: "minecraft:iron_ingot" },
    { item: "forge:tools/gold", offhand: "minecraft:gold_ingot" },
    { item: "forge:tools/wooden", offhand: "minecraft:stick" },
    { item: "forge:tools/stone", offhand: "minecraft:stone" },
    { item: "forge:tools/netherite", offhand: "minecraft:netherite_scrap" },
    { item: "forge:tools/silver", offhand: "moremekanismprocessing:silver_ingot" },
    { item: "forge:tools/steel", offhand: "magistuarmory:steel_ingot" },
    { item: "forge:tools/draco", offhand: "forbidden_arcanus:dragon_scale" },
    { item: "forge:tools/deorum", offhand: "forbidden_arcanus:deorum_ingot" },
    { item: "forge:tools/fusion", offhand: "theabyss:fusion_ingot" },
    { item: "forge:tools/incorythe", offhand: "theabyss:incorythe_gem" },
    { item: "forge:tools/phantom", offhand: "theabyss:phantom_ingot" },
    { item: "forge:tools/garnite", offhand: "theabyss:garnite_ingot" },
    { item: "forge:tools/unorithe", offhand: "theabyss:unorithe_ingot" },
    { item: "forge:tools/knight", offhand: "theabyss:knight_ingot" },
    { item: "forge:tools/ignisithe", offhand: "theabyss:ignisithe_gem" },
    { item: "forge:tools/titan_bone", offhand: "theabyss:fixed_bone" },
    { item: "forge:tools/tungsten", offhand: "stalwart_dungeons:tungsten_ingot" },
    { item: "forge:tools/chorundum", offhand: "stalwart_dungeons:chorundum" },
    { item: "forge:tools/forest", offhand: "iter_rpg:forest_ingot" },
    { item: "forge:tools/ocean", offhand: "iter_rpg:ocean_ingot" },
    { item: "forge:tools/end", offhand: "iter_rpg:end_ingot" },
    { item: "forge:tools/elemental", offhand: "iter_rpg:elemental_ingot" },
    { item: "forge:tools/sky", offhand: "iter_rpg:sky_ingot" },
    { item: "forge:tools/hell", offhand: "iter_rpg:hell_ingot" },
    { item: "forge:tools/adamantite", offhand: "enlightened_end:adamantite_ingot" },
    { item: "forge:tools/neptunium", offhand: "aquaculture:neptunium_ingot" },
    { item: "forge:tools/nether_star", offhand: "forge:nether_stars" },
    { item: "forge:tools/aberythe", offhand: "theabyss:aberythe_gem" },
    { item: "forge:tools/ars", offhand: "ars_nouveau:source_gem" },
    { item: "forge:tools/chaos", offhand: "born_in_chaos_v1:seedof_chaos" },
    { item: "forge:tools/dark_metal", offhand: "born_in_chaos_v1:dark_metal_ingot" },
    { item: "forge:tools/ametrine", offhand: "iter_rpg:ametrine_ingot" },
    { item: "forge:tools/infected", offhand: "mutationcraft:putrid_claw" },
    { item: "forge:tools/obsidian", offhand: "minecraft:obsidian" },
    { item: "forge:tools/emerald", offhand: "minecraft:emerald" },
    { item: "forge:tools/amethyst", offhand: "minecraft:amethyst_shard" },
    { item: "forge:tools/nether_brick", offhand: "minecraft:nether_brick" },
    { item: "forge:tools/wither_bone", offhand: "mutantmore:repairs_blazing_scimitar" },
    { item: "forge:tools/arcane_powder", offhand: "iter_rpg:arcane_powder" },
    { item: "forge:tools/gobsteel", offhand: "iter_rpg:gobsteel_scrap" },
    { item: "forge:tools/bone", offhand: "minecraft:bone" },
    { item: "forge:tools/awful", offhand: "stalwart_dungeons:awful_crystal" },
    { item: "forge:tools/nautilus_shell", offhand: "minecraft:nautilus_shell" },
    { item: "forge:tools/atomic", offhand: "mekanism:alloy_atomic" },
    { item: "forge:tools/argent_energy", offhand: "doom:argent_plate" },
    { item: "forge:tools/flint", offhand: "minecraft:flint" },
    { item: "forge:tools/bronze", offhand: "#forge:ingots/bronze" },
    { item: "forge:tools/copper", offhand: "minecraft:copper_ingot" },
    // ..
  ]
  
 
  function reforge(event) {
    const {player, item} = event
    for (let i = 0; i < reforgeable.length; i++ ) {
        let it = reforgeable[i]
        let index = event.player.inventory.find(Ingredient.of(`${it.offhand}`))
        if (item.hasTag(it.item) && player.inventory.allItems.some(item => Ingredient.of(it.offhand).test(item))){
            event.player.inventory.extractItem(index,1,false).count--
            attributereforge(event)
            displayreforge(event)
        }
    }
}
  const ATTRIBUTE_LIST_TOOLS = [
    "Rusted",
    "Clumsy",
    "Chipped",
    "Short",
    "Broad",
    "Thin",
    "Pokey",
    "Vicious",
    "Long",
    "Sharp",
    "Keen",
    "Elegant",
    "Sweeping",
    "Legendary",
    "Bulky",
    "Broken",
    "Worthless",
    "Broad",
  ];
  function generateRandomAttributeListtool(random) {
	console.log(ATTRIBUTE_LIST_TOOLS)
      let output = '{';
      let chance = Math.ceil(random * ATTRIBUTE_LIST_TOOLS.length);
      for(let i=0; i<ATTRIBUTE_LIST_TOOLS.length; i++) {
          let attr = ATTRIBUTE_LIST_TOOLS[i];
          output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
          if (i+1 != ATTRIBUTE_LIST_TOOLS.length){
              output += ',';
          }
      }
      
      output += ",Reforged:1b";
      output += '}';
      return output;
	  
  }
  
  function attributereforge(event){
    let item = event.player.getHeldItem('main_hand');
    event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
    item.nbt.merge(generateRandomAttributeListtool(Math.random()));
  }

  BlockEvents.rightClicked(event => {
      let pData = event.player.persistentData;
      let air = event.player.getMainHandItem().id == 'minecraft:air'
      if (pData.timestalll != 1) {
        return;
    }
    if (event.block.id != 'kubejs:reforging_station'){
      return;
    }
    if (air){
      return;
    }
        reforge(event)
        pData.timestalll = 0;
        event.server.schedule(1200, () => {
        pData.timestalll = 1;
    });
})

function displayreforge(event) {
    const {player} = event
    let item = player.getHeldItem('main_hand');
    let color
    let type
    for (let i in item.nbt) {
        if (item.nbt[i] == 1) {
            switch (i) {
                case "Chipped": color = 'red';type = i;break
                case "Rusted": color = 'red';type = i;break
                case "Clumsy": color = 'red';type = i;break

                case "Elegant": color = 'aqua';type = i;break
                case "Broken":  color = 'gray';type = i;break

                case "Short":color = 'red';type = i;break
                case "Broad":color = 'yellow';type = i;break
                case "Thin":color = 'yellow';type = i;break
                case "Pokey":color = 'yellow';type = i;break
                case "Vicious":color = 'yellow';type = i;break
                case "Long":color = 'blue';type = i;break
                case "Keen":color = 'blue';type = i;break
                case "Sweeping": color = 'aqua';type = i;break
                case "Legendary": color = 'light_purple';type = i;break
                case "Worthless":color = 'dark_red';type = i;break
                case "Broad": color = 'yellow';type = i;break

                case "Bulky":color = 'gray';type = i;break
                case "Sharp": color = 'blue';type = i;break
                default:
                    actionbar(player.username, "Your fingers fumble and you smash your thumb", 'red', true);
                    break
            }
        }
        actionbar(player.username, type, color, true)
    }
}



/**
 * Helper Function to create Actionbar Titles
 * @param {string} - username
 * @param {string} - text
 * @param {string} - color
 * @param {boolean} - bold
 * @param {boolean} - italic
 */
function actionbar(username, text, color, bold, italic) {
    Utils.server.runCommandSilent(
        `title ${username} actionbar ${JSON.stringify({
            text: text,
            bold: bold ?? false,
            italic: italic ?? false,
            color: color ?? "yellow",
        })}`
    )
}
/*BlockEvents.rightClicked(event => {
    let item = event.player.getHeldItem('main_hand')
    let gold = item.hasTag('forge:tools/gold')
    let goldindex = event.player.inventory.allItems.some(Ingredient.of("gold_ingot"))
    
    //event.player.tell(goldindex)
    
    
    if (gold && goldindex == false) {
        //event.player.tell('test')
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge hold ","bold":false,"color":"dark_green"},{"text":"Gold Ingot ","italic":true,"color":"gold"},{"text":"In Off-Hand!","color":"dark_green"}]`);
    }
})*/

BlockEvents.rightClicked(event => {
    let goldindex = event.player.inventory.allItems.some(Ingredient.of("gold_ingot"))
    let ironindex = event.player.inventory.allItems.some(Ingredient.of("iron_ingot"))
    let diamondindex = event.player.inventory.allItems.some(Ingredient.of("diamond"))
    let woodenindex = event.player.inventory.allItems.some(Ingredient.of("stick"))
    let stoneindex = event.player.inventory.allItems.some(Ingredient.of("stone"))
    let netheriteindex = event.player.inventory.allItems.some(Ingredient.of("netherite_scrap"))
    let silverindex = event.player.inventory.allItems.some(Ingredient.of("moremekanismprocessing:silver_ingot"))
    let steelindex = event.player.inventory.allItems.some(Ingredient.of("magistuarmory:steel_ingot"))
    let dracoindex = event.player.inventory.allItems.some(Ingredient.of("forbidden_arcanus:dragon_scale"))
    let deorumindex = event.player.inventory.allItems.some(Ingredient.of("forbidden_arcanus:deorum_ingot"))
    let fusionindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:fusion_ingot"))
    let incorytheindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:incorythe_gem"))
    let phantomindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:phantom_ingot"))
    let garniteindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:garnite_ingot"))
    let unoritheindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:unorithe_ingot"))
    let knightindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:knight_ingot"))
    let ignisitheindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:ignisithe_gem"))
    let titan_boneindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:fixed_bone"))
    let tungstenindex = event.player.inventory.allItems.some(Ingredient.of("stalwart_dungeons:tungsten_ingot"))
    let chorundumindex = event.player.inventory.allItems.some(Ingredient.of("stalwart_dungeons:chorundum"))
    let forestindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:forest_ingot"))
    let oceanindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:ocean_ingot"))
    let endindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:end_ingot"))
    let elementalindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:elemental_ingot"))
    let skyindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:sky_ingot"))
    let hellindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:hell_ingot"))
    let adamantiteindex = event.player.inventory.allItems.some(Ingredient.of("enlightened_end:adamantite_ingot"))
    let neptuniumindex = event.player.inventory.allItems.some(Ingredient.of("aquaculture:neptunium_ingot"))
    let nether_starindex = event.player.inventory.allItems.some(Ingredient.of("#forge:nether_stars"))
    let aberytheindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:aberythe_gem"))
    let arsindex = event.player.inventory.allItems.some(Ingredient.of("ars_nouveau:source_gem"))
    let chaosindex = event.player.inventory.allItems.some(Ingredient.of("born_in_chaos_v1:seedof_chaos"))
    let dark_metalindex = event.player.inventory.allItems.some(Ingredient.of("born_in_chaos_v1:dark_metal_ingot"))
    let ametrineindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:ametrine_ingot"))
    let infectedindex = event.player.inventory.allItems.some(Ingredient.of("mutationcraft:putrid_claw"))
    let obsidianindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:obsidian"))
    let emeraldindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:emerald"))
    let amethystindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:amethyst_shard"))
    let nether_brickindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:nether_brick"))
    let wither_boneindex = event.player.inventory.allItems.some(Ingredient.of("mutantmore:repairs_blazing_scimitar"))
    let arcane_powderindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:arcane_powder"))
    let gobsteelindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:gobsteel_scrap"))
    let boneindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:bone"))
    let awfulindex = event.player.inventory.allItems.some(Ingredient.of("stalwart_dungeons:awful_crystal"))
    let nautilus_shellindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:nautilus_shell"))
    let atomicindex = event.player.inventory.allItems.some(Ingredient.of("mekanism:alloy_atomic"))
    let argentindex = event.player.inventory.allItems.some(Ingredient.of("doom:argent_plate"))
    let flintindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:flint"))
    let bronzeindex = event.player.inventory.allItems.some(Ingredient.of("#forge:ingots/bronze"))
    let copperindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:copper_ingot"))

    let item = event.player.getHeldItem('main_hand')
    let offHandItem = event.player.getHeldItem('off_hand');
    let pData = event.player.persistentData;
    let air = event.player.getMainHandItem().id == 'minecraft:air'

    let gold = item.hasTag('forge:tools/gold')
    let wooden = item.hasTag('forge:tools/wooden')
    let stone = item.hasTag('forge:tools/stone')
    let iron = item.hasTag('forge:tools/iron')
    let diamond = item.hasTag('forge:tools/diamond')
    let netherite = item.hasTag('forge:tools/netherite')
    let silver = item.hasTag('forge:tools/silver')
    let steel = item.hasTag('forge:tools/steel')
    let draco = item.hasTag('forge:tools/draco')
    let deorum = item.hasTag('forge:tools/deorum')
    let fusion = item.hasTag('forge:tools/fusion')
    let incorythe = item.hasTag('forge:tools/incorythe')
    let phantom = item.hasTag('forge:tools/phantom')
    let garnite = item.hasTag('forge:tools/garnite')
    let unorithe = item.hasTag('forge:tools/unorithe')
    let knight = item.hasTag('forge:tools/knight')
    let ignisithe = item.hasTag('forge:tools/ignisithe')
    let titan_bone = item.hasTag('forge:tools/titan_bone')
    let tungsten = item.hasTag('forge:tools/tungsten')
    let chorundum = item.hasTag('forge:tools/chorundum')
    let forest = item.hasTag('forge:tools/forest')
    let ocean = item.hasTag('forge:tools/ocean')
    let end = item.hasTag('forge:tools/end')
    let elemental = item.hasTag('forge:tools/elemental')
    let sky = item.hasTag('forge:tools/sky')
    let hell = item.hasTag('forge:tools/hell')
    let adamantite = item.hasTag('forge:tools/adamantite')
    let neptunium = item.hasTag('forge:tools/neptunium')
    let nether_star = item.hasTag('forge:tools/nether_star')
    let aberythe = item.hasTag('forge:tools/aberythe')
    let ars = item.hasTag('forge:tools/ars')
    let chaos = item.hasTag('forge:tools/chaos')
    let dark_metal = item.hasTag('forge:tools/dark_metal')
    let ametrine = item.hasTag('forge:tools/ametrine')
    let infected = item.hasTag('forge:tools/infected')
    let obsidian = item.hasTag('forge:tools/obsidian')
    let emerald = item.hasTag('forge:tools/emerald')
    let amethyst = item.hasTag('forge:tools/amethyst')
    let nether_brick = item.hasTag('forge:tools/nether_brick')
    let wither_bone = item.hasTag('forge:tools/wither_bone')
    let arcane_powder = item.hasTag('forge:tools/arcane_powder')
    let gobsteel = item.hasTag('forge:tools/gobsteel')
    let bone = item.hasTag('forge:tools/bone')
    let awful = item.hasTag('forge:tools/awful')
    let nautilus_shell = item.hasTag('forge:tools/nautilus_shell')
    let atomic = item.hasTag('forge:tools/atomic')
    let argent_energy = item.hasTag('forge:tools/argent_energy')
    let flint = item.hasTag('forge:tools/flint')
    let bronze = item.hasTag('forge:tools/bronze')
    let copper = item.hasTag('forge:tools/copper')

    if (pData.timestallll != 1) { return }
    if (event.block.id != 'kubejs:reforging_station'){ return }
    if (air){ return }

    pData.timestallll = 0;

    if (gold && goldindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Gold Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (iron && ironindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Iron Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (diamond && diamondindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Diamond ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (wooden && woodenindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Stick ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (stone && stoneindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Stone ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (netherite && netheriteindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Netherite Scrap ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (silver && silverindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Silver Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (steel && steelindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Steel Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (draco && dracoindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Dragon Scale ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (deorum && deorumindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Deorum Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (fusion && fusionindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Fusion Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (incorythe && incorytheindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Incorythe Gem ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (phantom && phantomindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Phantom Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (garnite && garniteindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Garnite Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (unorithe && unoritheindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Unorithe Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (knight && knightindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Knight Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (ignisithe && ignisitheindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Ignisithe Gem ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (titan_bone && titan_boneindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Titan Bone ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (tungsten && tungstenindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Tungsten Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (chorundum && chorundumindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Chorundum ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (forest && forestindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Forest Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (ocean && oceanindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Ocean Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (end && endindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"End Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (elemental && elementalindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Elemental Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (sky && skyindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Sky Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (hell && hellindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Hell Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (adamantite && adamantiteindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Adamantite Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (neptunium && neptuniumindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Neptunium Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (nether_star && nether_starindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Nether Star ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (aberythe && aberytheindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Aberythe Gem ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (ars && arsindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Source Gem ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (chaos && chaosindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Seed Of Chaos ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (dark_metal && dark_metalindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Dark Metal Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (ametrine && ametrineindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Ametrine Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (infected && infectedindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Putrid Flesh ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (obsidian && obsidianindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Obsidian ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (emerald && emeraldindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Emerald ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (amethyst && amethystindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Amethyst Shard ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (nether_brick && nether_brickindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Nether Brick ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (wither_bone && wither_boneindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Wither Rib/Wither Limb ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (arcane_powder && arcane_powderindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Arcane Powder ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (gobsteel && gobsteelindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Gobsteel Scrap ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (bone && boneindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Bone ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (awful && awfulindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Awful Crystal ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (nautilus_shell && nautilus_shellindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Nautilus Shell ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
      
      else if (atomic && atomicindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Atomic Alloy ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }

      else if (argent_energy && argentindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Argent Plate ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }

      else if (flint && flintindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Flint ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }

      else if (bronze && bronzeindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Bronze Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }

      else if (copper && copperindex == false) {
        event.server.runCommandSilent(`execute as ${event.player.username} run title @s actionbar ["",{"text":"To Reforge You Must Have ","bold":false,"color":"dark_green"},{"text":"Copper Ingot ","italic":true,"color":"gold"},{"text":"In Your Inventory!","color":"dark_green"}]`);
      }
    

    event.server.schedule(1200, () => {
        
        pData.timestallll = 1;
    });
    
})
PlayerEvents.loggedIn(event => {
    let pData = event.player.persistentData
    pData.timestal = 1
    pData.timestall = 1
    pData.timestalll = 1
    pData.timestallll = 1
})




    


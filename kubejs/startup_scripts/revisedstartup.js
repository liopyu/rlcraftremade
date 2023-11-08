// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {
	// Register new items here
	event.create('dragon_ring').displayName('§6Ring of Fire Dragons')
	event.create('ring_of_faeles').displayName('§6Ring Of Faeles')
	event.create('fairy_ring').displayName('§6Ring of Fairies')
	event.create('elf_ring').displayName('§6Ring of the Elves')
	event.create('lightning_dragon_ring').displayName('§6Ring of Lightning Dragons')
	event.create('ocean_dragon_ring').displayName('§6Ring of Ocean Dragons')
	event.create('titan_ring').displayName('§6Ring of Titans')
	event.create('magicmirror:magicmirror').displayName('Magic Mirror')


})
ItemEvents.modification(event => {

	event.modify("kubejs:dragon_ring", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:ring_of_faeles", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:fairy_ring", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:elf_ring", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:lightning_dragon_ring", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:ocean_dragon_ring", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:titan_ring", item => { item.setMaxStackSize(1) })
	event.modify('doom:argent_energy', item => {
		item.burnTime = 1600
	})
})

BlockEvents.modification(e => {
	e.modify('/.plank/', block => {
		block.requiresTool = true
	})
	e.modify('/.log/', block => {
		block.requiresTool = true
	})
	e.modify('/.wood/', block => {
		block.requiresTool = true
	})
	e.modify('/.*/', block => {
		block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() / 0.5
	})
})


StartupEvents.registry('block', event => {
	// Register new items here
	event.create('pebbles:andesite_pebble').displayName('Andesite Pebble')
		.soundType('stone')
		.hardness(4)
		.requiresTool(false)
		.defaultCutout()

	event.create('reforging_station').displayName('Reforging Station')
		.soundType('anvil')
		.hardness(16)
		.tagBlock('minecraft:mineable/pickaxe')
		.requiresTool(true)
		.defaultCutout()
	//.box(x9, y8, z5, x10, y9, z9)



	event.create('charred_grass').displayName('Charred Grass')
		.soundType('rooted_dirt')
		.hardness(0.8)
		.tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
		.requiresTool(false) // Make it require a tool to drop ay loot


	event.create('charred_dirt').displayName('Charred Dirt')
		.soundType('rooted_dirt')
		.hardness(0.8)
		.tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
		.requiresTool(false) // Make it require a tool to drop ay loot




	event.create('charred_stone').displayName('Charred Stone')
		.soundType('stone')
		.hardness(1)
		.tagBlock('minecraft:mineable/pickaxe') // Make it mine faster using a shovel in 1.18.2+
		.requiresTool(true) // Make it require a tool to drop ay loot



	event.create('charred_earth').displayName('Charred Earth')
		.soundType('rooted_dirt')
		.hardness(0.7)
		.tagBlock('minecraft:mineable/shovel') // Make it mine faster using a shovel in 1.18.2+
		.requiresTool(false) // Make it require a tool to drop ay loot

})

StartupEvents.registry('mob_effect', event => {
	event.create('true_shot').beneficial().modifyAttribute('puffish_skills:player.ranged_damage',
		'47708c7c-39fc-11ee-be56-0242ac120002',
		2,
		"addition").color(Color.GREEN)

	event.create('faeles_power').beneficial().modifyAttribute('minecraft:generic.attack_damage',
		'e0f4e796-3d3d-11ee-be56-0242ac120002',
		1,
		"multiply_base").color(Color.YELLOW)



})

StartupEvents.registry('sound_event', event => {
	event.create('minecraft:dragonfire_breath')
	event.create('minecraft:lightning_breath')
	event.create('minecraft:waterdragon_breath')
	event.create('minecraft:ambient.flap')
	event.create('minecraft:teleport')
	event.create('minecraft:craftsaw')
	event.create('minecraft:knapping')
})


//FULL CREDIT TO @UNCANDANGO IN THE KUBEJS DISCORD FOR WORKING THESE FUNCTIONS OUT!!
ForgeEvents.onEvent(
	"top.theillusivec4.curios.api.event.CurioChangeEvent",
	(event) => {
		global.curioChangeEvent1(event)
		global.curioChangeEvent2(event)
		global.curioChangeEvent3(event)
		global.curioChangeEvent4(event)
		global.curioChangeEvent5(event)
		global.curioChangeEvent6(event)
		global.curioChangeEvent7(event)
		global.curioChangeEvent8(event)
		global.curioChangeEvent9(event)
		global.curioChangeEvent10(event)
		global.curioChangeEvent11(event)
		global.curioChangeEvent13(event)
		global.curioChangeEvent14(event)
		global.curioChangeEvent15(event)
		global.curioChangeEvent16(event)
		global.curioChangeEvent17(event)
		global.curioChangeEvent18(event)
		global.curioChangeEvent19(event)
		global.curioChangeEvent20(event)
		global.attributeupdate(event)
	}
);
/** @arg {Internal.CurioChangeEvent} event */
global.attributeupdate = event => {
	const { entity, entity: { persistentData, username } } = event
	let arcane = persistentData.getInt("arcaneLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} arcane ${arcane}`)
	let athletic = persistentData.getInt("athleticLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} athletic ${athletic}`)
	let aiming = persistentData.getInt("aimingLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} aiming ${aiming}`)
	let armored = persistentData.getInt("armoredLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} armored ${armored}`)
	let clunky = persistentData.getInt("clunkyLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} clunky ${clunky}`)
	let flailing = persistentData.getInt("flailingLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} flailing ${flailing}`)
	let focusing = persistentData.getInt("focusingLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} focusing ${focusing}`)
	let graceful = persistentData.getInt("gracefulLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} graceful ${graceful}`)
	let healthy = persistentData.getInt("healthyLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} healthy ${healthy}`)
	let horrible = persistentData.getInt("horribleLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} horrible ${horrible}`)
	let lucky = persistentData.getInt("luckyLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} lucky ${lucky}`)
	let prospecting = persistentData.getInt("prospectingLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} prospecting ${prospecting}`)
	let punishing = persistentData.getInt("punishingLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} punishing ${punishing}`)
	let shielding = persistentData.getInt("shieldingLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} shielding ${shielding}`)
	let speedy = persistentData.getInt("speedyLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} speedy ${speedy}`)
	let springy = persistentData.getInt("springyLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} springy ${springy}`)
	let strengthening = persistentData.getInt("strengtheningLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} strengthening ${strengthening}`)
	let undying = persistentData.getInt("undyingLevel")
	entity.level.server.runCommandSilent(`scoreboard players set ${username} undying ${undying}`)
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent1 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let aimingResult = getaiming(curioEquiped) - getaiming(curioRemoved)
	let oldaimingLevel = getaimingLevel(player) || 0
	player.persistentData.putInt("aimingLevel", oldaimingLevel + aimingResult)
	//player.tell(getaimingLevel(player))
}

const getaiming = itemstack => {
	let isaiming = itemstack.nbt ? itemstack.nbt.getBoolean("Aiming") : false
	return isaiming ? 1 : 0
}

const getaimingLevel = player => {
	return player.persistentData.getInt("aimingLevel")
}
////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent2 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let ArcaneResult = getArcane(curioEquiped) - getArcane(curioRemoved)
	let oldArcaneLevel = getArcaneLevel(player) || 0
	player.persistentData.putInt("ArcaneLevel", oldArcaneLevel + ArcaneResult)
	//player.tell(getArcaneLevel(player))
}

const getArcane = itemstack => {
	let isArcane = itemstack.nbt ? itemstack.nbt.getBoolean("Arcane") : false
	return isArcane ? 1 : 0
}

const getArcaneLevel = player => {
	return player.persistentData.getInt("ArcaneLevel")
}
////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent3 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let armoredResult = getarmored(curioEquiped) - getarmored(curioRemoved)
	let oldarmoredLevel = getarmoredLevel(player) || 0
	player.persistentData.putInt("armoredLevel", oldarmoredLevel + armoredResult)
	//player.tell(getarmoredLevel(player))
}

const getarmored = itemstack => {
	let isarmored = itemstack.nbt ? itemstack.nbt.getBoolean("Armored") : false
	return isarmored ? 1 : 0
}

const getarmoredLevel = player => {
	return player.persistentData.getInt("armoredLevel")
}
////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent4 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let athleticResult = getathletic(curioEquiped) - getathletic(curioRemoved)
	let oldathleticLevel = getathleticLevel(player) || 0
	player.persistentData.putInt("athleticLevel", oldathleticLevel + athleticResult)
	//player.tell(getathleticLevel(player))
}

const getathletic = itemstack => {
	let isathletic = itemstack.nbt ? itemstack.nbt.getBoolean("Athletic") : false
	return isathletic ? 1 : 0
}

const getathleticLevel = player => {
	return player.persistentData.getInt("athleticLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent5 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let clunkyResult = getclunky(curioEquiped) - getclunky(curioRemoved)
	let oldclunkyLevel = getclunkyLevel(player) || 0
	player.persistentData.putInt("clunkyLevel", oldclunkyLevel + clunkyResult)
	//player.tell(getclunkyLevel(player))
}

const getclunky = itemstack => {
	let isclunky = itemstack.nbt ? itemstack.nbt.getBoolean("Clunky") : false
	return isclunky ? 1 : 0
}

const getclunkyLevel = player => {
	return player.persistentData.getInt("clunkyLevel")
}
////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent6 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let flailingResult = getflailing(curioEquiped) - getflailing(curioRemoved)
	let oldflailingLevel = getflailingLevel(player) || 0
	player.persistentData.putInt("flailingLevel", oldflailingLevel + flailingResult)
	//player.tell(getflailingLevel(player))
}

const getflailing = itemstack => {
	let isflailing = itemstack.nbt ? itemstack.nbt.getBoolean("Flailing") : false
	return isflailing ? 1 : 0
}

const getflailingLevel = player => {
	return player.persistentData.getInt("flailingLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent7 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let focusingResult = getfocusing(curioEquiped) - getfocusing(curioRemoved)
	let oldfocusingLevel = getfocusingLevel(player) || 0
	player.persistentData.putInt("focusingLevel", oldfocusingLevel + focusingResult)
	//player.tell(getfocusingLevel(player))
}

const getfocusing = itemstack => {
	let isfocusing = itemstack.nbt ? itemstack.nbt.getBoolean("Focusing") : false
	return isfocusing ? 1 : 0
}

const getfocusingLevel = player => {
	return player.persistentData.getInt("focusingLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent8 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let gracefulResult = getgraceful(curioEquiped) - getgraceful(curioRemoved)
	let oldgracefulLevel = getgracefulLevel(player) || 0
	player.persistentData.putInt("gracefulLevel", oldgracefulLevel + gracefulResult)
	//player.tell(getgracefulLevel(player))
}

const getgraceful = itemstack => {
	let isgraceful = itemstack.nbt ? itemstack.nbt.getBoolean("Graceful") : false
	return isgraceful ? 1 : 0
}

const getgracefulLevel = player => {
	return player.persistentData.getInt("gracefulLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent9 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let healthyResult = gethealthy(curioEquiped) - gethealthy(curioRemoved)
	let oldhealthyLevel = gethealthyLevel(player) || 0
	player.persistentData.putInt("healthyLevel", oldhealthyLevel + healthyResult)
	//player.tell(gethealthyLevel(player))
}

const gethealthy = itemstack => {
	let ishealthy = itemstack.nbt ? itemstack.nbt.getBoolean("Healthy") : false
	return ishealthy ? 1 : 0
}

const gethealthyLevel = player => {
	return player.persistentData.getInt("healthyLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent10 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let horribleResult = gethorrible(curioEquiped) - gethorrible(curioRemoved)
	let oldhorribleLevel = gethorribleLevel(player) || 0
	player.persistentData.putInt("horribleLevel", oldhorribleLevel + horribleResult)
	//player.tell(gethorribleLevel(player))
}

const gethorrible = itemstack => {
	let ishorrible = itemstack.nbt ? itemstack.nbt.getBoolean("Horrible") : false
	return ishorrible ? 1 : 0
}

const gethorribleLevel = player => {
	return player.persistentData.getInt("horribleLevel")
}
////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent11 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let luckyResult = getlucky(curioEquiped) - getlucky(curioRemoved)
	let oldluckyLevel = getluckyLevel(player) || 0
	player.persistentData.putInt("luckyLevel", oldluckyLevel + luckyResult)
	//player.tell(getluckyLevel(player))
}

const getlucky = itemstack => {
	let islucky = itemstack.nbt ? itemstack.nbt.getBoolean("Lucky") : false
	return islucky ? 1 : 0
}

const getluckyLevel = player => {
	return player.persistentData.getInt("luckyLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent13 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let prospectingResult = getprospecting(curioEquiped) - getprospecting(curioRemoved)
	let oldprospectingLevel = getprospectingLevel(player) || 0
	player.persistentData.putInt("prospectingLevel", oldprospectingLevel + prospectingResult)
	//player.tell(getprospectingLevel(player))
}

const getprospecting = itemstack => {
	let isprospecting = itemstack.nbt ? itemstack.nbt.getBoolean("Prospecting") : false
	return isprospecting ? 1 : 0
}

const getprospectingLevel = player => {
	return player.persistentData.getInt("prospectingLevel")
}
////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent14 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let punishingResult = getpunishing(curioEquiped) - getpunishing(curioRemoved)
	let oldpunishingLevel = getpunishingLevel(player) || 0
	player.persistentData.putInt("punishingLevel", oldpunishingLevel + punishingResult)
	//player.tell(getpunishingLevel(player))
}

const getpunishing = itemstack => {
	let ispunishing = itemstack.nbt ? itemstack.nbt.getBoolean("Punishing") : false
	return ispunishing ? 1 : 0
}

const getpunishingLevel = player => {
	return player.persistentData.getInt("punishingLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent15 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let shieldingResult = getshielding(curioEquiped) - getshielding(curioRemoved)
	let oldshieldingLevel = getshieldingLevel(player) || 0
	player.persistentData.putInt("shieldingLevel", oldshieldingLevel + shieldingResult)
	//player.tell(getshieldingLevel(player))
}

const getshielding = itemstack => {
	let isshielding = itemstack.nbt ? itemstack.nbt.getBoolean("Shielding") : false
	return isshielding ? 1 : 0
}

const getshieldingLevel = player => {
	return player.persistentData.getInt("shieldingLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent16 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let speedyResult = getspeedy(curioEquiped) - getspeedy(curioRemoved)
	let oldspeedyLevel = getspeedyLevel(player) || 0
	player.persistentData.putInt("speedyLevel", oldspeedyLevel + speedyResult)
	//player.tell(getspeedyLevel(player))
}

const getspeedy = itemstack => {
	let isspeedy = itemstack.nbt ? itemstack.nbt.getBoolean("Speedy") : false
	return isspeedy ? 1 : 0
}

const getspeedyLevel = player => {
	return player.persistentData.getInt("speedyLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent17 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let springyResult = getspringy(curioEquiped) - getspringy(curioRemoved)
	let oldspringyLevel = getspringyLevel(player) || 0
	player.persistentData.putInt("springyLevel", oldspringyLevel + springyResult)
	//player.tell(getspringyLevel(player))
}

const getspringy = itemstack => {
	let isspringy = itemstack.nbt ? itemstack.nbt.getBoolean("Springy") : false
	return isspringy ? 1 : 0
}

const getspringyLevel = player => {
	return player.persistentData.getInt("springyLevel")
}

////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent18 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let strengtheningResult = getstrengthening(curioEquiped) - getstrengthening(curioRemoved)
	let oldstrengtheningLevel = getstrengtheningLevel(player) || 0
	player.persistentData.putInt("strengtheningLevel", oldstrengtheningLevel + strengtheningResult)
	//player.tell(getstrengtheningLevel(player))
}

const getstrengthening = itemstack => {
	let isstrengthening = itemstack.nbt ? itemstack.nbt.getBoolean("Strengthening") : false
	return isstrengthening ? 1 : 0
}

const getstrengtheningLevel = player => {
	return player.persistentData.getInt("strengtheningLevel")
}
////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent19 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let undyingResult = getundying(curioEquiped) - getundying(curioRemoved)
	let oldundyingLevel = getundyingLevel(player) || 0
	player.persistentData.putInt("undyingLevel", oldundyingLevel + undyingResult)
	//player.tell(getundyingLevel(player))
}

const getundying = itemstack => {
	let isundying = itemstack.nbt ? itemstack.nbt.getBoolean("Undying") : false
	return isundying ? 1 : 0
}

const getundyingLevel = player => {
	return player.persistentData.getInt("undyingLevel")
}
////////////////////////////////////////////////////////////////////////////
/** @arg {Internal.CurioChangeEvent} e */
global.curioChangeEvent20 = e => {
	let player = e.entity;
	let curioEquiped = e.to
	let curioRemoved = e.from
	let unluckyResult = getunlucky(curioEquiped) - getunlucky(curioRemoved)
	let oldunluckyLevel = getunluckyLevel(player) || 0
	player.persistentData.putInt("unluckyLevel", oldunluckyLevel + unluckyResult)
	//player.tell(getunluckyLevel(player))
}

const getunlucky = itemstack => {
	let isunlucky = itemstack.nbt ? itemstack.nbt.getBoolean("Unlucky") : false
	return isunlucky ? 1 : 0
}

const getunluckyLevel = player => {
	return player.persistentData.getInt("unluckyLevel")
}

StartupEvents.registry('mob_effect', event => {
	event.create('heavy').modifyAttribute('forge:entity_gravity',
		'd3a16ebc-2112-11ee-be56-0242ac120002',
		2,
		"multiply_total").color(Color.BLACK)

	event.create('swift_swim').beneficial().modifyAttribute('forge:swim_speed',
		'9a7db69c-2115-11ee-be56-0242ac120002',
		2,
		"multiply_total").color(Color.BLUE)

	event.create('paralysis').modifyAttribute('minecraft:generic.movement_speed',
		'2b9d0daa-37d0-11ee-be56-0242ac120002',
		-0.06,
		"addition").color(Color.YELLOW)
})

StartupEvents.registry('item', event => {
	// Register new items here
	event.create('katana_hilt').displayName('§7Katana Hilt')
	event.create('yamis_katana_hilt').displayName('§9Yamis Katana Hilt')
	event.create('rimurus_katana_hilt').displayName('§aHilt Of Tempest')
	event.create('snake_sword_hilt').displayName('§9Hilt of Kusanagi')
	event.create('murasame_hilt').displayName('§4Murasame Hilt')
	event.create('wetstone').displayName('Whet Stone')
	event.create('spectral_silt').displayName('§eSpectral Silt')
	event.create('disintegration_tablet').displayName('§cDisintegration Tablet')
	event.create('cosmic_cloud').displayName('§6Cosmic Cloud')
	event.create('allay_essence').displayName('§9Allay Essence')
	event.create('ylf_essence').displayName('§eYlf Essence')
	event.create('cancelcraft').displayName('If you see this item something is wrong with kubejs scripts')
})

ItemEvents.modification(event => {
	event.modify("minecraft:splash_potion", item => { item.setMaxStackSize(8) })
	event.modify("minecraft:potion", item => { item.setMaxStackSize(8) })
	event.modify("recall_potion:recall_food", item => { item.setMaxStackSize(8) })
	event.modify("minecraft:saddle", item => { item.setMaxStackSize(8) })
	event.modify("minecraft:lingering_potion", item => { item.setMaxStackSize(8) })
	event.modify("minecraft:enchanted_book", item => { item.setMaxStackSize(8) })
	event.modify("kubejs:ancient_tempura", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:bruces_burger", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:mosasaur_on_a_stick", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:nemos_mix", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:pliosaur_nigiri", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:primal_calaplio_pie", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:primal_crabcake", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:primal_whale_shark_roll", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:primal_fish_sticks", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:primal_calamosa_taco", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:primal_terrapin_soup", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:whale_steak_lasagna", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:primal_takoyaki", item => { item.setMaxStackSize(16) })
	event.modify("kubejs:disintegration_tablet", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:katana_hilt", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:yamis_katana_hilt", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:rimurus_katana_hilt", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:snake_sword_hilt", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:murasame_hilt", item => { item.setMaxStackSize(1) })
	event.modify("kubejs:wetstone", item => { item.setMaxStackSize(1) })
	event.modify("toughasnails:water_canteen", item => { item.maxDamage = 8 })
	event.modify("toughasnails:purified_water_canteen", item => { item.maxDamage = 12 })
	event.modify('panthalassa:cooked_primal_shark_meat', item => {
		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(6)
				.saturation(.5)
				.effect('minecraft:strength', 600, 1, 1)
		}
	});
	event.modify('panthalassa:cooked_pliosaur_meat', item => {
		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(6)
				.saturation(.5)
				.effect('minecraft:health_boost', 600, 0, 1)
		}
	});
	event.modify('panthalassa:cooked_primal_crustacean_meat', item => {
		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(6)
				.saturation(.5)
				.effect('apotheosis:knowledge', 600, 0, 1)
		}
	});
	event.modify('panthalassa:cooked_primal_whale_meat', item => {
		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(6)
				.saturation(.5)
				.effect('minecraft:regeneration', 600, 0, 1)
		}
	});
	event.modify('panthalassa:cooked_plesiosaur_meat', item => {
		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(6)
				.saturation(.5)
				.effect('apotheosis:vitality', 600, 0, 1)
		}
	});
	event.modify('panthalassa:cooked_primal_fish_meat', item => {
		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(6)
				.saturation(.5)
				.effect('minecraft:water_breathing', 600, 0, 1)
		}
	});
	event.modify('panthalassa:cooked_primal_turtle_meat', item => {
		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(6)
				.saturation(.5)
				.effect('minecraft:resistance', 600, 0, 1)
		}
	});
	event.modify('panthalassa:cooked_mosasaur_meat', item => {
		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(6)
				.saturation(.5)
				.effect('minecraft:conduit_power', 600, 1, 1)
		}
	});
	event.modify('panthalassa:cooked_primal_calamari', item => {
		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(6)
				.saturation(.5)
				.effect('kubejs:swift_swim', 600, 0, 1)
		}
	});
	event.modify('alcocraftplus:mug_of_chorus_ale', item => {

		item.foodProperties = food => {
			food
				.alwaysEdible(true)
				.hunger(3)
				.saturation(5)
				.effect('alcocraftplus:flight', 12800, 0, 1)
				.effect('minecraft:poison', 15, 3, 1)
		}
	});
})
StartupEvents.registry('item', event => {
	event.create('ancient_tempura').displayName('§a§lAncient Tempura').food(food => {
		food
			.hunger(10)
			.saturation(.6)
			.effect('apotheosis:knowledge', 1800, 1, 1)
			.effect('minecraft:strength', 1800, 2, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('bruces_burger').displayName('§9§l§oBruces Burger').food(food => {
		food
			.hunger(12)
			.saturation(.7)
			.effect('strength', 2100, 2, 1)
			.effect('minecraft:resistance', 2100, 1, 1)
			.effect('minecraft:regeneration', 2100, 1, 1)
			.effect('apotheosis:vitality', 2100, 1, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('mosasaur_on_a_stick').displayName('§7Mosasaur on a Stick').food(food => {
		food
			.hunger(8)
			.saturation(.5)
			.effect('minecraft:conduit_power', 1800, 2, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('nemos_mix').displayName('§6§l§oNemos Mix').food(food => {
		food
			.hunger(12)
			.saturation(.7)
			.effect('apotheosis:knowledge', 2100, 2, 1)
			.effect('kubejs:swift_swim', 2100, 1, 1)
			.effect('minecraft:health_boost', 2100, 1, 1)
			.effect('minecraft:conduit_power', 2100, 3, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('pliosaur_nigiri').displayName('§7Pliosaur Nigiri').food(food => {
		food
			.hunger(8)
			.saturation(.5)
			.effect('minecraft:health_boost', 1800, 0, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('primal_calaplio_pie').displayName('§3§l§oPrimal Calaplio Pie').food(food => {
		food
			.hunger(10)
			.saturation(.6)
			.effect('kubejs:swift_swim', 1800, 1, 1)
			.effect('minecraft:health_boost', 1800, 1, 1)
			.effect('apotheosis:vitality', 1800, 1, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('primal_crabcake').displayName('§7Primal Crabcake').food(food => {
		food
			.hunger(8)
			.saturation(.5)
			.effect('apotheosis:knowledge', 1800, 1, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('primal_whale_shark_roll').displayName('§d§lPrimal Whale Shark Roll').food(food => {
		food
			.hunger(10)
			.saturation(.6)
			.effect('minecraft:strength', 1800, 2, 1)
			.effect('minecraft:regeneration', 1800, 1, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('primal_fish_sticks').displayName('§7Primal Fish Sticks').food(food => {
		food
			.hunger(8)
			.saturation(.5)
			.effect('minecraft:water_breathing', 1800, 1, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('primal_calamosa_taco').displayName('§b§lPrimal Calamosa Taco').food(food => {
		food
			.hunger(10)
			.saturation(.6)
			.effect('minecraft:conduit_power', 1800, 2, 1)
			.effect('kubejs:swift_swim', 1800, 1, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('primal_takoyaki').displayName('§ePrimal Takoyaki').food(food => {
		food
			.hunger(8)
			.saturation(.6)
			.effect('kubejs:swift_swim', 1800, 0, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('primal_terrapin_soup').displayName('§7Primal Terrapin Soup').food(food => {
		food
			.hunger(8)
			.saturation(.5)
			.effect('minecraft:resistance', 1800, 1, 1)
			.alwaysEdible()
			.meat()
	})
	event.create('whale_steak_lasagna').displayName('§7Whale Steak Lasagna').food(food => {
		food
			.hunger(8)
			.saturation(.5)
			.effect('minecraft:regeneration', 1800, 1, 1)
			.alwaysEdible()
			.meat()
	})
})

StartupEvents.registry('item', event => {
	event.create('grass_fiber').displayName('Grass Fiber')
	event.create('flint_shard').displayName('Flint Shard')
	event.create('grass_string').displayName('Grass String')
})
ItemEvents.toolTierRegistry(event => {
	event.add('flint', tier => {
		tier.uses = 32
		tier.speed = 2
		tier.attackDamageBonus = 1.0
		tier.level = 0
		tier.enchantmentValue = 5
		tier.repairIngredient = 'minecraft:flint'
	})
	event.add('bronze', tier => {
		tier.uses = 500
		tier.speed = 6
		tier.attackDamageBonus = 2.0
		tier.level = 3
		tier.enchantmentValue = 14
		tier.repairIngredient = '#forge:ingots/bronze'
	})
	event.add('copper', tier => {
		tier.uses = 128
		tier.speed = 5
		tier.attackDamageBonus = 2.0
		tier.level = 2
		tier.enchantmentValue = 14
		tier.repairIngredient = '#forge:ingots/copper'
	})
	event.add('steel', tier => {
		tier.uses = 750
		tier.speed = 8
		tier.attackDamageBonus = 3.0
		tier.level = 3
		tier.enchantmentValue = 14
		tier.repairIngredient = '#forge:ingots/steel'
	})
})
StartupEvents.registry('item', event => {
	event.create('flint_hatchet', 'axe').displayName('Flint Hatchet')
		.tier('flint').unstackable()
	event.create('flint_pickaxe', 'pickaxe').displayName('Flint Pickaxe')
		.tier('flint').unstackable()
	event.create('flint_shovel', 'shovel').displayName('Flint Shovel')
		.tier('flint').unstackable()
	event.create('flint_hoe', 'hoe').displayName('Flint Hoe')
		.tier('flint').unstackable()
	event.create('flint_knife', 'sword').displayName('Flint Knife')
		.tier('flint').unstackable()
	event.create('bronze_knife', 'sword').displayName('Bronze Knife')
		.tier('bronze').unstackable()
	event.create('copper_knife', 'sword').displayName('Copper Knife')
		.tier('copper').unstackable()
	event.create('diamond_knife', 'sword').displayName('Diamond Knife')
		.tier('diamond').unstackable()
	event.create('gold_knife', 'sword').displayName('Gold Knife')
		.tier('gold').unstackable()
	event.create('iron_knife', 'sword').displayName('Iron Knife')
		.tier('iron').unstackable()
	event.create('steel_knife', 'sword').displayName('Steel Knife')
		.tier('steel').unstackable()
	event.create('bronze_saw', 'axe').displayName('Bronze Saw')
		.tier('bronze').unstackable()
	event.create('copper_saw', 'axe').displayName('Copper Saw')
		.tier('copper').unstackable()
	event.create('diamond_saw', 'axe').displayName('Diamond Saw')
		.tier('diamond').unstackable()
	event.create('gold_saw', 'axe').displayName('Gold Saw')
		.tier('gold').unstackable()
	event.create('iron_saw', 'axe').displayName('Iron Saw')
		.tier('iron').unstackable()
	event.create('steel_saw', 'axe').displayName('Steel Saw')
		.tier('steel').unstackable()
})

StartupEvents.registry('item', e => {
	e.create('grave_scroll').displayName('Grave Scroll')
		.use((level, player, hand) => true)
		.useAnimation("bow")
		.useDuration((itemstack) => 64)
		.finishUsing((itemstack, level, entity) => {
			if (entity.player) global.gravescroll(entity)
			return itemstack;
		})
	e.create('recall_potion:recall_food').displayName('Recall potion')
		.use((level, player, hand) => true)
		.useAnimation("drink")
		.useDuration((itemstack) => 32)
		.finishUsing((itemstack, level, entity) => {
			if (entity.player) global.recall(entity)
			return itemstack;
		})
	e.create('white_wine').displayName('White Wine')
		.use((level, player, hand) => true)
		.useAnimation("drink")
		.useDuration((itemstack) => 24)
		.finishUsing((itemstack, level, entity) => {
			if (entity.player) global.wine(entity)
			//if (entity.player) global.wine2(entity)
			return itemstack;
		})

})

global.gravescroll = entity => {
	let pData = entity.persistentData
	let offHandItem = entity.getHeldItem('off_hand');
	let item = entity.getHeldItem('main_hand');
	if (pData.deathreset != 1) { return }
	pData.deathreset = 0
	if (item.id == 'kubejs:grave_scroll') {
		if (pData.deathdimension == 1) {
			entity.level.server.runCommand(`execute in ae2:spatial_storage run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 2) {
			entity.level.server.runCommand(`execute in deepwhisperer:deep_space run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 3) {
			entity.level.server.runCommand(`execute in minecraft:overworld run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 4) {
			entity.level.server.runCommand(`execute in minecraft:the_end run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 5) {
			entity.level.server.runCommand(`execute in minecraft:the_nether run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 6) {
			entity.level.server.runCommand(`execute in panthalassa:panthalassa run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 7) {
			entity.level.server.runCommand(`execute in tectonicworld:tectonic run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 8) {
			entity.level.server.runCommand(`execute in theabyss:frost_world run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 9) {
			entity.level.server.runCommand(`execute in theabyss:pocket_dimension run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 10) {
			entity.level.server.runCommand(`execute in theabyss:the_abyss run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 11) {
			entity.level.server.runCommand(`execute in wabworldgen:tutorial run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		}
		if (!entity.isCreative()) {
			item.count--
		}
	} else if (offHandItem.id == 'kubejs:grave_scroll') {
		if (pData.deathdimension == 1) {
			entity.level.server.runCommand(`execute in ae2:spatial_storage run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 2) {
			entity.level.server.runCommand(`execute in deepwhisperer:deep_space run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 3) {
			entity.level.server.runCommand(`execute in minecraft:overworld run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 4) {
			entity.level.server.runCommand(`execute in minecraft:the_end run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 5) {
			entity.level.server.runCommand(`execute in minecraft:the_nether run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 6) {
			entity.level.server.runCommand(`execute in panthalassa:panthalassa run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 7) {
			entity.level.server.runCommand(`execute in tectonicworld:tectonic run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 8) {
			entity.level.server.runCommand(`execute in theabyss:frost_world run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 9) {
			entity.level.server.runCommand(`execute in theabyss:pocket_dimension run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 10) {
			entity.level.server.runCommand(`execute in theabyss:the_abyss run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		} else if (pData.deathdimension == 11) {
			entity.level.server.runCommand(`execute in wabworldgen:tutorial run tp ${entity.username} ${pData.deathx} ${pData.deathy} ${pData.deathz}`)
		}
		if (!entity.isCreative()) {
			offHandItem.count--
		}
	}
}
/**
 * 
 * @param {Internal.Player} entity 
 */
global.recall = entity => {
	let player = entity
	let offHandItem = entity.getHeldItem('off_hand');
	let item = entity.getHeldItem('main_hand');
	let dim = player.getRespawnDimension().location()
	const { x, y, z } = player.getSpawnLocation()
	if (item.id == 'recall_potion:recall_food') {
		if (!entity.isCreative()) {
			item.count--
		}
		entity.level.server.runCommandSilent(`execute as ${player.username} run playsound minecraft:teleport ambient @s ${player.x} ${player.y} ${player.z} 1 1`)
		entity.level.server.runCommandSilent(`execute in ${dim} run execute as ${player.username} run tp ${x} ${y} ${z}`)

	} else if (offHandItem.id == 'recall_potion:recall_food') {
		if (!entity.isCreative()) {
			offHandItem.count--
		}
		entity.level.server.runCommandSilent(`execute as ${player.username} run playsound minecraft:teleport ambient @s ${player.x} ${player.y} ${player.z} 1 1`)
		entity.level.server.runCommandSilent(`execute in ${dim} run execute as ${player.username} run tp ${x} ${y} ${z}`)

	}
}
const $EntityDamageSource = Java.loadClass(`net.minecraft.world.damagesource.EntityDamageSource`);

/** Register effects */
StartupEvents.registry('mob_effect', event => {
	// Register radiation effect
	event.create('radiation')
		// Change the name to be "Radiation", in green
		.displayName(Component.green("Radiation"))
		// Set a tick event to apply the action
		.effectTick((entity, lvl) => global.radiationEffect(entity, lvl))
		// Set the color of the effect
		.color(Color.GREEN)
		// Set whether the effect is harmful
		.harmful();
	event.create('tool_debility')
		.color(Color.GRAY)
	//.effectTick((entity) => global.tooldebility(entity))
})

/**
 * Applies the radiation effect.
 * Damages the entity (likely player) with 2 HP (1 hearts) per 10 ticks.
 *
 * @param {Internal.Entity} entity The entity to apply the effect to
 * @param {number} lvl The level of the effect
 */
global.radiationEffect = (entity, lvl) => {
	// Check if the global is run on the client. If so, return
	if (entity.level.clientSide) return;
	// Create damage source
	let damageSource = new $EntityDamageSource("radiation", entity);
	// Damage based on level
	entity.attack(damageSource, lvl + 1);
}
global.wine2 = entity => {
	/*if (!entity.hasEffect('drinkbeer:drunk')){
		entity.potionEffects.add('drinkbeer:drunk', 2000, 0,  false, true)
	}*/
}
/**
 * 
 * @param {Internal.Player} entity 
 * @returns 
 */
global.wine = entity => {
	let offHandItem = entity.getHeldItem('off_hand');
	let item = entity.getHeldItem('main_hand');
	entity.activeEffects.forEach(effect => {
		//Return if the potion effect is level 2 or higher
		if (effect.amplifier >= 2) return
		let nbt = effect.save({})
		console.log("Old: " + nbt)
		//How much to increase the level each sip
		nbt.Amplifier = NBT.b(nbt.Amplifier + 1)
		let newInstance = effect.load(nbt)
		console.log("New: " + newInstance.save({}))
		entity.forceAddEffect(newInstance, entity)
	})
	if (item.id == 'kubejs:white_wine') {
		if (!entity.isCreative()) {
			item.count--
			entity.give('glass_bottle')
		}
	} else if (offHandItem.id == 'kubejs:white_wine') {
		if (!entity.isCreative()) {
			offHandItem.count--
			entity.give('glass_bottle')
		}
	}
}
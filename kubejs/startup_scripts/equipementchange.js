ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent', event => { global.equipementchangedevent(event) })
/**
 * 
 * @param {Internal.LivingEquipmentChangeEvent} event 
 * @param {Internal.LivingEntity} entity
 * @param {Internal.EquipmentSlot} slot
 * @param {Internal.ItemStack} to 
 * @param {Internal.ItemStack} from
 * 
 */
global.equipementchangedevent = event => {
    const { to, from, entity, slot } = event
    if (!entity.isPlayer()) return
    if (slot == 'HEAD') {
        global.equipementchangedh(event)
    } else if (slot == 'CHEST') {
        global.equipementchangedc(event)
    } else if (slot == 'LEGS') {
        global.equipementchangedl(event)
    } else if (slot == 'FEET') {
        global.equipementchangedb(event)
    }
    global.attributeupdatearmor(event)
}


global.equipementchangedh = event => {
    const { to, from, entity } = event
    let player = entity;
    let curioEquiped = to
    let curioRemoved = from
    let arcanehResult = getarcaneh(curioEquiped) - getarcaneh(curioRemoved)
    let oldarcanehLevel = getarcanehLevel(player) || 0
    player.persistentData.putInt("arcanehLevel", oldarcanehLevel + arcanehResult)
    player.tell(getarcanehLevel(player))
    let crumblinghResult = getcrumblingh(curioEquiped) - getcrumblingh(curioRemoved)
    let oldcrumblinghLevel = getcrumblinghLevel(player) || 0
    player.persistentData.putInt("crumblinghLevel", oldcrumblinghLevel + crumblinghResult)
    player.tell(getcrumblinghLevel(player))
    let dentedhResult = getdentedh(curioEquiped) - getdentedh(curioRemoved)
    let olddentedhLevel = getdentedhLevel(player) || 0
    player.persistentData.putInt("dentedhLevel", olddentedhLevel + dentedhResult)
    player.tell(getdentedhLevel(player))
    let heavyhResult = getheavyh(curioEquiped) - getheavyh(curioRemoved)
    let oldheavyhLevel = getheavyhLevel(player) || 0
    player.persistentData.putInt("heavyhLevel", oldheavyhLevel + heavyhResult)
    player.tell(getheavyhLevel(player))
    let masterfulhResult = getmasterfulh(curioEquiped) - getmasterfulh(curioRemoved)
    let oldmasterfulhLevel = getmasterfulhLevel(player) || 0
    player.persistentData.putInt("masterfulhLevel", oldmasterfulhLevel + masterfulhResult)
    player.tell(getmasterfulhLevel(player))
    let protectivehResult = getprotectiveh(curioEquiped) - getprotectiveh(curioRemoved)
    let oldprotectivehLevel = getprotectivehLevel(player) || 0
    player.persistentData.putInt("protectivehLevel", oldprotectivehLevel + protectivehResult)
    player.tell(getprotectivehLevel(player))
    let luckyhResult = getluckyh(curioEquiped) - getluckyh(curioRemoved)
    let oldluckyhLevel = getluckyhLevel(player) || 0
    player.persistentData.putInt("luckyhLevel", oldluckyhLevel + luckyhResult)
    player.tell(getluckyhLevel(player))
    let thickhResult = getthickh(curioEquiped) - getthickh(curioRemoved)
    let oldthickhLevel = getthickhLevel(player) || 0
    player.persistentData.putInt("thickhLevel", oldthickhLevel + thickhResult)
    player.tell(getthickhLevel(player))
    let toughhResult = gettoughh(curioEquiped) - gettoughh(curioRemoved)
    let oldtoughhLevel = gettoughhLevel(player) || 0
    player.persistentData.putInt("toughhLevel", oldtoughhLevel + toughhResult)
    player.tell(gettoughhLevel(player))
}

const getarcaneh = itemstack => {
    let isarcaneh = itemstack.nbt ? itemstack.nbt.getBoolean("Arcaneh") : false
    return isarcaneh ? 1 : 0
}

const getarcanehLevel = player => {
    return player.persistentData.getInt("arcanehLevel")
}

const getcrumblingh = itemstack => {
    let iscrumblingh = itemstack.nbt ? itemstack.nbt.getBoolean("Crumblingh") : false
    return iscrumblingh ? 1 : 0
}

const getcrumblinghLevel = player => {
    return player.persistentData.getInt("crumblinghLevel")
}

const getdentedh = itemstack => {
    let isdentedh = itemstack.nbt ? itemstack.nbt.getBoolean("Dentedh") : false
    return isdentedh ? 1 : 0
}

const getdentedhLevel = player => {
    return player.persistentData.getInt("dentedhLevel")
}

const getheavyh = itemstack => {
    let isheavyh = itemstack.nbt ? itemstack.nbt.getBoolean("Heavyh") : false
    return isheavyh ? 1 : 0
}

const getheavyhLevel = player => {
    return player.persistentData.getInt("heavyhLevel")
}

const getmasterfulh = itemstack => {
    let ismasterfulh = itemstack.nbt ? itemstack.nbt.getBoolean("Masterfulh") : false
    return ismasterfulh ? 1 : 0
}

const getmasterfulhLevel = player => {
    return player.persistentData.getInt("masterfulhLevel")
}

const getprotectiveh = itemstack => {
    let isprotectiveh = itemstack.nbt ? itemstack.nbt.getBoolean("Protectiveh") : false
    return isprotectiveh ? 1 : 0
}

const getprotectivehLevel = player => {
    return player.persistentData.getInt("protectivehLevel")
}

const getluckyh = itemstack => {
    let isluckyh = itemstack.nbt ? itemstack.nbt.getBoolean("Luckyh") : false
    return isluckyh ? 1 : 0
}

const getluckyhLevel = player => {
    return player.persistentData.getInt("luckyhLevel")
}

const getthickh = itemstack => {
    let isthickh = itemstack.nbt ? itemstack.nbt.getBoolean("Thickh") : false
    return isthickh ? 1 : 0
}

const getthickhLevel = player => {
    return player.persistentData.getInt("thickhLevel")
}

const gettoughh = itemstack => {
    let istoughh = itemstack.nbt ? itemstack.nbt.getBoolean("Toughh") : false
    return istoughh ? 1 : 0
}

const gettoughhLevel = player => {
    return player.persistentData.getInt("toughhLevel")
}

const getspringyl = itemstack => {
    let isspringyl = itemstack.nbt ? itemstack.nbt.getBoolean("Springyl") : false
    return isspringyl ? 1 : 0
}

const getspringylLevel = player => {
    return player.persistentData.getInt("springylLevel")
}
global.equipementchangedc = event => {
    const { to, from, entity } = event
    let player = entity;
    let curioEquiped = to
    let curioRemoved = from
    let solidcResult = getsolidc(curioEquiped) - getsolidc(curioRemoved)
    let oldsolidcLevel = getsolidcLevel(player) || 0
    player.persistentData.putInt("solidcLevel", oldsolidcLevel + solidcResult)
    player.tell(getsolidcLevel(player))
    let cumbersomecResult = getcumbersomec(curioEquiped) - getcumbersomec(curioRemoved)
    let oldcumbersomecLevel = getcumbersomecLevel(player) || 0
    player.persistentData.putInt("cumbersomecLevel", oldcumbersomecLevel + cumbersomecResult)
    player.tell(getcumbersomecLevel(player))
    let arcanecResult = getarcanec(curioEquiped) - getarcanec(curioRemoved)
    let oldarcanecLevel = getarcanecLevel(player) || 0
    player.persistentData.putInt("arcanecLevel", oldarcanecLevel + arcanecResult)
    player.tell(getarcanecLevel(player))
    let crumblingcResult = getcrumblingc(curioEquiped) - getcrumblingc(curioRemoved)
    let oldcrumblingcLevel = getcrumblingcLevel(player) || 0
    player.persistentData.putInt("crumblingcLevel", oldcrumblingcLevel + crumblingcResult)
    player.tell(getcrumblingcLevel(player))
    let dentedcResult = getdentedc(curioEquiped) - getdentedc(curioRemoved)
    let olddentedcLevel = getdentedcLevel(player) || 0
    player.persistentData.putInt("dentedcLevel", olddentedcLevel + dentedcResult)
    player.tell(getdentedcLevel(player))
    let heavycResult = getheavyc(curioEquiped) - getheavyc(curioRemoved)
    let oldheavycLevel = getheavycLevel(player) || 0
    player.persistentData.putInt("heavycLevel", oldheavycLevel + heavycResult)
    player.tell(getheavycLevel(player))
    let masterfulcResult = getmasterfulc(curioEquiped) - getmasterfulc(curioRemoved)
    let oldmasterfulcLevel = getmasterfulcLevel(player) || 0
    player.persistentData.putInt("masterfulcLevel", oldmasterfulcLevel + masterfulcResult)
    player.tell(getmasterfulcLevel(player))
    let protectivecResult = getprotectivec(curioEquiped) - getprotectivec(curioRemoved)
    let oldprotectivecLevel = getprotectivecLevel(player) || 0
    player.persistentData.putInt("protectivecLevel", oldprotectivecLevel + protectivecResult)
    player.tell(getprotectivecLevel(player))
    let thickcResult = getthickc(curioEquiped) - getthickc(curioRemoved)
    let oldthickcLevel = getthickcLevel(player) || 0
    player.persistentData.putInt("thickcLevel", oldthickcLevel + thickcResult)
    player.tell(getthickcLevel(player))
    let toughcResult = gettoughc(curioEquiped) - gettoughc(curioRemoved)
    let oldtoughcLevel = gettoughcLevel(player) || 0
    player.persistentData.putInt("toughcLevel", oldtoughcLevel + toughcResult)
    player.tell(gettoughcLevel(player))
}

const getsolidc = itemstack => {
    let issolidc = itemstack.nbt ? itemstack.nbt.getBoolean("Solidc") : false
    return issolidc ? 1 : 0
}

const getsolidcLevel = player => {
    return player.persistentData.getInt("solidcLevel")
}

const getcumbersomec = itemstack => {
    let iscumbersomec = itemstack.nbt ? itemstack.nbt.getBoolean("Cumbersomec") : false
    return iscumbersomec ? 1 : 0
}

const getcumbersomecLevel = player => {
    return player.persistentData.getInt("cumbersomecLevel")
}

const getspeedyb = itemstack => {
    let isspeedyb = itemstack.nbt ? itemstack.nbt.getBoolean("Speedyb") : false
    return isspeedyb ? 1 : 0
}

const getspeedybLevel = player => {
    return player.persistentData.getInt("speedybLevel")
}

const getarcanec = itemstack => {
    let isarcanec = itemstack.nbt ? itemstack.nbt.getBoolean("Arcanec") : false
    return isarcanec ? 1 : 0
}

const getarcanecLevel = player => {
    return player.persistentData.getInt("arcanecLevel")
}

const getcrumblingc = itemstack => {
    let iscrumblingc = itemstack.nbt ? itemstack.nbt.getBoolean("Crumblingc") : false
    return iscrumblingc ? 1 : 0
}

const getcrumblingcLevel = player => {
    return player.persistentData.getInt("crumblingcLevel")
}

const getdentedc = itemstack => {
    let isdentedc = itemstack.nbt ? itemstack.nbt.getBoolean("Dentedc") : false
    return isdentedc ? 1 : 0
}

const getdentedcLevel = player => {
    return player.persistentData.getInt("dentedcLevel")
}

const getheavyc = itemstack => {
    let isheavyc = itemstack.nbt ? itemstack.nbt.getBoolean("Heavyc") : false
    return isheavyc ? 1 : 0
}

const getheavycLevel = player => {
    return player.persistentData.getInt("heavycLevel")
}

const getmasterfulc = itemstack => {
    let ismasterfulc = itemstack.nbt ? itemstack.nbt.getBoolean("Masterfulc") : false
    return ismasterfulc ? 1 : 0
}

const getmasterfulcLevel = player => {
    return player.persistentData.getInt("masterfulcLevel")
}

const getprotectivec = itemstack => {
    let isprotectivec = itemstack.nbt ? itemstack.nbt.getBoolean("Protectivec") : false
    return isprotectivec ? 1 : 0
}

const getprotectivecLevel = player => {
    return player.persistentData.getInt("protectivecLevel")
}

const getthickc = itemstack => {
    let isthickc = itemstack.nbt ? itemstack.nbt.getBoolean("Thickc") : false
    return isthickc ? 1 : 0
}

const getthickcLevel = player => {
    return player.persistentData.getInt("thickcLevel")
}

const gettoughc = itemstack => {
    let istoughc = itemstack.nbt ? itemstack.nbt.getBoolean("Toughc") : false
    return istoughc ? 1 : 0
}

const gettoughcLevel = player => {
    return player.persistentData.getInt("toughcLevel")
}
global.equipementchangedl = event => {
    const { to, from, entity } = event
    let player = entity;
    let curioEquiped = to
    let curioRemoved = from
    let arcanelResult = getarcanel(curioEquiped) - getarcanel(curioRemoved)
    let oldarcanelLevel = getarcanelLevel(player) || 0
    player.persistentData.putInt("arcanelLevel", oldarcanelLevel + arcanelResult)
    player.tell(getarcanelLevel(player))
    let crumblinglResult = getcrumblingl(curioEquiped) - getcrumblingl(curioRemoved)
    let oldcrumblinglLevel = getcrumblinglLevel(player) || 0
    player.persistentData.putInt("crumblinglLevel", oldcrumblinglLevel + crumblinglResult)
    player.tell(getcrumblinglLevel(player))
    let dentedlResult = getdentedl(curioEquiped) - getdentedl(curioRemoved)
    let olddentedlLevel = getdentedlLevel(player) || 0
    player.persistentData.putInt("dentedlLevel", olddentedlLevel + dentedlResult)
    player.tell(getdentedlLevel(player))
    let heavylResult = getheavyl(curioEquiped) - getheavyl(curioRemoved)
    let oldheavylLevel = getheavylLevel(player) || 0
    player.persistentData.putInt("heavylLevel", oldheavylLevel + heavylResult)
    player.tell(getheavylLevel(player))
    let masterfullResult = getmasterfull(curioEquiped) - getmasterfull(curioRemoved)
    let oldmasterfullLevel = getmasterfullLevel(player) || 0
    player.persistentData.putInt("masterfullLevel", oldmasterfullLevel + masterfullResult)
    player.tell(getmasterfullLevel(player))
    let protectivelResult = getprotectivel(curioEquiped) - getprotectivel(curioRemoved)
    let oldprotectivelLevel = getprotectivelLevel(player) || 0
    player.persistentData.putInt("protectivelLevel", oldprotectivelLevel + protectivelResult)
    player.tell(getprotectivelLevel(player))
    let thicklResult = getthickl(curioEquiped) - getthickl(curioRemoved)
    let oldthicklLevel = getthicklLevel(player) || 0
    player.persistentData.putInt("thicklLevel", oldthicklLevel + thicklResult)
    player.tell(getthicklLevel(player))
    let toughlResult = gettoughl(curioEquiped) - gettoughl(curioRemoved)
    let oldtoughlLevel = gettoughlLevel(player) || 0
    player.persistentData.putInt("toughlLevel", oldtoughlLevel + toughlResult)
    player.tell(gettoughlLevel(player))
    let springylResult = getspringyl(curioEquiped) - getspringyl(curioRemoved)
    let oldspringylLevel = getspringylLevel(player) || 0
    player.persistentData.putInt("springylLevel", oldspringylLevel + springylResult)
    player.tell(getspringylLevel(player))
}

const getarcanel = itemstack => {
    let isarcanel = itemstack.nbt ? itemstack.nbt.getBoolean("Arcanel") : false
    return isarcanel ? 1 : 0
}

const getarcanelLevel = player => {
    return player.persistentData.getInt("arcanelLevel")
}

const getcrumblingl = itemstack => {
    let iscrumblingl = itemstack.nbt ? itemstack.nbt.getBoolean("Crumblingl") : false
    return iscrumblingl ? 1 : 0
}

const getcrumblinglLevel = player => {
    return player.persistentData.getInt("crumblinglLevel")
}

const getdentedl = itemstack => {
    let isdentedl = itemstack.nbt ? itemstack.nbt.getBoolean("Dentedl") : false
    return isdentedl ? 1 : 0
}

const getdentedlLevel = player => {
    return player.persistentData.getInt("dentedlLevel")
}

const getheavyl = itemstack => {
    let isheavyl = itemstack.nbt ? itemstack.nbt.getBoolean("Heavyl") : false
    return isheavyl ? 1 : 0
}

const getheavylLevel = player => {
    return player.persistentData.getInt("heavylLevel")
}

const getmasterfull = itemstack => {
    let ismasterfull = itemstack.nbt ? itemstack.nbt.getBoolean("Masterfull") : false
    return ismasterfull ? 1 : 0
}

const getmasterfullLevel = player => {
    return player.persistentData.getInt("masterfullLevel")
}

const getprotectivel = itemstack => {
    let isprotectivel = itemstack.nbt ? itemstack.nbt.getBoolean("Protectivel") : false
    return isprotectivel ? 1 : 0
}

const getprotectivelLevel = player => {
    return player.persistentData.getInt("protectivelLevel")
}

const getthickl = itemstack => {
    let isthickl = itemstack.nbt ? itemstack.nbt.getBoolean("Thickl") : false
    return isthickl ? 1 : 0
}

const getthicklLevel = player => {
    return player.persistentData.getInt("thicklLevel")
}

const gettoughl = itemstack => {
    let istoughl = itemstack.nbt ? itemstack.nbt.getBoolean("Toughl") : false
    return istoughl ? 1 : 0
}

const gettoughlLevel = player => {
    return player.persistentData.getInt("toughlLevel")
}
global.equipementchangedb = event => {
    const { to, from, entity } = event
    let player = entity;
    let curioEquiped = to
    let curioRemoved = from
    let arcanebResult = getarcaneb(curioEquiped) - getarcaneb(curioRemoved)
    let oldarcanebLevel = getarcanebLevel(player) || 0
    player.persistentData.putInt("arcanebLevel", oldarcanebLevel + arcanebResult)
    player.tell(getarcanebLevel(player))
    let crumblingbResult = getcrumblingb(curioEquiped) - getcrumblingb(curioRemoved)
    let oldcrumblingbLevel = getcrumblingbLevel(player) || 0
    player.persistentData.putInt("crumblingbLevel", oldcrumblingbLevel + crumblingbResult)
    player.tell(getcrumblingbLevel(player))
    let dentedbResult = getdentedb(curioEquiped) - getdentedb(curioRemoved)
    let olddentedbLevel = getdentedbLevel(player) || 0
    player.persistentData.putInt("dentedbLevel", olddentedbLevel + dentedbResult)
    player.tell(getdentedbLevel(player))
    let heavybResult = getheavyb(curioEquiped) - getheavyb(curioRemoved)
    let oldheavybLevel = getheavybLevel(player) || 0
    player.persistentData.putInt("heavybLevel", oldheavybLevel + heavybResult)
    player.tell(getheavybLevel(player))
    let masterfulbResult = getmasterfulb(curioEquiped) - getmasterfulb(curioRemoved)
    let oldmasterfulbLevel = getmasterfulbLevel(player) || 0
    player.persistentData.putInt("masterfulbLevel", oldmasterfulbLevel + masterfulbResult)
    player.tell(getmasterfulbLevel(player))
    let protectivebResult = getprotectiveb(curioEquiped) - getprotectiveb(curioRemoved)
    let oldprotectivebLevel = getprotectivebLevel(player) || 0
    player.persistentData.putInt("protectivebLevel", oldprotectivebLevel + protectivebResult)
    player.tell(getprotectivebLevel(player))
    let thickbResult = getthickb(curioEquiped) - getthickb(curioRemoved)
    let oldthickbLevel = getthickbLevel(player) || 0
    player.persistentData.putInt("thickbLevel", oldthickbLevel + thickbResult)
    player.tell(getthickbLevel(player))
    let toughbResult = gettoughb(curioEquiped) - gettoughb(curioRemoved)
    let oldtoughbLevel = gettoughbLevel(player) || 0
    player.persistentData.putInt("toughbLevel", oldtoughbLevel + toughbResult)
    player.tell(gettoughbLevel(player))
    let tallbResult = gettallb(curioEquiped) - gettallb(curioRemoved)
    let oldtallbLevel = gettallbLevel(player) || 0
    player.persistentData.putInt("tallbLevel", oldtallbLevel + tallbResult)
    player.tell(gettallbLevel(player))
    let speedybResult = getspeedyb(curioEquiped) - getspeedyb(curioRemoved)
    let oldspeedybLevel = getspeedybLevel(player) || 0
    player.persistentData.putInt("speedybLevel", oldspeedybLevel + speedybResult)
    player.tell(getspeedybLevel(player))
}


const gettallb = itemstack => {
    let istallb = itemstack.nbt ? itemstack.nbt.getBoolean("Tallb") : false
    return istallb ? 1 : 0
}

const gettallbLevel = player => {
    return player.persistentData.getInt("tallbLevel")
}
const getarcaneb = itemstack => {
    let isarcaneb = itemstack.nbt ? itemstack.nbt.getBoolean("Arcaneb") : false
    return isarcaneb ? 1 : 0
}

const getarcanebLevel = player => {
    return player.persistentData.getInt("arcanebLevel")
}


const getcrumblingb = itemstack => {
    let iscrumblingb = itemstack.nbt ? itemstack.nbt.getBoolean("Crumblingb") : false
    return iscrumblingb ? 1 : 0
}

const getcrumblingbLevel = player => {
    return player.persistentData.getInt("crumblingbLevel")
}

const getdentedb = itemstack => {
    let isdentedb = itemstack.nbt ? itemstack.nbt.getBoolean("Dentedb") : false
    return isdentedb ? 1 : 0
}

const getdentedbLevel = player => {
    return player.persistentData.getInt("dentedbLevel")
}

const getheavyb = itemstack => {
    let isheavyb = itemstack.nbt ? itemstack.nbt.getBoolean("Heavyb") : false
    return isheavyb ? 1 : 0
}

const getheavybLevel = player => {
    return player.persistentData.getInt("heavybLevel")
}

const getmasterfulb = itemstack => {
    let ismasterfulb = itemstack.nbt ? itemstack.nbt.getBoolean("Masterfulb") : false
    return ismasterfulb ? 1 : 0
}

const getmasterfulbLevel = player => {
    return player.persistentData.getInt("masterfulbLevel")
}

const getprotectiveb = itemstack => {
    let isprotectiveb = itemstack.nbt ? itemstack.nbt.getBoolean("Protectiveb") : false
    return isprotectiveb ? 1 : 0
}

const getprotectivebLevel = player => {
    return player.persistentData.getInt("protectivebLevel")
}

const getthickb = itemstack => {
    let isthickb = itemstack.nbt ? itemstack.nbt.getBoolean("Thickb") : false
    return isthickb ? 1 : 0
}

const getthickbLevel = player => {
    return player.persistentData.getInt("thickbLevel")
}

const gettoughb = itemstack => {
    let istoughb = itemstack.nbt ? itemstack.nbt.getBoolean("Toughb") : false
    return istoughb ? 1 : 0
}

const gettoughbLevel = player => {
    return player.persistentData.getInt("toughbLevel")
}

global.attributeupdatearmor = event => {
    const { entity, slot, entity: { persistentData, username, level, level: { server } } } = event
    if (slot == 'HEAD') {
        let arcanehLevel = persistentData.getInt("arcanehLevel")
        server.runCommandSilent(`scoreboard players set ${username} arcanehLevel ${arcanehLevel}`)
        let crumblinghLevel = persistentData.getInt("crumblinghLevel")
        server.runCommandSilent(`scoreboard players set ${username} crumblinghLevel ${crumblinghLevel}`)
        let dentedhLevel = persistentData.getInt("dentedhLevel")
        server.runCommandSilent(`scoreboard players set ${username} dentedhLevel ${dentedhLevel}`)
        let heavyhLevel = persistentData.getInt("heavyhLevel")
        server.runCommandSilent(`scoreboard players set ${username} heavyhLevel ${heavyhLevel}`)
        let masterfulhLevel = persistentData.getInt("masterfulhLevel")
        server.runCommandSilent(`scoreboard players set ${username} masterfulhLevel ${masterfulhLevel}`)
        let protectivehLevel = persistentData.getInt("protectivehLevel")
        server.runCommandSilent(`scoreboard players set ${username} protectivehLevel ${protectivehLevel}`)
        let luckyhLevel = persistentData.getInt("luckyhLevel")
        server.runCommandSilent(`scoreboard players set ${username} luckyhLevel ${luckyhLevel}`)
        let thickhLevel = persistentData.getInt("thickhLevel")
        server.runCommandSilent(`scoreboard players set ${username} thickhLevel ${thickhLevel}`)
        let toughhLevel = persistentData.getInt("toughhLevel")
        server.runCommandSilent(`scoreboard players set ${username} toughhLevel ${toughhLevel}`)
    }
    if (slot == 'CHEST') {
        let solidcLevel = persistentData.getInt("solidcLevel")
        server.runCommandSilent(`scoreboard players set ${username} solidcLevel ${solidcLevel}`)
        let cumbersomecLevel = persistentData.getInt("cumbersomecLevel")
        server.runCommandSilent(`scoreboard players set ${username} cumbersomecLevel ${cumbersomecLevel}`)
        let arcanecLevel = persistentData.getInt("arcanecLevel")
        server.runCommandSilent(`scoreboard players set ${username} arcanecLevel ${arcanecLevel}`)
        let crumblingcLevel = persistentData.getInt("crumblingcLevel")
        server.runCommandSilent(`scoreboard players set ${username} crumblingcLevel ${crumblingcLevel}`)
        let dentedcLevel = persistentData.getInt("dentedcLevel")
        server.runCommandSilent(`scoreboard players set ${username} dentedcLevel ${dentedcLevel}`)
        let protectivecLevel = persistentData.getInt("protectivecLevel")
        server.runCommandSilent(`scoreboard players set ${username} protectivecLevel ${protectivecLevel}`)
        let thickcLevel = persistentData.getInt("thickcLevel")
        server.runCommandSilent(`scoreboard players set ${username} thickcLevel ${thickcLevel}`)
        let toughcLevel = persistentData.getInt("toughcLevel")
        server.runCommandSilent(`scoreboard players set ${username} toughcLevel ${toughcLevel}`)
        let heavycLevel = persistentData.getInt("heavycLevel")
        server.runCommandSilent(`scoreboard players set ${username} heavycLevel ${heavycLevel}`)
        let masterfulcLevel = persistentData.getInt("masterfulcLevel")
        server.runCommandSilent(`scoreboard players set ${username} masterfulcLevel ${masterfulcLevel}`)
    }
    if (slot == 'LEGS') {
        let arcanelLevel = persistentData.getInt("arcanelLevel")
        server.runCommandSilent(`scoreboard players set ${username} arcanelLevel ${arcanelLevel}`)
        let crumblinglLevel = persistentData.getInt("crumblinglLevel")
        server.runCommandSilent(`scoreboard players set ${username} crumblinglLevel ${crumblinglLevel}`)
        let dentedlLevel = persistentData.getInt("dentedlLevel")
        server.runCommandSilent(`scoreboard players set ${username} dentedlLevel ${dentedlLevel}`)
        let heavylLevel = persistentData.getInt("heavylLevel")
        server.runCommandSilent(`scoreboard players set ${username} heavylLevel ${heavylLevel}`)
        let masterfullLevel = persistentData.getInt("masterfullLevel")
        server.runCommandSilent(`scoreboard players set ${username} masterfullLevel ${masterfullLevel}`)
        let protectivelLevel = persistentData.getInt("protectivelLevel")
        server.runCommandSilent(`scoreboard players set ${username} protectivelLevel ${protectivelLevel}`)
        let thicklLevel = persistentData.getInt("thicklLevel")
        server.runCommandSilent(`scoreboard players set ${username} thicklLevel ${thicklLevel}`)
        let toughlLevel = persistentData.getInt("toughlLevel")
        server.runCommandSilent(`scoreboard players set ${username} toughlLevel ${toughlLevel}`)
        let springylLevel = persistentData.getInt("springylLevel")
        server.runCommandSilent(`scoreboard players set ${username} springylLevel ${springylLevel}`)
    }
    if (slot == 'FEET') {
        let arcanebLevel = persistentData.getInt("arcanebLevel")
        server.runCommandSilent(`scoreboard players set ${username} arcanebLevel ${arcanebLevel}`)
        let crumblingbLevel = persistentData.getInt("crumblingbLevel")
        server.runCommandSilent(`scoreboard players set ${username} crumblingbLevel ${crumblingbLevel}`)
        let dentedbLevel = persistentData.getInt("dentedbLevel")
        server.runCommandSilent(`scoreboard players set ${username} dentedbLevel ${dentedbLevel}`)
        let heavybLevel = persistentData.getInt("heavybLevel")
        server.runCommandSilent(`scoreboard players set ${username} heavybLevel ${heavybLevel}`)
        let masterfulbLevel = persistentData.getInt("masterfulbLevel")
        server.runCommandSilent(`scoreboard players set ${username} masterfulbLevel ${masterfulbLevel}`)
        let protectivebLevel = persistentData.getInt("protectivebLevel")
        server.runCommandSilent(`scoreboard players set ${username} protectivebLevel ${protectivebLevel}`)
        let thickbLevel = persistentData.getInt("thickbLevel")
        server.runCommandSilent(`scoreboard players set ${username} thickbLevel ${thickbLevel}`)
        let toughbLevel = persistentData.getInt("toughbLevel")
        server.runCommandSilent(`scoreboard players set ${username} toughbLevel ${toughbLevel}`)
        let tallbLevel = persistentData.getInt("tallbLevel")
        server.runCommandSilent(`scoreboard players set ${username} tallbLevel ${tallbLevel}`)
        let speedybLevel = persistentData.getInt("speedybLevel")
        server.runCommandSilent(`scoreboard players set ${username} speedybLevel ${speedybLevel}`)
    }
}
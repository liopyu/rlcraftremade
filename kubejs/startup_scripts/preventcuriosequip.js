ForgeEvents.onEvent(
	"top.theillusivec4.curios.api.event.CurioChangeEvent",
	(event) => {
        global.curiosprevent(event)
    })

    /** @arg {Internal.CurioChangeEvent} e */
  global.curiosprevent = e => {
    const {to,from,entity} = e
    
    
    let nbt = to.nbtString
    let player = e.entity;
	let curioEquiped = to
	let curioRemoved = from
	let ringResult = getring(curioEquiped) - getring(curioRemoved)
	let oldringLevel = getringLevel(player) || 0
	player.persistentData.putInt("ringLevel", oldringLevel + ringResult)
	//player.tell(getringLevel(player))
    if (player.persistentData.getInt("ringLevel") >= 2) {
        if (to.hasTag(`kubejs:race_rings`)) {
          if(player.persistentData.loggedout == 1) return
            entity.give(Item.of(`${to.id}`, `${nbt}`))
            to.count--
        }
    }
    
  }
  
  const getring = itemstack => {
	let isring = itemstack.hasTag('kubejs:race_rings') ? itemstack.hasTag('kubejs:race_rings') : false
	return isring ? 1 : 0
  }
  
  const getringLevel = player => {
	return player.persistentData.getInt("ringLevel")
  }
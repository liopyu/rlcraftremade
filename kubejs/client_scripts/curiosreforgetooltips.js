// priority: 9
const $OriginsClient = Java.loadClass('io.github.apace100.origins.OriginsClient')

const enchantedBook = Ingredient.of('minecraft:enchanted_book')
const formatCurse = c => c.darkRed()
const formatEnch = c => c.darkAqua()
const formatDesc = c => Text.of(' ').italic().darkPurple().append(c)
const formatHint = c => c.gray()
const remove = (index, text) => {
    text.remove(index)
    return index - 1
}
const keyContains = (string, component) => {
    let key = component?.contents?.key
    return key != null && key.contains(string)
}

ItemEvents.tooltip(event => {
    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        //console.log(item.id)
        if (!Item.exists(item?.id)) return
        if (item?.nbt?.Prospecting) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Prospecting').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Dig Speed').blue()
            ])
        } else if (item?.nbt?.Clunky) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Clunky').darkGray()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('-5% Dig Speed').red()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('-5% Attack Speed').red()
            ])
        } else if (item?.nbt?.Healthy) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Healthy').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+2 Max Health').blue()
            ])
        } else if (item?.nbt?.Aiming) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Aiming').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Projectile Damage').blue()
            ])
        } else if (item?.nbt?.Undying) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Undying').lightPurple()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Damage Resistance').blue()
            ])
            text.add([
                Text.of('+2 Max Health').blue()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item?.nbt?.Punishing) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Punishing').lightPurple()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Projectile Damage').blue()
            ])
            text.add([
                Text.of('+3% Attack Damage').blue()
            ])
            text.add([
                Text.of('+3% Magic Damage').blue()
            ])
        } else if (item?.nbt?.Focusing) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Focusing').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Magic Damage').blue()
            ])
            text.add([
                Text.of('+0.5 MP Regen').blue()
            ])
        } else if (item?.nbt?.Arcane) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').lightPurple()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Magic Damage').blue()
            ])
            text.add([
                Text.of('+1 MP Regen').blue()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item?.nbt?.Flailing) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Flailing').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Attack Speed').blue()
            ])
        } else if (item?.nbt?.Lucky) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Lucky').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+0.2 Luck').blue()
            ])
        } else if (item?.nbt?.Athletic) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Athletic').aqua()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+5% Speed').blue()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
        } else if (item?.nbt?.Horrible) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Horrible').darkGray()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('-5% Projectile Damage').red()
            ])
            text.add([
                Text.of('-5% Attack Damage').red()
            ])
            text.add([
                Text.of('-5% Magic Damage').red()
            ])
        } else if (item?.nbt?.Graceful) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Graceful').aqua()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Dig Speed').blue()
            ])
            text.add([
                Text.of('+3% Attack Speed').blue()
            ])
        } else if (item?.nbt?.Unlucky) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Unlucky').red()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('-0.2 Luck').red()
            ])
        } else if (item?.nbt?.Strengthening) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Strengthening').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Attack Damage').blue()
            ])
        } else if (item?.nbt?.Speedy) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Speedy').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+5% Speed').blue()
            ])
        } else if (item?.nbt?.Armored) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Armored').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Damage Resistance').blue()
            ])
        } else if (item?.nbt?.Shielding) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Shielding').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item?.nbt?.Springy) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Springy').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.all, (item, a, text) => {
        //console.log(item.id)
        if (!Item.exists(item?.id)) return
        let isStatSection = false
        if (item?.nbt?.Leggings) {
            for (let i = 0; i < text.size(); i++) {
                let component = text.get(i)
                if (keyContains("item.modifiers", component)) {
                    isStatSection = true
                    i = remove(i, text)
                    i = remove(i, text)
                    continue
                }
                if (isStatSection) {
                    if (keyContains("attribute", component)) {
                        i = remove(i, text)
                        continue
                    }
                    for (let c of component.getSiblings()) {
                        if (keyContains("attribute", c)) {
                            i = remove(i, text)
                        }
                    }

                }
            }
        } else if (item?.nbt?.Helmet) {
            for (let i = 0; i < text.size(); i++) {
                let component = text.get(i)
                if (keyContains("item.modifiers", component)) {
                    isStatSection = true
                    i = remove(i, text)
                    i = remove(i, text)
                    continue
                }
                if (isStatSection) {
                    if (keyContains("attribute", component)) {
                        i = remove(i, text)
                        continue
                    }
                    for (let c of component.getSiblings()) {
                        if (keyContains("attribute", c)) {
                            i = remove(i, text)
                        }
                    }

                }
            }
        } else if (item?.nbt?.Chest) {
            for (let i = 0; i < text.size(); i++) {
                let component = text.get(i)
                if (keyContains("item.modifiers", component)) {
                    isStatSection = true
                    i = remove(i, text)
                    i = remove(i, text)
                    continue
                }
                if (isStatSection) {
                    if (keyContains("attribute", component)) {
                        i = remove(i, text)
                        continue
                    }
                    for (let c of component.getSiblings()) {
                        if (keyContains("attribute", c)) {
                            i = remove(i, text)
                        }
                    }

                }
            }
        } else if (item?.nbt?.Boots) {
            for (let i = 0; i < text.size(); i++) {
                let component = text.get(i)
                if (keyContains("item.modifiers", component)) {
                    isStatSection = true
                    i = remove(i, text)
                    i = remove(i, text)
                    continue
                }
                if (isStatSection) {
                    if (keyContains("attribute", component)) {
                        i = remove(i, text)
                        continue
                    }
                    for (let c of component.getSiblings()) {
                        if (keyContains("attribute", c)) {
                            i = remove(i, text)
                        }
                    }

                }
            }
        }
    })
    event.addAdvanced(Ingredient.all, (stack, item, text) => {
        //console.log(stack.id)
        //if (!Item.exists(item?.id)) return

        if (!(stack.isEnchanted() || enchantedBook.test(stack))) return
        let wasEnch = false
        if (item?.nbt?.Enchantments || item?.nbt?.StoredEnchantments) {
            for (let i = 0; i < text.size(); i++) {
                let component = text.get(i)
                let k = component?.contents?.key
                if (k != null && k.startsWith("enchantment.") && !k.endsWith(".desc")) {
                    wasEnch = true
                    if (k.contains("curse"))
                        formatCurse(component)
                    else if (k.contains("heavy"))
                        formatCurse(component)
                    else
                        formatEnch(component)
                    if (event.isShift()) {
                        i++
                        text.add(i, formatDesc(Text.translate(k + ".desc")))
                    }
                } else if (wasEnch && !event.isShift()) {
                    wasEnch = false
                    text.add(i, formatHint(Text.of('§6Hold SHIFT for enchantment descriptions')))
                    i++
                }
            }
        }
    })


    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        //console.log(item.id)
        if (!Item.exists(item?.id)) return
        if (item?.nbt?.Rusted) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Rusted').red()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-10% Dig Speed').red()
            ])
            text.add([
                Text.of('-10% Attack Damage').red()
            ])

        } else if (item?.nbt?.Clumsy) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Clumsy').red()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-5% Dig Speed').red()
            ])
            text.add([
                Text.of('-5% Attack Speed').red()
            ])
        } else if (item?.nbt?.Elegant) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Elegant').aqua()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+15% Dig Speed').blue()
            ])
            text.add([
                Text.of('+15% Attack Speed').blue()
            ])
        } else if (item?.nbt?.Broken) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Broken').darkGray()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-15% Attack Damage').red()
            ])

        } else if (item?.nbt?.Short) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Short').red()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-1 Reach Distance').red()
            ])
        } else if (item?.nbt?.Thin) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thin').yellow()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+10% Attack Speed').blue()
            ])
            text.add([
                Text.of('-5% Attack Damage').red()
            ])

        } else if (item?.nbt?.Pokey) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Pokey').yellow()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-10% Dig Speed').red()
            ])
            text.add([
                Text.of('+5% Attack Damage').blue()
            ])
        } else if (item?.nbt?.Vicious) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Vicious').yellow()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+15% Attack Damage').blue()
            ])
            text.add([
                Text.of('-0.5 Reach Distance').red()
            ])
        } else if (item?.nbt?.Long) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Long').blue()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])

            text.add([
                Text.of('+0.5 Reach Distance').blue()
            ])
        } else if (item?.nbt?.Keen) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Keen').blue()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+10% Attack Speed').blue()
            ])
            text.add([
                Text.of('+10% Attack Damage').blue()
            ])

        } else if (item?.nbt?.Sweeping) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Sweeping').aqua()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+20% Attack Speed').blue()
            ])
            text.add([
                Text.of('+0.5 Reach Distance').blue()
            ])
        } else if (item?.nbt?.Legendary) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Legendary').lightPurple()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+10% Dig Speed').blue()
            ])
            text.add([
                Text.of('+10% Attack Speed').blue()
            ])
            text.add([
                Text.of('+15% Attack Damage').blue()
            ])
            text.add([
                Text.of('+0.5 Reach Distance').blue()
            ])
        } else if (item?.nbt?.Worthless) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Worthless').darkRed()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-10% Dig Speed').red()
            ])
            text.add([
                Text.of('-10% Attack Speed').red()
            ])
            text.add([
                Text.of('-10% Attack Damage').red()
            ])
            text.add([
                Text.of('-1 Reach Distance').red()
            ])
        } else if (item?.nbt?.Broad) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Broad').yellow()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-5% Dig Speed').red()
            ])
            text.add([
                Text.of('-5% Attack Speed').red()
            ])
            text.add([
                Text.of('+10% Attack Damage').blue()
            ])

        } else if (item?.nbt?.Bulky) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Bulky').darkGray()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-15% Dig Speed').red()
            ])
            text.add([
                Text.of('-15% Attack Speed').red()
            ])
        } else if (item?.nbt?.Sharp) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Sharp').blue()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+10% Attack Damage').blue()
            ])
        } else if (item?.nbt?.Chipped) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Chipped').red()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-5% Attack Speed').red()
            ])
            text.add([
                Text.of('-5% Attack Damage').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        //console.log(item.id)
        if (!Item.exists(item?.id)) return

        if (item?.nbt?.Arcanel) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item?.nbt?.Dentedl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-2 Locational Armor').red()
            ])
        } else if (item?.nbt?.Heavyl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        } else if (item?.nbt?.Springyl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Springy').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
        } else if (item?.nbt?.Masterfull) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Toughl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item?.nbt?.Thickl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Protectivel) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Crumblingl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-1 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        //console.log(item.id)
        if (!Item.exists(item?.id)) return

        if (item.isEmpty()) return

        if (item?.nbt?.Arcanec) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item?.nbt?.Heavyc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        } else if (item?.nbt?.Cumbersomec) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Cumbersome').darkGray()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-10% Dig Speed').red()
            ])
            text.add([
                Text.of('-10% Attack Speed').red()
            ])
        } else if (item?.nbt?.Solidc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Solid').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+0.5 Knockback Resistance').blue()
            ])
        } else if (item?.nbt?.Masterfulc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
            text.add([
                Text.of('+0.5 Knockback Resistance').blue()
            ])
        } else if (item?.nbt?.Toughc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item?.nbt?.Thickc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Protectivec) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Crumblingc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-1 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        } else if (item?.nbt?.Dentedc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-2 Locational Armor').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        //console.log(item.id)
        if (!Item.exists(item?.id)) return

        if (item.isEmpty()) return

        if (item?.nbt?.Arcaneh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item?.nbt?.Crumblingh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-6 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        } else if (item?.nbt?.Thickh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+2 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Luckyh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Lucky').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+0.5 Luck').blue()
            ])
        } else if (item?.nbt?.Masterfulh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+0.5 Luck').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+2 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Toughh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item?.nbt?.Protectiveh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+2 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Dentedh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-4 Locational Armor').red()
            ])
        } else if (item?.nbt?.Heavyh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        //console.log(item.id)
        if (!Item.exists(item?.id)) return

        if (item.isEmpty()) return
        if (item?.nbt?.Crumblingb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-4.5 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        } else if (item?.nbt?.Dentedb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-3 Locational Armor').red()
            ])
        } else if (item?.nbt?.Arcaneb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item?.nbt?.Speedyb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Speedy').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+10% Speed').blue()
            ])
        } else if (item?.nbt?.Tallb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tall').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+0.5 Step Height').blue()
            ])
        } else if (item?.nbt?.Masterfulb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+0.5 Step Height').blue()
            ])
            text.add([
                Text.of('+10% Speed').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+1.5 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Toughb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item?.nbt?.Thickb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+1.5 Locational Armor').blue()
            ])
        } else if (item?.nbt?.Heavyb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        } else if (item?.nbt?.Protectiveb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+1.5 Locational Armor').blue()
            ])
        }
    })
    event.addAdvanced('kubejs:reforging_station', (item, advanced, text) => {
        //console.log(item.id)
        text.add([
            Text.of('Used to Reforge Items').gray(),
        ])
        text.add([
            Text.of('Right/Left click ').blue(),
            Text.of('with any ').blue(),
            Text.of('Curios/Armor ').darkAqua()
        ])
        text.add([
            Text.of('or ').darkAqua()
        ])

        text.add([
            Text.of('Right click ').blue(),
            Text.of('with any ').blue(),
            Text.of('Weapon/Tool ').darkAqua()
        ])
        text.add([
            Text.of('to see reforge ingredient!').blue()
        ])

    })
    event.addAdvanced('scalinghealth:heart_crystal', (item, advanced, text) => {
        //console.log(item.id)
        text.add(1, Component.yellow('I think my pet would like this more than me. '))
    })
    event.addAdvanced('kubejs:white_wine', (item, advanced, text) => {
        //console.log(item.id)
        text.add(1, Component.white('Drinking this is said to amplify potion effects..'))
    })
    event.addAdvanced('scalinghealth:power_crystal', (item, advanced, text) => {
        //console.log(item.id)
        text.add(1, Component.yellow('I think my pet would like this more than me. '))
    })
    event.addAdvanced('ylf_mod:brokenice', (item, advanced, text) => {
        //console.log(item.id)
        text.add(1, Component.darkPurple('Like catnip is to a cat, Broken Ice is to a Ylf.'))
    })
    event.addAdvanced('mekanism:mekasuit_helmet', (item, advanced, text) => {
        //console.log(item.id)
        text.add(1, Component.green('Negates 20% locational damage when powered.'))
    })
    event.addAdvanced('mekanism:mekasuit_bodyarmor', (item, advanced, text) => {
        //console.log(item.id)
        text.add(1, Component.green('Negates 20% locational damage when powered.'))
    })
    event.addAdvanced('mekanism:mekasuit_pants', (item, advanced, text) => {
        //console.log(item.id)
        text.add(1, Component.green('Negates 20% locational damage when powered.'))
    })
    event.addAdvanced('mekanism:mekasuit_boots', (item, advanced, text) => {
        //console.log(item.id)
        text.add(1, Component.green('Negates 20% locational damage when powered.'))
    })
    event.addAdvanced(['kubejs:dragon_ring'], (item, advanced, text) => {
        //console.log(item.id)
        let key = $OriginsClient.usePrimaryActivePowerKeybind.key.displayName.get()
        if (!event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Breath Fire at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Fire Resistance').gold(),
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [Text.of('Hold ').gold(),
            Text.of('[Shift] ').yellow(),
            Text.of('to see buffs.').gold()
            ])
        } else if (event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Breath Fire at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Fire Resistance').gold(),
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(6, [
                Text.of('+25% ').green(),
                Text.of('Attack Damage').blue()
            ])
            text.add(7, [
                Text.of('+25% ').green(),
                Text.of('Health').blue()
            ])
            text.add(8, [
                Text.of('+50% ').green(),
                Text.of('Armor Toughness').blue()
            ])
            text.add(9, [
                Text.of('-25% ').red(),
                Text.of('Swim Speed').blue()
            ])
        }
    })
    event.addAdvanced(['kubejs:fairy_ring'], (item, advanced, text) => {
        //console.log(item.id)
        if (!event.isShift()) {
            text.add(1, [
                Text.of('25% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Grants Creative Flight').gold(),
            ])
            text.add(3, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see buffs.').gold()])
        } else if (event.isShift()) {
            text.add(1, [
                Text.of('25% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Grants Creative Flight').gold(),
            ])
            text.add(3, [
                Text.of('While equipped:').white()
            ])
            text.add(4, [
                Text.of('+2 ').green(),
                Text.of('Luck').blue()
            ])
            text.add(5, [
                Text.of('-75% ').red(),
                Text.of('Attack Damage').blue()
            ])
            text.add(6, [
                Text.of('-75% ').red(),
                Text.of('Health').blue()
            ])
            text.add(7, [
                Text.of('-50% ').red(),
                Text.of('Armor').blue()
            ])
            text.add(8, [
                Text.of('-25% ').red(),
                Text.of('Armor Toughness').blue()
            ])
            text.add(9, [
                Text.of('-75% ').red(),
                Text.of('Movement Speed').blue()
            ])
            text.add(10, [
                Text.of('-25% ').red(),
                Text.of('Swim Speed').blue()
            ])
        }
    })
    event.addAdvanced(['kubejs:ocean_dragon_ring'], (item, advanced, text) => {
        //console.log(item.id)
        let key = $OriginsClient.usePrimaryActivePowerKeybind.key.displayName.get()
        if (!event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to cast Water Breath at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Water Breathing').gold()
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see buffs.').gold()])
        } else if (event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to cast Water Breath at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Press ').lightPurple(),
                Text.of('<Jump> ').yellow(),
                Text.of('while in mid air to flap your wings').lightPurple()
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(6, [
                Text.of('+25% ').green(),
                Text.of('Health').blue()
            ])
            text.add(7, [
                Text.of('+50% ').green(),
                Text.of('Armor Toughness').blue()
            ])
            text.add(8, [
                Text.of('+50% ').green(),
                Text.of('Swim Speed').blue()
            ])
            text.add(9, [
                Text.of('+25% ').green(),
                Text.of('Max Mana').blue()
            ])
            text.add(10, [
                Text.of('+25% ').green(),
                Text.of('Magic Damage').blue()
            ])
            text.add(11, [
                Text.of('+25% ').green(),
                Text.of('Magic Warding').blue()
            ])
            text.add(12, [
                Text.of('-25% ').red(),
                Text.of('Attack Damage').blue()
            ])
        }
    })
    event.addAdvanced(['kubejs:lightning_dragon_ring'], (item, advanced, text) => {
        //console.log(item.id)
        let key = $OriginsClient.usePrimaryActivePowerKeybind.key.displayName.get()
        if (!event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Breath Lightning at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Lightning Resistance').gold(),
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see buffs.').gold()])
        } else if (event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Breath Lightning at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Lightning Resistance').gold(),
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(6, [
                Text.of('+25% ').green(),
                Text.of('Attack Damage').blue()
            ])
            text.add(7, [
                Text.of('+25% ').green(),
                Text.of('Health').blue()
            ])
            text.add(8, [
                Text.of('+50% ').green(),
                Text.of('Armor Toughness').blue()
            ])
            text.add(9, [
                Text.of('-25% ').red(),
                Text.of('Swim Speed').blue()
            ])
        }
    })
    event.addAdvanced(['kubejs:titan_ring'], (item, advanced, text) => {
        //console.log(item.id)
        let key = $OriginsClient.usePrimaryActivePowerKeybind.key.displayName.get()
        let key2 = $OriginsClient.useSecondaryActivePowerKeybind.key.displayName.get()
        if (!event.isShift()) {

            text.add(1, [
                Text.of('300% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Toggle Multi-Mine').gold(),

            ])
            text.add(3, [
                Text.of('Press ').gold(),

                Text.of('<').yellow(),
                Text.of(key2).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Configure').gold(),
            ])
            text.add(4, [
                Text.of('Unable to Wear Weak Armor').darkRed(),
            ])
            text.add(5, [
                Text.of('Sinks in Water').darkRed(),
            ])
            text.add(6, [
                Text.of('Hold ').gold(),
                Text.of('[Shift] ').yellow(),
                Text.of('to see buffs.').gold()
            ])

        } else if (event.isShift()) {
            text.add(1, [
                Text.of('300% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Toggle Multi-Mine').gold(),

            ])
            text.add(3, [
                Text.of('Press ').gold(),

                Text.of('<').yellow(),
                Text.of(key2).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Configure').gold(),
            ])
            text.add(4, [
                Text.of('Unable to Wear Weak Armor').darkRed(),
            ])
            text.add(5, [
                Text.of('Sinks in Water').darkRed(),
            ])



            text.add(6, [
                Text.of('While equipped:').white()
            ])
            text.add(7, [
                Text.of('+100% ').green(),
                Text.of('Health').blue()
            ])
            text.add(8, [
                Text.of('+100% ').green(),
                Text.of('Entity Reach').blue()
            ])
            text.add(9, [
                Text.of('+100% ').green(),
                Text.of('Attack Damage').blue()
            ])
            text.add(10, [
                Text.of('+75% ').green(),
                Text.of('Knockback Resistance').blue()

            ])
            text.add(11, [
                Text.of('+75% ').green(),
                Text.of('Jump Height').blue()

            ])
            text.add(12, [
                Text.of('+50% ').green(),
                Text.of('Block Reach').blue()
            ])
            text.add(13, [
                Text.of('+25% ').green(),
                Text.of('Movement Speed').blue()
            ])
            text.add(14, [
                Text.of('+1.4 ').green(),
                Text.of('Step Height').blue()
            ])
            text.add(15, [
                Text.of('-50% ').red(),
                Text.of('Attack Speed').blue()
            ])


        }
    })
    event.addAdvanced(['kubejs:ring_of_faeles'], (item, advanced, text) => {
        //console.log(item.id)
        if (!event.isShift()) {

            text.add(1, [
                Text.of('75% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Increased Damage in Bare-Handed Combat').gold(),
            ])
            text.add(3, [
                Text.of('Negates Fall Damage').gold(),
            ])

            text.add(4, [
                Text.of('Speed Debuff When Wearing "Heavy" Armor').darkRed(),
            ])

            text.add(5, [
                Text.of('Hold ').gold(),
                Text.of('[Shift] ').yellow(),
                Text.of('to see buffs.').gold()
            ])

        } else if (event.isShift()) {
            text.add(1, [
                Text.of('75% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Increased Damage in Bare-Handed Combat').gold(),
            ])
            text.add(3, [
                Text.of('Negates Fall Damage').gold(),
            ])

            text.add(4, [
                Text.of('Speed Debuff When Wearing "Heavy" Armor').darkRed(),
            ])
            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(7, [
                Text.of('+75% ').green(),
                Text.of('Jump Height').blue()
            ])
            text.add(8, [
                Text.of('+30% ').green(),
                Text.of('Movement Speed').blue()
            ])
            text.add(9, [
                Text.of('+60% ').green(),
                Text.of('Water Visibility').blue()

            ])
            text.add(10, [
                Text.of('-20% ').red(),
                Text.of('Health').blue()
            ])

        }
    })
    event.addAdvanced(['kubejs:elf_ring'], (item, advanced, text) => {
        //console.log(item.id)
        if (!event.isShift()) {

            text.add(1, [
                Text.of('110% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Speed Strength and Ranged Boost in Forests').gold(),
            ])
            text.add(3, [
                Text.of('Negates Fall Damage in Forests').gold(),
            ])
            text.add(4, [
                Text.of('Slowly Regenerate Health Around Grass Blocks').green(),
            ])



            text.add(5, [
                Text.of('Hold ').gold(),
                Text.of('[Shift] ').yellow(),
                Text.of('to see buffs.').gold()
            ])

        } else if (event.isShift()) {
            text.add(1, [
                Text.of('110% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Speed Strength and Ranged Boost in Forests').gold(),
            ])
            text.add(3, [
                Text.of('Negates Fall Damage in Forests').gold(),
            ])
            text.add(4, [
                Text.of('Slowly Regenerate Health Around Grass Blocks').green(),
            ])


            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(6, [
                Text.of('+8 ').green(),
                Text.of('Ranged Damage').blue()
            ])
            text.add(7, [
                Text.of('-25% ').red(),
                Text.of('Attack Damage').blue()
            ])
            text.add(8, [
                Text.of('-50% ').red(),
                Text.of('Fire Resistance').blue()

            ])



        }
    })
})



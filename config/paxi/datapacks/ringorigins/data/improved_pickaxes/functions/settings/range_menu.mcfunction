#by bad_programmer
playsound ui.button.click player @s ~ ~ ~ 0.7 2

#*ВСЕГО В ЧАТЕ 20 СТРОЧЕК
tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s {"text": "                        Range Settings","color": "gold","bold": true,"italic": false}
tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}

#*ПРЕДУПРЕЖДЕНИЕ
tellraw @s ["",{"text":"*NOTE* min range = 1, max range = 2","color": "#aaaaaa","italic": false}]
tellraw @s {"text":""}

#*ДЕРЕВЯНАЯ КИРКА
tellraw @s ["",{"text":"[-] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add WOODEN_RANGE_minus"}},{"score":{"name": "*WOODEN_PICKAXE_RANGE*","objective": "SETTINGS_VALUE_IP"},"color": "gold","italic": false},{"text": " [+] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add WOODEN_RANGE_plus"}},{"text": " Wooden Pickaxe Range","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*КАМЕННАЯ КИРКА
tellraw @s ["",{"text":"[-] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add STONE_RANGE_minus"}},{"score":{"name": "*STONE_PICKAXE_RANGE*","objective": "SETTINGS_VALUE_IP"},"color": "gold","italic": false},{"text": " [+] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add STONE_RANGE_plus"}},{"text": " Stone Pickaxe Range","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*ЖЕЛЕЗНАЯ КИРКА
tellraw @s ["",{"text":"[-] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add IRON_RANGE_minus"}},{"score":{"name": "*IRON_PICKAXE_RANGE*","objective": "SETTINGS_VALUE_IP"},"color": "gold","italic": false},{"text": " [+] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add IRON_RANGE_plus"}},{"text": " Iron Pickaxe Range","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*ЗОЛОТАЯ КИРКА
tellraw @s ["",{"text":"[-] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add GOLDEN_RANGE_minus"}},{"score":{"name": "*GOLDEN_PICKAXE_RANGE*","objective": "SETTINGS_VALUE_IP"},"color": "gold","italic": false},{"text": " [+] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add GOLDEN_RANGE_plus"}},{"text": " Golden Pickaxe Range","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*АЛМАЗНАЯ КИРКА
tellraw @s ["",{"text":"[-] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add DIAMOND_RANGE_minus"}},{"score":{"name": "*DIAMOND_PICKAXE_RANGE*","objective": "SETTINGS_VALUE_IP"},"color": "gold","italic": false},{"text": " [+] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add DIAMOND_RANGE_plus"}},{"text": " Diamond Pickaxe Range","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*НЕЗЕРИТОВАЯ КИРКА
tellraw @s ["",{"text":"[-] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add NETHERITE_RANGE_minus"}},{"score":{"name": "*NETHERITE_PICKAXE_RANGE*","objective": "SETTINGS_VALUE_IP"},"color": "gold","italic": false},{"text": " [+] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/tag @s add NETHERITE_RANGE_plus"}},{"text": " Netherite Pickaxe Range","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s ["",{"text":"< BACK","color": "#ff0000","bold": true,"italic": false,"clickEvent": {"action": "run_command","value": "/execute at @s run function improved_pickaxes:settings/run"}}]
tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
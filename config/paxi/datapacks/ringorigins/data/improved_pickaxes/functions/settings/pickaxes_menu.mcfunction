#by bad_programmer
playsound ui.button.click player @s ~ ~ ~ 0.7 1.9

tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s {"text": "                           Pickaxe","color": "gold","bold": true,"italic": false}
tellraw @s {"text":"                           Settings","color": "gold","bold": true,"italic": false}
tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s {"text":""}

#*ДЕРЕВЯНАЯ КИРКА
execute if score *WOODEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 1 run tellraw @s ["",{"text": "[ ✔ ] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_WOODEN_PICKAXE_OFF"}},{"text": " Wooden Pickaxe","color": "#dddddd","italic": false}]
execute if score *WOODEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 0 run tellraw @s ["",{"text": "[ ✖ ] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_WOODEN_PICKAXE_ON"}},{"text": " Wooden Pickaxe","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*КАМЕННАЯ КИРКА
execute if score *STONE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 1 run tellraw @s ["",{"text": "[ ✔ ] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_STONE_PICKAXE_OFF"}},{"text": " Stone Pickaxe","color": "#dddddd","italic": false}]
execute if score *STONE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 0 run tellraw @s ["",{"text": "[ ✖ ] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_STONE_PICKAXE_ON"}},{"text": " Stone Pickaxe","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*ЖЕЛЕЗНАЯ КИРКА
execute if score *IRON_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 1 run tellraw @s ["",{"text": "[ ✔ ] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_IRON_PICKAXE_OFF"}},{"text": " Iron Pickaxe","color": "#dddddd","italic": false}]
execute if score *IRON_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 0 run tellraw @s ["",{"text": "[ ✖ ] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_IRON_PICKAXE_ON"}},{"text": " Iron Pickaxe","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*ЗОЛОТАЯ КИРКА
execute if score *GOLDEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 1 run tellraw @s ["",{"text": "[ ✔ ] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_GOLDEN_PICKAXE_OFF"}},{"text": " Golden Pickaxe","color": "#dddddd","italic": false}]
execute if score *GOLDEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 0 run tellraw @s ["",{"text": "[ ✖ ] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_GOLDEN_PICKAXE_ON"}},{"text": " Golden Pickaxe","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*АЛМАЗНАЯ КИРКА
execute if score *DIAMOND_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 1 run tellraw @s ["",{"text": "[ ✔ ] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_DIAMOND_PICKAXE_OFF"}},{"text": " Diamond Pickaxe","color": "#dddddd","italic": false}]
execute if score *DIAMOND_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 0 run tellraw @s ["",{"text": "[ ✖ ] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_DIAMOND_PICKAXE_ON"}},{"text": " Diamond Pickaxe","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

#*НЕЗЕРИТОВАЯ КИРКА
execute if score *NETHERITE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 1 run tellraw @s ["",{"text": "[ ✔ ] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_NETHERITE_PICKAXE_OFF"}},{"text": " Netherite Pickaxe","color": "#dddddd","italic": false}]
execute if score *NETHERITE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches 0 run tellraw @s ["",{"text": "[ ✖ ] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_NETHERITE_PICKAXE_ON"}},{"text": " Netherite Pickaxe","color": "#dddddd","italic": false}]
tellraw @s {"text":""}

tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s ["",{"text":"< BACK","color": "#ff0000","bold": true,"italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run execute at @s run function improved_pickaxes:settings/run"}}]
tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
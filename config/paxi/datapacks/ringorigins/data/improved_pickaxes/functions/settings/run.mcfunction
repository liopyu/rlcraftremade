#by bad_programmer
playsound ui.button.click player @s ~ ~ ~ 0.7 2

tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s {"text": "                        Titan Pickaxe","color": "gold","bold": true,"italic": false}
tellraw @s {"text":"                           Settings","color": "gold","bold": true,"italic": false}
tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s {"text":""}
tellraw @s {"text":""}
tellraw @s {"text":""}
tellraw @s {"text":""}
tellraw @s {"text":""}
tellraw @s {"text":""}
#tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}

tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s {"text":""}
tellraw @s {"text":"Works When:","color": "#ffe600","italic": false}

tellraw @s {"text":""}
#РАБОТАЕТ СТОЯ
execute if score *STANDING_ON/OFF* SETTINGS_VALUE_IP matches 1 run tellraw @s ["",{"text": "[ ✔ ] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_STANDING_OFF"}},{"text": " Standing","color": "#dddddd","italic": false}]
execute if score *STANDING_ON/OFF* SETTINGS_VALUE_IP matches 0 run tellraw @s ["",{"text": "[ ✖ ] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_STANDING_ON"}},{"text": " Standing","color": "#dddddd","italic": false}]
#tellraw @s {"text":""}


#РАБОТАЕТ В ПРИСЕДИ
execute if score *SNEAK_ON/OFF* SETTINGS_VALUE_IP matches 1 run tellraw @s ["",{"text": "[ ✔ ] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_SNEAK_OFF"}},{"text": " Sneaking","color": "#dddddd","italic": false}]
execute if score *SNEAK_ON/OFF* SETTINGS_VALUE_IP matches 0 run tellraw @s ["",{"text": "[ ✖ ] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_SNEAK_ON"}},{"text": " Sneaking","color": "#dddddd","italic": false}]


execute if score *BREAK_SILENT_ON/OFF* SETTINGS_VALUE_IP matches 1 run tellraw @s ["",{"text": "[ ✔ ] ","color": "#00ff00","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_BREAK_SILENT_OFF"}},{"text": "Silent Break","color": "#dddddd","italic": false,"hoverEvent": {"action": "show_text","value": "More performance, but no drop"}}]
execute if score *BREAK_SILENT_ON/OFF* SETTINGS_VALUE_IP matches 0 run tellraw @s ["",{"text": "[ ✖ ] ","color": "#ff0000","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run tag @s add IP_BREAK_SILENT_ON"}},{"text": " Silent Break","color": "#dddddd","italic": false,"hoverEvent": {"action": "show_text","value": "More performance, but no drop"}}]

tellraw @s {"text":""}
#НАСТРОЙКИ КИРОК
tellraw @s ["",{"text": "[ ✎ ]","color": "#0000ff","italic": false,"clickEvent": {"action": "run_command","value": "/execute if entity @s[tag=titan] run execute at @s run function improved_pickaxes:settings/pickaxes_menu"}},{"text":" Pickaxes Settings","color": "#ffe600","bold": true,"italic": false}]
#tellraw @s {"text":""}

tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}

#НАСТРОЙКИ ДАЛЬНОСТИ
#tellraw @s ["",{"text": "[ ✎ ]","color": "#0000ff","italic": false,"clickEvent": {"action": "run_command","value": "/execute at @s run function improved_pickaxes:settings/range_menu"}},{"text":" Range Settings","color": "#ffe600","bold": true,"italic": false}]





#ТИХОЕ РАЗРУШЕНИЕ


#БЕДРОК КИРКА
#tellraw @s ["",{"text": "GIVE BEDROCK PICKAXE","color": "dark_purple","italic": false,"hoverEvent": {"action": "show_text","value": "IN THE DEVELOPMENT"}}]
#tellraw @s {"text":""}

#УДАЛИТЬ ДАТАПАК
#tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
#tellraw @s ["",{"text":"                    UNINSTAL DATAPACK","color": "#ff0000","bold": true,"italic": false,"clickEvent": {"action": "run_command","value": "/execute at @s run function improved_pickaxes:settings/uninstall_menu"}}]
#tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
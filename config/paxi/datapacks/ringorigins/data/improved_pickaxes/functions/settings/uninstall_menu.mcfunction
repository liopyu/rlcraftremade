#by bad_programmer
playsound ui.button.click player @s ~ ~ ~ 1
tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s {"text": "                     Improved Pickaxes","color": "gold","bold": true,"italic": false}
tellraw @s {"text":"                         Uninstalling","color": "#ff0000","bold": true,"italic": false}
tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
tellraw @s {"text":""}
tellraw @s {"text":""}
tellraw @s {"text":""}
tellraw @s {"text":" Are you sure you want to uninstall this datapack?","color": "#dddddd","bold": true,"italic": false}
tellraw @s {"text":""}
tellraw @s ["",{"text":"                         YES","color": "#ff0000","bold": true,"italic": false,"clickEvent": {"action": "run_command","value": "/function improved_pickaxes:uninstall"}},{"text": "     NO","color": "#00ff00","bold": true,"italic": false,"clickEvent": {"action": "run_command","value": "/execute at @s run function improved_pickaxes:settings/run"}}]
tellraw @s {"text":""}
tellraw @s {"text":""}
tellraw @s {"text":"          To install it back you need to run the command:","color": "#dddddd","italic": false}
tellraw @s {"text":"           /datapack enable \"file/improved_pickaxes.zip\"","color": "#00ff00","italic": false}
tellraw @s {"text":""}
tellraw @s {"text":"                  It requires cheats/OP","color": "#dddddd","bold": true,"italic": false}
tellraw @s {"text":""}
tellraw @s {"text":""}
tellraw @s {"text":""}
tellraw @s {"text":"                                                                                ","color": "dark_aqua","strikethrough":true}
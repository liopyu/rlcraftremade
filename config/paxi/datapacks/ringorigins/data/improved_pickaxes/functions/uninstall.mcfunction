#by bad_programmer
gamerule sendCommandFeedback true
gamerule maxCommandChainLength 65536
scoreboard objectives remove SETTINGS_IP
scoreboard objectives remove SETTINGS_VALUE_IP
scoreboard objectives remove IP_WOODEN_PICKAXE_USE
scoreboard objectives remove IP_STONE_PICKAXE_USE
scoreboard objectives remove IP_IRON_PICKAXE_USE
scoreboard objectives remove IP_GOLDEN_PICKAXE_USE
scoreboard objectives remove IP_DIAMOND_PICKAXE_USE
scoreboard objectives remove IP_NETHERITE_PICKAXE_USE
tellraw @a [{"text": "DATAPACK ","color": "#bbbbbb","italic": false},{"text": " IMPROVED PICKAXES ","color": "gold","italic": false},{"text": " UNINSTALLED","color": "#bbbbbb","italic": false}]
datapack disable "file/improved_pickaxes.zip"
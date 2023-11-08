#by bad_programmer
#tellraw @a [{"text": "DATAPACK ","color": "#bbbbbb","italic": false},{"text": " IMPROVED PICKAXES ","color": "gold","bold": true,"italic": false},{"text": " LOADED","color": "#bbbbbb","italic": false}]
#tellraw @a [{"text": "\nWrite the command ","color": "#bbbbbb","italic": false},{"text": "/trigger SETTINGS_IP ","color": "#00ff00","italic": false},{"text": "to open the settings menu","color": "#bbbbbb","italic": false}]

#gamerule sendCommandFeedback false
gamerule maxCommandChainLength 100000

scoreboard players set #toggletag toggletag 2
scoreboard objectives add titanenabled dummy



#ПЕРЕМЕННЫЕ
scoreboard objectives add SETTINGS_IP trigger
scoreboard objectives add SETTINGS_VALUE_IP dummy
scoreboard objectives add IP_WOODEN_PICKAXE_USE minecraft.used:wooden_pickaxe
scoreboard objectives add IP_STONE_PICKAXE_USE minecraft.used:stone_pickaxe
scoreboard objectives add IP_IRON_PICKAXE_USE minecraft.used:iron_pickaxe
scoreboard objectives add IP_GOLDEN_PICKAXE_USE minecraft.used:golden_pickaxe
scoreboard objectives add IP_DIAMOND_PICKAXE_USE minecraft.used:diamond_pickaxe
scoreboard objectives add IP_NETHERITE_PICKAXE_USE minecraft.used:netherite_pickaxe

#НАСТРОЙКИ
execute unless score *STANDING_ON/OFF* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *STANDING_ON/OFF* SETTINGS_VALUE_IP 1
execute unless score *SNEAK_ON/OFF* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *SNEAK_ON/OFF* SETTINGS_VALUE_IP 0
execute unless score *BREAK_SILENT_ON/OFF* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *BREAK_SILENT_ON/OFF* SETTINGS_VALUE_IP 0
#*ВКЛЮЧИТЬ ВСЕ КИРКИ
execute unless score *WOODEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *WOODEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute unless score *STONE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *STONE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute unless score *IRON_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *IRON_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute unless score *GOLDEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *GOLDEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute unless score *DIAMOND_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *DIAMOND_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute unless score *NETHERITE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *NETHERITE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
#*ДАЛЬНОСТЬ КИРОК
execute unless score *WOODEN_PICKAXE_RANGE* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *WOODEN_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute unless score *STONE_PICKAXE_RANGE* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *STONE_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute unless score *IRON_PICKAXE_RANGE* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *IRON_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute unless score *GOLDEN_PICKAXE_RANGE* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *GOLDEN_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute unless score *DIAMOND_PICKAXE_RANGE* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *DIAMOND_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute unless score *NETHERITE_PICKAXE_RANGE* SETTINGS_VALUE_IP matches -2147483648..2147483647 run scoreboard players set *NETHERITE_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
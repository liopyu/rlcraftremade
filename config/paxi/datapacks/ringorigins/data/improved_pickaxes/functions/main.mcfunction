#by bad_programmer
#ОСНОВНЫЕ ФУНКЦИИ
execute if score *STANDING_ON/OFF* SETTINGS_VALUE_IP matches 1 run function improved_pickaxes:pickaxes/run_standing
execute if score *SNEAK_ON/OFF* SETTINGS_VALUE_IP matches 1 run function improved_pickaxes:pickaxes/run_sneaking

#РАЗРУШИТЬ БЛОКИ
execute if score *BREAK_SILENT_ON/OFF* SETTINGS_VALUE_IP matches 0 at @e[tag=IP_BLOCK_BREAK] run function improved_pickaxes:break/break
execute if score *BREAK_SILENT_ON/OFF* SETTINGS_VALUE_IP matches 1 at @e[tag=IP_BLOCK_BREAK] run function improved_pickaxes:break/silent
kill @e[tag=IP_BLOCK_BREAK]

#НАСТРОЙКИ
function improved_pickaxes:settings/main

#СБРОС ПЕРЕМЕННЫХ
scoreboard players reset @a IP_WOODEN_PICKAXE_USE
scoreboard players reset @a IP_STONE_PICKAXE_USE
scoreboard players reset @a IP_IRON_PICKAXE_USE
scoreboard players reset @a IP_GOLDEN_PICKAXE_USE
scoreboard players reset @a IP_DIAMOND_PICKAXE_USE
scoreboard players reset @a IP_NETHERITE_PICKAXE_USE
scoreboard players reset @a[scores={SETTINGS_IP=1..}] SETTINGS_IP

execute as @r run execute if score @s toggletag >= #toggletag toggletag run scoreboard players set @s toggletag 0

execute as @r run execute if entity @s[tag=titan] run execute run scoreboard players set @s titanenabled 1
execute as @r run execute if entity @s[tag=!titan] run execute run scoreboard players set @s titanenabled 0
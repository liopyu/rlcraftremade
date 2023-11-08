#by bad_programmer
scoreboard players enable @e[tag=titan] SETTINGS_IP

execute as @a[scores={SETTINGS_IP=1..}] at @s run function improved_pickaxes:settings/run
#ОПЕРАЦИИ С ПЕРЕМЕННЫМИ
execute if entity @a[tag=IP_STANDING_OFF] run scoreboard players set *STANDING_ON/OFF* SETTINGS_VALUE_IP 0
execute if entity @a[tag=IP_STANDING_ON] run scoreboard players set *STANDING_ON/OFF* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IP_SNEAK_OFF] run scoreboard players set *SNEAK_ON/OFF* SETTINGS_VALUE_IP 0
execute if entity @a[tag=IP_SNEAK_ON] run scoreboard players set *SNEAK_ON/OFF* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IP_BREAK_SILENT_OFF] run scoreboard players set *BREAK_SILENT_ON/OFF* SETTINGS_VALUE_IP 0
execute if entity @a[tag=IP_BREAK_SILENT_ON] run scoreboard players set *BREAK_SILENT_ON/OFF* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IP_WOODEN_PICKAXE_OFF] run scoreboard players set *WOODEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 0
execute if entity @a[tag=IP_WOODEN_PICKAXE_ON] run scoreboard players set *WOODEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IP_STONE_PICKAXE_OFF] run scoreboard players set *STONE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 0
execute if entity @a[tag=IP_STONE_PICKAXE_ON] run scoreboard players set *STONE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IP_IRON_PICKAXE_OFF] run scoreboard players set *IRON_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 0
execute if entity @a[tag=IP_IRON_PICKAXE_ON] run scoreboard players set *IRON_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IP_GOLDEN_PICKAXE_OFF] run scoreboard players set *GOLDEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 0
execute if entity @a[tag=IP_GOLDEN_PICKAXE_ON] run scoreboard players set *GOLDEN_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IP_DIAMOND_PICKAXE_OFF] run scoreboard players set *DIAMOND_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 0
execute if entity @a[tag=IP_DIAMOND_PICKAXE_ON] run scoreboard players set *DIAMOND_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IP_NETHERITE_PICKAXE_OFF] run scoreboard players set *NETHERITE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 0
execute if entity @a[tag=IP_NETHERITE_PICKAXE_ON] run scoreboard players set *NETHERITE_PICKAXE_ON/OFF* SETTINGS_VALUE_IP 1
#*ДАЛЬНОСТЬ КИРОК
execute if entity @a[tag=WOODEN_RANGE_minus] unless score *WOODEN_PICKAXE_RANGE* SETTINGS_VALUE_IP matches ..1 run scoreboard players remove *WOODEN_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=WOODEN_RANGE_plus] unless score *WOODEN_PICKAXE_RANGE* SETTINGS_VALUE_IP matches 2.. run scoreboard players add *WOODEN_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=STONE_RANGE_minus] unless score *STONE_PICKAXE_RANGE* SETTINGS_VALUE_IP matches ..1 run scoreboard players remove *STONE_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=STONE_RANGE_plus] unless score *STONE_PICKAXE_RANGE* SETTINGS_VALUE_IP matches 2.. run scoreboard players add *STONE_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IRON_RANGE_minus] unless score *IRON_PICKAXE_RANGE* SETTINGS_VALUE_IP matches ..1 run scoreboard players remove *IRON_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=IRON_RANGE_plus] unless score *IRON_PICKAXE_RANGE* SETTINGS_VALUE_IP matches 2.. run scoreboard players add *IRON_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=GOLDEN_RANGE_minus] unless score *GOLDEN_PICKAXE_RANGE* SETTINGS_VALUE_IP matches ..1 run scoreboard players remove *GOLDEN_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=GOLDEN_RANGE_plus] unless score *GOLDEN_PICKAXE_RANGE* SETTINGS_VALUE_IP matches 2.. run scoreboard players add *GOLDEN_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=DIAMOND_RANGE_minus] unless score *DIAMOND_PICKAXE_RANGE* SETTINGS_VALUE_IP matches ..1 run scoreboard players remove *DIAMOND_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=DIAMOND_RANGE_plus] unless score *DIAMOND_PICKAXE_RANGE* SETTINGS_VALUE_IP matches 2.. run scoreboard players add *DIAMOND_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=NETHERITE_RANGE_minus] unless score *NETHERITE_PICKAXE_RANGE* SETTINGS_VALUE_IP matches ..1 run scoreboard players remove *NETHERITE_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
execute if entity @a[tag=NETHERITE_RANGE_plus] unless score *NETHERITE_PICKAXE_RANGE* SETTINGS_VALUE_IP matches 2.. run scoreboard players add *NETHERITE_PICKAXE_RANGE* SETTINGS_VALUE_IP 1
#ОБНОВЛЕНИЯ СООБЩЕНИЕ В ЧАТЕ
execute as @a[tag=IP_STANDING_OFF] at @s run function improved_pickaxes:settings/run
execute as @a[tag=IP_STANDING_ON] at @s run function improved_pickaxes:settings/run
execute as @a[tag=IP_SNEAK_OFF] at @s run function improved_pickaxes:settings/run
execute as @a[tag=IP_SNEAK_ON] at @s run function improved_pickaxes:settings/run
execute as @a[tag=IP_BREAK_SILENT_OFF] at @s run function improved_pickaxes:settings/run
execute as @a[tag=IP_BREAK_SILENT_ON] at @s run function improved_pickaxes:settings/run
execute as @a[tag=IP_WOODEN_PICKAXE_OFF] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_WOODEN_PICKAXE_ON] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_STONE_PICKAXE_OFF] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_STONE_PICKAXE_ON] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_IRON_PICKAXE_OFF] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_IRON_PICKAXE_ON] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_GOLDEN_PICKAXE_OFF] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_GOLDEN_PICKAXE_ON] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_DIAMOND_PICKAXE_OFF] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_DIAMOND_PICKAXE_ON] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_NETHERITE_PICKAXE_OFF] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=IP_NETHERITE_PICKAXE_ON] at @s run function improved_pickaxes:settings/pickaxes_menu
execute as @a[tag=WOODEN_RANGE_minus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=WOODEN_RANGE_plus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=STONE_RANGE_minus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=STONE_RANGE_plus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=IRON_RANGE_minus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=IRON_RANGE_plus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=GOLDEN_RANGE_minus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=GOLDEN_RANGE_plus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=DIAMOND_RANGE_minus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=DIAMOND_RANGE_plus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=NETHERITE_RANGE_minus] at @s run function improved_pickaxes:settings/range_menu
execute as @a[tag=NETHERITE_RANGE_plus] at @s run function improved_pickaxes:settings/range_menu
#УДАЛИТЬ ТЕГИ
tag @a remove IP_STANDING_OFF
tag @a remove IP_STANDING_ON
tag @a remove IP_SNEAK_OFF
tag @a remove IP_SNEAK_ON
tag @a remove IP_WOODEN_PICKAXE_OFF
tag @a remove IP_WOODEN_PICKAXE_ON
tag @a remove IP_STONE_PICKAXE_OFF
tag @a remove IP_STONE_PICKAXE_ON
tag @a remove IP_IRON_PICKAXE_OFF
tag @a remove IP_IRON_PICKAXE_ON
tag @a remove IP_GOLDEN_PICKAXE_OFF
tag @a remove IP_GOLDEN_PICKAXE_ON
tag @a remove IP_DIAMOND_PICKAXE_OFF
tag @a remove IP_DIAMOND_PICKAXE_ON
tag @a remove IP_NETHERITE_PICKAXE_OFF
tag @a remove IP_NETHERITE_PICKAXE_ON
tag @a remove IP_BREAK_SILENT_OFF
tag @a remove IP_BREAK_SILENT_ON
tag @a remove WOODEN_RANGE_minus
tag @a remove WOODEN_RANGE_plus
tag @a remove STONE_RANGE_minus
tag @a remove STONE_RANGE_plus
tag @a remove IRON_RANGE_minus
tag @a remove IRON_RANGE_plus
tag @a remove GOLDEN_RANGE_minus
tag @a remove GOLDEN_RANGE_plus
tag @a remove DIAMOND_RANGE_minus
tag @a remove DIAMOND_RANGE_plus
tag @a remove NETHERITE_RANGE_minus
tag @a remove NETHERITE_RANGE_plus
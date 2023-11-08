scoreboard players set #toggletag toggletag 2
scoreboard objectives add toggletag dummy
scoreboard players add @s toggletag 1

execute if score @s toggletag matches 2 run title @s actionbar {"text":"Multi-Mine Disabled","bold":true,"color":"red"}
execute if score @s toggletag matches 1 run title @s actionbar {"text":"Multi-Mine Enabled","bold":true,"color":"dark_green"}

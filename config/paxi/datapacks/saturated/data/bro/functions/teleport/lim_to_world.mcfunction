execute in minecraft:overworld run forceload add ~ ~
execute in minecraft:overworld align xz run tp @s ~ 300 ~
execute at @s run fill ~3 ~1 ~3 ~-3 ~-1 ~-3 air 
execute at @s[gamemode=!spectator] run setblock ~ 249 ~ minecraft:damaged_anvil keep
effect give @s slow_falling 45 1 true
advancement revoke @a only bro:lim_to_wrld
execute as @s run forceload remove ~ ~
#tellraw @a ["",{"text":"Tan's Huge Trees : ","color":"gray"},{"text":"Config datapack is working!","color":"green"}]
#execute as @a at @s run playsound minecraft:block.note_block.xylophone ambient @s ~ ~ ~ 0.25 0

#--------------------------------------------------------------------------------------------------------------------------
# WORLD CUT-OFF PROTECTION
#--------------------------------------------------------------------------------------------------------------------------

execute run THT-Config world_height_limit height 320
# Description : Set Y height that will cancel the structure from spawning, for protect it from cut-off by world height limit.
# Default : 320

execute run THT-Config world_height_limit lower 63
# Description : Set Y height that will cancel the structure from spawning, for protect it from cut-off by world lower limit.
# Default : -64

#--------------------------------------------------------------------------------------------------------------------------
# SURFACE SMOOTHNESS DETECTOR
#--------------------------------------------------------------------------------------------------------------------------

execute run THT-Config surface_smoothness_detector level 1
# Description : Set level of the detector, must between 0-6. Increase this value will create more detector around the trees, and may make them hard to spawn.
# Default : 4

execute run THT-Config surface_smoothness_detector height 7
# Description : Set height level for detector. Lower this number will make the trees can only spawn in flat areas.
# Default : 7

#--------------------------------------------------------------------------------------------------------------------------
# STRUCTURE
#--------------------------------------------------------------------------------------------------------------------------

# Type Rarity
# Description : Set the rarity of structure type or all structure, must be a number between 0 to 100, like a percent number. Replace "type" with A, B, C, D, E or use "all".
# Template : THT-Config structure rarity (type) (percent)
# Example : THT-Config structure rarity A 25

# Structure Rarity
# Description : Set the rarity of structure, must be a number between 0 to 1000000 (one million), lower number make it more rare.
# Template : THT-Config structure rarity (structure_id) (rarity)
# Example : THT-Config structure rarity A1 250

# Biome
# Description : Set biome for that structure. For example "minecraft:forest", you can use "all" for let that structure spawn in all biomes.
# Template : THT-Config structure biome (structure_id) (biome_id)
# Example : THT-Config structure biome A1 minecraft:desert

# Ground Block
# Description : Set ground block for that structure. For example "minecraft:grass_block", you can use "list" for some general blocks for plants.
# Template : THT-Config structure ground_block (structure_id) (block_id)
# Example : THT-Config structure ground_block A1 minecraft:sand

#--------------------------------------------------------------------------------------------------------------------------
#     ▼     INSERT YOUR CONFIG HERE     ▼
#--------------------------------------------------------------------------------------------------------------------------

#Type Rarity
execute run THT-Config structure rarity A 50
execute run THT-Config structure rarity B 50
execute run THT-Config structure rarity C 50
execute run THT-Config structure rarity D 50
execute run THT-Config structure rarity E 50

#Structure Rarity
execute run THT-Config structure rarity B1 2500
execute run THT-Config structure rarity B2 2500
execute run THT-Config structure rarity B3 2500
execute run THT-Config structure rarity B4 2500
execute run THT-Config structure rarity B5 2500
execute run THT-Config structure rarity B6 2500
execute run THT-Config structure rarity B7 2500
execute run THT-Config structure rarity B8 2500
execute run THT-Config structure rarity B9 2500
execute run THT-Config structure rarity B10 2500
execute run THT-Config structure rarity B11 2500
execute run THT-Config structure rarity B12 2500
execute run THT-Config structure rarity B13 2500
execute run THT-Config structure rarity B14 2500
execute run THT-Config structure rarity B15 2500
execute run THT-Config structure rarity C1 2500
execute run THT-Config structure rarity C2 2500
execute run THT-Config structure rarity C3 2500
execute run THT-Config structure rarity C4 2500
execute run THT-Config structure rarity C5 2500
execute run THT-Config structure rarity C6 2500
execute run THT-Config structure rarity C7 500
execute run THT-Config structure rarity C8 2500
execute run THT-Config structure rarity C9 2500
execute run THT-Config structure rarity C10 2500
execute run THT-Config structure rarity C11 2500
execute run THT-Config structure rarity C12 500
execute run THT-Config structure rarity C13 250
execute run THT-Config structure rarity C14 500
execute run THT-Config structure rarity D1 1000
execute run THT-Config structure rarity D2 1000
execute run THT-Config structure rarity D3 1000
execute run THT-Config structure rarity D4 1000
execute run THT-Config structure rarity D5 100
execute run THT-Config structure rarity D6 500
execute run THT-Config structure rarity D7 1000
execute run THT-Config structure rarity D8 1000
execute run THT-Config structure rarity D9 1000
execute run THT-Config structure rarity D10 1500
execute run THT-Config structure rarity D11 1500
execute run THT-Config structure rarity D13 500
execute run THT-Config structure rarity D14 2500
execute run THT-Config structure rarity D15 500
execute run THT-Config structure rarity E1 1000
execute run THT-Config structure rarity E2 1000
execute run THT-Config structure rarity E4 50
execute run THT-Config structure rarity E8 1000
execute run THT-Config structure rarity E9 1000
execute run THT-Config structure rarity E10 2000
execute run THT-Config structure rarity E11 1000
execute run THT-Config structure rarity E12 50
execute run THT-Config structure rarity E13 1000
execute run THT-Config structure rarity E14 250

#Biome
#THT-Config structure biome A1 all
execute run THT-Config structure biome E12 all
#execute run THT-Config structure biome D5 all
#execute run THT-Config structure biome C14 all
#execute run THT-Config structure biome C12 all
#execute run THT-Config structure biome C1 all
#execute run THT-Config structure biome C7 all
#execute run THT-Config structure biome D15 all
#execute run THT-Config structure biome D6 all
#execute run THT-Config structure biome D1 minecraft:forest
execute run THT-Config structure biome E4 all


# Ground Block
#THT-Config structure ground_block A1 minecraft:sand
execute run THT-Config structure ground_block E12 minecraft:water
execute run THT-Config structure ground_block E4 minecraft:water

#--------------------------------------------------------------------------------------------------------------------------
#     ▲     INSERT YOUR CONFIG HERE     ▲
#--------------------------------------------------------------------------------------------------------------------------
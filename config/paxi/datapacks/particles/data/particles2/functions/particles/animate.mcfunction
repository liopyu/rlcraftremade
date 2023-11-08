#Particles Generated with: Cloud Wolf's Particle Grapher
scoreboard objectives add cw_particleplot dummy
function particles3:particles/l0/l0_0
scoreboard players add $9562 cw_particleplot 1
execute if score $9562 cw_particleplot matches 1.. run scoreboard players set $9562 cw_particleplot 0
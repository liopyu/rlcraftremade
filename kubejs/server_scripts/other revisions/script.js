// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')





/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {

    // ----- Convenience Functions -----
    // Replace inputs and outputs across all recipes that use the given ingredient / item.
    const replaceInput = (from, to) => {event.replaceInput({}, from, to)};
    const replaceOutput = (from, to) => {event.replaceOutput({}, from, to)};
  
    // Replace inputs / outputs by recipe ID.
    const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)};
    const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to)};
  
    // Replace inputs / outputs by recipe type.
    const replaceInputType = (recipeType, from, to) => {event.replaceInput({type: recipeType}, from, to)};
    const replaceOutputType = (recipeType, from, to) => {event.replaceOutput({type: recipeType}, from, to)};
   
    // ----- Output Unification -----

    // Storage Blocks

    replaceOutput('mekanism:block_charcoal', 'quark:charcoal_block');

  
  });
  
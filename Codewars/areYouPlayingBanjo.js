function areYouPlayingBanjo(name) {
  if (name[0] && name[name.length - 1] === "R") {
    console.log(`${name} plays banjo`);
  } else {
    console.log(`${name} does not play banjo`);
  }
}
areYouPlayingBanjo("Rober");

//2nd
function areYouPlayingBanjo(name) {
    // Implement me
   return name + (name[0].toLowerCase() == "r" ? " plays" : " does not play") + " banjo";
  
     }

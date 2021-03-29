function areYouPlayingBanjo(name){
    if (name[0] && name[name.length - 1] === "R") {
        console.log(`${name} plays banjo`);
    } else {
        console.log(`${name} does not play banjo`);
    }
}
areYouPlayingBanjo("Barbara")
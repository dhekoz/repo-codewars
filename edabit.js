// cara 1:

maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);

//cara 2:
function maskify(cc){
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

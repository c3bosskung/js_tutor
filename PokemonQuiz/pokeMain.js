const poke = require('./pokeList.js').pokeList;
//เริ่มเขียนต่อจากตรงนี้

function TypeFireSorting() {
    return poke.filter(e => e?.type === 'fire')?.sort((a, b) => a.id - b.id)
}

function FindMaxTypeAtk() {
    let maxFire = poke?.filter(e => e?.type === 'fire')
    let findMaxFire = maxFire.find(e => e?.atk === Math.max(...maxFire.map(e => e?.atk)))

    let maxGrass = poke?.filter(e => e?.type === 'grass')
    let findMaxGrass = maxGrass.find(e => e?.atk === Math.max(...maxGrass.map(e => e?.atk)))

    let MaxElec = poke?.filter(e => e?.type === 'electric')
    let findMaxElec = MaxElec.find(e => e?.atk === Math.max(...MaxElec.map(e => e?.atk)))

    return [findMaxFire, findMaxGrass, findMaxElec].sort((a, b) => b.atk - a.atk)
}

console.log(FindMaxTypeAtk());

let a = [2, 3, 1, 2, 7, 9]

console.log(a.sort((a ,b) => b - a)[0])
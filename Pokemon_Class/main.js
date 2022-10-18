import Pokemon from "./poke_class.js";
//เริ่มเขียนตรงนี้
let Ken = new Pokemon('Kenza55+', 100, 10)
let Boss = new Pokemon('Bossza55+', 100, 10)

function fight(p1, p2) {
    let round = 10
    for(let i = 1; i <= round; i++) {
        console.log("====round " + i +"====")
        if(Math.floor(Math.random() * (10 - 1) + 1) % 2 === 0) {
            console.log(`${p1.getName()} attack ${p2.getName()}`)
            p2.setHp(p2.getHp() - p1.getAtk())
            console.log(p2.getInfo())
            if(p2.getHp() <= 0) {
                console.log("====END====")
                console.log(p1.getName() + "Win")
                break
            }
        } else {
            console.log(`${p2.getName()} attack ${p1.getName()}`)
            p1.setHp(p1.getHp() - p2.getAtk())
            console.log(p1.getInfo())
            if(p1.getHp() <= 0) {
                console.log("====END====")
                console.log(p2.getName() + "Win")
                break
            }
        }
        if( i === round) {
            console.log("====END====")
            console.log(p1.getInfo())
            console.log(p2.getInfo())
            if(p1.getHp() > p2.getHp()) {
                console.log(p1.getName() + "Win")
            } else if (p1.getHp() < p2.getHp()){
                console.log(p2.getName() + "Win")
            } else {
                console.log("Draw")
            }
        }
    }
}

fight(Ken, Boss)

class Pokemon{
    constructor(name = undefined, hp = 0, atk = 0) {
        this.name = name
        this.hp = hp
        this.atk = atk
    }
    getName() {
        return this.name
    }
    getAtk() {
        return this.atk
    }
    getHp() {
        return this.hp
    }
    setHp(hp) {
        this.hp = hp
    }
    getInfo() {
        return `Name: ${this.getName()} | HP: ${this.getHp()} | ATK: ${this.atk}`
    }
}

export default Pokemon
// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage(damage) {
        this.health -= damage;
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        // Chose random saxon
        const idxS = Math.floor(Math.random() * this.saxonArmy.length);
        // Chose random viking
        const idxV = Math.floor(Math.random() * this.vikingArmy.length);
        // Saxon receives attack
        const resp = this.saxonArmy[idxS].receiveDamage(this.vikingArmy[idxV].strength);
        // Removes death Saxos from the army
        if(this.saxonArmy[idxS].health <= 0) this.saxonArmy.splice(idxS, 1);
        // Return the result
        return resp;
    }
    
    saxonAttack() {
        // Chose random saxon
        const idxS = Math.floor(Math.random() * this.saxonArmy.length);
        // Chose random viking
        const idxV = Math.floor(Math.random() * this.vikingArmy.length);
        // Viking receives attack
        const resp = this.vikingArmy[idxV].receiveDamage(this.saxonArmy[idxS].strength);
        // Removes death Vikings from the army
        if(this.vikingArmy[idxV].health <= 0) this.vikingArmy.splice(idxV, 1);
        // Return the result
        return resp;
    }

    // ++ Bonus ++
    // Use:
    // Vikings attack:  someoneAttacks(this.vikingArmy, this.saxonArmy)
    // Saxons attack:  someoneAttacks(this.saxonArmy, this.vikingArmy)
    someoneAttacks(attackers, attacked) {
        // Chose random attacker
        const idxS = Math.floor(Math.random() * attackers.length);
        // Chose random viking
        const idxD = Math.floor(Math.random() * attacked.length);
        // Attacked receives attack
        const resp = this.attacked[idxD].receiveDamage(this.attackers[idxS].strength);
        // Removes death Elements from the army
        if(attacked[idxD].health <= 0) attacked.splice(idxD, 1);
        // Return the result
        return resp;
    }


    showStatus() {
        if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        } else if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else {
            return "Saxons have fought for their lives and survived another day...";
        }
    }
}

//Задание 1

class Weapon {
    constructor(name,attack,durability,range) {
        this.name = name;
        this.attack = attack;
        this.base_durability = durability;
        this.durability = durability;
        this.range = range;
    }
    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability<0) this.durability = 0;
    }
    getDamage() {
        if ((this.durability*100)/this.base_durability >= 30) {
            return this.attack;
        }
        else if (this.durability===0) return 0;
        else return this.attack/2;
    }
    isBroken() {
        if (this.durability > 0) return false;
        else return true;
    }
}
/*
const arm = new Weapon('рука',1,Infinity,1);
const bow = new Weapon('лук',10,200,3);
const sword = new Weapon('меч',25,500,1);
const knife = new Weapon('нож',5,300,1);
const staff = new Weapon('посох',8,300,2);
const longBow = new Weapon('длинный лук',15,bow.durability,4);
const axe = new Weapon('секира',27,800,sword.range);
const stormStaff = new Weapon('посох бури',10,staff.durability,3);
arm.takeDamage(sword.getDamage());
console.log('Прочность руки после удара мечом');
console.log(arm.durability);
bow.takeDamage(sword.getDamage());
console.log('Прочность лука после удара мечом');
console.log(bow.durability);
longBow.takeDamage(axe.getDamage());
longBow.takeDamage(axe.getDamage());
longBow.takeDamage(axe.getDamage());
longBow.takeDamage(axe.getDamage());
longBow.takeDamage(axe.getDamage());
longBow.takeDamage(axe.getDamage());
console.log('Нанесение 6 ударов длинному луку секирой');
console.log('Проверка длинного лука на поломку');
console.log(longBow.durability);
console.log(longBow.isBroken());
axe.takeDamage(longBow.getDamage());
console.log('Нанесение секире урезанного урона от длинного лука');
console.log(axe.durability);
longBow.takeDamage(axe.getDamage());
console.log('Предпоследний удар длинному луку секирой');
console.log(longBow.durability);
longBow.takeDamage(axe.getDamage());
console.log('Прочность длинного лука после последнего удара секирой');
console.log(longBow.durability);
console.log('Проверка длинного лука на поломку');
console.log(longBow.isBroken());
axe.takeDamage(longBow.getDamage());
console.log('Нанесение секире нулевого урона от длинного лука');
console.log(axe.durability);
*/
//Задание 2

class Bow extends Weapon {
    constructor(){
        super('лук',10,200,3)
    }
}
class Sword extends Weapon {
    constructor(){
        super('меч',25,500,1)
    }
}
class Arm extends Weapon {
    constructor(){
        super('рука',1,Infinity,1)
    }
}
class Knife extends Weapon {
    constructor(){
        super('нож',5,300,1)
    }
}
class Staff extends Weapon {
    constructor(){
        super('посох',8,300,2)
    }
}
class LongBow extends Bow {
    constructor (durability){
        super(durability)
        this.name = 'длинный лук';
        this.attack = 15;
        this.range = 3;
    }
}
class Axe extends Sword {
    constructor(range){
        super(range)
        this.name = 'секира';
        this.durability = 800;
        this.attack = 27;
    }
}
class StormStaff extends Staff {
    constructor(durability) {
        super(durability) 
        this.name = 'посох бури';
        this.attack = 10;
        this.range = 3;
    }
}/*
const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const longBow = new LongBow();
const axe = new Axe();
const stormStaff = new StormStaff();

console.log(longBow);
console.log(axe);
console.log(stormStaff);
stormStaff.takeDamage(knife.getDamage());
console.log(stormStaff.durability);
console.log(stormStaff.isBroken());
*/

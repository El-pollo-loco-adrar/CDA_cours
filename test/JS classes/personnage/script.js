class Personnage{
    constructor(nom, niveau, vie){
        this.nom = nom;
        this.niveau = niveau;
        this.vie = vie;
    }
    sePresenter(){
        console.log(`Je suis ${this.nom}, niveau ${this.niveau}, vie ${this.vie}.`)
    }
    estVivant(){
        if(this.vie>0){
            return true;
        }else{
            return false
        }
    }
}

class Guerrier extends Personnage {
    constructor(nom, niveau, arme, vie){
        super(nom, niveau, vie);
        this.arme = arme;
    }
    attaquer(cible){
        const degats = 20;
        console.log(`${this.nom} attaque ${cible.nom} avec son ${this.arme} et lui inflige ${degats} dégâts!`);
        cible.vie -= degats;

        if(!cible.estVivant()){
            console.log(`${cible.nom} est dead!`);
        }else {
            console.log(`${cible.nom} a encore ${cible.vie} points de vie.`)
        }
    }
}

class Mage extends Personnage{
    constructor(nom, niveau, sort, vie){
        super(nom, niveau, vie);
        this.sort = sort;
    }
    attaquer(cible){
        const degats = 25;
        console.log(`${this.nom} lance ${this.sort} sur ${cible.nom} et lui inflige ${degats} dégâts!`);
        cible.vie -= degats;    

        if(!cible.estVivant()){
            console.log(`${cible.nom} est dead!`);
        }else {
            console.log(`${cible.nom} a encore ${cible.vie} points de vie.`)
        }
    }
}

const guerrier1 = new Guerrier ("Thor", 10, "marteau", 100);
const mage1 = new Mage ("Gandalf", 8, "boule de feu", 80)

guerrier1.sePresenter();
mage1.sePresenter();

guerrier1.attaquer(mage1);
mage1.attaquer(guerrier1);


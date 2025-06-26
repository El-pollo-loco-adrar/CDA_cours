class Animal {
    constructor(nom, espece, cri){
        this._nom = nom;
        this._espece = espece;
        this._cri = cri;
    }
    //method
    sePresenter(){
        console.log(`Je suis ${this._nom}, un ${this._espece}.`);
    }
    faireDuBruit(){
        console.log(`${this._nom} crie : ${this._cri}`);
    }
}

class Enclos{
    constructor(nom){
        this._nom = nom;
        this._animaux = [];
    }
    //method
    ajouterAnimal(animal){
        this._animaux.push(animal);
        console.log(`${animal._nom} a été ajouté à l'enclos ${this._nom}.`);
    }
    afficherAnimaux(){
        console.log(`Enclos ${this._nom} contient : `);
        this._animaux.forEach(animal => {
            console.log(`- ${animal._nom} / ${animal._espece}`)
        })
    }
}

const simba = new Animal ("Simba", "lion", "roarrrr");
const dumbo = new Animal ("Dumbo", "éléphant", "touuuut");
const kiko = new Animal ("Kiko", "singe","hou hou");

const enclosSavane = new Enclos("Savane");
const enclosQuartier = new Enclos("Quartier chaud");

enclosSavane.ajouterAnimal(simba);
enclosQuartier.ajouterAnimal(dumbo);
enclosSavane.ajouterAnimal(kiko);

enclosSavane.afficherAnimaux();
enclosQuartier.afficherAnimaux();
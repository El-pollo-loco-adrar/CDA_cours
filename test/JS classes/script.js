class Voiture {
    constructor(marque, prix, couleur){
        this._marque = marque;
        this._prix = prix;
        this._couleur = couleur;
    }

    display(){
        console.log(`La voiture ${this._marque} de couleur ${this._couleur} vaut ${this._prix}€.`);
    }
}

let list = [
    new Voiture ("BMW", 50000, "rouge"),
    new Voiture ("Audi", 45000, "bleu")
];

list.forEach(display());
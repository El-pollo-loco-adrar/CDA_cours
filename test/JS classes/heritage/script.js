log = console.log;

class Compte {
    constructor (titulaire, solde){
        this.titulaire = titulaire;
        this.solde = solde;
    }

    //method
    deposer(montant){
        this.solde += montant;
        log(`Un montant de ${montant}€ à été fait.`)
    }
    retirer(montant){
        if(this.solde >= montant){
            this.solde -= montant;
        }else{
            log(`Retrait de ${montant}€ du impossible.`)
        }
    }
    afficherSolde(){
        log(`Titulaire : ${this.titulaire}, solde : ${this.solde}€`);
    }
}

class compteCourant extends Compte{
    constructor (titulaire, solde, decouvertAutorise){
        super(titulaire, solde);
        this.decouvertAutorise = decouvertAutorise;
    }
    retirer(montant){
        const limite = this.solde + this.decouvertAutorise;
        if(montant <= limite){
            this.solde -= montant;
            log(`${montant}€ retiré. Le nouveau solde est de ${this.solde}€.`);
        }else{
            log(`Retrait de ${montant}€ impossible. Découvert autorisé : ${this.decouvertAutorise}`);
        }
    }
}

class compteEpargne extends Compte{
    constructor (titulaire, solde, tauxInteret){
        super(titulaire, solde);
        this.tauxInteret = tauxInteret;
    }

    calculerInteret(){
        let interet = this.tauxInteret * this.solde;
        this.solde += interet;
        log(`Le taux d'intérêt est de ${this.tauxInteret}%. Le nouveau solde est de ${this.solde}€.`);
    }
}

const compte1 = new compteCourant ("Alice", 100, 50);
const compte2 = new compteEpargne ("Bob", 200, 0.03);

compte1.retirer(180);
compte1.afficherSolde();

compte2.calculerInteret();
compte2.afficherSolde();
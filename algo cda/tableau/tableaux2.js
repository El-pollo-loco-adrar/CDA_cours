let monTab = [147,4,5,7,5,1545,458,54,564,5641,1,2,85,5,45];

// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function lastElement(tab){
    console.log(tab[tab.length -1]);
}
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLastElement(tab){
    return tab[tab.length -1];
}
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function minTab(tab){
    let min = tab[0];
    for (let i = 1; i< tab.length; i++){
        if(tab[i]<min){
            min = tab[i];
        }
    }
    return min;
}
console.log(minTab(monTab));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maxTab(tab){
    let max = tab[0];
    for (let i = 1 ; i< tab.length; i++){
        if(tab[i]>max){
            max = tab[i];
        }
    }
    return max;
}
console.log(maxTab(monTab));
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
function max2(tab){
    let nbmax = 0;
    let nbmax2 = 0;

    if
}
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]
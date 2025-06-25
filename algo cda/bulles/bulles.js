// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :
log = console.log;
// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.

function tableau(tab, i){
    if(tab[i] > tab[i +1]){
        let i2 = tab[i];
        tab[i] = tab[i +1];
        tab[i+1] = i2; 
    }
}
// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).
function tri(tab){
    for (let i =0; i<tab.length -1; i++){
        tableau(tab,i);
    }
}

// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.
function triTotal(tab){
    for (let i =0; i<tab.length -1; i++){
        tri(tab);
    }
}

let monTableau = [51,87,998,47,1,225,336,12,57,88,45,778,15,48,45314,84,564,5864,5465,465];
triTotal(monTableau);
log(monTableau);
// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.
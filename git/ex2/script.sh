#!/bin/bash
echo "1. Ou stocker le contenu?"
read EMPLACEMENT
cd $EMPLACEMENT
echo "2. Quel est le nom du dossier?"
read NOM
if [ -d $NOM ]
then
    echo "Le dossier existe déjà"
else
    echo "Le dossier n'existe pas, on crée le dossier"
    mkdir $NOM
fi 

if [ -f $NOM/collection.txt ]
then
    echo "Le fichier existe déjà."
else
    echo "Le fichier collection.txt à été ajouté"
    touch $NOM/collection.txt
fi

echo "3. Quel est le nom du film?"
read FILM
echo "$FILM">>$NOM/collection.txt
echo "Tout est ok "
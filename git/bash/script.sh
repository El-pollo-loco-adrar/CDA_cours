echo "1. Quel est le nom du projet?"
read nom
echo "Quel est l'emplacement du projet?"
read emplacement
cd $emplacement
mkdir $nom
mkdir $nom/site
cd $nom
touch site/index.html site/script.js site/main.css site/img.png
tree
echo "Tout s'est bien passé"
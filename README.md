# ASTRA — Explorateur du Système solaire

Projet de programmation web TI504N / TI504NB — EFREI, 2026–2027.

**Équipe :** Mohammed Amine Marzak et Ridha Ghenimi.

**Dépôt GitHub :** https://github.com/Marzak-Amine-user/ASTRA-TI504N

## Présentation

ASTRA est un site pédagogique consacré à l'exploration du Système solaire. Il comporte quatre pages reliées entre elles, des contenus illustrés, des tableaux comparatifs et plusieurs interactions côté navigateur. Il est développé en HTML5, CSS3 et JavaScript natif, sans framework ni bibliothèque externe.

## Pages

- `index.html` : page d'accueil, navigation et sélection aléatoire d'une destination.
- `planetes.html` : présentation des huit planètes, recherche, filtres et tableau comparatif.
- `missions.html` : présentation de missions spatiales, tableau et quiz interactif.
- `apropos.html` : présentation du projet et formulaire avec validation locale.

## Organisation du projet

- `css/style.css` : styles communs et adaptation aux différentes tailles d'écran.
- `js/script.js` : interactions, filtres, quiz et gestion du formulaire.
- `media/` : illustrations et ressources graphiques locales.
- `maquette/ASTRA_Maquette.pdf` : maquette du site.
- `DEPOT_GITHUB.txt` : adresse du dépôt GitHub.

## Fonctionnement

Le site peut être ouvert directement en lançant `index.html` dans un navigateur. Les pages et les images locales ne nécessitent pas de connexion Internet. Les liens documentaires externes nécessitent une connexion.

Le formulaire vérifie les informations saisies et affiche un message dans la page. Il ne transmet pas de données à un serveur et n'envoie pas d'e-mail.

## Technologies

Le HTML structure les pages à l'aide de balises sémantiques, de tableaux et d'un formulaire. Le CSS assure la charte graphique, la mise en page et l'affichage responsive grâce notamment aux media queries. Le JavaScript assure les interactions au moyen d'événements, de fonctions et de manipulations du DOM.

## Tests et vérifications

Le site a été relu et testé dans le navigateur, y compris avec une fenêtre réduite (affichage mobile).

- Navigation : le menu et les liens entre les quatre pages fonctionnent, y compris sur petit écran.
- Recherche des planètes : la recherche ne tenait pas compte des accents (« venus » ne trouvait pas « Vénus »). Ce défaut a été corrigé dans `js/script.js`.
- Formulaire de contact : la vérification de l'adresse e-mail se limitait à la présence d'un « @ ». Elle utilise désormais une expression régulière, qui refuse par exemple « a@ ».

## Source documentaire

NASA Science — Solar System : https://science.nasa.gov/solar-system/

Les images des planètes utilisées sur le site sont des illustrations, et non des photographies scientifiques.

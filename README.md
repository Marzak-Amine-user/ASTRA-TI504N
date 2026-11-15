# ASTRA — Explorateur du Système solaire

Projet de programmation Web TI504N / TI504NB — EFREI, 2026–2027.

Équipe : **Mohammed Amine Marzak** et **Ridha Ghenimi**.

## Objectif

Créer un site pédagogique en HTML5 / CSS3 / JavaScript natifs, avec quatre pages reliées entre elles, des tableaux, un formulaire, des animations simples et un affichage adapté aux smartphones.

## Lancer le projet

1. Extraire `MARZAK_GHENIMI.zip`.
2. Ouvrir le dossier `ASTRA` dans VS Code.
3. Double-cliquer sur `index.html` (ou l'ouvrir depuis VS Code).
4. Naviguer grâce au menu et essayer les interactions. Aucune installation n'est requise.

Le site fonctionne en local et **sans connexion Internet**, sauf les liens facultatifs vers les pages de référence de la NASA.

## Pages

| Fichier | Description |
|---|---|
| `index.html` | Accueil avec illustration, statistiques, destinations et bouton de choix aléatoire |
| `planetes.html` | Huit planètes, filtres par catégorie, recherche dynamique et tableau comparatif |
| `missions.html` | Quatre missions, tableau et quiz à cinq questions avec correction |
| `apropos.html` | Présentation du projet, du binôme et formulaire à validation locale |

## Organisation

```text
ASTRA/
├── index.html
├── planetes.html
├── missions.html
├── apropos.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── media/
│   ├── ciel.jpg
│   ├── favicon.png
│   └── ... huit illustrations de planètes .png
├── maquette/
│   └── ASTRA_Maquette.pdf
├── README.md
├── GUIDE_SOUTENANCE.md
├── CONFORMITE.md
└── DEPOT_GITHUB.txt
```

## Techniques utilisées, en lien avec le cours

**HTML5** : `head`, `body`, `header`, `nav`, `main`, `section`, `article`, `footer`, `a`, `img`, `table`, `tr`, `th`, `td`, `form`, `input`, `label`, `fieldset`, `select`, `textarea`.

**CSS3** : sélecteurs de classes et d'ID, propriétés de couleur et de police, bordures, marges et padding, Flexbox, `@media`, unités relatives, transitions et une animation visuelle légère.

**JavaScript** : `const`, `let`, tableaux, boucles `for`, conditions `if`, fonctions, fonctions de rappel, `Math.random`, `document.getElementById`, `querySelectorAll`, `addEventListener`, propriétés `.value`, `.textContent` et `.style`.

Le site n'utilise aucun framework ni aucune bibliothèque JavaScript ou CSS. Les visuels sont des fichiers images autonomes ; leur fabrication ne fait pas partie du code exécuté sur le site.

## Ressources et sources

Les illustrations sont des compositions originales créées spécialement pour ASTRA : ce ne sont pas des photographies d'astronomie et ne sont pas présentées comme telles. Les descriptions et ordres de grandeur scientifiques sont pédagogiques et arrondis. Source documentaire recommandée : https://science.nasa.gov/solar-system/

## Limites fonctionnelles

- Le formulaire réalise la validation dans le navigateur, **sans serveur et sans envoi d'e-mail**.
- Les filtres et le quiz fonctionnent côté navigateur et ne conservent aucune donnée.
- Les liens externes documentaires exigent une connexion, mais toutes les pages du site restent utilisables hors ligne.

## Avant le dépôt final

**À effectuer effectivement par le binôme** : créer un dépôt GitHub partagé, inviter l'autre membre, réaliser de vrais commits personnels (ne pas simuler l'historique), tester sur deux tailles d'écran et faire valider les quatre fichiers HTML/CSS via les validateurs W3C. Ensuite reporter la vraie URL dans `DEPOT_GITHUB.txt`, ajuster la répartition des tâches sur la page À propos, puis reconstruire `MARZAK_GHENIMI.zip`.

Dépôt : `https://github.com/` (créer le vôtre ; aucun dépôt n'a été créé automatiquement).

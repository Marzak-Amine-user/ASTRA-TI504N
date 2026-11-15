# ASTRA — Guide de soutenance (10 minutes)

Le sujet prévoit une **démo de 5 minutes** et **5 minutes de questions**, sans diaporama. Chacun doit savoir expliquer toute partie du site, même s'il présente une section précise.

## Plan de démonstration (5 minutes)

**0:00–0:35 — Mohammed Amine : présentation**
> « ASTRA est un site pédagogique consacré au Système solaire. Il comporte quatre pages HTML, une feuille CSS et un script JavaScript. Nous n'utilisons aucun framework. L'objectif était de créer une interface soignée tout en restant dans les notions du cours. »

**0:35–1:20 — Mohammed Amine : accueil et responsive**
- Montrer la page d'accueil, ses cartes, sa navigation et le bouton « Choisir pour moi ».
- Cliquer : un nom aléatoire apparaît dans la page sans rechargement.
- Ouvrir les outils de développement (`Ctrl + Shift + I`) puis activer un affichage mobile.
- Expliquer que les blocs changent de disposition avec Flexbox et les `@media` de CSS.

**1:20–2:35 — Ridha : catalogue et recherche**
- Aller sur « Planètes ». Filtrer « Telluriques » : 4 cartes s'affichent.
- Tester la recherche `mars`, puis `inconnu` et le message « Aucune planète ».
- Montrer le tableau comparatif HTML : lignes, colonnes, en-têtes.
- Expliquer que JavaScript lit les attributs `data-category` / `data-name` des cartes, puis ajuste `style.display`.

**2:35–3:45 — Ridha : missions et quiz**
- Parcourir les quatre missions.
- Cocher les cinq réponses du quiz et afficher `5/5`.
- Expliquer que chaque radio-bouton porte un `name`, que le script compare les réponses avec un tableau de solutions puis incrémente `score`.

**3:45–4:30 — Mohammed Amine : à propos et formulaire**
- Ouvrir « À propos ». Présenter les membres et le formulaire.
- Envoyer un message valide pour montrer le contrôle en JavaScript.
- Préciser clairement qu'il n'y a ni serveur ni envoi de mail, seulement une démonstration.

**4:30–5:00 — les deux : conclusion et Git**
- Montrer la maquette PDF et le dépôt GitHub créé ensemble.
- Expliquer la structure `index.html`, `css/`, `js/`, `media/`, `maquette/`.
- Montrer des commits réels de chacun et un exemple de modification du code.

## Réponses à connaître par cœur

### HTML

**Pourquoi plusieurs fichiers HTML ?** Pour séparer les contenus et respecter les quatre pages minimales du sujet.

**Pourquoi `header`, `main`, `article`, `footer` plutôt que des `div` partout ?** Ce sont des éléments sémantiques : ils indiquent le rôle du contenu dans le document.

**Pourquoi la balise viewport ?** Elle adapte la largeur du viewport à celle de l'appareil ; elle facilite l'affichage mobile.

**Pourquoi `alt` sur les images ?** Pour fournir une description alternative, utile si une image ne s'affiche pas et pour l'accessibilité.

**Quelle différence entre `id` et `class` ?** Un ID identifie un élément de façon unique dans la page ; une classe peut être utilisée pour plusieurs éléments.

**Comment fonctionne le tableau ?** `<table>` contient les lignes `<tr>`, les en-têtes `<th>` et les cellules `<td>`.

### CSS

**Pourquoi un fichier CSS séparé ?** Pour éviter de répéter des styles sur chaque page et conserver une présentation commune.

**Comment le responsive fonctionne-t-il ?** Les conteneurs utilisent Flexbox et des dimensions relatives ; les règles `@media` modifient la disposition quand l'écran devient étroit.

**Quelle différence entre padding et margin ?** Padding est l'espace entre le contenu et sa bordure ; margin est l'espace extérieur.

**Quelle différence entre `.carte`, `#carte` et `article` ?** La classe, l'ID et la balise.

**Pourquoi `display:flex` ?** Pour organiser les éléments côte à côte, les répartir et les faire passer en colonne sur mobile.

**Qu'est-ce que la spécificité ?** Lorsqu'il y a conflit CSS, une règle plus spécifique est prioritaire à niveau égal de cascade : en général ID > classe > balise.

### JavaScript

**Que fait `addEventListener` ?** Il associe une fonction à un événement du navigateur, comme un clic ou une saisie.

**Que se passe-t-il quand on choisit un filtre ?** Le clic modifie `activeFilter` ; la fonction `updatePlanets` parcourt chaque carte, compare sa catégorie et la recherche, puis l'affiche ou la cache.

**Que fait `forEach` ?** Il parcourt chaque élément d'une collection et exécute une fonction pour chacun.

**Quelle différence entre `textContent` et `innerHTML` ?** `textContent` change le texte, `innerHTML` interprète du HTML. Le projet utilise `textContent` pour les messages.

**Que fait `Math.random()` ?** Il renvoie un nombre pseudo-aléatoire entre 0 inclus et 1 exclu. On le multiplie par la taille du tableau puis `Math.floor()` donne un indice entier valide.

**Comment calculez-vous le score du quiz ?** Les bonnes réponses sont dans un tableau JS ; pour chaque question on récupère la case radio cochée et on compare sa valeur au tableau.

**Pourquoi `event.preventDefault()` ?** Pour empêcher l'envoi automatique du formulaire et pouvoir afficher un résultat calculé par le script.

**Que fait `defer` sur `<script>` ?** Le fichier JS est téléchargé sans bloquer l'analyse de la page et exécuté après la construction du DOM.

**Pourquoi un formulaire ne peut-il pas envoyer un vrai mail ?** Il n'y a pas de backend. Le site n'effectue qu'une validation locale, sans persistance ni envoi de données.

**Pourquoi ne pas utiliser une bibliothèque ?** Le sujet l'interdit et les notions du cours suffisent : DOM, tableaux, événements, boucles, fonctions.

### Git (à réaliser réellement)

**Pourquoi Git ?** Pour tracer les versions du travail et permettre à chacun de contribuer avec son propre historique.

**Différence Git / GitHub ?** Git gère les versions localement ; GitHub héberge le dépôt en ligne et permet la collaboration.

**Un commit ?** Un instantané de changements, associé à un message et un auteur.

**La commande pour envoyer les commits ?** `git push`.

**La commande pour récupérer le travail distant ?** `git pull`.

## Répartition conseillée pour de vraies contributions

- Mohammed Amine : reprendre et tester la structure HTML, les styles, l'accessibilité, la page À propos et la maquette, puis créer ses propres commits de corrections.
- Ridha : reprendre et tester le JavaScript, ajouter un contrôle ou une amélioration du quiz, vérifier les filtres, corriger les bugs qu'il trouve et créer ses propres commits.
- Ensemble : vérifier toutes les pages, réaliser les tests W3C, préparer la soutenance et approuver la version finale.

**À ne pas faire :** inventer des commits ou présenter une répartition fictive. Les questions de la soutenance sont individuelles et peuvent porter sur n'importe quelle ligne du site.

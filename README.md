# SportSee

![Capture_d_écran_2023-01-26_134447-removebg-preview](https://user-images.githubusercontent.com/94462048/214878737-8ac2bd9c-0f6f-4542-9f0d-6656de5503bd.png)

## Maquette
![Capture d’écran 2023-01-26 163845](https://user-images.githubusercontent.com/94462048/214879589-0677ef92-37a1-439d-89d0-4c0800940f0f.png)

## Scénario 

Vous travaillez en tant que développeur chez SportSee, une startup dédiée au coaching sportif. 
En pleine croissance, l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur. 
Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

## Contraintes techniques

#### General : 

- Utiliser React pour refaire la page profil.
- Utilisation de la librairie Recharts ou D3 pour l'intégration des graphiques.
- Utilisation de Fetch ou Axios pour effectuer les calls API.
- Rédigé une documentation en anglais
- Rédigé un Read-me comportant les étapes d’installation ainsi que les prérequis du projet
- Utiliser des Prototypes pour chacun des composants.
- Utilisation de Jsdoc pour documenter les fonctions en dehors  des méthodes de cycle de vie.


## Stacks utilisées

- React
- Vite
- Typescript
- Sass

## Justification du choix des stacks : 

#### Vite :

- Vite améliore le temps de démarrage du serveur de développement en divisant d'abord les modules d'une application en deux catégories : les dépendances et le code source.

#### TypeScript  :

- Éviter les erreurs cachées 
- Plus facile de remanier le code sans le casser de manière significative.
- S’orienter plus facilement dans des systèmes complexes et à grande échelle
- Code plus facile à maintenir contrairement au Javascript ou sa complexité à croître de manière exponentielle à chaque nouvelle ligne de code.

#### Sass :

- Permet de gérer des feuilles de styles de manière dynamique, à l'aide de variables, de conditions, de fonctions, de boucles et d'expressions.
- Permet d'écrire plus rapidement du CSS.
- Créer des vendors automatiquement ce qui permet donc d’avoir un rendu identique sur chaque navigateur.


## Prérequis

- Node.js


## Installation Node.js

Lien de téléchargement : https://nodejs.dev/fr/download/

## Installer l'application Backend

Pour installer l'application backend, ouvrez un terminal (Git Bash, par exemple) et rendez-vous à l'aide du terminal dans le dossier: (l'emplacementChoisi)/back

Executez la commande:

npm install

L'installation des différentes dépendances devrait s'effectuer automatiquement.


## Lancer l'application Backend. ( Une fois l'application installée )

(l'emplacementChoisi)/back

Executez la commande:

npm run dev

L'application devrait se lancer, et si les précédentes étapes ont correctement fonctionné, le terminal devrait vous afficher les informations suivantes:


```

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app/index.js`
Magic happens on port 3000

```


## Installer l'application Frontend.

Pour installer l'application frontend, ouvrez un nouveau terminal, cette fois-ci rendez-vous dans le dossier

(l'emplacementChoisi)/frontend

Executez la commande:

npm install L'installation des différentes dépendances de l'application frontend s'opèrera.


## Lancer l'application Frontend

Comme pour l'application backend, une fois les dépendances installées, dans le dossier

(l'emplacementChoisi)/front

Executez dans votre terminal la commande

npm run dev

Si les précédentes étapes ont correctement fonctionné, le terminal affichera le message suivant:

```
> sportsee@0.0.0 dev
> vite


  VITE v3.1.8  ready in 701 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

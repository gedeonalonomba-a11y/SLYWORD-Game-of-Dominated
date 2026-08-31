# SLYWORD ULTIMATE V7.1 — COMMERCIAL PRO POLISHED

**GAME OF DOMINATED** — édition V7.1 orientée qualité commerciale, robustesse et QA mobile.

## Ce qui change
- économie stabilisée et sans double comptabilisation des ventes ;
- ventes réalisées progressivement et encaissées au fil de la vente ;
- tarification stratégique avec fourchette contrôlée ;
- marché dynamique avec cycles expansion, boom, correction et recovery ;
- quatre secteurs de marché avec tendances indépendantes ;
- six concurrents différenciés par style, spécialité et agressivité ;
- rattrapage concurrentiel et campagnes offensives ;
- objectifs et succès avec récompenses ;
- progression de niveau reliée à la valeur, aux ventes et aux jalons ;
- technologies et bonus intégrés au moteur ;
- besoins civiques avec effets réels et expiration ;
- contrats d'investisseurs avec échéance et partage des bénéfices opérationnels ;
- opérations militaires avec risque, renseignement et conséquences ;
- sauvegardes V5/V6/V2 migrées automatiquement vers le format V7 ;
- PWA/offline cache pour une meilleure expérience mobile lorsque le jeu est servi par HTTP(S) ;
- musique principale convertie en OGG pour réduire fortement le poids du téléchargement.

## Lancer
Ouvre `index.html` dans un navigateur moderne. Pour la PWA et le service worker, sers le dossier via HTTP(S).

## QA professionnelle ajoutée
- garde-fous responsive pour petits écrans Android ;
- zones tactiles renforcées et focus clavier ;
- support safe-area et `dvh` pour écrans modernes ;
- réduction automatique des animations avec `prefers-reduced-motion` ;
- indicateur réseau en ligne/hors-ligne ;
- sauvegarde sur changement de visibilité/page ;
- diagnostics runtime des erreurs JavaScript ;
- cache PWA élargi aux assets critiques pour un premier lancement hors-ligne plus fiable ;
- vérification statique des assets et scripts.

## Test de validation
```bash
node tests/smoke-node.js
```
Résultat attendu : `SLYWORD ULTIMATE V7.1 COMMERCIAL PASS`.

## Note importante
Cette version est une **V7 technique et gameplay renforcée**. Avant une publication sur un store, il reste une phase QA réelle sur appareils Android/iOS, un équilibrage longue durée, une vérification des licences/assets et éventuellement une couche backend si tu veux des classements en ligne ou des comptes joueurs.

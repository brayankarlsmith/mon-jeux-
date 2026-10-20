# Play 237

**Joue. Défie. Gagne.**

Play 237 est une plateforme web de jeux multijoueurs, pensée pour les téléphones et les ordinateurs, avec une identité bleu nuit et violet.

## Jeux prévus

- **Ludo** — moteur de règles dédié à développer.
- **Jeux de cartes** — les règles exactes seront confirmées avant implémentation.

## Stack technique

- Next.js + TypeScript
- Tailwind CSS
- Supabase Auth, PostgreSQL et Realtime
- Vercel pour le déploiement

## Démarrage local

Prérequis : Node.js 20.9 ou version ultérieure et npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Ouvre ensuite http://localhost:3000.

L'accueil et le catalogue peuvent être explorés sans configurer Supabase. L'authentification, les salons et les parties multijoueurs restent à implémenter.

## Variables d'environnement

Renseigne dans `.env.local` les valeurs de ton projet Supabase :

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Ne place jamais une clé secrète Supabase côté navigateur.

## Statut

Le socle visuel initial est en place : page d'accueil responsive, catalogue des jeux, thème bleu nuit/violet et configuration du projet. L'inscription/connexion, les salons, les moteurs de règles, le temps réel, les tests et le déploiement restent à développer.

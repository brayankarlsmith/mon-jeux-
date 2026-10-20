import Link from "next/link";
import { ArrowRight, Crown, Gamepad2, ShieldCheck, Users } from "lucide-react";

const games = [
  {
    number: "01",
    title: "Ludo",
    category: "STRATÉGIE · CLASSIQUE",
    description: "Lance les dés, déplace tes pions et prends la tête de la partie.",
    icon: "🎲",
    status: "En préparation",
  },
  {
    number: "02",
    title: "Jeux de cartes",
    category: "CARTES · CONVIVIALITÉ",
    description: "Retrouve tes amis autour des jeux de cartes populaires au Cameroun.",
    icon: "🂡",
    status: "En préparation",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="shell flex items-center justify-between py-5">
        <Link href="/" aria-label="Play 237, accueil" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/15 text-violet-200">
            <Gamepad2 size={24} />
          </span>
          <span className="text-xl font-black tracking-tight">PLAY <span className="text-violet-300">237</span></span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link className="secondary-button hidden sm:inline-flex" href="/login">Connexion</Link>
          <Link className="primary-button" href="/register">Créer un compte <ArrowRight size={16} /></Link>
        </nav>
      </header>

      <section className="shell grid items-center gap-10 pb-16 pt-12 md:grid-cols-[1.1fr_0.9fr] md:pb-24 md:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-2 text-sm text-violet-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            La communauté du jeu est en préparation
          </div>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            Ton prochain défi commence <span className="text-violet-300">ici.</span>
          </h1>
          <p className="muted mt-6 max-w-xl text-lg leading-8">
            Rejoins tes amis, crée une salle et prépare-toi à jouer. Les jeux qui nous rassemblent, dans une expérience moderne pensée pour le Cameroun.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="primary-button" href="/games">Découvrir les jeux <ArrowRight size={17} /></Link>
            <Link className="secondary-button" href="/register">Rejoindre Play 237</Link>
          </div>
          <p className="mt-5 text-sm font-semibold tracking-wide text-violet-200">JOUE. DÉFIE. GAGNE.</p>
        </div>

        <div className="panel relative overflow-hidden p-5 sm:p-7">
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-violet-200">TON ESPACE DE JEU</p>
              <h2 className="mt-2 text-2xl font-bold">Prêt à relever le défi ?</h2>
            </div>
            <span className="rounded-2xl border border-violet-200/15 bg-violet-400/10 p-3 text-violet-200"><Crown size={25} /></span>
          </div>
          <div className="relative mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <Gamepad2 className="mb-4 text-violet-300" size={23} />
              <p className="font-bold">2 jeux</p><p className="muted mt-1 text-sm">Dans la feuille de route</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <Users className="mb-4 text-violet-300" size={23} />
              <p className="font-bold">Entre amis</p><p className="muted mt-1 text-sm">Des salons à venir</p>
            </div>
            <div className="col-span-2 flex items-center gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.05] p-4">
              <ShieldCheck className="shrink-0 text-emerald-300" size={22} />
              <p className="muted text-sm">Nous construisons d’abord une base fiable pour les comptes et les parties multijoueurs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell pb-20">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-sm font-bold tracking-widest text-violet-300">LA BIBLIOTHÈQUE</p><h2 className="mt-2 text-3xl font-black">Choisis ton jeu</h2></div>
          <span className="muted text-sm">D’autres jeux pourront être ajoutés.</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {games.map((game) => (
            <article key={game.number} className="panel p-6 transition hover:-translate-y-1 hover:border-violet-300/30">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-400/10 text-3xl">{game.icon}</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">{game.status}</span>
              </div>
              <p className="mt-5 text-xs font-bold tracking-widest text-violet-300">{game.category}</p>
              <h3 className="mt-2 text-2xl font-bold">{game.title}</h3>
              <p className="muted mt-3 min-h-12 leading-6">{game.description}</p>
              <div className="mt-5 border-t border-white/10 pt-4 text-sm text-slate-300">Bientôt disponible sur Play 237</div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-7">
        <div className="shell flex flex-col justify-between gap-2 text-sm sm:flex-row">
          <span className="font-bold">PLAY <span className="text-violet-300">237</span></span>
          <span className="muted">Joue. Défie. Gagne. · Le jeu nous rassemble.</span>
        </div>
      </footer>
    </main>
  );
}

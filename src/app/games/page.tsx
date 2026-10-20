import Link from "next/link";
import { ArrowLeft, Gamepad2 } from "lucide-react";

export default function GamesPage() {
  return (
    <main className="shell min-h-screen py-8">
      <Link href="/" className="secondary-button"><ArrowLeft size={16} /> Retour à l’accueil</Link>
      <div className="mt-10">
        <p className="text-sm font-bold tracking-widest text-violet-300">PLAY 237</p>
        <h1 className="mt-2 text-4xl font-black">Bibliothèque des jeux</h1>
        <p className="muted mt-3 max-w-2xl leading-7">Les deux premiers jeux sont prévus dès le lancement du développement. Leur logique multijoueur sera ajoutée après la mise en place des fondations.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          { title: "Ludo", text: "Déplacement des pions, dés, captures et conditions de victoire." },
          { title: "Jeux de cartes", text: "Le moteur sera adapté aux règles exactes du jeu choisi." },
        ].map((game) => (
          <article key={game.title} className="panel p-6">
            <Gamepad2 className="text-violet-300" size={28} />
            <h2 className="mt-4 text-2xl font-bold">{game.title}</h2>
            <p className="muted mt-2 leading-6">{game.text}</p>
            <span className="mt-5 inline-flex rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1.5 text-sm text-violet-200">En préparation</span>
          </article>
        ))}
      </div>
    </main>
  );
}

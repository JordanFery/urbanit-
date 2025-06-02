
import { Home, Info } from "lucide-react";

export default function Offre() {
    return (
        <section className="bg-[var(--color-bg1)] text-[var(--color-font)] w-full py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-[var(--color-title)] font-bold text-4xl md:text-5xl mb-10">
                    Habiter ou Investir
                </h1>

                <p className="text-xl font-medium mb-12 max-w-2xl mx-auto">
                    Plusieurs types d'accession vous sont proposées pour faciliter votre projet immobilier.
                </p>

                {/* GRID DES 2 TYPES */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* BRS */}
                    <div className="bg-white/50 rounded-2xl p-8 shadow-md flex flex-col justify-between">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-3 text-left">
                                Accession BRS (bail réel solidaire)
                            </h2>
                            <p className="text-left text-base text-[var(--color-font)]">
                                Réduisez le coût d'achat de votre logement grâce au Bail Réel Solidaire.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm text-center mb-6">
                            {[
                                { type: "T3", price: "212 000 €" },
                                { type: "T4", price: "258 000 €" },
                                { type: "T5", price: "277 000 €" },
                            ].map((logement, i) => (
                                <div
                                    key={i}
                                    className="bg-white/10 rounded-lg py-5 px-3 flex flex-col items-center justify-center"
                                >
                                    <Home strokeWidth={1.2} className="mb-2" />
                                    <span>Logement {logement.type}</span>
                                    <strong>{logement.price}</strong>
                                </div>
                            ))}
                        </div>

                        {/* Encadré d'info pour équilibrer */}
                        <div className="bg-white/10 rounded-xl p-4 text-left flex items-center gap-3 text-sm text-[var(--color-font)]">
                            <Info className="w-5 h-5 text-[var(--color-title)]" strokeWidth={1.5} />
                            <p>
                                Le BRS vous permet de devenir propriétaire d’un logement neuf à prix réduit
                                tout en sécurisant votre avenir.
                            </p>
                        </div>
                    </div>

                    {/* TVA 5.5% */}
                    <div className="bg-white/50 rounded-2xl p-8 shadow-md flex flex-col justify-between">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-3 text-left">
                                Accession TVA 5.5%
                            </h2>
                            <p className="text-left text-base text-[var(--color-font)]">
                                Bénéficiez d’un taux réduit (sous conditions de ressources).
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm text-center">
                            {[
                                { type: "T2", price: "212 000 €" },
                                { type: "T3", price: "212 000 €" },
                                { type: "T4", price: "258 000 €" },
                                { type: "T5", price: "277 000 €" },
                                { type: "T6", price: "212 000 €" },
                            ].map((logement, i) => (
                                <div
                                    key={i}
                                    className="bg-white/10 rounded-lg py-5 px-3 flex flex-col items-center justify-center"
                                >
                                    <Home strokeWidth={1.2} className="mb-2" />
                                    <span>Logement {logement.type}</span>
                                    <strong>{logement.price}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-14 text-lg font-semibold">
                    <a className="underline" href="contact">

                        Contactez-nous
                    </a> {""}

                    pour en savoir plus sur ces dispositifs !
                </div>

                <p className="mt-4 text-base">
                    Si vous n'êtes pas concernés par ces 2 dispositifs, vous avez la possibilité d'acquérir
                    votre appartement en{" "}
                    <span className="underline font-medium">accession libre</span> (pour habiter ou investir).
                </p>
            </div>
        </section>
    );
}

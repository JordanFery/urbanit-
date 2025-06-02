


export default function Offre() {
    return (
        <section className="text-[var(--color-font)] bg-[var(--color-bg1)] grid grid-cols-4  w-full py-10 px-4">
            <div className=" items-center col-start-1 col-span-4 md:col-start-2 md:col-span-2 text-[var(--color-font)]">
                <h1 className="text-[var(--color-title)] font-semibold text-center md:text-5xl text-3xl mr-auto mt-12">Habiter ou Investir</h1>

                <div className="mt-4 mb-8 text-center text-xl font-bold">
                    <span className="px-2 py-1 rounded">
                        Plusieurs types d'accession vous sont proposées                    </span>
                </div>
                <p className="py-4">
                    <span className="underline">
                        L'accession en BRS (bail réel solidaire)
                    </span>
                    permet de réduire le coût d'achat d'un logement et c'est une solution pour favoriser l'accès à la propriété sans que les prix ne s'envolent.</p>

                <ul>
                    <li>Logement T3 : 212 000€</li>
                    <li>Logement T4 : 258 000€</li>
                    <li>Logement T5 : 277 000€</li>
                </ul>

                <p className="py-4">
                    <span className="underline">
                        L'accession en TVA à 5.5%
                    </span>
                    permet aussi de réduire le coût d'un logement (soumis à des conditions de ressources).</p>

                <ul className="mb-4">
                    <li>Logement T2 : 212 000€</li>
                    <li>Logement T3 : 212 000€</li>
                    <li>Logement T4 : 258 000€</li>
                    <li>Logement T5 : 277 000€</li>
                    <li>Logement T6 : 212 000€</li>

                </ul>

                <p className="font-semibold my-2">Contactez-nous pour en savoir plus sur ces dispositifs !</p>
                <p>Si vous n'êtes pas concernés par ces 2 dispositifs, vous avez la possibilité d'acquérir votre appartement en
                    <span className="underline">
                        accession libre
                    </span>
                    (pour habiter ou investir)
                </p>


            </div>


        </section>
    );
}

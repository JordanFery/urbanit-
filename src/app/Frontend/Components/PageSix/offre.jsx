


export default function Offre() {
    return (
        <section className="text-[var(--color-font)] bg-white w-full py-10">
            <div className="flex flex-col items-center text-center text-[var(--color-font)]">
                <h2 className="text-3xl text-[var(--color-title)]">OFFRE DE LANCEMENT SUR LES 3 <br /> PREMIÈRES RÉSERVATIONS :</h2>

                <div className="mt-4 mb-8 w-1/4">
                    <span className="bg-yellow-200 px-2 py-1 rounded">
                        FRAIS DE NOTAIRE OFFERTS +  - 5 000 € SUR LE PRIX DU LOGEMENT
                    </span>
                </div>
                <p className="py-4">La Résidence se trouve dans un quartier prioritaire de la ville (QPV), l’acquisition d’un logement neuf sur plans (en VEFA) est donc éligible au taux réduit de TVA de 5,5 %.</p>

                <ul>
                    <span className="underline">
                        Les conditions pour acquérir un logement en QPV sont :
                    </span>

                    <li>- Utiliser le logement en Résidence Principale, pendant au moins 10 ans</li>
                    <li>- Conditions de ressources à respecter : lien du document.</li>
                </ul>

                <p className="py-4">Si vous n’êtes pas concernés par ce dispositif, vous avez la possibilité d’acquérir votre appartement en accession LIBRE.
                </p>

                <div className="flex flex-col py-4">

                    <a className="underline" href="">Voir les logements proposés en QPV - LIBRE</a>
                    <a className="underline" href="">N° du logement – Typologie et surface – Surface extérieure – Plan (à mettre en lien) – Prix QPV – Prix LIBRE</a>
                    <a className="underline" href="">N° du logement – Typologie et surface – Surface extérieure – Plan (à mettre en lien) – Prix QPV – Prix LIBRE</a>
                    <a className="underline" href="">N° du logement – Typologie et surface – Surface extérieure – Plan (à mettre en lien) – Prix QPV – Prix LIBRE</a>
                </div>
            </div>


        </section>
    );
}

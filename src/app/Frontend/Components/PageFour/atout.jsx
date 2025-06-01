"use client";
import { Paintbrush } from 'lucide-react';
import { Heater } from 'lucide-react';




export default function Atout() {


    return (
        <section id='prestation' className="w-full grid grid-cols-6 scroll-mt-14">

            <div className='bg-[var(--color-bg2)] col-span-1' />
            <div className="relative  flex bg-[var(--color-bg2)] text-[var(--color-font)] flex-col w-full pt-2 md:pl-12 p-4 col-span-6 md:col-span-2">


                <div className="pr-4 mb-12">
                    <h2 className="text-4xl mb-6 text-[var(--color-title)] mt-12">Les différents types d'accession</h2>
                    <p className="italic"> <span className="underline">Le BRS (Bail Réel Solidaire)</span>
                        est un dispositif destiné à faciliter l’accès à la propriété pour les ménages modestes. Il permet d’acheter un logement à un prix inférieur du marché.
                    </p>

                    <p className="py-2">Voici comment ça fonctionne :</p>

                    <p className="py-2">1. Propriétaire du terrain : L’OFS de la Métropole de Montpellier reste propriétaire du terrain sur lequel le logement est construit. Ce terrain est mis en location à long terme (99 ans).</p>

                    <p className="py-2">2. Propriétaire du logement : L’Acheteur devient propriétaire du logement mais pas du terrain. Il signe un bail avec l’OFS pour la location du terrain et doit régler tous les mois, une redevance, d’un montant de 1,30 € / m2.</p>

                    <p className="py-2">3. Revente : Lorsque l’Acheteur souhaite revendre son logement, il doit respecter certaines conditions pour éviter la spéculation immobilière, en vendant à un prix encadré</p>

                    <p className="py-2">En résumé, le BRS permet de réduire le coût d’achat d’un logement et c’est une solution pour favoriser l’accès à la propriété sans que les prix ne s’envolent.
                    </p>

                    <ul className="py-2">
                        <span className="underline">
                            Les conditions pour acquérir un logement en BRS sont :
                        </span>

                        <li>- Utiliser le logement en Résidence Principale</li>
                        <li>- Conditions de ressources à respecter : lien du document.</li>
                        <li>- Nombre de personnes occupant le logement :
                            <ul>
                                <li className="text-orange-500">2 personnes ou plus à occuper un logement de typologie T3</li>
                                <li className="text-orange-500">3 personnes ou plus à occuper un logement de typologie T4</li>
                                <li className="text-orange-500">4 personnes ou plus à occuper un logement de typologie T5</li>
                            </ul>
                        </li>
                    </ul>

                    <a className="underline" href="">Voir les logements proposés en BRS</a>

                </div>









            </div>


            <div className="col-span-6 md:col-span-2 md:col-start-4 col-start-1 bg-[var(--color-bg1)] flex">

                <div className="flex flex-col justify-between items-start text-[var(--color-font)] p-4 md:-p-10">

                    <h2 className="text-xl mr-auto mt-12">Les atouts de la Résidence :</h2>

                    <ul>
                        <li>Ville attractive à fort potentiel</li>
                        <li>Quartier dynamique, résidentiel et calme : idéal pour les familles</li>
                        <li>Potentiel immobilier attractif : forte demande locative pour les investisseurs</li>
                        <li>Proximité immédiate autoroute – piste cyclable – transports en commun - toutes commodités – centre ville</li>
                        <li>Résidence sécurisée</li>
                        <li>Environnement arboré et convivial (future placette devant la Résidence)</li>
                        <li>Toit terrasse partagé convivial</li>
                        <li>Station d’auto-partage MODULAUTO au pied de la Résidence</li>
                    </ul>

                    <h2 className="text-[var(--color-font)] text-xl mr-auto mt-12">Les prestations des logements :</h2>
                    <p className="text-red-600">Le plan de votre logement est entièrement personnalisable (étudié en fonction des contraintes techniques, par exemple, emplacement des gaines techniques ...)
                    </p>


                    <div className="pt-10 flex">
                        <div className="flex justify-center pr-8">
                            <Paintbrush />
                        </div>
                        <ul className="list-disc">
                            <li> Carrelage ou parquet stratifié (au choix)</li>
                            <li> Faïence grand format au niveau du bac à douche et du meuble vasque</li>
                            <li> Meuble vasque avec miroir et applique lumineuse</li>
                            <li> Peinture lisse murs et plafonds</li>
                            <li> Placards aménagés</li>
                            <li> Cuisine équipée uniquement pour les T2</li>
                            <li> Surface terrasse généreuse (profonde)</li>
                            <li> Grande ouverture séjour par baie coulissante alu</li>
                        </ul>
                    </div>

                    <div className="py-10 w-full flex">
                        <div className="flex justify-center pr-8">
                            <Heater />
                        </div>
                        <ul className="list-disc">
                            <li> Chauffage par pompe à chaleur</li>
                            <li> Volets roulants motorisés</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className='bg-[var(--color-bg1)] col-span-1' />


        </section >
    )
}



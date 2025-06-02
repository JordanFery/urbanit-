"use client";
import { Paintbrush } from 'lucide-react';
import { Heater } from 'lucide-react';
import Image from "next/image";





export default function Atout() {


    return (
        <section id='prestation' className="w-full grid grid-cols-6 scroll-mt-14">

            <div className='bg-[var(--color-bg2)] col-span-1' />
            <div className="relative  flex bg-[var(--color-bg2)] text-[var(--color-font)] flex-col w-full pt-2  p-4 col-span-6 md:col-span-2">


                <div className="pr-4 mb-12">
                    <p className='py-4'>
                        Notre résidence s'appelle "Urbanité" pour le clin d'oeil à notre architecte "l'Atelier d'Urbanité Roland Castro", et parce qu'elle met en avant le savoir vivre, la politesse.
                    </p>

                    <p className="pb-2">Ces urbanités se déclinent de multiples façons :</p>
                    <ul>
                        <li className='pb-1'>- Mixité de logements allant du T2 jusqu'au T6.</li>
                        <li className='pb-1'>- Mixité de clientèle avec du BRS "socle", du BRS intermédiaire, des logements en TVA à 5.5% (secteur QPV de la Pompignane), et des logements libres.</li>
                        <li className='pb-1'>- Présence d'un concierge logeant sur place pour favoriser la bonne entente entre les habitants.</li>
                        <li className='pb-1'>- Présence de 3 commerces sur le thème de la restauration, du sport et du médical. "Mens sana in corpore sano"</li>
                        <li className='pb-1'>- Réalisation par la Ville de la future place Juin (végétalisée), devant la Résidence faisant tampon entre la Résidence et les rues.</li>
                        <li className='pb-1'>- Présence d'une toiture partagée et très végétalisée favorisant le lien social et la détente</li>
                        <li className='pb-1'>- 2 voitures en auto-partage pour inciter les résidents à favoriser les transports collectifs ou le vélo.</li>
                    </ul>


                    <p className="pt-6 pb-2">
                        <span className='underline'>
                            L'avancement du projet : <br />
                        </span>
                    </p>

                    <ul>
                        <li className='pb-1'>Avril 2025 : Lancement commercial</li>
                        <li className='pb-1'>Mai 2025 : Permis de construire accepté</li>
                        <li className='pb-1'>Mai 2025 : Travaux de réaménagement de la voirie côté école</li>
                        <li className='pb-1'>Juin 2025 : Consultation des entreprises pour travaux</li>
                        <li className='pb-1'>4ème trimestre 2025 : début des travaux</li>
                        <li className='pb-1'>Fin 2027 : Livraison</li>
                    </ul>
                    {/* <p className="py-2">
                        <span className='font-semibold'>

                            2. Propriétaire du logement : <br />
                        </span>
                        L’Acheteur devient propriétaire du logement mais pas du terrain. Il signe un bail avec l’OFS pour la location du terrain et doit régler tous les mois, une redevance, d’un montant de 1,30 € / m2.</p>

                    <p className="py-2">
                        <span className='font-semibold'>

                            3. Revente : <br />
                        </span>
                        Lorsque l’Acheteur souhaite revendre son logement, il doit respecter certaines conditions pour éviter la spéculation immobilière, en vendant à un prix encadré</p>

                    <p className="py-2">En résumé, le BRS permet de réduire le coût d’achat d’un logement et c’est une solution pour favoriser l’accès à la propriété sans que les prix ne s’envolent.
                    </p>

                    <p className="font-semibold pt-6">
                        Les conditions pour acquérir un logement en BRS sont :
                    </p>
                    <ul className="py-2">

                        <li>- Utiliser le logement en Résidence Principale</li>
                        <li>- Conditions de ressources à respecter : (lien du document).</li>
                        <li>- Nombre de personnes occupant le logement :
                            <ul className='text-sm pb-4'>
                                <li className="text-orange-500">2 personnes ou plus à occuper un logement de typologie T3</li>
                                <li className="text-orange-500">3 personnes ou plus à occuper un logement de typologie T4</li>
                                <li className="text-orange-500">4 personnes ou plus à occuper un logement de typologie T5</li>
                            </ul>
                        </li>
                    </ul>

                    <a className="underline" href="">Voir les logements proposés en BRS</a> */}

                </div>









            </div>


            <div className="col-span-6 md:col-span-3 md:col-start-4 col-start-1 bg-[var(--color-bg1)] flex items-center">

                {/* <div className="flex flex-col justify-between items-start text-[var(--color-font)] p-4 md:p-10">

                    <h2 className="text-xl mr-auto mt-12 pb-6 font-semibold">Les atouts de la Résidence :</h2>

                    <ul className='list-disc pl-14'>
                        <li className='pb-2'>Ville attractive à fort potentiel</li>
                        <li className='pb-2'>Quartier dynamique, résidentiel et calme : idéal pour les familles</li>
                        <li className='pb-2'>Potentiel immobilier attractif : forte demande locative pour les investisseurs</li>
                        <li className='pb-2'>Proximité immédiate autoroute – piste cyclable – transports en commun - toutes commodités – centre ville</li>
                        <li className='pb-2'>Résidence sécurisée</li>
                        <li className='pb-2'>Environnement arboré et convivial (future placette devant la Résidence)</li>
                        <li className='pb-2'>Toit terrasse partagé convivial</li>
                        <li className='pb-2'>Station d’auto-partage MODULAUTO au pied de la Résidence</li>
                    </ul>

                    <h2 className="text-xl mr-auto mt-12 pb-6 font-semibold">Les prestations des logements :</h2>
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

                </div> */}
                <div className="mt-10 p-4 w-full relative">
                    <Image
                        src="/PerspectiveFinale.jpg"
                        alt="immeuble"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>


        </section >
    )
}



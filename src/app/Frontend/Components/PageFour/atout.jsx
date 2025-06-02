// "use client";
// import { Paintbrush } from 'lucide-react';
// import { Heater } from 'lucide-react';
// import Image from "next/image";
// import Prestations from './prestations';
// import { useState, useEffect } from "react";





// export default function Atout() {

//     const [showPrestation, setShowPrestation] = useState(false);


//     const handlePrestationClick = () => {
//         setShowPrestation(!showPrestation);
//     }

//     return (
//         <section id='prestation' className="w-full grid grid-cols-6 scroll-mt-14">

//             <div className='bg-[var(--color-bg2)] col-span-1' />
//             <div className="relative  flex bg-[var(--color-bg2)] text-[var(--color-font)] flex-col w-full pt-2  p-4 col-span-6 md:col-span-2">

//                 {showPrestation ? (
//                     <div
//                         className="w-full relative text-white p-6 
//     transition-all duration-500 ease-out opacity-100 translate-y-0 animate-fade-in-up"
//                     >                        <Prestations />
//                         <button
//                             onClick={handlePrestationClick}
//                             className="absolute top-4 right-4 h-8 w-8 bg-[#83B2A6] text-white border-2 border-[#83B2A6] hover:bg-[#A39580] rounded-full"
//                         >
//                             X
//                         </button>
//                     </div>
//                 ) : (

//                     <div className="pr-4 mb-12">
//                         <p className='py-4'>
//                             Notre résidence s'appelle "Urbanité" pour le clin d'oeil à notre architecte "l'Atelier d'Urbanité Roland Castro", et parce qu'elle met en avant le savoir vivre, la politesse.
//                         </p>

//                         <p className="pb-2">Ces urbanités se déclinent de multiples façons :</p>
//                         <ul className='list-disc ml-8'>
//                             <li className='pb-1'> Mixité de logements allant du T2 jusqu'au T6.</li>
//                             <li className='pb-1'> Mixité de clientèle avec du BRS "socle", du BRS intermédiaire, des logements en TVA à 5.5% (secteur QPV de la Pompignane), et des logements libres.</li>
//                             <li className='pb-1'> Présence d'un concierge logeant sur place pour favoriser la bonne entente entre les habitants.</li>
//                             <li className='pb-1'> Présence de 3 commerces sur le thème de la restauration, du sport et du médical. "Mens sana in corpore sano"</li>
//                             <li className='pb-1'> Réalisation par la Ville de la future place Juin (végétalisée), devant la Résidence faisant tampon entre la Résidence et les rues.</li>
//                             <li className='pb-1'> Présence d'une toiture partagée et très végétalisée favorisant le lien social et la détente</li>
//                             <li className='pb-1'> 2 voitures en auto-partage pour inciter les résidents à favoriser les transports collectifs ou le vélo.</li>
//                         </ul>


//                         <p className="pt-6 pb-2">
//                             <span className='underline'>
//                                 L'avancement du projet : <br />
//                             </span>
//                         </p>

//                         <ul>
//                             <li className='pb-1'>Avril 2025 : Lancement commercial</li>
//                             <li className='pb-1'>Mai 2025 : Permis de construire accepté</li>
//                             <li className='pb-1'>Mai 2025 : Travaux de réaménagement de la voirie côté école</li>
//                             <li className='pb-1'>Juin 2025 : Consultation des entreprises pour travaux</li>
//                             <li className='pb-1'>4ème trimestre 2025 : début des travaux</li>
//                             <li className='pb-1'>Fin 2027 : Livraison</li>
//                         </ul>


//                         <div className="py-12">
//                             <button
//                                 onClick={handlePrestationClick}
//                                 className="cursor-pointer px-6 bg-[var(--color-button)] text-[var(--color-fontHover)] hover:text-[var(--color-fontHover)] font-bold py-2 px-4 rounded-full hover:bg-[var(--color-buttonHover)]"
//                             >
//                                 Les prestations des logements                            </button>
//                         </div>
//                     </div>
//                 )}








//             </div>


//             <div className="col-span-6 md:col-span-3 md:col-start-4 col-start-1 bg-[var(--color-bg1)] flex items-center">
//                 <div className="mt-10 md:p-12 w-full relative">
//                     <Image
//                         src="/PerspectiveFinale.jpg"
//                         alt="immeuble"
//                         width={1000}
//                         height={1000}
//                     />
//                 </div>
//             </div>


//         </section >
//     )
// }



"use client";
import { useState } from "react";
import Image from "next/image";
import Prestations from "./prestations";
import { Paintbrush, Heater } from "lucide-react";

export default function Atout() {
    const [showPrestation, setShowPrestation] = useState(false);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const handlePrestationClick = () => {
        setShowPrestation(!showPrestation);
    };

    const handleImageClick = () => {
        setFullscreenImage("/PerspectiveFinale.jpg");
    };

    const handleCloseFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <section id="prestation" className="w-full grid grid-cols-6 scroll-mt-14">
            {/* Colonne gauche */}
            <div className="bg-[var(--color-bg2)] col-span-1" />

            {/* Colonne texte */}
            <div className="relative flex bg-[var(--color-bg2)] text-[var(--color-font)] flex-col w-full pt-2 p-4 col-span-6 md:col-span-2">
                {showPrestation ? (
                    <div className="w-full relative text-white p-6 transition-all duration-500 ease-out opacity-100 translate-y-0 animate-fade-in-up">
                        <Prestations />
                        <button
                            onClick={handlePrestationClick}
                            className="absolute top-4 right-4 h-8 w-8 bg-[#83B2A6] text-white border-2 border-[#83B2A6] hover:bg-[#A39580] rounded-full"
                        >
                            X
                        </button>
                    </div>
                ) : (
                    <div className="pr-4 mb-12">
                        <p className="py-4">
                            Notre résidence s'appelle "Urbanité" pour le clin d'œil à notre
                            architecte "l'Atelier d'Urbanité Roland Castro", et parce qu'elle
                            met en avant le savoir vivre, la politesse.
                        </p>

                        <p className="pb-2">
                            Ces urbanités se déclinent de multiples façons :
                        </p>
                        <ul className="list-disc ml-8">
                            <li className="pb-1">
                                Mixité de logements allant du T2 jusqu'au T6.
                            </li>
                            <li className="pb-1">
                                Mixité de clientèle avec du BRS "socle", du BRS intermédiaire,
                                des logements en TVA à 5.5% (secteur QPV de la Pompignane), et
                                des logements libres.
                            </li>
                            <li className="pb-1">
                                Présence d'un concierge logeant sur place pour favoriser la
                                bonne entente entre les habitants.
                            </li>
                            <li className="pb-1">
                                Présence de 3 commerces sur le thème de la restauration, du
                                sport et du médical. "Mens sana in corpore sano"
                            </li>
                            <li className="pb-1">
                                Réalisation par la Ville de la future place Juin (végétalisée),
                                devant la Résidence faisant tampon entre la Résidence et les
                                rues.
                            </li>
                            <li className="pb-1">
                                Présence d'une toiture partagée et très végétalisée favorisant
                                le lien social et la détente
                            </li>
                            <li className="pb-1">
                                2 voitures en auto-partage pour inciter les résidents à
                                favoriser les transports collectifs ou le vélo.
                            </li>
                        </ul>

                        <p className="pt-6 pb-2 underline">
                            L'avancement du projet : <br />
                        </p>
                        <ul>
                            <li className="pb-1">Avril 2025 : Lancement commercial</li>
                            <li className="pb-1">
                                Mai 2025 : Permis de construire accepté
                            </li>
                            <li className="pb-1">
                                Mai 2025 : Travaux de réaménagement de la voirie côté école
                            </li>
                            <li className="pb-1">
                                Juin 2025 : Consultation des entreprises pour travaux
                            </li>
                            <li className="pb-1">
                                4ème trimestre 2025 : début des travaux
                            </li>
                            <li className="pb-1">Fin 2027 : Livraison</li>
                        </ul>

                        <div className="py-12">
                            <button
                                onClick={handlePrestationClick}
                                className="cursor-pointer px-6 bg-[var(--color-button)] text-[var(--color-fontHover)] font-bold py-2 px-4 rounded-full hover:bg-[var(--color-buttonHover)]"
                            >
                                Les prestations des logements
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Colonne image */}
            <div className="col-span-6 md:col-span-3 md:col-start-4 col-start-1 bg-[var(--color-bg1)] flex items-center">
                <div className="mt-10 md:p-12 w-full relative">
                    <Image
                        src="/PerspectiveFinale.jpg"
                        alt="immeuble"
                        width={1000}
                        height={1000}
                        className="cursor-pointer"
                        onClick={handleImageClick}
                    />
                </div>
            </div>

            {/* Overlay plein écran */}
            {fullscreenImage && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={handleCloseFullscreen}
                >
                    <Image
                        src={fullscreenImage}
                        alt="Plein écran"
                        width={1200}
                        height={800}
                        className="max-w-full max-h-full object-contain"
                    />
                    <button
                        onClick={handleCloseFullscreen}
                        className="absolute top-4 right-4 text-white text-3xl"
                    >
                        ✕
                    </button>
                </div>
            )}
        </section>
    );
}

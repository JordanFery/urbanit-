"use client";
import Image from "next/image";
import Strategique from "./strategique";
import { useState, useEffect } from "react";
import { ShoppingCart, MapPin, TreePine, Volleyball, BriefcaseMedical } from 'lucide-react';


export default function Quartier() {
    const [showStrategique, setShowStrategique] = useState(false);

    const handleStrategiqueClick = () => {
        setShowStrategique(!showStrategique);
    }

    return (

        <section id="quartier" className="bg-[var(--color-bg2)] w-full grid grid-cols-1 md:grid-cols-6 scroll-mt-14">

            <div className="md:col-start-2 md:col-span-2 col-span-6 mx-4 flex">

                <div className="flex flex-col justify-between col-span-1 items-start text-[var(--color-font)]">

                    <h1 className="text-[var(--color-title)] font-semibold md:text-5xl text-3xl mr-auto mt-12">Un quartier dynamique et familial</h1>

                    <p className="py-4 text-justify">À Montpellier, le quartier de la Pompignane est un quartier résidentiel en pleine évolution, la ville le transforme pour en faire un lieu de vie urbain, vert et durable.
                    </p>
                    <p className="py-4 text-justify">Connecté au centre-ville grâce aux transports en commun et à une mobilité éco-responsable, il offre aux habitants un cadre idéal.</p>



                    <div className="flex text-justify">
                        <MapPin size={66} className=" mr-8" />
                        <p>URBANITÉS se situe à l’angle de l’Avenue Alphonse Juin et de la rue Marie Durand à Montpellier, dans le quartier de la Pompignane.</p>
                    </div>
                    <div className="flex py-2">
                        <ShoppingCart className="mr-4" />
                        <p>- Super U, LIDL, nombreux commerces</p>
                    </div>
                    <div className="flex py-2">
                        <TreePine className="mr-4 h-10 w-10" />
                        <p>- Au pied de la Résidence : Parc Rimbaud, Parc des Pastourelles, Berges du Lez
                        </p>
                    </div>
                    <div className="flex py-2 text-justify">
                        <Volleyball className="mr-4" />
                        <ul className="pb-2">
                            <li>- Piscine Jean Taris</li>
                            <li>- Bowling de la Pompignane</li>
                            <li>- Stade de la Pompignane (boulodrome, multisports, terrain de foot)</li>
                            <li>- Comité de quartier actif : Comité Lez Pompignane</li>
                        </ul>
                    </div>



                    <div className="flex mb-4">
                        <BriefcaseMedical className="mr-8" />
                        <p>Centres médicaux, médecins, dentistes</p>
                    </div>

                </div>
            </div>


            <div className="relative md:col-start-4 md:col-span-3 col-span-6 justify-center place-items-center md:pl-4 flex bg-[var(--color-bg1)] flex-col pt-2">

                {showStrategique ? (
                    <div
                        className="w-4/5 md:w-3/4 lg:w-2/3 relative text-white p-6 
    transition-all duration-500 ease-out opacity-100 translate-y-0 animate-fade-in-up"
                    >                        <Strategique />
                        <button
                            onClick={handleStrategiqueClick}
                            className="absolute top-4 right-4 h-8 w-8 bg-[#83B2A6] text-white border-2 border-[#83B2A6] hover:bg-[#A39580] rounded-full"
                        >
                            X
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mt-10 w-1/2 relative">
                            <Image
                                src="/map.png"
                                alt="immeuble"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="relative mt-12 rounded-lg overflow-hidden">
                            <Image
                                src="/quartier.png"
                                alt="immeuble"
                                width={1000}
                                height={1000}
                            />
                            <p className="text-center">Espace commercial « Côté Lez » Avenue de la Pompignane</p>
                        </div>
                        <div className="py-12">
                            <button
                                onClick={handleStrategiqueClick}
                                className="cursor-pointer px-6 bg-[var(--color-button)] text-[var(--color-fontHover)] hover:text-[var(--color-fontHover)] font-bold py-2 px-4 rounded-full hover:bg-[var(--color-buttonHover)]"
                            >
                                Un emplacement stratégique
                            </button>
                        </div>
                    </>
                )}
            </div>






        </section >
    )
}



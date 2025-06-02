"use client";
import Image from "next/image";
import Strategique from "./strategique";
import { useState, useEffect } from "react";
import { ShoppingCart } from 'lucide-react';
import { TreePine } from 'lucide-react';
import { Volleyball } from 'lucide-react';
import AnimatedNumber from "@/components/animatedNumber";


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

                    <p className="py-4">À Montpellier, le quartier de la Pompignane est un quartier résidentiel en pleine évolution, la ville le transforme pour en faire un lieu de vie urbain, vert et durable.
                    </p>
                    <p className="py-4">Connecté au centre-ville grâce aux transports en commun et à une mobilité éco-responsable, il offre aux habitants un cadre idéal.</p>



                    <div className="flex py-2">
                        <ShoppingCart className="mr-4" />
                        <p>- Super U, LIDL, nombreux commerces</p>
                    </div>
                    <div className="flex py-2">
                        <TreePine className="mr-4 h-10 w-10" />
                        <p>- Au pied de la Résidence : Parc Rimbaud, Parc des Pastourelles, Berges du Lez
                        </p>
                    </div>
                    <div className="flex py-2">
                        <Volleyball className="mr-4" />
                        <ul className="pb-2">
                            <li>- Piscine Jean Taris</li>
                            <li>- Bowling de la Pompignane</li>
                            <li>- Stade de la Pompignane (boulodrome, multisports, terrain de foot)</li>
                            <li>- Comité de quartier actif : Comité Lez Pompignane</li>
                        </ul>
                    </div>



                    <span className="h-[0.5px] w-full bg-[var(--color-title)]"></span>
                    <h2 className="pt-4 pb-2">La Pompignane en chiffre :</h2>


                    <div className="flex flex-row text-center w-full justify-between mt-2 pb-12">
                        <div className="">
                            <div className="text-4xl md:text-5xl text-[var(--color-title)] font-extrabold pb-2 leading-tight">
                                <AnimatedNumber target={60} duration={2000} />
                            </div>
                            <p className="text-sm">Commerces</p>
                        </div>
                        <div className=" border-r border-l border-[var(--color-title)]">
                            <div className="text-4xl md:text-5xl text-[var(--color-title)] font-extrabold pb-2 flex flex-row items-baseline justify-center leading-tight">
                                <AnimatedNumber target={42} duration={3000} />
                                <p className="text-[var(--color-title)] text-xl font-normal pl-1 ">ans</p>

                            </div>
                            <p className="text-sm px-10">De moyenne d'âge</p>
                        </div>
                        <div className="pr-4">
                            <div className="text-4xl md:text-5xl text-[var(--color-title)] font-extrabold pb-2 flex flex-row items-baseline justify-center leading-tight">
                                <AnimatedNumber target={41} duration={4000} />
                                <p className="text-[var(--color-title)] text-xl font-normal ">%</p>

                            </div>
                            <p className="text-sm">De propriétaires</p>
                        </div>

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
                        <div className="w-1/2 relative mt-12">
                            <Image
                                src="/PLAN DE SITUATION.png"
                                alt="immeuble"
                                width={1000}
                                height={1000}
                            />
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



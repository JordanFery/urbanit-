


'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Accueil() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <section className="bg-[url('/Batiment.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
            <div className="relative min-h-screen flex flex-col justify-between">

                {/* Voile sombre pour garantir le contraste du texte sur le ciel clair */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/45 to-black/10 pointer-events-none" aria-hidden="true" />

                <div className="relative z-10 pt-6 pb-10 text-center px-4">
                    <div className="md:w-lg w-xs md:h-55 place-items-center  mx-auto mt-15">
                        <Image
                            src="/urbanite.png"
                            alt="Urbanités"
                            width={600}
                            height={100}
                            className=" filter brightness-0 invert drop-shadow-lg"
                        />
                    </div>
                    <h1 className="text-4xl font-bold text-[var(--color-title)] [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">MONTPELLIER POMPIGNANE</h1>

                    {/* Encart sur fond sombre opaque : contraste AA quel que soit l'arrière-plan */}
                    <div className="mt-8 mx-auto max-w-md rounded-2xl bg-black/65 backdrop-blur-sm px-6 py-5 text-white space-y-3">
                        <p className="text-xl font-semibold">Présentation des logements à vendre :</p>
                        <p className="text-2xl font-bold text-[var(--color-title)]">
                            <time dateTime="2026-11-14T10:00">Samedi 14 Novembre, 10h - 16h</time>
                        </p>
                        <address className="not-italic text-lg">
                            <span className="block">sur place :</span>
                            <span className="block font-bold tracking-wide">URBANITÉS</span>
                            <span className="block">130 Avenue Alphonse Juin à Montpellier</span>
                        </address>
                        <p className="text-xl font-semibold">Venez nombreux !</p>
                    </div>

                    <div className="relative z-10 pt-10 text-center">
                        <a
                            href="#quartier"
                            className="inline-block cursor-pointer text-lg px-8 py-2 rounded-full font-bold bg-[var(--color-button)] text-[var(--color-font)] hover:bg-[var(--color-buttonHover)] hover:text-[var(--color-fontHover)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition duration-300"
                        >
                            DÉCOUVRIR
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

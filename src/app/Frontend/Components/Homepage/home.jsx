

'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Accueil() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <section className="bg-[url('/Batiment.jpg')] bg-cover bg-no-repeat bg-center h-screen">
            <div className="relative bg-opacity-0 h-screen w-1/2 m-auto overflow-hidden flex flex-col justify-between">

                {/* Texte en haut */}
                <div className="relative z-10 pt-24 text-center">
                    <h1>
                        <span className="text-9xl font-bold bg-[linear-gradient(to_bottom,_var(--color-title)_50%,_white_50%)] bg-clip-text text-transparent">U</span>
                        <span className="text-9xl font-bold bg-[linear-gradient(to_bottom,_white_50%,_var(--color-title)_50%)] bg-clip-text text-transparent">R</span>
                        <span className="text-9xl font-bold bg-[linear-gradient(to_bottom,_var(--color-title)_50%,white_50%)] bg-clip-text text-transparent">B</span>
                        <span className="text-9xl font-bold bg-[linear-gradient(to_bottom,_white_50%,_var(--color-title)_50%)] bg-clip-text text-transparent">A</span>
                        <span className="text-9xl font-bold bg-[linear-gradient(to_bottom,_var(--color-title)_50%,white_50%)] bg-clip-text text-transparent">N</span>
                        <span className="text-9xl font-bold bg-[linear-gradient(to_bottom,_white_50%,_var(--color-title)_50%)] bg-clip-text text-transparent">I</span>
                        <span className="text-9xl font-bold bg-[linear-gradient(to_bottom,_var(--color-title)_50%,white_50%)] bg-clip-text text-transparent">T</span>
                        <span className="text-9xl font-bold bg-[linear-gradient(to_bottom,_white_50%,_var(--color-title)_50%)] bg-clip-text text-transparent">É</span>
                    </h1>
                    <p className="text-4xl font-bold text-[var(--color-title)] mt-4">MONTPELLIER</p>
                    <p className="text-4xl font-bold text-[var(--color-title)] mt-1">APPARTEMENTS DU T3 AU T5</p>
                    <div className="relative z-10 pt-12 text-center">
                        <a href="#decouvrir">

                            <button className="cursor-pointer text-lg px-8 bg-[var(--color-button)] text-[var(--color-fontHover)] hover:text-[var(--color-fontHover)] font-bold py-2 rounded-full hover:bg-[var(--color-buttonHover)] transition duration-300">
                                DÉCOUVRIR
                            </button>
                        </a>
                    </div>
                </div>

                {/* Bouton en bas */}

                {/* Image animée */}
            </div>
        </section>
    );
}

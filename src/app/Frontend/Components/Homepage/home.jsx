

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
            <div className="relative h-screen flex flex-col justify-between">

                {/* Texte en haut */}
                <div className="relative z-10 pt-6 text-center">
                    {/* <h1>
                        <span className="sm:text-9xl text-6xl font-bold bg-[linear-gradient(to_bottom,_var(--color-title)_50%,_white_50%)] bg-clip-text text-transparent">U</span>
                        <span className="sm:text-9xl text-6xl font-bold bg-[linear-gradient(to_bottom,_white_50%,_var(--color-title)_50%)] bg-clip-text text-transparent">R</span>
                        <span className="sm:text-9xl text-6xl font-bold bg-[linear-gradient(to_bottom,_var(--color-title)_50%,white_50%)] bg-clip-text text-transparent">B</span>
                        <span className="sm:text-9xl text-6xl font-bold bg-[linear-gradient(to_bottom,_white_50%,_var(--color-title)_50%)] bg-clip-text text-transparent">A</span>
                        <span className="sm:text-9xl text-6xl font-bold bg-[linear-gradient(to_bottom,_var(--color-title)_50%,white_50%)] bg-clip-text text-transparent">N</span>
                        <span className="sm:text-9xl text-6xl font-bold bg-[linear-gradient(to_bottom,_white_50%,_var(--color-title)_50%)] bg-clip-text text-transparent">I</span>
                        <span className="sm:text-9xl text-6xl font-bold bg-[linear-gradient(to_bottom,_var(--color-title)_50%,white_50%)] bg-clip-text text-transparent">T</span>
                        <span className="sm:text-9xl text-6xl font-bold bg-[linear-gradient(to_bottom,_white_50%,_var(--color-title)_50%)] bg-clip-text text-transparent">É</span>
                    </h1> */}
                    <div className="md:w-2xl w-xs h-48 overflow-hidden mx-auto mt-12">
                        <Image
                            src="/logosamya.png"
                            alt="logo entreprise"
                            width={200}
                            height={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-4xl font-bold text-[var(--color-title)]">MONTPELLIER POMPIGNANE</p>
                    <div className="relative z-10 pt-12 text-center">
                        <a href="#quartier">

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

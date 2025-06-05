

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
                    <div className="md:w-lg w-xs md:h-55 place-items-center  mx-auto mt-15">
                        <Image
                            src="/urbanite.png"
                            alt="logo entreprise"
                            width={600}
                            height={100}
                            className=" filter brightness-0 invert"
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

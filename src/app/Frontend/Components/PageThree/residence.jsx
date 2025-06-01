"use client";
import Image from "next/image";
import AnimatedNumber from "@/components/animatedNumber";



export default function Residence() {


    return (
        <section id="residence" className="bg-[var(--color-bg2)] w-full grid grid-cols-6 flex flex-row scroll-mt-14">

            <div className="flex bg-white flex-col items-center md:col-span-3 col-span-6 py-8 md:py-0 justify-evenly min-h-[500px]">

                <div className="w-1/2">
                    <Image
                        src="/architecte.jpg"
                        alt="immeuble"
                        width={1000}
                        height={1000}
                    />
                </div>

                <div className="w-1/2">
                    <Image
                        src="/LOGO archi.png"
                        alt="immeuble"
                        width={1000}
                        height={1000}
                    />
                </div>

                <div className="mt-4 text-center">
                    <a
                        href="https://www.au-rc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-lg bg-[var(--color-bg1)] text-[var(--color-font)] font-semibold hover:bg-[var(--color-title)] hover:text-white transition duration-300 shadow-sm"
                    >
                        Visiter le site de l'Atelier d'Urbanité Roland Castro
                    </a>
                </div>


            </div>




            <div className="flex flex-col md:col-start-4 col-start-1 col-span-6 md:col-span-2 text-[var(--color-font)] md:pl-10 px-4 md:px-0">

                <h1 className="text-[var(--color-title)] md:text-5xl text-3xl mr-auto my-12">Une Résidence aux multiples atouts</h1>


                <div className="flex flex-row text-center w-full mt-2 justify-between ">
                    <div className="w-1/2">
                        <div className="text-4xl md:text-5xl text-[var(--color-title)] font-extrabold pb-2 leading-tight">
                            <AnimatedNumber target={46} duration={2000} />
                        </div>
                        <p className="text-sm">Logements</p>
                    </div>
                    <div className="w-1/2 border-r border-l border-[var(--color-title)]">
                        <div className="text-4xl md:text-5xl text-[var(--color-title)] font-extrabold pb-2 leading-tight">
                            <AnimatedNumber target={3} duration={2000} />
                        </div>
                        <p className="text-sm">Commerces</p>
                    </div>
                    <div className="w-1/2">
                        <div className="flex items-baseline gap-1 text-4xl md:text-5xl text-[var(--color-title)] font-extrabold pb-2 leading-tight">
                            <AnimatedNumber target={2} duration={2000} />
                            <span className="text-[var(--color-font)] text-sm font-light px-2">à</span>
                            <AnimatedNumber target={6} duration={2000} />
                        </div>
                        <p className="text-sm">Pièces</p>
                    </div>

                </div>
                <div className=" mb-10">
                    <h2 className="text-4xl mt-12 mb-4 italic text-[var(--color-font)]">Le mot de l'architecte</h2>
                    <p className="italic">« Nous avons conjugué la fabrique d’une séquence urbaine centrale du quartier de la Pompignane à la fabrique des conditions indispensables aux plaisirs d’habiter.
                        C’est toutes les urbanités que le projet a convoquées. Toutes ces attentions et politesses que l’on aime voir et retrouver dans son quartier, dans sa rue, au pied de son immeuble, et puis celles qui permettent à chacun, une fois la porte franchie, de se sentir "chez soi".
                        Nous avons veillé à rendre la vie en commun attrayante et enrichissante dans des espaces à partager, en cœur d’îlot ou en toiture terrasse, et à offrir aux logements les qualités domestiques et appropriatives de la maison individuelle. Les logements répondent à la diversité des manières d’habiter et s’accompagnent d’extérieurs privatifs généreux et multiples pour tous et pour chacun. »
                    </p>
                </div>
            </div>





        </section >
    )
}



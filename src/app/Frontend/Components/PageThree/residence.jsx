"use client";
import Image from "next/image";
import AnimatedNumber from "@/components/animatedNumber";



export default function Residence() {


    return (
        <section id="residence" className="bg-[var(--color-bg2)] w-full grid grid-cols-6 flex flex-row scroll-mt-14">

            <div className="flex bg-white flex-col items-center md:col-span-3 col-span-6 py-8 justify-evenly min-h-[500px]">

                <div className="w-1/2">
                    <Image
                        src="/architecte.jpg"
                        alt="Photo de Suzeana LAJIC, Architecte"
                        width={1000}
                        height={1000}
                    />
                </div>
                <p className="mb-4">Suzeana LAJIC, Architecte</p>

                <div className="w-1/2">
                    <Image
                        src="/LOGO archi.png"
                        alt="immeuble"
                        width={1000}
                        height={1000}
                    />
                </div>

                <div className="mt-4 text-center">

                </div>


            </div>




            <div className="flex flex-col md:col-start-4 col-start-1 col-span-6 md:col-span-2 text-[var(--color-font)] md:pl-10 px-4 md:px-0">

                <h1 className="text-[var(--color-title)] font-semibold md:text-5xl text-3xl mr-auto mt-12 pb-12">Une Résidence aux multiples atouts</h1>


                <div className="flex flex-row text-center w-full mt-2 justify-between ">
                    <div className="w-1/2">
                        <div className="text-4xl md:text-5xl text-[var(--color-title)] font-extrabold pb-2 leading-tight">
                            <AnimatedNumber target={47} duration={2000} />
                        </div>
                        <p className="text-sm">Logements</p>
                    </div>
                    <div className="w-1/2 border-r border-l border-[var(--color-title)]">
                        <div className="text-4xl md:text-5xl text-[var(--color-title)] font-extrabold pb-2 leading-tight">
                            <AnimatedNumber target={3} duration={3000} />
                        </div>
                        <p className="text-sm">Commerces</p>
                    </div>
                    <div className="w-1/2">
                        <div className="text-4xl md:text-5xl text-[var(--color-title)] font-extrabold pb-2 leading-tight">
                            <AnimatedNumber target={2} duration={4000} />
                            <span className="text-[var(--color-font)] text-sm font-light px-2">à</span>
                            <AnimatedNumber target={6} duration={4000} />
                        </div>
                        <p className="text-sm">Pièces</p>
                    </div>

                </div>
                <div className=" mb-10">
                    <h2 className="text-4xl mt-12 mb-4 italic text-[var(--color-font)] ">Le mot de l'architecte</h2>
                    <p className="italic text-justify">« Nous avons conjugué la fabrique d’une séquence urbaine centrale du quartier de la Pompignane à la fabrique des conditions indispensables aux plaisirs d’habiter.
                        C’est toutes les urbanités que le projet a convoquées. Toutes ces attentions et politesses que l’on aime voir et retrouver dans son quartier, dans sa rue, au pied de son immeuble, et puis celles qui permettent à chacun, une fois la porte franchie, de se sentir "chez soi".
                        Nous avons veillé à rendre la vie en commun attrayante et enrichissante dans des espaces à partager, en cœur d’îlot ou en toiture terrasse, et à offrir aux logements les qualités domestiques et appropriatives de la maison individuelle. Les logements répondent à la diversité des manières d’habiter et s’accompagnent d’extérieurs privatifs généreux et multiples pour tous et pour chacun. »
                    </p>
                </div>
            </div>





        </section >
    )
}



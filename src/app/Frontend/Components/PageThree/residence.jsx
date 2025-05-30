"use client";
import Image from "next/image";



export default function Residence() {


    return (
        <section id="residence" className="bg-[var(--color-bg2)] w-full grid grid-cols-4 flex flex-row">


            <div className="flex bg-white flex-col  place-items-center md:col-span-2 col-span-4 py-8 md:py-0 justify-center  ">

                <div className="w-1/2 relative">
                    <Image
                        src="/architecte.jpg"
                        alt="immeuble"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="w-1/2 relative">
                    <Image
                        src="/LOGO archi.png"
                        alt="immeuble"
                        width={1000}
                        height={1000}
                    />
                </div>

            </div>




            <div className="flex flex-col md:col-start-3 col-start-1 col-span-4 md:col-span-1 text-[var(--color-font)] md:pl-10 px-4 md:px-0">

                <h1 className="text-[var(--color-title)]  text-5xl mr-auto my-12">Une Résidence <br /> aux multiples <br /> atouts</h1>


                <div className="flex flex-row text-center w-full mt-2 justify-between ">
                    <div className="w-1/2">
                        <p className="text-5xl text-[var(--color-title)] font-[1000] pb-2">47</p>
                        <p className="text-sm">Logements</p>
                    </div>
                    <div className="w-1/2 border-r border-l border-[var(--color-title)]">
                        <p className="text-5xl text-[var(--color-title)] font-[1000]  pb-2">
                            3
                        </p>
                        <p className="text-sm">Commerces</p>
                    </div>
                    <div className="w-1/2">
                        <p className="text-5xl text-[var(--color-title)] font-[1000] pb-2">2<span className="text-xl px-1 text-text-5xl text-[var(--color-font)] font-light mx-2">à</span>6</p>
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



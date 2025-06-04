import Image from "next/image"

export default function AboutUs() {

    return (

        <section id="about" className="flex  grid grid-cols-6 bg-[var(--color-bg2)] items-center px-4 py-8 scroll-mt-18">

            <div className="col-span-6 md:col-span-2 md:col-start-2">

                <h1 className="text-[var(--color-title)] font-semibold md:text-5xl text-3xl mr-auto my-12">Qui sommes-nous ?</h1>


                <p className="text-[var(--color-font)]">
                    KALELITHOS, fondée en 2006, se distingue par son « esprit maison » en proposant un service sur-mesure à ses clients. Écoute, disponibilité, rigueur et réactivité sont les maîtres mots de Kalelithos Promotion.<br /><br />

                    L’équipe est parfaitement stable depuis des années, tous ses membres ont plus de 10 ans d’ancienneté. Il en résulte des automatismes et une très forte culture d’entreprise tournée vers la qualité et l’engagement. <br /><br />
                    <span className="font-semibold">
                        Vous souhaitez acquérir un logement ou faire un investissement locatif ? <br /><br />
                    </span>

                    Contactez-nous, nous vous aiderons à faire le point sur votre projet et trouver l’appartement idéal ! Nous vous mettrons également en contact avec nos meilleurs partenaires bancaires.


                </p>
            </div>

            <div className="col-span-6 md:col-span-3 px-8">

                <Image
                    src="/corpo.png"
                    alt="Notre Équipe devant l’une de nos réalisations. Résidence KOH I NOOR – Quartier Port Marianne – Montpellier"
                    width={1000}
                    height={1000}

                />


            </div>

        </section>


    )

}
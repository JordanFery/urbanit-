import Image from "next/image"

export default function AboutUs() {

    return (

        <section className="flex flex-col bg-[var(--color-bg1)]">
            <h2 className="text-5xl text-center pt-12 pb-6 w-full text-[var(--color-title)]">Qui sommes-nous ?</h2>
            <div className="flex flex-row py-10">

                <div className="w-1/2 px-36 flex items-center">

                    <p className="text-[var(--color-font)]">
                        KALELITHOS, fondée en 2006, se distingue par son « esprit maison » en proposant un service sur-mesure à ses clients. Écoute, disponibilité, rigueur et réactivité sont les maîtres mots de Kalelithos Promotion.L’équipe est parfaitement constituée pour maîtriser les coûts de conception et inventer la ville de demain ! <br /><br />

                        L’équipe est parfaitement stable depuis des années, tous ses membres ont plus de 10 ans d’ancienneté. Il en résulte des automatismes et une très forte culture d’entreprise tournée vers la qualité et l’engagement. <br /><br />

                        Vous souhaitez acquérir un logement ou faire un investissement locatif, quel que soit votre profil ? <br /><br />

                        Contactez-nous, nous vous aiderons à faire le point sur votre projet et trouver l’appartement de vos rêves ! Nous vous mettrons également en contact avec nos meilleurs partenaires bancaires.


                    </p>

                </div>






                <div className="w-1/2">

                    <Image
                        src="/corpo.png"
                        alt="immeuble"
                        width={1000}
                        height={1000}
                    />


                </div>
            </div>




        </section>


    )

}
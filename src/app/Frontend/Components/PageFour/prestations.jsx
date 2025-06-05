import { PaintRoller, Home, Bath, ThermometerSnowflake } from 'lucide-react';



export default function Prestations() {

    return (

        // <section className="bg-[#A39580] h-full p-10 text-white">
        <section className="bg-[var(--color-title)] h-full max-h-screen overflow-y-auto p-6 text-white">

            <div className="py-4">
                <div className='flex w-full justify-evenly mb-4'>
                    <p className='mb-4'>Le plan de votre logement est personnalisable sous conditions (étudié en fonction des contraintes techniques et de l'avancement du projet...)</p>
                </div>
                <ul>
                    <div className='flex flex-row  mt-12 mb-2'>
                        <Home className='h-10 w-10 border rounded-full p-2' />
                    </div>
                    <li className='mb-2'>Carrelage 60 x 60 cm</li>
                    <li className='mb-2'>Logement atypique et duplex</li>
                    <li className='mb-2'>Placards aménagés</li>
                    <li className='mb-2'>Surface terrasse généreuse</li>
                    <li className='mb-2'>Cuisine équipée pour les T2</li>
                    <li className='mb-2'>Grande ouverture séjour par baie coulissante alu</li>

                    <div className='flex flex-row  mt-12 mb-2'>

                        <PaintRoller className='h-10 w-10 border rounded-full p-2' />
                    </div>
                    <li className='mb-2'>Peinture lisse murs et plafonds</li>

                    <div className='flex flex-row  mt-12 mb-2'>
                        <Bath className='h-10 w-10 border rounded-full p-2' />
                    </div>
                    <li className='mb-2'>Faïence grand format au niveau de la douche et/ou baignoire et meuble vasque</li>
                    <li className='mb-2'>Meuble vasque avec miroir et applique lumineuse</li>



                    <div className='flex flex-row  mt-12 mb-2'>
                        <ThermometerSnowflake className='h-10 w-10 border rounded-full p-2' />
                    </div>
                    <li className='mb-2'>Volets roulants motorisés (et centralisés pour les T4 - T5 - T6)</li>
                    <li className='mb-2'>Chauffage par pompe à chaleur</li>
                    <li className='mb-2'>Eau chaude par chauffagerie collective</li>
                </ul>
            </div>

        </section >

    )
}
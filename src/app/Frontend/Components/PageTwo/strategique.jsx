import { GraduationCap } from 'lucide-react';
import { Bus } from 'lucide-react';
import { Plane } from 'lucide-react';
import { Waves } from 'lucide-react';



export default function Strategique() {

    return (

        // <section className="bg-[#A39580] h-full p-10 text-white">
        <section className="bg-[var(--color-title)] h-full max-h-screen overflow-y-auto p-6 text-white">

            <div className="py-4">
                <div className='flex w-full justify-evenly mb-4'>
                    <Bus className='h-10 w-10 border rounded-full p-2' />

                    <Plane className='h-10 w-10 border rounded-full p-2' />
                    <Waves className='h-10 w-10 border rounded-full p-2' />
                </div>
                <ul>
                    <li>Accès voie rapide / autoroute immédiat</li>
                    <li>- À 15 min de l’aéroport</li>
                    <li>- À 20 min en transports en commun de la Gare Saint Roch et du centre-ville</li>
                    <li>- À 15 min des plages</li>
                    <li>- Bus : lignes 14 – 15 – 16 au pied de la Résidence</li>
                    <li>- Future ligne bustram ligne 1 à proximité</li>
                </ul>
            </div>
            <div className="py-4">
                <div className='flex w-full justify-evenly mb-4'>

                    <GraduationCap className='h-10 w-10 border rounded-full p-2' />
                </div>
                <ul>
                    <li>- Crèche les Enfantines, Ricochet</li>
                    <li>- Relais Petite Enfance (13 assistantes maternelles dans le quartier)</li>
                    <li>- Au pied de la Résidence : école maternelle Sergueï Prokofiev et école élémentaire Jean Zay</li>
                    <li>- À 15 min des plages+ 2 autres écoles maternelles et élémentaires dans le quartier</li>
                    <li>- Enseignement catholique privé : École Sainte Jeanne d’Arc (de la maternelle au CM2)</li>
                </ul>
            </div>



        </section >

    )
}
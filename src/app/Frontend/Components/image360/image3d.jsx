import { Rotate3D } from "lucide-react"; // Icône stylée, installée via lucide-react

export default function Virtuel() {
    return (
        <div className="w-full h-[400px] md:h-[400px] bg-[var(--color-bg1)] flex items-center justify-center px-4">
            <a
                href="http://www.chokoprod.com/urba/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white shadow-xl rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-[var(--color-title)] transition duration-300 ease-in-out w-full max-w-xl"
            >
                <Rotate3D className="w-12 h-12 text-[var(--color-title)] group-hover:text-white mb-4 transition duration-300" />
                <h2 className="text-lg font-semibold text-[var(--color-title)] group-hover:text-white">
                    Explorez la Résidence en 360°
                </h2>
                <p className="text-sm text-gray-500 group-hover:text-white mt-2">
                    Cliquez ici pour lancer la visite virtuelle immersive
                </p>
            </a>
        </div>
    );
}

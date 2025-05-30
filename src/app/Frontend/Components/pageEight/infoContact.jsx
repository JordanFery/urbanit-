import { Mail, Phone, MapPin, Globe } from "lucide-react"; // facultatif si tu veux des icônes modernes

export default function InfoContact() {
    return (
        <section className="bg-[var(--color-bg1)] py-12 px-4 md:px-20 grid gap-6 md:grid-cols-3 text-white">
            {/* Site web */}
            <a
                href="https://www.kalelithos.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[var(--color-title)] rounded-xl p-6 hover:scale-[1.03] transition-transform duration-300 shadow-lg"
            >
                <div className="flex items-center gap-4 mb-2">
                    <Globe className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-semibold">Notre site web</h3>
                </div>
                <p className="text-sm group-hover:underline break-all">
                    www.kalelithos.fr
                </p>
            </a>

            {/* Téléphone */}
            <div className="bg-[var(--color-title)] rounded-xl p-6 hover:scale-[1.03] transition-transform duration-300 shadow-lg">
                <div className="flex items-center gap-4 mb-2">
                    <Phone className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-semibold">Appelez-nous</h3>
                </div>
                <p className="text-sm">Tél. 04 67 65 64 12</p>
            </div>

            {/* Adresse */}
            <div className="bg-[var(--color-title)] rounded-xl p-6 hover:scale-[1.03] transition-transform duration-300 shadow-lg">
                <div className="flex items-center gap-4 mb-2">
                    <MapPin className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-semibold">Notre adresse</h3>
                </div>
                <p className="text-sm">
                    Le Belem<br />
                    355 rue Vendémiaire<br />
                    34000 Montpellier
                </p>
            </div>
        </section>
    );
}

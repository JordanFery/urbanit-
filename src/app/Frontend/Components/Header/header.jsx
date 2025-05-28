

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
    { href: "#quartier", label: "Le quartier" },
    { href: "#residence", label: "La résidence" },
    { href: "#prestation", label: "Les prestations" },
    { href: "#tarif", label: "Investissements judicieux" },
];

export default function Header() {
    const pathname = usePathname();

    // Si on est sur la page accueil "/", on peut juste faire des liens #ancres
    // Sinon, on doit pointer vers "/#ancre"
    const isHome = pathname === "/";

    return (
        <header className="fixed top-0  left-0 h-16 w-full bg-[var(--color-bg1)] flex items-center px-4 z-50">
            <div>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="logo entreprise"
                        width={1000}
                        height={1000}
                        className="h-8 w-auto object-contain cursor-pointer"
                    />
                </Link>
            </div>

            <nav className="absolute left-1/2 flex gap-4 -translate-x-1/2 text-[var(--color-gris)] text-sm items-center justify-center">
                {navLinks.map(({ href, label }) =>
                    isHome ? (
                        <a key={href} href={href} className="hover:underline">
                            {label}
                        </a>
                    ) : (
                        <Link key={href} href={`/${href}`} className="hover:underline">
                            {label}
                        </Link>
                    )
                )}
            </nav>

            <div className="absolute right-[25%]">
                {pathname === "/contact" ? (
                    <Link href="/">
                        <button className="cursor-pointer rounded-full py-2 w-24 bg-[var(--color-title)] hover:bg-[var(--color-buttonHover)] text-[var(--color-fontHover)] hover:text-[var(--color-fontHover)]">
                            Retour accueil
                        </button>
                    </Link>
                ) : (
                    <Link href="/contact">
                        <button className="cursor-pointer rounded-full py-2 w-24 bg-[var(--color-title)] hover:bg-[var(--color-buttonHover)] text-[var(--color-fontHover)] hover:text-[var(--color-fontHover)]">
                            Contact
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
}

"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 h-16 w-full bg-[var(--color-bg1)] flex items-center px-4 z-50">
            {/* Logo */}
            <div>
                <Link href="/pages/home">
                    <Image
                        src="/logo.png"
                        alt="logo entreprise"
                        width={1000}
                        height={1000}
                        className="h-8 w-auto object-contain cursor-pointer"
                    />
                </Link>
            </div>

            {/* Nav */}
            <nav className="absolute left-1/2 flex gap-4 -translate-x-1/2 text-[var(--color-gris)] text-sm items-center justify-center">
                {pathname === "/pages/home" ? (
                    <>
                        <a href="#quartier">Le quartier</a>
                        <a href="#residence">La résidence</a>
                        <a href="#prestation">Les prestations</a>
                        <a href="#tarif">Investissements judicieux</a>
                    </>
                ) : (
                    <>
                        <Link href="/pages/home#quartier">Le quartier</Link>
                        <Link href="/pages/home#residence">La résidence</Link>
                        <Link href="/pages/home#prestation">Les prestations</Link>
                        <Link href="/pages/home#tarif">Investissements judicieux</Link>
                    </>
                )}
            </nav>

            <div className="absolute right-[25%]">
                {pathname === "/contact" ? (
                    <Link href="/pages/home">
                        <button className="cursor-pointer rounded-full py-2 w-24 bg-[var(--color-title)] hover:bg-[var(--color-buttonHover)] text-[var(--color-fontHover)] hover:text-[var(--color-fontHover)]">
                            Retour accueil
                        </button>
                    </Link>
                ) : (
                    <Link href="/pages/contact">
                        <button className="cursor-pointer rounded-full py-2 w-24 bg-[var(--color-title)] hover:bg-[var(--color-buttonHover)] text-[var(--color-fontHover)] hover:text-[var(--color-fontHover)]">
                            Contact
                        </button>
                    </Link>
                )}
            </div>
        </header>
    );
}

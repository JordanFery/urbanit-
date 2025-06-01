
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#quartier", label: "Le quartier" },
    { href: "#residence", label: "La résidence" },
    { href: "#prestation", label: "Les prestations" },
    { href: "#tarif", label: "Investissements judicieux" },
];

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 h-16 w-full bg-[var(--color-bg1)] flex items-center px-4 z-50 shadow">
            {/* Logo */}
            <div className="flex items-center">
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

            {/* Menu desktop */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-[var(--color-gris)] text-sm items-center">
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
                <div className="hidden md:block">
                    {pathname === "/contact" ? (
                        <Link href="/">
                            <button className="rounded-full py-2 w-24 bg-[var(--color-title)] hover:bg-[var(--color-buttonHover)] hover:cursor-pointer text-[var(--color-fontHover)]">
                                Retour
                            </button>
                        </Link>
                    ) : (
                        <Link href="/contact">
                            <button className="rounded-full py-2 w-24 bg-[var(--color-title)] hover:bg-[var(--color-buttonHover)] hover:cursor-pointer text-[var(--color-fontHover)]">
                                Contact
                            </button>
                        </Link>
                    )}
                </div>
            </nav>

            {/* Contact button */}

            {/* Burger icon (mobile only) */}
            <button
                className="md:hidden ml-auto text-[var(--color-font)]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[var(--color-bg1)] flex flex-col items-center gap-4 py-4 shadow-md md:hidden z-40">
                    {navLinks.map(({ href, label }) =>
                        isHome ? (
                            <a
                                key={href}
                                href={href}
                                className="text-[var(--color-gris)] hover:underline"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </a>
                        ) : (
                            <Link
                                key={href}
                                href={`/${href}`}
                                className="text-[var(--color-gris)] hover:underline"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        )
                    )}
                    {pathname === "/contact" ? (
                        <Link href="/">
                            <button className="rounded-full py-2 w-24 bg-[var(--color-title)] text-[var(--color-fontHover)] hover:cursor-pointer mt-2">
                                Retour
                            </button>
                        </Link>
                    ) : (
                        <Link href="/contact">
                            <button className="rounded-full py-2 w-24 bg-[var(--color-title)] text-[var(--color-fontHover)] hover:cursor-pointer mt-2">
                                Contact
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
}

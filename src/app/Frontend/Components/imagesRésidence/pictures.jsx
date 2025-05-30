"use client";
import { useState } from "react";
import Image from "next/image";

export default function Photos() {
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const images = ["/1.jpg", "/2.jpg", "/3.jpg"];

    return (
        <>
            {/* Galerie d’images */}
            <section className="flex md:flex-row flex-col bg-[var(--color-bg2)]">
                {images.map((src, index) => (
                    <div key={index} className="p-4 object-contain cursor-pointer">
                        <Image
                            src={src}
                            alt={`photo-${index + 1}`}
                            width={1000}
                            height={1000}
                            onClick={() => setFullscreenImage(src)}
                            className="rounded shadow-lg hover:scale-105 transition-transform duration-200"
                        />
                    </div>
                ))}
            </section>

            {/* Modal plein écran */}
            {fullscreenImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={() => setFullscreenImage(null)}
                >
                    <Image
                        src={fullscreenImage}
                        alt="fullscreen"
                        width={1200}
                        height={800}
                        className="max-w-full max-h-full object-contain"
                    />
                    <button
                        className="absolute top-4 right-4 text-white text-3xl font-bold"
                        onClick={() => setFullscreenImage(null)}
                    >
                        ×
                    </button>
                </div>
            )}
        </>
    );
}

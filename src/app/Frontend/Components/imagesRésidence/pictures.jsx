"use client";
import { useState } from "react";
import Image from "next/image";

export default function Photos() {
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const images = ["/chantier.png", "/2.jpg", "/3.jpg"];

    return (
        <>
            <section className="flex md:flex-row flex-col bg-[var(--color-bg2)]">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="p-4 w-full md:w-1/3 cursor-pointer"
                        onClick={() => setFullscreenImage(src)}
                    >
                        <div className="relative aspect-[7/6] overflow-hidden rounded shadow-lg">
                            <Image
                                src={src}
                                alt={`photo-${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover object-center hover:scale-105 transition-transform duration-200"
                            />
                        </div>
                    </div>
                ))}
            </section>

            {fullscreenImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={() => setFullscreenImage(null)}
                >
                    <div className="relative w-[90vw] h-[90vh]">
                        <Image
                            src={fullscreenImage}
                            alt="fullscreen"
                            fill
                            sizes="90vw"
                            className="object-contain"
                        />
                    </div>
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

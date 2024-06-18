"use client";
import { useEffect, useRef, useState } from "react";
import HeroSearch from "./HeroSearch";

export default function HeroSection() {
  const words: string[] = ["İllere Göre", "İlçelere Göre", "Türkiye Geneli"];
  const [activeWord, setActiveWord] = useState<string>(words[0]);

  useEffect(() => {
    let index = 0;
    const updateWord = setInterval(() => {
      setActiveWord(words[index]);
      index++;
      if (index == words.length) {
        index = 0;
      }
    }, 1500);

    return () => {
      clearInterval(updateWord);
    };
  }, []);

  return (
    <section className="block h-screen w-full bg-hero-pattern bg-cover bg-center bg-no-repeat text-center">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-t from-colorOne to-colorTwo">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4">
          <h1 className="lg:6xl flex flex-col items-center gap-4 text-3xl font-bold uppercase text-white md:text-5xl">
            <span>Türkiye Hastane Listesi</span>
            <span
              key={activeWord}
              className="animate-opacityKey text-customYellow"
            >
              {activeWord}
            </span>
            <span className="hidden text-lg md:block">
              Türkiye İl-İlçe Hastane Arama Servisi.Telefon Numaraları ve
              Adresleri.
            </span>
          </h1>
          <HeroSearch />
        </div>
      </div>
    </section>
  );
}

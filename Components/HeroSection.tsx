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
    <section className="w-full h-screen block bg-hero-pattern bg-cover text-center bg-no-repeat bg-center">
      <div className="w-full flex justify-center items-center h-full bg-gradient-to-t from-colorOne to-colorTwo">
        <div className="container mx-auto flex justify-center items-center flex-col gap-4">
          <h1 className="text-white uppercase flex flex-col gap-4 items-center text-3xl md:text-6xl font-bold">
            <span>Türkiye Hastane Listesi</span>
            <span
              key={activeWord}
              className="text-customYellow animate-opacityKey"
            >
              {activeWord}
            </span>
            <span className="text-lg">
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

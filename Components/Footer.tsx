import { FooterLinks } from "@/Utils";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-black text-white">
      <div className="container mx-auto flex flex-col items-start justify-between gap-4 py-3 md:flex-row">
        <section className="basis-full text-center md:basis-1/4 md:text-left">
          <h4 className="basis-1 text-lg font-medium underline">
            Türkiye Hastaneler Listesi
          </h4>
          <p className="mt-2 capitalize leading-6">
            Türkiye Hastaneler Listesi Sitesi sizlere il-ilçe telefon
            numaraları, adresleri ve haritaları ile birlikte hastanele listesini
            sunar
          </p>
        </section>
        <section className="w-full basis-full text-center md:basis-3/4 md:text-left">
          <h4 className="text-center text-lg font-medium underline md:text-left">
            İllere Göre Hastaneler
          </h4>
          <ul className="mt-2 grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FooterLinks.map((item, index) => (
              <li key={index}>
                <Link title={item.name} href={item.url}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="border-1 w-full border-t border-t-white py-3">
        <div className="container mx-auto text-center md:pr-8">
          © {new Date().getFullYear()} | Powered By Serkan Afşar
        </div>
      </div>
    </footer>
  );
}

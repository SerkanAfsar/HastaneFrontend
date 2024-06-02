import { FooterLinks } from "@/Utils";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full text-white mt-auto bg-black ">
      <div className="container mx-auto py-3 flex justify-between items-start  flex-col md:flex-row gap-4">
        <section className="md:basis-1/4 text-center md:text-left">
          <h4 className="basis-1 text-lg font-medium underline">
            Türkiye Hastaneler Listesi
          </h4>
          <p className="capitalize leading-6  mt-2">
            Türkiye Hastaneler Listesi Sitesi sizlere il-ilçe telefon
            numaraları, adresleri ve haritaları ile birlikte hastanele listesini
            sunar
          </p>
        </section>
        <section className="basis-1 md:basis-3/4">
          <h4 className="basis-1 text-lg text-center md:text-left font-medium underline">
            İllere Göre Hastaneler
          </h4>
          <ul className="grid mt-2 grid-cols-2 md:grid-cols-4 gap-2">
            {FooterLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="w-full border-1 border-t py-3 border-t-white">
        <div className="container mx-auto text-center   md:pr-8">
          © {new Date().getFullYear()} | Powered By Serkan Afşar
        </div>
      </div>
    </footer>
  );
}

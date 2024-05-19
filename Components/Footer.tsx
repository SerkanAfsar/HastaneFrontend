import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full text-white mt-4 bg-black py-4 ">
      <div className="container mx-auto flex justify-between items-center  flex-col md:flex-row gap-4">
        <section className="md:basis-1/4 text-center md:text-left">
          <h4 className="basis-1 text-lg font-medium underline">
            Türkiye Hastaneler Listesi
          </h4>
          <p className="capitalize leading-6 text-md mt-2">
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
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
            <li>
              <Link href="/">İstanbul Hastane Listesi</Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="pt-4 w-full">
        <div className="container mx-auto text-center md:text-right md:pr-8">
          © {new Date().getFullYear()} | Powered By Serkan Afşar
        </div>
      </div>
    </footer>
  );
}

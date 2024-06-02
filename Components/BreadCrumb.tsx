import { ItemType } from "@/Types";
import Link from "next/link";

export default function BreadCrumb({ list }: { list: ItemType[] }) {
  return (
    <nav className="container mx-auto my-3">
      <ul className="flex gap-1 text-black text-base">
        <li className="after:content-['>']">
          <Link href={"/"} title="Hastane Rehberi" className={"pr-1"}>
            Anasayfa
          </Link>
        </li>
        {list.map((item, index) => (
          <li
            key={index}
            className="after:content-['>'] last:after:content-none flex items-center "
          >
            <Link
              href={item.url}
              title={`${item.pathName} Hastaneleri`}
              className={"pr-1"}
            >
              {item.pathName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

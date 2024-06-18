import { ItemType } from "@/Types";
import Link from "next/link";

export default function BreadCrumb({ list }: { list: ItemType[] }) {
  return (
    <nav className="container mx-auto my-4">
      <ul className="ml-3 block gap-1 text-sm text-black md:text-base">
        <li className="inline-block after:content-['>']">
          <Link href={"/"} title="Hastane Rehberi" className={"pr-1"}>
            Anasayfa
          </Link>
        </li>
        {list.map((item, index) => (
          <li
            key={index}
            className="inline-block items-center after:content-['>'] last:after:content-none"
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

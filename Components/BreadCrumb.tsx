import { BreadCrumbType } from "@/Types";
import Link from "next/link";

export default function BreadCrumb({ list }: BreadCrumbType) {
  return (
    <ul className="flex gap-2 text-black">
      <li>
        <Link href={"/"} title="Hastane Rehberi">
          Anasayfa
        </Link>
      </li>
      {list.map((item, index) => (
        <li key={index}>
          <Link href={item.url} title={item.pathName}>
            {item.pathName}
          </Link>
        </li>
      ))}
    </ul>
  );
}

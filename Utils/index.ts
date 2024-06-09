import { FooterLinks, ResultType } from "@/Types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
var slugify = require("slugify");
export * from "./Fonts";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const slugText = ({ text }: { text: string }) => {
  if (text) {
    return slugify(text, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: "tr", // language code of the locale to use
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
  }
  return null;
};

export const throwErr = (result: ResultType<any>) => {
  if (!result.success) {
    throw new Error(
      result.errorList ? result.errorList[0] : "An Error Accured",
    );
  }
};

export const FooterLinks: FooterLinks[] = [
  { name: "İstanbul Hastane Listesi", url: "/hastaneler/istanbul" },
  { name: "İzmir Hastane Listesi", url: "/hastaneler/izmir" },
  { name: "Ankara Hastane Listesi", url: "/hastaneler/ankara" },
  { name: "Bursa Hastane Listesi", url: "/hastaneler/bursa" },
  { name: "Eskişehir Hastane Listesi", url: "/hastaneler/eskisehir" },
  { name: "Adana Hastane Listesi", url: "/hastaneler/adana" },
  { name: "Konya Hastane Listesi", url: "/hastaneler/konya" },
  { name: "Kayseri Hastane Listesi", url: "/hastaneler/kayseri" },
  { name: "Kocaeli Hastane Listesi", url: "/hastaneler/kocaeli" },
  { name: "Ağrı Hastane Listesi", url: "/hastaneler/agri" },
  { name: "Malatya Hastane Listesi", url: "/hastaneler/malatya" },
  { name: "Elazığ Hastane Listesi", url: "/hastaneler/elazig" },
  { name: "Kilis Hastane Listesi", url: "/hastaneler/kilis" },
  { name: "Mersin Hastane Listesi", url: "/hastaneler/mersin" },
  { name: "Muğla Hastane Listesi", url: "/hastaneler/mugla" },
  { name: "Manisa Hastane Listesi", url: "/hastaneler/manisa" },
];

export const formatPhoneNumber = (phoneNumberString: string): string | null => {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);

  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
};

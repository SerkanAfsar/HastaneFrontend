"use client";
import useScrollTop from "@/Hooks/useScrollTop";
import { cn } from "@/Utils";
import Link from "next/link";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaX } from "react-icons/fa6";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const HeaderRef = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...rest }, ref) => {
    const pathName = usePathname();
    const headerRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => headerRef.current as HTMLElement);
    const { isSticky } = useScrollTop(headerRef);
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
      if (isActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [isActive]);

    useEffect(() => {
      if (isActive) {
        setIsActive(false);
      }
    }, [pathName]);

    return (
      <header
        ref={headerRef}
        className={cn(
          "left-0 right-0 top-0 z-20 w-full bg-black px-0 py-3 text-[#fff] opacity-90 md:bg-none md:py-5",
          isSticky && "animate-test opacity-100",
          isActive && "h-full opacity-100",
          pathName == "/" ? "fixed" : "sticky",
          className,
        )}
        {...rest}
      >
        <nav className="container relative mx-auto flex items-center justify-between">
          <Link
            href={"/"}
            title="Türkiye Hastane Numaraları | Adresleri"
            className="text-lg font-bold md:text-2xl md:font-normal"
          >
            Hastane Rehberi
          </Link>
          <ul
            className={cn(
              "hidden gap-5 lg:flex lg:items-center",
              isActive &&
                "container absolute inset-0 top-10 mx-auto flex min-h-screen flex-col bg-black md:mx-0",
            )}
          >
            <li>
              <Link href={"/"} title="Hastane Rehberi">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link title="İstanbul Hastaneleri" href={"/hastaneler/istanbul"}>
                İstanbul Hastaneleri
              </Link>
            </li>
            <li>
              <Link title="Ankara Hastaneleri" href={"/hastaneler/ankara"}>
                Ankara Hastaneleri
              </Link>
            </li>
            <li>
              <Link title="İzmir Hastaneleri" href={"/hastaneler/izmir"}>
                İzmir Hastaneleri
              </Link>
            </li>

            <li>
              <Link
                title="Tüm İllere Ait Hastane Listesi"
                href={"/hastaneler"}
                className="block w-full rounded-lg border border-black bg-customYellow px-4 py-2 text-center text-black outline md:mt-0 lg:w-fit"
              >
                Tüm İller
              </Link>
            </li>
          </ul>
          <div
            className="block cursor-pointer text-white lg:hidden"
            onClick={(e) => setIsActive((prev) => !prev)}
          >
            {isActive ? <FaX size={"20px"} /> : <FaBars size={"25px"} />}
          </div>
        </nav>
      </header>
    );
  },
);
HeaderRef.displayName = "Header";

export default HeaderRef;

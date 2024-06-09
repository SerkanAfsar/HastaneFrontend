"use client";
import useScrollTop from "@/Hooks/useScrollTop";
import { cn } from "@/Utils";
import Link from "next/link";
import React, { useImperativeHandle, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const HeaderRef = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...rest }, ref) => {
    const pathName = usePathname();
    const headerRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => headerRef.current as HTMLElement);
    const { isSticky } = useScrollTop(headerRef);
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
      <header
        ref={headerRef}
        className={cn(
          "left-0 right-0 top-0 w-full bg-black px-0 py-3 text-[#fff] opacity-90 md:bg-none md:py-5",
          isSticky && "z-20 animate-test bg-[#000]",
          pathName == "/" ? "fixed" : "sticky",
          className,
        )}
        {...rest}
      >
        <nav className="container mx-auto flex items-center justify-between">
          <Link
            href={"/"}
            className="text-lg font-bold md:text-2xl md:font-normal"
          >
            Hastane Rehberi
          </Link>
          <ul className={cn("hidden gap-5 lg:flex")}>
            <li>
              <Link href={"/hastaneler/istanbul"}>İstanbul Hastaneleri</Link>
            </li>
            <li>
              <Link href={"/hastaneler/ankara"}>Ankara Hastaneleri</Link>
            </li>
            <li>
              <Link href={"/hastaneler/izmir"}>İzmir Hastaneleri</Link>
            </li>

            <li>
              <Link
                href={"/hastaneler"}
                className="w-full rounded-lg border border-black bg-customYellow px-4 py-2 text-center text-black outline lg:w-fit"
              >
                Tüm İller
              </Link>
            </li>
          </ul>
          <div
            className="block lg:hidden"
            onClick={(e) => setIsActive((prev) => !prev)}
          >
            Deneme
          </div>
        </nav>
      </header>
    );
  },
);
HeaderRef.displayName = "Header";

export default HeaderRef;

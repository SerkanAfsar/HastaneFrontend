"use client";
import useScrollTop from "@/Hooks/useScrollTop";
import { cn } from "@/Utils";
import Link from "next/link";
import React, { useImperativeHandle, useRef, useState } from "react";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const HeaderRef = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, ...rest }, ref) => {
    const headerRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => headerRef.current as HTMLElement);
    const { isSticky } = useScrollTop(headerRef);
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
      <header
        ref={headerRef}
        className={cn(
          "w-full  px-0 md:py-5 py-3 top-0 left-0 right-0 opacity-90y text-[#fff] sticky lg:fixed bg-black md:bg-none",
          isSticky && "animate-test bg-[#000] z-20",
          className
        )}
        {...rest}
      >
        <nav className="container mx-auto flex justify-between items-center">
          <Link
            href={"/"}
            className="text-lg font-bold md:font-normal md:text-2xl"
          >
            Hastane Rehberi
          </Link>
          <ul className={cn("hidden lg:flex gap-5")}>
            <li>Anasayfa</li>
            <li>İstanbul Hastaneleri</li>
            <li>Ankara Hastaneleri</li>
            <li>İzmir Hastaneleri</li>
            <li>
              <Link
                href={"/hastaneler"}
                className="bg-customYellow outline w-full lg:w-fit border-black border rounded-lg text-black text-center py-2 px-4"
              >
                Tüm İller
              </Link>
            </li>
          </ul>
          <div
            className="lg:hidden block"
            onClick={(e) => setIsActive((prev) => !prev)}
          >
            Deneme
          </div>
        </nav>
      </header>
    );
  }
);
HeaderRef.displayName = "Header";

export default HeaderRef;

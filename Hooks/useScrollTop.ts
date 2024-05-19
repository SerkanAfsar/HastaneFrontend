import React, { useState, useEffect } from "react";

export default function useScrollTop(inputRef: React.RefObject<HTMLElement>) {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      const win: Window = window;
      const scrollHandler = (e: Event) => {
        const clientHeight = inputRef.current?.clientHeight || 100;
        if (win.scrollY >= clientHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      win.addEventListener("scroll", scrollHandler);
      return () => {
        win.removeEventListener("scroll", scrollHandler);
      };
    }
  }, [inputRef]);

  return { isSticky };
}

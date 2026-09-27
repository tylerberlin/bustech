"use client";

import { useEffect, useState } from "react";
import { links } from "@/data/site";
import { LogoMark } from "./LogoMark";

const items = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#officers", label: "Officers" },
  { href: "#connect", label: "Connect" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-7 w-auto transition-transform group-hover:-rotate-3" />
          <span className="font-display text-lg font-black uppercase tracking-tight">
            Bus<span className="text-red">Tech</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={links.involve}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red px-4 py-2 font-display text-sm font-extrabold uppercase tracking-wide text-paper transition-colors hover:bg-red-bright"
            >
              Join on Involve
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="relative h-10 w-10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`absolute left-2 right-2 h-0.5 bg-paper transition-all ${open ? "top-1/2 rotate-45" : "top-3.5"}`} />
          <span className={`absolute left-2 right-2 h-0.5 bg-red transition-all ${open ? "top-1/2 -rotate-45" : "top-6"}`} />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-500 md:hidden ${open ? "max-h-[100svh]" : "max-h-0"}`}
      >
        <ul className="flex h-[calc(100svh-4rem)] flex-col gap-2 px-5 pt-8">
          {items.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-line py-4 font-display text-4xl font-black uppercase"
              >
                <span className="font-mono text-xs font-normal text-red">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a
              href={links.involve}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-red py-4 text-center font-display text-lg font-extrabold uppercase text-paper"
            >
              Join on Involve →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

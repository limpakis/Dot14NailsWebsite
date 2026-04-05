"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#services", label: "Υπηρεσίες", num: "01" },
  { href: "#gallery", label: "Gallery", num: "02" },
  { href: "#about", label: "Το Studio", num: "03" },
  { href: "#contact", label: "Επικοινωνία", num: "04" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="sm:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px]"
        aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
        aria-expanded={open}
      >
        <span className="block h-px transition-all duration-300 origin-left"
          style={{ backgroundColor: "#4A3728", width: open ? "20px" : "20px", transform: open ? "rotate(45deg) translateY(-1px)" : undefined }} />
        <span className="block h-px transition-all duration-300"
          style={{ backgroundColor: "#4A3728", width: "14px", opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : undefined }} />
        <span className="block h-px transition-all duration-300 origin-left"
          style={{ backgroundColor: "#4A3728", width: open ? "20px" : "20px", transform: open ? "rotate(-45deg) translateY(1px)" : undefined }} />
      </button>

      {/* Slide-down panel */}
      <div
        className="sm:hidden fixed left-0 right-0 z-40 overflow-hidden transition-all duration-500"
        style={{
          top: "64px",
          maxHeight: open ? "400px" : "0px",
          backgroundColor: "#F2EAE0",
          borderBottom: open ? "1px solid rgba(212,137,122,0.2)" : "none",
          boxShadow: open ? "0 8px 24px rgba(74,55,40,0.08)" : "none",
        }}
      >
        <nav className="px-6 py-6 flex flex-col">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-4 font-serif transition-opacity active:opacity-50"
              style={{
                borderBottom: i < links.length - 1 ? "1px solid rgba(74,55,40,0.08)" : "none",
                color: "#4A3728",
              }}
            >
              <span className="text-lg tracking-widest uppercase">{l.label}</span>
              <span className="text-xs font-light" style={{ color: "#D4897A" }}>{l.num}</span>
            </a>
          ))}

          <Link
            href="https://www.instagram.com/dot.14_nailsalon/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center gap-2 font-serif text-sm tracking-widest uppercase transition-opacity active:opacity-50"
            style={{ color: "#8FBB9E" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            @dot.14_nailsalon
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 z-30"
          style={{ top: "64px", backgroundColor: "rgba(74,55,40,0.15)" }}
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "Το Studio" },
  { href: "#contact", label: "Επικοινωνία" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="sm:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
        aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
        aria-expanded={open}
      >
        <span
          className="block w-5 h-px transition-all duration-300 origin-center"
          style={{
            backgroundColor: "#4A3728",
            transform: open ? "translateY(4px) rotate(45deg)" : undefined,
          }}
        />
        <span
          className="block w-5 h-px transition-all duration-300"
          style={{
            backgroundColor: "#4A3728",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block w-5 h-px transition-all duration-300 origin-center"
          style={{
            backgroundColor: "#4A3728",
            transform: open ? "translateY(-4px) rotate(-45deg)" : undefined,
          }}
        />
      </button>

      {/* Full-screen overlay */}
      <div
        className="sm:hidden fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300"
        style={{
          backgroundColor: "#F2EAE0",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          top: "64px", // below nav
        }}
      >
        <nav className="flex flex-col items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-script text-5xl transition-opacity hover:opacity-50"
              style={{ color: "#4A3728" }}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="https://www.instagram.com/dot.14_nailsalon/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 font-serif text-sm tracking-widest uppercase transition-opacity hover:opacity-50"
            style={{ color: "#8FBB9E" }}
          >
            @dot.14_nailsalon
          </Link>
        </nav>
      </div>
    </>
  );
}

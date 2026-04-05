"use client";

export default function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block px-8 py-3 text-sm tracking-widest uppercase font-serif border-2 transition-all"
      style={{ borderColor: "#8FBB9E", color: "#4A3728", backgroundColor: "rgba(242,234,224,0.7)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#8FBB9E";
        (e.currentTarget as HTMLAnchorElement).style.color = "#F2EAE0";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
        (e.currentTarget as HTMLAnchorElement).style.color = "#8FBB9E";
      }}
    >
      {children}
    </a>
  );
}

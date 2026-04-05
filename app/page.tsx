import Image from "next/image";
import Link from "next/link";
import OutlineButton from "./components/OutlineButton";
import MobileNav from "./components/MobileNav";

const services = [
  {
    title: "Manicure",
    desc: "Κλασικό ή SPA manicure με περιποίηση χεριών και βαφή.",
    img: "/nails1.png",
  },
  {
    title: "Pedicure",
    desc: "Πλήρης περιποίηση ποδιών με απολέπιση και ενυδάτωση.",
    img: "/pedicure1.png",
  },
  {
    title: "Gel Νύχια",
    desc: "Μακράς διάρκειας gel με φυσικό ή ενισχυμένο αποτέλεσμα.",
    img: "/gelnails1.png",
  },
  {
    title: "Nail Art",
    desc: "Σχέδια, French, ombre και ό,τι φανταστείς.",
    img: "/frenchgelnails1.png",
  },
  {
    title: "Ακρυλικά",
    desc: "Επεκτάσεις νυχιών για τέλειο σχήμα και μήκος.",
    img: "/akrylikanails.jpg",
  },
  {
    title: "Αφαίρεση",
    desc: "Ασφαλής και απαλή αφαίρεση gel και ακρυλικών.",
    img: "/removal.jpeg",
  },
];

const gallery = [
  { src: "/akrylikanails.jpg", label: "Ακρυλικά" },
  { src: "/nails3.png", label: "Chrome" },
  { src: "/frenchgelnails1.png", label: "French Gel" },
  { src: "/nails2.png", label: "Nail Art" },
  { src: "/gelnails1.png", label: "Gel" },
  { src: "/nails1.png", label: "Manicure" },
];

const hours = [
  { day: "Δευτέρα", time: "Κλειστά" },
  { day: "Τρίτη", time: "10:00 – 20:00" },
  { day: "Τετάρτη", time: "10:00 – 20:00" },
  { day: "Πέμπτη", time: "10:00 – 20:00" },
  { day: "Παρασκευή", time: "10:00 – 20:00" },
  { day: "Σάββατο", time: "09:00 – 17:00" },
  { day: "Κυριακή", time: "Κλειστά" },
];

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F2EAE0", color: "#4A3728" }}>

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
        style={{ backgroundColor: "rgba(242,234,224,0.92)", borderColor: "rgba(212,137,122,0.2)" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-script text-3xl leading-none" style={{ color: "#8FBB9E" }}>
            Dot. <span style={{ color: "#D4897A" }}>14</span>
          </span>
          <div className="hidden sm:flex items-center gap-8 text-sm tracking-widest uppercase font-serif" style={{ color: "#7A6055" }}>
            <a href="#services" className="transition-opacity hover:opacity-50">Υπηρεσίες</a>
            <a href="#gallery" className="transition-opacity hover:opacity-50">Gallery</a>
            <a href="#about" className="transition-opacity hover:opacity-50">Το Studio</a>
            <a href="#contact" className="transition-opacity hover:opacity-50">Επικοινωνία</a>
          </div>
          <div className="flex items-center gap-1">
            <Link href="https://www.instagram.com/dot.14_nailsalon/" target="_blank" rel="noopener noreferrer" style={{ color: "#D4897A" }} className="flex items-center justify-center w-11 h-11 transition-opacity hover:opacity-50" aria-label="Instagram">
              <InstagramIcon />
            </Link>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
        {/* background image — blurred, very subtle */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/interior.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ filter: "blur(2px) brightness(0.92) saturate(0.7)", transform: "scale(1.05)" }}
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(242,234,224,0.72)" }} />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="font-serif tracking-[0.3em] uppercase text-sm mb-6" style={{ color: "#8FBB9E" }}>
            Nail Salon · Άνω Ιλίσια
          </p>
          <h1 className="font-script leading-none mb-4" style={{ fontSize: "clamp(5rem, 18vw, 9rem)", color: "#8FBB9E" }}>
            Dot. <span style={{ color: "#D4897A" }}>14</span>
          </h1>
          <p className="font-serif text-lg sm:text-xl font-light mt-6 mb-10 leading-relaxed" style={{ color: "#5A4535" }}>
            Ένας χώρος αφιερωμένος στην περιποίηση των νυχιών σου.{" "}
            Αποτελέσματα που διαρκούν, αίσθηση που αξίζει.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto px-2 sm:px-0">
            <Link
              href="https://www.instagram.com/dot.14_nailsalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 sm:py-3 text-sm tracking-widest uppercase font-serif transition-opacity hover:opacity-80 text-center"
              style={{ backgroundColor: "#D4897A", color: "#F2EAE0" }}
            >
              Κλείσε Ραντεβού
            </Link>
            <OutlineButton href="#services">Υπηρεσίες</OutlineButton>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(212,137,122,0.6)" }}>
          <span className="font-serif text-xs tracking-widest uppercase">scroll</span>
          <div className="w-px h-8" style={{ backgroundColor: "rgba(212,137,122,0.4)" }} />
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4 max-w-2xl mx-auto px-6 py-2">
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(212,137,122,0.3)" }} />
        <span className="font-script text-3xl" style={{ color: "rgba(212,137,122,0.4)" }}>✦</span>
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(212,137,122,0.3)" }} />
      </div>

      {/* ── Services ── */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-serif tracking-[0.3em] uppercase text-xs mb-3" style={{ color: "#8FBB9E" }}>Τι προσφέρουμε</p>
            <h2 className="font-script text-5xl sm:text-6xl" style={{ color: "#4A3728" }}>Υπηρεσίες</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group border overflow-hidden transition-all duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.55)", borderColor: "rgba(212,137,122,0.15)" }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold mb-1" style={{ color: "#4A3728" }}>{s.title}</h3>
                  <p className="font-serif font-light text-sm leading-relaxed" style={{ color: "#7A6055" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4 max-w-2xl mx-auto px-6 py-2">
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(143,187,158,0.3)" }} />
        <span className="font-script text-3xl" style={{ color: "rgba(143,187,158,0.4)" }}>✦</span>
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(143,187,158,0.3)" }} />
      </div>

      {/* ── Gallery ── */}
      <section id="gallery" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-serif tracking-[0.3em] uppercase text-xs mb-3" style={{ color: "#D4897A" }}>Οι δουλειές μας</p>
            <h2 className="font-script text-5xl sm:text-6xl" style={{ color: "#4A3728" }}>Gallery</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {gallery.map((item) => (
              <div key={item.src} className="group relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(74,55,40,0.5) 0%, transparent 60%)" }}
                >
                  <span className="font-serif text-xs tracking-widest uppercase" style={{ color: "#F2EAE0" }}>
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4 max-w-2xl mx-auto px-6 py-2">
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(212,137,122,0.3)" }} />
        <span className="font-script text-3xl" style={{ color: "rgba(212,137,122,0.4)" }}>✦</span>
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(212,137,122,0.3)" }} />
      </div>

      {/* ── About ── */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-serif tracking-[0.3em] uppercase text-xs mb-3" style={{ color: "#D4897A" }}>Το Studio μας</p>
            <h2 className="font-script text-5xl sm:text-6xl mb-8" style={{ color: "#4A3728" }}>Ένας χώρος για εσένα</h2>
            <div className="space-y-4 font-serif font-light leading-relaxed" style={{ color: "#7A6055" }}>
              <p>
                Το <strong className="font-medium" style={{ color: "#4A3728" }}>Dot. 14</strong> βρίσκεται
                στην Εθνικής Αντιστάσεως 14, στα Άνω Ιλίσια, σε ένα ζεστό και
                φωτεινό χώρο που σχεδιάστηκε αποκλειστικά για να νιώσεις άνετα.
              </p>
              <p>
                Χρησιμοποιούμε επώνυμα προϊόντα υψηλής ποιότητας και φροντίζουμε
                κάθε λεπτομέρεια — από τη μυρωδιά του χώρου ως το τελευταίο
                στρώμα χρώματος.
              </p>
              <p>
                Κλείσε ραντεβού μέσω Instagram ή τηλεφώνου και
                αφέσου σε μια εμπειρία που αξίζει.
              </p>
            </div>
            <Link
              href="https://www.instagram.com/dot.14_nailsalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-serif tracking-widest uppercase transition-opacity hover:opacity-50"
              style={{ color: "#8FBB9E" }}
            >
              <InstagramIcon />
              @dot.14_nailsalon
            </Link>
          </div>

          {/* Interior photo */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/interior.jpg"
              alt="Dot. 14 Nail Salon interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="flex items-center gap-4 max-w-2xl mx-auto px-6 py-2">
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(143,187,158,0.3)" }} />
        <span className="font-script text-3xl" style={{ color: "rgba(143,187,158,0.4)" }}>✦</span>
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(143,187,158,0.3)" }} />
      </div>

      {/* ── Contact & Hours ── */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-serif tracking-[0.3em] uppercase text-xs mb-3" style={{ color: "#8FBB9E" }}>Πού θα μας βρεις</p>
            <h2 className="font-script text-5xl sm:text-6xl" style={{ color: "#4A3728" }}>Επικοινωνία</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hours */}
            <div className="border p-8" style={{ backgroundColor: "rgba(255,255,255,0.6)", borderColor: "rgba(143,187,158,0.2)" }}>
              <h3 className="font-serif text-lg font-semibold tracking-widest uppercase mb-6 flex items-center gap-3" style={{ color: "#4A3728" }}>
                <span style={{ color: "#8FBB9E" }}>✦</span> Ωράριο
              </h3>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between font-serif font-light" style={{ color: "#7A6055" }}>
                    <span>{h.day}</span>
                    <span style={{ color: h.time === "Κλειστά" ? "rgba(212,137,122,0.6)" : "#4A3728" }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="border p-8" style={{ backgroundColor: "rgba(255,255,255,0.6)", borderColor: "rgba(212,137,122,0.2)" }}>
              <h3 className="font-serif text-lg font-semibold tracking-widest uppercase mb-6 flex items-center gap-3" style={{ color: "#4A3728" }}>
                <span style={{ color: "#D4897A" }}>✦</span> Στοιχεία
              </h3>
              <div className="space-y-5 font-serif font-light" style={{ color: "#7A6055" }}>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8FBB9E" }}>Διεύθυνση</p>
                  <p>Εθνικής Αντιστάσεως 14</p>
                  <p>Άνω Ιλίσια, Τ.Κ. 15772</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8FBB9E" }}>Τηλέφωνο</p>
                  <Link href="tel:2107475270" className="transition-opacity hover:opacity-50">210 747 5270</Link>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8FBB9E" }}>Instagram</p>
                  <Link href="https://www.instagram.com/dot.14_nailsalon/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50">
                    @dot.14_nailsalon
                  </Link>
                </div>
              </div>
              <Link
                href="https://www.instagram.com/dot.14_nailsalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-3 text-sm tracking-widest uppercase font-serif w-full text-center transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#D4897A", color: "#F2EAE0" }}
              >
                Κλείσε Ραντεβού
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t py-10 px-6" style={{ borderColor: "rgba(212,137,122,0.2)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-script text-2xl" style={{ color: "#8FBB9E" }}>
            Dot. <span style={{ color: "#D4897A" }}>14</span>
          </span>
          <p className="font-serif text-xs tracking-wide" style={{ color: "rgba(122,96,85,0.6)" }}>
            © {new Date().getFullYear()} Dot. 14 Nail Salon · Εθνικής Αντιστάσεως 14, Άνω Ιλίσια
          </p>
          <Link href="https://www.instagram.com/dot.14_nailsalon/" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-50" style={{ color: "rgba(212,137,122,0.6)" }} aria-label="Instagram">
            <InstagramIcon />
          </Link>
        </div>
      </footer>
    </div>
  );
}

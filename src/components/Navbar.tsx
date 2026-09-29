import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="hero"
          smooth
          duration={500}
          className="cursor-pointer font-mono-custom text-lg font-bold tracking-tight text-slate-100"
        >
          <span className="text-gradient">&lt;/&gt;</span> Arjun.dev
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                duration={500}
                offset={-80}
                spy
                onSetActive={() => setActive(item.id)}
                className={`cursor-pointer text-sm font-medium transition-colors hover:text-cyan-300 ${
                  active === item.id ? "text-cyan-300" : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="glass mx-4 mb-4 flex flex-col gap-4 rounded-xl p-5 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="cursor-pointer text-sm font-medium text-slate-200 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

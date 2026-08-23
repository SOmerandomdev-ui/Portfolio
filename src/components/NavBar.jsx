import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/About", label: "About Me" },
  { to: "/Projects", label: "Projects" },
  { to: "/Skills", label: "Skills" },
  { to: "/Education", label: "Education" },
];

function linkClass(isActive) {
  return `inline-flex min-h-11 items-center text-sm transition duration-200 hover:text-cyan-400 ${
    isActive ? "text-cyan-400" : "text-gray-300"
  }`;
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="flex h-16 w-full items-center justify-between px-5 text-white md:h-[10vh] md:px-12"
      >
        <NavLink
          to="/"
          className="text-xl font-semibold tracking-wide transition duration-200 hover:text-cyan-400"
        >
          Dion Machado
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => linkClass(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/Contact"
            className="inline-flex min-h-11 items-center rounded-full border border-cyan-400/50 px-5 py-2 text-sm text-cyan-400 transition duration-200 hover:bg-cyan-400 hover:text-[#070B14]"
          >
            Contact
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="glass mx-4 rounded-2xl px-4 py-3 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `${linkClass(isActive)} px-2`}
                onClick={close}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/Contact"
              onClick={close}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-400/50 px-5 py-2 text-sm text-cyan-400 transition duration-200 hover:bg-cyan-400 hover:text-[#070B14]"
            >
              Contact
            </NavLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="relative flex items-center justify-center md:justify-between px-6 md:px-12 py-5">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-foreground text-center">
          UDDESHYA
        </a>



        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}

    </nav>
  );
};

export default Navbar;

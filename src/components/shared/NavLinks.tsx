"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

export default function NavLinks() {
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map((link) => {
        const isActive = activeSection === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="relative px-3 py-2 group"
          >
            <span
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive ? "text-white" : "text-gray-400 group-hover:text-white"
              }`}
            >
              {link.label}
            </span>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}

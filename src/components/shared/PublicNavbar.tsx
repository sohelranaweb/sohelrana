import Link from "next/link";

import MobileMenu from "./MobileMenu";
import { Button } from "../ui/button";
const PublicNavbar = async () => {
  const navItems = [
    { href: "/consultation", label: "Consultation" },
    { href: "/health-plans", label: "Health Plans" },
    { href: "/medicine", label: "Medicine" },
    { href: "/diagnostics", label: "Diagnostics" },
    { href: "/ngos", label: "NGOs" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">Sohel</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div>
            <Link href="/login" className="text-lg font-medium">
              <Button className="w-full">Download Resume</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu navItems={navItems} />
      </div>
    </header>
  );
};

export default PublicNavbar;

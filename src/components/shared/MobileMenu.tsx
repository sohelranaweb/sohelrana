"use client";
import { LayoutDashboard, Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  navItems: Array<{ href: string; label: string }>;
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-75 sm:w-100 p-4">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col space-y-4 mt-8">
            {navItems.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium"
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;

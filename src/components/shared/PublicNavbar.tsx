import Link from "next/link";
import { HeartPulse } from "lucide-react";
// import { ModeToggle } from "@/components/mode-toggle";
// import { getCookie } from "@/services/auth/takenHandlers";
import MobileMenu from "./MobileMenu";
// import { getUserInfo } from "@/services/auth/getUserInfo";
// import { getDefaultDashboardRoute } from "@/lib/auth-utils";
// import NavbarAuthButtons from "./NavbarAuthButton";
const PublicNavbar = async () => {
  const navItems = [
    { href: "/consultation", label: "Consultation" },
    { href: "/health-plans", label: "Health Plans" },
    { href: "/medicine", label: "Medicine" },
    { href: "/diagnostics", label: "Diagnostics" },
    { href: "/ngos", label: "NGOs" },
  ];
  // const accessToken = await getCookie("accessToken");
  // const userInfo = accessToken ? await getUserInfo() : null;
  // const dashboardRoute = userInfo
  //   ? getDefaultDashboardRoute(userInfo.role)
  //   : "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0e27]/80 backdrop-blur-md border-b border-white/10">
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
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          {/* 
          <NavbarAuthButtons
            initialHasToken={!!accessToken}
            initialUserInfo={userInfo}
            initialDashboardRoute={dashboardRoute}
          /> */}
          <div>login</div>
        </div>

        {/* Mobile Menu */}

        <MobileMenu
          navItems={navItems}
          // hasAccessToken={!!accessToken}
          // userInfo={userInfo}
          // dashboardRoute={dashboardRoute}
        />
      </div>
    </header>
  );
};

export default PublicNavbar;

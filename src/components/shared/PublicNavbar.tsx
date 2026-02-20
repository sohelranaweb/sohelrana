import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
const PublicNavbar = async () => {
  const navItems = [
    { href: "#horo", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
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

        {/* Desktop Navigation */}
        <NavLinks />

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

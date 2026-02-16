// export const dynamic = "force-dynamic";

import PublicNavbar from "@/components/shared/PublicNavbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicNavbar />
      {children}
      {/* <PublicFooter /> */}
    </>
  );
};

export default CommonLayout;

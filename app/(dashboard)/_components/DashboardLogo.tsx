import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLogo = () => {
  return (
    <Link href="/" className="px-4 pt-2">
      <Image
        src="/logo-h.svg"
        alt="Aamar Dokan"
        width={200}
        height={40}
        priority
      />
    </Link>
  );
};

export default DashboardLogo;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLogo = () => {
  return (
    <Link href="/" className="px-6">
      <Image
        src="/logo-h.svg"
        alt="Aamar Dokan"
        width={150}
        height={38}
        priority
      />
    </Link>
  );
};

export default DashboardLogo;

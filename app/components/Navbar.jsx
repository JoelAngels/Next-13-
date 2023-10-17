import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
      {/* height is not need, the width on its own will auto scale the height */}
      <Image
        src={Logo}
        alt="Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Home</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">tickets</Link>
    </nav>
  );
}

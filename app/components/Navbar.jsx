import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>Joel Angel</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">tickets</Link>
    </nav>
  );
}

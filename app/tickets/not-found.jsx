import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-4xl">We Hit a Brick Wall</h2>
      <p>We could not found the ticket you were looking for</p>
      <p>
        Go bck to the <Link href="/">Dashboard</Link>
      </p>
    </main>
  );
}

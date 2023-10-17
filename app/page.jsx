import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        1 The LORD is my shepherd, I lack nothing. 2 He makes me lie down in
        green pastures, he leads me beside quiet waters, 3 he refreshes my soul.
        He guides me along the right paths for his name’s sake. 4 Even though I
        walk through the darkest valley,I will fear no evil, for you are with
        me; your rod and your staff, they comfort me. 5 You prepare a table
        before me in the presence of my enemies. You anoint my head with oil; my
        cup overflows. 6 Surely your goodness and love will follow me all the
        days of my life, and I will dwell in the house of the LORD forever.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Study to shew thyself approved unto God, a workman that needeth not to
          be ashamed, rightly dividing the word of truth.
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Study to shew thyself approved unto God, a workman that needeth not to
          be ashamed, rightly dividing the word of truth.
        </p>
      </div>
    </main>
  );
}

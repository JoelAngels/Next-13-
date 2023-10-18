import { notFound } from "next/navigation";
import React from "react";

// export const dynamicParams = false

//in build time for production, it is going to make all the routes and pages ahead of time, this will mean performance will be way better, all pages are pre-rendeed
export async function generateStaticParams() {
  const response = await fetch(`http://localhost:4000/tickets`);

  const tickets = await response.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}
async function getTicket(id) {
  //imitate delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60, //use o to opt out of using cache
    },
  });

  //   run this code is the response is not okay
  if (!response.ok) {
    notFound();
  }
  return response.json();
}
//access the id using params
export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}

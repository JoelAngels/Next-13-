import Link from "next/link";
import React from "react";

//fetch api to fetch the data
//since this will be updating almost every hour, we need to revalidate the data , so we add another second argument which is an object
async function getTickets() {
  const response = await fetch("http://localhost:4000/tickets", {
    //the amount of time next should wait since the last page visit before revelaidating the data again
    next: {
      revalidate: 0, //use o to out put of using cache
      // revalidate: 30,
    },
  });
  //grab the data,
  return response.json();
}

//we declare the server components as async functions
export default async function TicketList() {
  // since line 7 is returning a Promise, I need to await the return ,
  const tickets = await getTickets();
  // fetch api

  return (
    // lets now map through the tickets
    //next step is click on
    /*
    Click on one of these tickets.
    Navigate to a details page for that ticket, 
    Route should be "/tickets/id"
    */
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)} ...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
            <h3>{ticket.user_email}</h3>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center"> There are no open tickets</p>
      )}
    </>
  );
}

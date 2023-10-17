import React from "react";

//fetch api to fetch the data
async function getTickets() {
  const response = await fetch("http://localhost:4000/tickets");
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
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)} ...</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
          <h3>{ticket.user_email}</h3>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center"> There are no open tickets</p>
      )}
    </>
  );
}

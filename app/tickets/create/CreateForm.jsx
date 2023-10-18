"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

export default function CreateForm() {
  const router = useRouter();
  //states
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    // prevent the default function of a form which is to refresh the page
    e.preventDefault();
    // set it to true after they have submitted the form so they cant spam click it
    setIsLoading(true);

    const newTicket = {
      title,
      body,
      priority,
      user_email: "joelangel.dev",
    };

    // Now lets send in a post request to the json server to aadd the new data above
    const response = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, //data send in is json
      body: JSON.stringify(newTicket), //data we add to the file,
    });

    // check the reponse status, success request
    if (response.status === 201) {
      router.refresh();
      router.push("/tickets");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      {/* Label 2 */}

      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>

      {/* Label 3 */}
      <label>
        <span>Priotity:</span>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>

      {/* disable after clicked once */}
      <button className="btn-primary" disabled={isLoading}>
        {/*  submitted,  */}
        {isLoading && <span>Adding...</span>}
        {/* until we've submitted show this,  */}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}

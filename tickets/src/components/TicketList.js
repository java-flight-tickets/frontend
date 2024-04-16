import React from 'react';

function TicketList({ tickets, onDelete }) {
  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <h3>{ticket.provider} - {ticket.date}</h3>
          <p>From {ticket.cityDeparture} to {ticket.cityArrival}</p>
          <button onClick={() => onDelete(ticket.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TicketList;

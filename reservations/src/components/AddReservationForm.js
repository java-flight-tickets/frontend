import React, { useState } from 'react';

function AddTicketForm({ onCreate }) {
  const [date, setDate] = useState('');
  const [userId, setUserId] = useState('');
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ date, userId, ticketId });
    setDate('');
    setUserId('');
    setTicketId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter date"
        required
      />
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter userId"
        required
      />
      <input
        type="text"
        value={ticketId}
        onChange={(e) => setTicketId(e.target.value)}
        placeholder="Enter ticketId"
        required
      />
      <button type="submit">Add Reservation</button>
    </form>
  );
}

export default AddTicketForm;

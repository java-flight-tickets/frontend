import React, { useState } from 'react';

function AddTicketForm({ onCreate }) {
  const [provider, setProvider] = useState('');
  const [date, setDate] = useState('');
  const [cityDeparture, setCityDeparture] = useState('');
  const [cityArrival, setCityArrival] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ provider, date, cityDeparture, cityArrival });
    setProvider('');
    setDate('');
    setCityDeparture('');
    setCityArrival('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        placeholder="Enter provider"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter date"
        required
      />
      <input
        type="text"
        value={cityDeparture}
        onChange={(e) => setCityDeparture(e.target.value)}
        placeholder="Enter departure city"
        required
      />
      <input
        type="text"
        value={cityArrival}
        onChange={(e) => setCityArrival(e.target.value)}
        placeholder="Enter arrival city"
        required
      />
      <button type="submit">Add Ticket</button>
    </form>
  );
}

export default AddTicketForm;

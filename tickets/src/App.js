import React, { useState, useEffect } from 'react';
import { getAllTickets, removeTicket, createTicket } from './TicketService';
import AddTicketForm from './components/AddTicketForm';
import TicketList from './components/TicketList';

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await getAllTickets();
      if (response && response.data) {
        setTickets(response.data);
      } else {
        setTickets([]);
      }
    } catch (error) {
      console.error('Failed to fetch tickets:', error);
      setTickets([]);
    } 
  };
  

  const handleDelete = async (id) => {
    await removeTicket(id);
    fetchTickets();
  };

  const handleCreate = async (ticket) => {
    await createTicket(ticket);
    fetchTickets();
  };

  return (
    <div>
      <h1>Tickets Manager</h1>
      <AddTicketForm onCreate={handleCreate} />
      <TicketList tickets={tickets} onDelete={handleDelete} />
    </div>
  );
}

export default App;

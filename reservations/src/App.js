import React, { useState, useEffect } from 'react';
import { getAllTickets, removeTicket, createTicket } from './TicketService';
import AddTicketForm from './components/AddReservationForm';
import TicketList from './components/ReservationList';

function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await getAllReservations();
      if (response && response.data) {
        setReservations(response.data);
      } else {
        setReservations([]);
      }
    } catch (error) {
      console.error('Failed to fetch Reservations:', error);
      setReservations([]);
    } 
  };
  

  const handleDelete = async (id) => {
    await removeTicket(id);
    fetchReservations();
  };

  const handleCreate = async (ticket) => {
    await createTicket(ticket);
    fetchReservations();
  };

  return (
    <div>
      <h1>Reservations Manager</h1>
      <AddTicketForm onCreate={handleCreate} />
      <TicketList reservations={reservations} onDelete={handleDelete} />
    </div>
  );
}

export default App;

import React from 'react';

function ReservationList({ reservations, onDelete }) {
  return (
    <div>
      {reservations.map((reservation) => (
        <div key={reservations.id}>
          <h3>{reservations.data}</h3>
          <button onClick={() => onDelete(reservations.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ReservationList;

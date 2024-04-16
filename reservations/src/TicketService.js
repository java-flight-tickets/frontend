const API_URL = 'http://localhost:8082/reservations';

export const getAllReservations = async () => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const getReservationById = async (id) => {
  return fetch(`${API_URL}/${id}`)
    .then(response => response.json());
};

export const removeReservation = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  }).then(response => response.json()); 
};

export const createReservation = async (reservation) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  }).then(response => response.json());
};

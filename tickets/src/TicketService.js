const API_URL = 'http://localhost:8082/tickets';

export const getAllTickets = async () => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const getTicketById = async (id) => {
  return fetch(`${API_URL}/${id}`)
    .then(response => response.json());
};

export const removeTicket = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  }).then(response => response.json()); 
};

export const createTicket = async (ticket) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ticket)
  }).then(response => response.json());
};

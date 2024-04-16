import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const User = lazy(() => import("UserApp/User"));
const Ticket = lazy(() => import("TicketApp/Ticket"));
const Reservation = lazy(() => import("ReservationApp/Reservation"));

function App() {
  return (
    <div className="app">
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <div>
              <User />
              <Ticket />
              <Reservation />
            </div>
          } />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

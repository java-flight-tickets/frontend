import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const User = lazy(() => import("UserApp/User"));

function App() {
  return (
    <div className="app">
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" Component={User} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
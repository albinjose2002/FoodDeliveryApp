import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeliveryTracker from "./components/DeliveryTracker";
import OrderHistory from "./components/OrderHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeliveryTracker />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

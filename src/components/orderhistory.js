import React, { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Order History</h1>
      {orders.map((order, index) => (
        <div key={index} className="border p-4 my-2">
          <p>Order Date: {new Date(order.date).toLocaleString()}</p>
          <ul>
            {order.items.map((item, i) => (
              <li key={i}>{item.name} x {item.quantity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

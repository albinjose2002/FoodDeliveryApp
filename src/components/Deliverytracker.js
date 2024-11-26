import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { io } from "socket.io-client";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060,
};

export default function DeliveryTracker() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  const [location, setLocation] = useState(defaultCenter);

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("locationUpdate", (data) => {
      setLocation({ lat: data.lat, lng: data.lng });
    });
    return () => socket.disconnect();
  }, []);

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={14}>
      <Marker position={location} />
    </GoogleMap>
  );
}

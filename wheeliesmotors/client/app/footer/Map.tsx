import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const MapContainer: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null); // Ref to store the map instance

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      const defaultCoordinates: L.LatLngExpression = [36.8065, 10.1815]; // Default coordinates for Tunisia
      const defaultZoomLevel = 9; // Default zoom level

      // Initialize the map when the component mounts
      const map = L.map(mapContainerRef.current).setView(defaultCoordinates, defaultZoomLevel);

      // Store the map instance in the ref
      mapInstanceRef.current = map;

      // Add a tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Create a Leaflet icon using the image from the public directory
      const customIcon = new L.Icon({
        iconUrl: "/images/marker-icon.png", // Path to your icon image relative to the public directory
        iconSize: [35, 35],
        iconAnchor: [17, 35],
      });

      // Add marker with custom icon to the map
      L.marker(defaultCoordinates, { icon: customIcon }).addTo(map);
    }

    // Cleanup function to remove the map when the component unmounts
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapContainerRef} style={{ height: "227px",zIndex:1 }} />;
};

export default MapContainer;

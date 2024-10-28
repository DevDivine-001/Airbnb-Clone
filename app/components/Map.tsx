'use client';

import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  center?: [number, number]; // Typing center as an array of two numbers
}

// Component to update the map's center and zoom programmatically
const UpdateMapCenterAndZoom: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom); // Update the map's center and zoom when they change
  }, [center, zoom, map]);

  return null;
};

const Map: React.FC<MapProps> = ({ center }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const defaultCenter: [number, number] = [51, -0.09]; // Default center
  const zoomLevel = center ? 4 : 2; // Set the zoom level based on whether a center is provided

  return (
    <MapContainer
      className="h-[40vh] rounded-lg border-none"
      
      // You can set the scrollWheelZoom option here if using the right version
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <UpdateMapCenterAndZoom center={center || defaultCenter} zoom={zoomLevel} /> {/* Dynamically update center and zoom */}
      {center && <Marker position={center} />} {/* Show marker at the given center */}
    </MapContainer>
  );
};

export default Map;
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FullOffer } from "../../types/offer";

const customIcon = L.icon({
  iconUrl: "/img/maps-and-flags.png", // Убедитесь, что этот файл есть в public/img/
  iconSize: [30, 40], // Немного уменьшил размер
  iconAnchor: [15, 40],
});

interface MapProps {
  offers: FullOffer[];
  city: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  width?: string;  // Возможность изменять размеры карты
  height?: string;
}

function ChangeView({ city }: { city: { latitude: number; longitude: number; zoom: number } }) {
  const map = useMap();
  useEffect(() => {
    map.setView([city.latitude, city.longitude], city.zoom);
  }, [city, map]);
  return null;
}

export default function Map({ offers, city, width = "100%", height = "500px" }: MapProps) {
  return (
    <MapContainer
    center={[city.latitude, city.longitude]}
    zoom={city.zoom}
    style={{ height: "700px", width: "100%" }}
    >

      <ChangeView city={city} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {offers.map((offer) => (
        <Marker
          key={offer.id}
          position={[offer.location.latitude, offer.location.longitude]}
          icon={customIcon}
        >
          <Popup>
            <b>{offer.title}</b> <br />
            {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)} - ${offer.price}/night
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

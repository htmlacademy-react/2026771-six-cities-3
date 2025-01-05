import React, { useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import { Location } from './type';
import useMap from './use-map';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../const';
import { CardTypeData } from './type';

type MapProps = {
  location: Location;
  offers: CardTypeData[];
  activeOfferId?: string | null;
  className: string;
};

const defaultMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const activeMarkerIcon = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const Map: React.FC<MapProps> = ({ location, offers, activeOfferId, className }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapContainerRef, location);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id === activeOfferId
                  ? activeMarkerIcon
                  : defaultMarkerIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [activeOfferId, map, offers]);

  return <section className={className} ref={mapContainerRef} />;
};

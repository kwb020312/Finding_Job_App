import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import * as API from "../api/Works";

function Maps({ address }) {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const getPoint = async () => {
      const points = await API.findAddress(address);
      setLocation({
        latitude: points.documents[0].y,
        longitude: points.documents[0].x,
      });
    };

    getPoint();
  }, []);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.009,
        longitudeDelta: 0.004,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
    </MapView>
  );
}

export default Maps;

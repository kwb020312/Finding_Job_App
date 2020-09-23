import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import * as API from "../api/Works";
import { Text } from "react-native";

function Maps({ address }) {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  const getPoint = async () => {
    const points = await API.findAddress(address);
    setLocation({
      latitude: Number(points.documents[0].y),
      longitude: Number(points.documents[0].x),
    });
    setIsLoading(false);
  };

  useEffect(() => {
    // useEffect 사용하여 초깃값으로 설정하지 않는경우 맵 위치가 고정되어 바뀌지 않음
    setLocation({
      latitude: 0,
      longitude: 0,
    });
    getPoint();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <Text>Loaded Data Map...</Text>
      ) : (
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
      )}
    </>
  );
}

export default Maps;

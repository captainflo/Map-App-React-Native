import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = (props) => {
  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View>
      <MapView region={mapRegion} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MapScreen;

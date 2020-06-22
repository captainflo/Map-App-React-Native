import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from '../components/PlaceItem';
import * as placesActions from '../store/places-actions';

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
    <View>
      <Text>PlacesListScreen</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <PlaceItem
            onSelect={() => {
              props.navigation.navigate('PlaceDetail', {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id,
              });
            }}
            title={itemData.item.title}
            address={itemData.item.address}
            image={itemData.item.imageUri}
          />
        )}
      />
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'All Places',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Places"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
            navData.navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;

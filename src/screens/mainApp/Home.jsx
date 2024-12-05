/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = () => {
  const [rides, setRides] = useState([
    {
      id: 1,
      name: 'Sayan Biswas',
      distance: 5,
      duration: 20,
      price: 100,
      Restaurants: 'Stayfit Restaurants',
      Destination: 'Gangnapur',
      status: 'active',
    },
  ]);

  const refreshRideData = () => {
    // Simulate data refresh for new orders; you can fetch new data here if needed
    Alert.alert('New order received', 'The page has been refreshed with the latest order.');
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      if (remoteMessage.data && remoteMessage.data.type === 'new_order') {
        refreshRideData();
      }
    });

    return unsubscribe;
  }, []);
  const RenderRide = ({ ride }) => {
    return (
      <View style={styles.orderContainer}>
        <View style={styles.rideInfo}>
          <Text style={styles.name}>{ride.name}</Text>
          <Text style={styles.orderId}>{ride.id}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Icon name="location" size={20} color="red" style={{ textAlign: 'center' }} />
            <View style={styles.path} />
            <Icon name="restaurant" size={20} color="red" style={{ textAlign: 'center' }} />
            <View style={styles.path} />
            <Icon name="home" size={20} color="red" style={{ textAlign: 'center' }} />
            <View style={styles.path} />
            <Text style={{ color: 'black' }}>1.2km</Text>
          </View>

          <View style={{ justifyContent: 'space-between', width: '80%' }}>
            <Text style={styles.details}>Your Location</Text>
            <Text style={styles.details}>Stayfit restaurant</Text>
            <Text style={styles.details}>Gangnapur</Text>
            <Text style={{ textAlign: 'right', color: 'black' }}>You earned: 80</Text>
          </View>
        </View>
        <View style={styles.actionContainer}>
          <Text style={styles.total}>Price: ₹100</Text>
          <TouchableOpacity style={styles.acceptButton}>
            <Text>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Rides</Text>
      </View>
      {
        rides.map(ride => <RenderRide ride={ride} />)
      }
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  orderContainer: {
    width: '100%',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',

  },
  detailsContainer: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  path: {
    height: 15,
    width: 0,
    borderWidth: 1,
    borderStyle: 'dashed',
    margin: 'auto',
  },
  rideInfo: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  orderId: {
    color: 'gray',
  },
  details: {
    color: 'black',
  },
  total: {
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
    color: 'black',
  },
  acceptButton: {
    width: '50%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightgreen',
    borderBottomEndRadius: 10,
  },

});

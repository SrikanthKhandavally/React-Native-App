import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Profile from './Screens/ProfileScreen'
import OrderStatus from './Screens/OrderStatusScreen'
import Saved from './Screens/SavedScreen'
import Search from './Screens/SearchScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Login from './Screens/LoadingScreen'
import Expo from 'expo';


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const navigation =  createBottomTabNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search" color = {tintColor} size = {24} />
      )
    }
  },
  saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-heart" color = {tintColor} size = {24} />
      )
    }
  },
  orders: {
    screen: OrderStatus,
    navigationOptions: {
      tabBarLabel: 'ORDERS',
      tabBarIcon: ({tintColor}) => (
        <Icon name="md-reorder" color = {tintColor} size = {24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({tintColor}) => (
        <Entypo name="user" color = {tintColor} size = {24} />
      )
    }
  }

})


export default createAppContainer(navigation);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

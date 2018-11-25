/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { About } from './app/components/component1/component1';
import { Settings } from './app/components/component2/component2';
import { Home } from './app/components/component3/component3';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen:Home,
    navigationOptions:{
      tabBarLabel:'My Home',
      tabBarIcon: ({ focused, horizontal, tintColor}) => (
        <Ionicons name="md-calendar" size={horizontal ? 20 : 25} color={tintColor} />
      )
    }
  },
  Settings: {
    screen:Settings,
    navigationOptions: {
      tabBarLabel: 'My Settings',
      tabBarIcon: ({ focused, horizontal, tintColor }) => (
        <Ionicons name="md-settings" size={horizontal ? 20 : 25} color={tintColor} />
      )
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'About me',
      tabBarIcon: ({ focused, horizontal, tintColor }) => (
        <Ionicons name="md-information-circle-outline" size={horizontal ? 20 : 25} color={tintColor} />
      )
    }
  }
},
  {
    initialRouteName:'Settings',
    //order:['Home','About','Settings'],
    tabBarOptions: {
      activeTintColor: 'dodgerblue',
      inactiveTintColor: 'grey',
    },
  }
)

export default createAppContainer(TabNavigator);
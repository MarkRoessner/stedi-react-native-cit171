import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';

const Home = () => {
  return (
    <View>
      <Bar LoggedInUser='mark.a.roessner@gmail.com'/>
      <Icons />
    </View>
  );
};

export default Home;

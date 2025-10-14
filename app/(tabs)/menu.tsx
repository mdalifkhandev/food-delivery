//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>menu Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam odio illo similique. Fugit saepe repudiandae, incidunt natus voluptatum dicta consequuntur sequi eligendi quos aspernatur rem temporibus ut quae neque consequatur!</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;

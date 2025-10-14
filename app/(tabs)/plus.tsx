//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>menu Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum in consequatur, qui magni aliquam obcaecati, non voluptates repellendus deserunt facilis eaque maxime fugiat. Adipisci illum laborum quis eaque unde.</Text>
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

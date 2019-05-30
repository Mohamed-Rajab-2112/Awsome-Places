import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const SideDrawer = () => {
  return (
    <View style={styles.container}>
      <Text>SideDrawer</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.8,
    flex: 1
  }
});

export default SideDrawer;
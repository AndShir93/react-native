import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { localImages } from '../redux/initialState';

export default function Slider() {
  return (
    <View style={styles.container}>
      <Text>Slider</Text>
      <View style={styles.slider__wrapper}>
            <Image style={styles.slider__images} source={ localImages[1] }/>
            <View style={styles.buttonWrapper}>
                <Button title='-' />
                <Button title='Переход' />
                <Button title='+' />
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider__wrapper: {
      width: 304,
      height: 204, 
      borderColor: 'blue',
      borderWidth: 2,
      borderRadius: 4
  },
  slider__images: {
      width: 300,
      height: 200,
      flexDirection: 'row'
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20 
  }
});

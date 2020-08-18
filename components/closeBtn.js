import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

let BackHandler = {}

function componentWillMount() {
BackHandler.addEventListener('hardwareBackPress', this.backPressed);
}
 
function componentWillUnmount() {
BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
}
 
function backPressed() {
Alert.alert(
    'Exit App',
    'Do you want to exit?',
    [
    {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'Yes', onPress: () => BackHandler.exitApp},
    ],
    { cancelable: false });
    return true;
}

export default function Link({ navigation }) {
    return (
        <View>
            <Button title = 'Close' onPress = { backPressed() }/>
        </View>
    );
}
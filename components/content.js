import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Slider from '../components/slider'
import AppContainer from '../components/music'
import Link from '../components/link'
import Close from '../components/closeBtn'

const Tab = createBottomTabNavigator()

export default function MyTabs(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Слайдер" component={Slider} />
                <Tab.Screen name="Музыка" component={AppContainer} />
                <Tab.Screen name="Ссылка" component={Link} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
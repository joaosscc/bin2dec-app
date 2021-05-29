import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Principal from "./pages/Principal";
import Resultado from "./pages/Resultado";

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions = { { headerShown: false } }>
                <AppStack.Screen name = 'Principal' component = { Principal }/>
                <AppStack.Screen name = 'Resultado' component = { Resultado }/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
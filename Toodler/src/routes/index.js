import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Main from "../views/Main"
import Board from "../views/Board"

const Stack = createStackNavigator()

function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Board" component={Board} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

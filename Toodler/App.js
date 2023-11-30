import "react-native-gesture-handler"
import React from "react"
import AppContainer from "./src/routes"
import { storeData, getX } from "./src/components/Functions/storage"
import data from "./src/resources/data.json"

export default function App() {
    storeData(data)

    return <AppContainer />
}

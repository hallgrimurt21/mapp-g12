import "react-native-gesture-handler"
import React from "react"
import AppContainer from "./src/routes"
import { storeData } from "./src/Functions/storage"
import data from "./src/resources/data.json"

export default function App() {
    storeData(data)

    return <AppContainer />
}

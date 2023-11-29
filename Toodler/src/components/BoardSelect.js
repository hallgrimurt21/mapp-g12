import Lister from "./Lister"
import React from "react"
import { FlatList, Text } from "react-native"
import data from "../resources/data.json"

export default function BoardSelect() {
    return <Lister board={board} />
}

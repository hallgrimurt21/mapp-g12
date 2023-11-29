import Lister from "./Lister"
import React from "react"
import { FlatList, Text } from "react-native"
import data from "../resources/data.json"

export default function BoardSelect({ ider }) {
    // replace with the ID of the board you want to display

    const board = data.boards.find((board) => board.id === ider)

    return <Lister board={board} />
}

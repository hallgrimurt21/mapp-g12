import Lister from "./Lister"
import React from "react"
import { FlatList, Text } from "react-native"
import data from "../resources/data.json"

export default function BoardSelect() {
    const boardId = 2 // replace with the ID of the board you want to display

    const board = data.boards.find((board) => board.id === boardId)

    return <Lister board={board} />
}

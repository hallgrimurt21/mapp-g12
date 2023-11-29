import Lister from "./Lister"
import React from "react"
import { FlatList, Text, StyleSheet } from "react-native"
import data from "../resources/data.json"
import { strongrange } from "../styles/colors"
import { deviceWidth } from "../styles/deviceWidth"

export default function BoardSelect({ ider }) {
    // replace with the ID of the board you want to display

    const board = data.boards.find((board) => board.id === ider)

    return (
        <>
            <Text style={styles.title}>{board.name}</Text>
            <Lister board={board} />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        alignSelf: "stretch",
        fontWeight: "bold",
        color: "black",
        padding: 10,
        margin: 10,
        marginTop: 0,
        color: strongrange,
        // shadowColor: "black",
        // shadowOffset: { width: 0, height: 0 },
        // shadowRadius: 4,
        alignSelf: "flex-start",
        borderColor: "black",
        borderWidth: 1,
    },
})

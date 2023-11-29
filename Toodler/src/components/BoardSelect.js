import Lister from "./Lister"
import React from "react"
import { FlatList, Text, StyleSheet } from "react-native"
import data from "../resources/data.json"
import { strongrange } from "../styles/colors"
import { shadows } from "../styles/shadows"

export default function BoardSelect({ ider }) {
    // replace with the ID of the board you want to display

    const board = data.boards.find((board) => board.id === ider)

    return (
        <>
            <Text style={styles.empty}> </Text>
            <Text style={[styles.title, shadows.smallShadow]}>
                {board.name}
            </Text>
            <Lister board={board} />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        alignSelf: "stretch",
        fontWeight: "bold",
        padding: 10,
        margin: 10,
        marginTop: 0,
        color: strongrange,
        alignSelf: "flex-start",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: "white",
    },
    empty: {
        height: 80,
    },
})

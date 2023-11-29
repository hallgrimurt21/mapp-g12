import Lister from "./Lister"
import React from "react"
import { Text, StyleSheet, View } from "react-native"
import data from "../resources/data.json"
import { strongrange } from "../styles/colors"
import { shadows } from "../styles/shadows"

export default function BoardSelect({ ider }) {
    // replace with the ID of the board you want to display

    const board = data.boards.find((board) => board.id === ider)

    return (
        <>
            <Text style={styles.empty}> </Text>
            <View style={[styles.title, shadows.smallUnder]}>
                <Text style={styles.titleText}>{board.name}</Text>
            </View>
            <Lister board={board} />
        </>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 0,
        color: strongrange,
        alignSelf: "flex-start",
        backgroundColor: "white",
    },
    title: {
        alignSelf: "stretch",
        padding: 10,
        margin: 10,
        marginTop: 0,
        alignSelf: "flex-start",
        borderRadius: 5,
        backgroundColor: "white",
    },
    empty: {
        height: 80,
    },
})

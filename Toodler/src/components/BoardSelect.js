import Lister from "./Lister"
import React from "react"
import { Text, StyleSheet, View, ImageBackground } from "react-native"
import data from "../resources/data.json"
import { strongrange } from "../styles/colors"
import { shadows } from "../styles/shadows"
import PrettyText from "./PrettyText"

export default function BoardSelect({ ider }) {
    // replace with the ID of the board you want to display

    const board = data.boards.find((board) => board.id === ider)

    return (
        <ImageBackground
            source={{ uri: board.thumbnailPhoto }} // replace with the path to your image
            style={styles.boardback}
        >
            <View style={[styles.title, shadows.smallShadow]}>
                <PrettyText text={board.name} />
            </View>
            <Lister board={board} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    title: {
        alignSelf: "stretch",
        padding: 10,
        margin: 10,
        marginTop: 60,
        alignSelf: "flex-start",
        borderRadius: 5,
        backgroundColor: "white",
    },
    empty: {
        height: 80,
    },
    boardback: {
        flex: 1,
        width: "100%",
        paddingLeft: 0,
    },
})

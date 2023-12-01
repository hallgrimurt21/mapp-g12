import Lister from "../Lister"
import React from "react"
import { View, ImageBackground } from "react-native"
import { get1Board, getBoards } from "../../Functions/Manager"
// import data from "../../resources/data.json"
import { shadows } from "../../styles/shadows"
import PrettyText from "../SubComponents/PrettyText"
import styles from "./styles"
import { ScrollView } from "react-native-gesture-handler"
import { useState, useEffect } from "react"

function BoardSelect({ ider }) {
    // replace with the ID of the board you want to display

    // const board = data.boards.find((board) => board.id === ider)
    // console.log("board in BoardSelect", board)

    const [boards, setBoards] = useState([])
    useEffect(() => {
        get1Board(ider).then((boards) => {
            setBoards(boards)
        })
    })



    return (
        <ImageBackground
            source={{ uri: boards.thumbnailPhoto }} // replace with the path to your image
            style={styles.boardback}
        >
            <View style={[styles.title, shadows.smallShadow]}>
                <PrettyText text={boards.name} />
            </View>
            <Lister board={boards} />
        </ImageBackground>
    )
}

export default BoardSelect

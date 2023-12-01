import Lister from "../Lister"
import React from "react"
import { View, ImageBackground } from "react-native"
import { get1Board } from "../../Functions/Manager"
import { shadows } from "../../styles/shadows"
import PrettyText from "../SubComponents/PrettyText"
import styles from "./styles"
import { useState, useEffect } from "react"
import data from "../../resources/data.json"

function BoardSelect({ ider }) {
    // replace with the ID of the board you want to display

    const boards = data.boards.find((board) => board.id === ider)
    console.log("board in BoardSelect", boards)

    // const [boards, setBoards] = useState([])
    // useEffect(() => {
    //     get1Board(ider).then((boards) => {
    //         setBoards(boards)
    //     })
    // })



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

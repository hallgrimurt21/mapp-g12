import Lister from "../Lister"
import { React, useState, useEffect } from "react"
import { View, ImageBackground } from "react-native"
import { get1Board } from "../../Functions/Manager"
import { shadows } from "../../styles/shadows"
import PrettyText from "../SubComponents/PrettyText"
import styles from "./styles"

function BoardSelect({ ider }) {
    // replace with the ID of the board you want to display

    // const board = data.boards.find((board) => board.id === ider)
    const [board, setBoard] = useState([])
    useEffect(() => {
        get1Board(ider)
            .then((board) => {
                setBoard(board)
            })
            .catch((error) => {
                console.error("Error getting board: ", error)
            })
    }, [ider])

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

export default BoardSelect

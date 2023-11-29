import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"
import BoardList from "../../components/BoardList"

function Main({ navigation: { navigate } }) {
    return (
        <View style={styles.viewer}>
            <BoardSelect ider={2} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigate("Board")
                }}
            >
                <Image
                    source={require("../../components/Images/Hamburger.png")}
                    style={styles.buttonText}
                />
            </TouchableOpacity>
        </View>
    )
}
const Board = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
        <Text style={styles.title}>Boards</Text>
        <BoardList />
    </View>
)

export default Board

import React from "react"
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native"
import BoardSelect from "../../components/BoardSelect"
import { navajo, smoke } from "../../styles/colors"
import { deviceWidth } from "../../styles/deviceWidth"
import { Image } from "expo-image"
import styles from "./styles"

function Board({ route, navigation: { navigate } }) {
    const { id } = route.params
    return (
        <View style={styles.viewer}>
            <BoardSelect ider={id} />
            <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                    navigate("Board")
                }}
            >
                <Image
                    source={require("../../components/Images/Hamburger.png")}
                    style={styles.buttonText2}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Board

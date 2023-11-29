import React from "react"
import { View, TouchableOpacity } from "react-native"
import BoardSelect from "../../components/BoardSelect"
import { Image } from "expo-image"
import styles from "./styles"
import { shadows } from "../../styles/shadows"
import hamburgerImage from "../../components/Images/Hamburger.png"

function Board({ route, navigation: { navigate } }) {
    const { id } = route.params
    return (
        <View style={[styles.viewer, styles.backwhite]}>
            <BoardSelect style={styles.backwhite} ider={id} />
            <TouchableOpacity
                style={[styles.button2, shadows.smallShadow]}
                onPress={() => {
                    navigate("Main")
                }}
            >
                <Image
                    source={hamburgerImage}
                    style={[styles.buttonText2, shadows.smallShadow]}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Board

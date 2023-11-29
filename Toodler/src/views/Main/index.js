import React from "react"
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native"
import HomeScreen from "../../components/Homescreen"
import BoardSelect from "../../components/BoardSelect"
import { navajo, smoke } from "../../styles/colors"
import { deviceWidth } from "../../styles/deviceWidth"
import { Image } from "expo-image"

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

export default Main

const styles = StyleSheet.create({
    viewer: {
        backgroundColor: smoke,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    buttonText: {
        width: 30,
        height: 30,
        alignSelf: "center",
    },
    button: {
        height: 50,
        width: deviceWidth * 1,
        borderTopColor: "black",
        borderTopWidth: 1,
        justifyContent: "center",
    },
})

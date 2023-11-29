import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import BoardSelect from "../../components/BoardSelect"

function Main({ navigation: { navigate } }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <TouchableOpacity
                onPress={() => {
                    navigate("Board")
                }}
            >
                <Text>board</Text>
            </TouchableOpacity>
            <BoardSelect ider={2} />
        </View>
    )
}

export default Main

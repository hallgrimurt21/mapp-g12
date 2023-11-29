import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import BoardSelect from "../../components/BoardSelect"

function Main({ route, navigation: { navigate } }) {
    const { id } = route.params;
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <TouchableOpacity
                onPress={() => {
                    navigate("Main")
                }}
            >
                <Text>board</Text>
            </TouchableOpacity>
            <BoardSelect ider={id} />
        </View>
    )
}

export default Main

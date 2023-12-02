import React from "react"
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from "react-native"
import styles from "./styles"
import BoardList from "../../components/BoardList"

const Main = ({ navigation: { navigate } }) => (
    <View style={styles.main}>
        <Text style={styles.title}>Boards</Text>
        <ScrollView style={styles.container}>
            <BoardList />
        </ScrollView>
    </View>
)

export default Main

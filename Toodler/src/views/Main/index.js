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
import BoardList from "../../components/BoardList"
import data from "../../resources/data.json"

const Main = ({ navigation: { navigate } }) => (
    <View style={styles.container}>
        <Text style={styles.title}>Boards</Text>
        <BoardList />
    </View>
)

export default Board

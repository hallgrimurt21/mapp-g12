import { View } from "react-native"
import React from "react"
import { shadows } from "../../styles/shadows"
import styles from "./styles"
import DescButton from "../SubComponents/DescButton"
import TextCheck from "../SubComponents/TextCheck"

export default function Card({ info }) {
    return (
        <View style={[styles.innerContainer, shadows.smallShadow]}>
            <TextCheck style={styles.texCe} info={info} />
            <DescButton style={styles.descButt} info={info} />
        </View>
    )
}

import { StyleSheet, View, Dimensions } from "react-native"
import TextCheck from "./TextCheck"
import DescButton from "./DescButton"
import React, { useState } from "react"
import { shadows } from "../../styles/shadows"

export default function Card({ info }) {
    return (
        <View style={[styles.innerContainer, shadows.smallShadow]}>
            <TextCheck style={styles.texCe} info={info} />
            <DescButton style={styles.descButt} info={info} />
        </View>
    )
}

const styles = StyleSheet.create({
    texCe: {
        flex: 1,
    },
    descButt: {
        flex: 1,
    },

    innerContainer: {
        justifyContent: "space-between",
        backgroundColor: "white",
        flexDirection: "column",
        height: 76,
        margin: 1, // Adjust this value to change the width of the border
        borderRadius: 1,
        paddingBottom: 0,
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 7,
    },

    checkboxContainer: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
    },
    checkboxText: {
        marginLeft: 8,
    },
})

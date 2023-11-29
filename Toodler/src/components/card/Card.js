import { StyleSheet, View, Dimensions } from "react-native"
import TextCheck from "./TextCheck"
import DescButton from "./DescButton"
import React, { useState } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { deviceWidth } from "../../styles/deviceWidth"

export default function Card({ info }) {
    return (
        <View style={styles.innerContainer}>
            <TextCheck style={styles.texCe} info={info} />
            <DescButton style={styles.descButt} info={info} />
        </View>
    )
}

const styles = StyleSheet.create({
    papa: {
        height: 80,
        width: deviceWidth * 0.92,
        maxWidth: 440,
        borderRadius: 1,
        boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.75)",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignSelf: "center",
        margin: 5,
    },
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
})

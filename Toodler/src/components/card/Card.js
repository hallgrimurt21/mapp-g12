import { StyleSheet, View, Text, Button, Pressable } from "react-native"
import TextCheck from "./TextCheck"
import DescButton from "./DescButton"
import React, { useState } from "react"
import { LinearGradient } from "expo-linear-gradient"

export default function Card({ name, description, id, listId, isFinished }) {
    const [cardData, setCardData] = useState({
        name,
        description,
        id,
        listId,
        isFinished,
    })
    return (
        <LinearGradient
            colors={isFinished ? ["blue", "red"] : ["black", "black"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.papa}
        >
            <View style={styles.innerContainer}>
                <TextCheck style={styles.texCe} info={cardData} />
                <DescButton style={styles.descButt} info={cardData} />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    papa: {
        height: 80,
        width: 350,
        marginBottom: 10,
        borderRadius: 2,
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        backgroundColor: "white",
        justifyContent: "space-between",
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
        borderRadius: 2,
        paddingBottom: 0,
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 7,
    },
})

import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import data from "../resources/data.json"
import Card from "./card/Card"
import { deviceWidth } from "../styles/deviceWidth"
import { shadows } from "../styles/shadows"
import { white } from "../styles/colors"

export default function List({ list }) {
    const cards = data.tasks.filter((task) => task.listId === list.id)

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: list.color },
                shadows.smallShadow,
            ]}
        >
            <View style={[styles.titler, shadows.smallUnder]}>
                <Text style={styles.text}>{list.name}</Text>
            </View>
            {cards.map((card) => (
                <Card key={card.id} info={card} />
            ))}
            <View style={styles.adder}>
                <Button title="Add Task" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex",
        width: deviceWidth * 0.95, // 95% of the device width
        maxWidth: 450, // max width of 500
        borderColor: "black", // color of the border
        borderWidth: 1, // width of the border
        borderRadius: 2,
        marginLeft: Math.min(deviceWidth * 0.025, 10),
        marginRight: Math.min(deviceWidth * 0.025, 10),
        marginTop: 10,
    },
    text: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        flexDirection: "row",
        alignContent: "center",
        padding: 5,
    },
    adder: {
        backgroundColor: white,
        height: 40,
        marginTop: 5,
    },
    titler: {
        backgroundColor: white,
        alignSelf: "flex-start",
        marginBottom: 3,
        borderRadius: 2,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
    },
})

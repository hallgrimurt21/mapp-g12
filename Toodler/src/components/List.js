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
            <Text style={styles.text}>{list.name}</Text>
            {cards.map((card) => (
                <Card key={card.id} info={card} />
            ))}
            <Button style={styles.adder} title="Add Task" />
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
        color: white,
    },
})

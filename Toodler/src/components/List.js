import React from "react"
import { StyleSheet, View, Text, Dimensions, Button } from "react-native"
import data from "../resources/data.json"
import Card from "./card/Card"
import { deviceWidth } from "../styles/deviceWidth"
import { handleAddTask } from "../views/Main/index"

export default function List({ list }) {
    const cards = data.tasks.filter((task) => task.listId === list.id)

    return (
        <View style={[styles.container, { backgroundColor: list.color }]}>
            <Text style={styles.text}>{list.name}</Text>
            {cards.map((card) => (
                <Card key={card.id} info={card} />
            ))}
            <Button title="Add Task" onPress={handleAddTask} />
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
        textShadowRadius: 10,
        textShadowColor: "white",
        flexDirection: "row",
        alignContent: "center",
        alignSelf: "left",
        padding: 5,
    },
})

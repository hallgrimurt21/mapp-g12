import React from "react"
import { StyleSheet, View, Text, FlatList } from "react-native"
import data from "../resources/data.json"
import Card from "./card/Card"

export default function List({ list }) {
    const cards = data.tasks.filter((task) => task.listId === list.id)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{list.name}</Text>
            {cards.map((card) => (
                <Card key={card.id} info={card} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "black", // color of the border
        borderWidth: 1, // width of the border
        borderRadius: 5,
        margin: 10,
        padding: 5,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        alignContent: "center",
        alignSelf: "flex-start",
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
        paddingLeft: 5,
        paddingBottom: 5,
    },
})

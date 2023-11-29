import React from "react"
import { StyleSheet, View, Text, Dimensions } from "react-native"
import data from "../resources/data.json"
import Card from "./card/Card"

export default function List({ list }) {
    const cards = data.tasks.filter((task) => task.listId === list.id)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{list.name}</Text>
            {cards.map((card) => (
                <Card key={card.id} info={card} styles={styles.tasks} />
            ))}
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width;



const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.95, // 95% of the device width
        maxWidth: 500, // max width of 500
        borderColor: "black", // color of the border
        borderWidth: 1, // width of the border
        borderRadius: 5,
        margin: 10,
        padding: 5,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        alignContent: "center",
        alignSelf: "flex",
    },
    text: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textShadowRadius: 10,
        textShadowColor: "white",
        flexDirection: "row",
        alignContent: "center",
        alignSelf: "center",
        paddingBottom: 5,
    },
        tasks: {
        flexDirection: "column",
        alignSelf: "center",
        alignContent: "center",
    },

})

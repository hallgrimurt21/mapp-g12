import React from "react"
import { StyleSheet, View, Text, Button, ScrollView } from "react-native"
import data from "../resources/data.json"
import Card from "./card/Card"
import { deviceWidth, deviceHeight } from "../styles/deviceWidth"
import { shadows } from "../styles/shadows"
import { white } from "../styles/colors"
import { BlurView } from "expo-blur"
import hexToRgb from "./hexToRgb"

export default function List({ list }) {
    const cards = data.tasks.filter((task) => task.listId === list.id)

    return (
        <View style={[styles.container, shadows.smallShadow]}>
            <BlurView
                style={{
                    backgroundColor: hexToRgb(list.color, 0.7),
                    borderRadius: 5,
                }}
                intensity={50}
            >
                <View style={[styles.titler]}>
                    <Text style={styles.text}>{list.name}</Text>
                </View>
                <ScrollView style={styles.carder}>
                    {cards.map((card) => (
                        <Card key={card.id} info={card} />
                    ))}

                    <View style={styles.adder}>
                        <Button style={styles.butRad} title="Add Task" />
                    </View>
                </ScrollView>
            </BlurView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex",
        width: deviceWidth * 0.95, // 95% of the device width
        maxWidth: 450, // max width of 500
        borderRadius: 5,
        marginLeft: Math.min(deviceWidth * 0.025, 10),
        marginRight: Math.min(deviceWidth * 0.025, 10),
        marginTop: 10,
        overflow: "hidden",
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        flexDirection: "row",
        alignContent: "center",
        padding: 5,
    },
    adder: {
        backgroundColor: white,
        marginTop: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    titler: {
        backgroundColor: white,
        alignSelf: "flex-start",
        marginBottom: 3,
        borderRadius: 2,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 0,
    },
    butRad: {
        borderRadius: 5,
    },
    carder: {
        flexDirection: "column",
        maxHeight: deviceHeight * 0.68,
    },
})

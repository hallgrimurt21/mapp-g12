import React from "react"
import { View, Text, Button, ScrollView } from "react-native"
import data from "../../resources/data.json"
import Card from "../Card"
import { shadows } from "../../styles/shadows"
import { BlurView } from "expo-blur"
import hexToRgb from "../Functions/hexToRgb"
import styles from "./styles"

function List({ list }) {
    const cards = data.tasks.filter((task) => task.listId === list.id)

    return (
        <View style={[styles.container, shadows.mediumShadow]}>
            <BlurView
                style={[
                    {
                        backgroundColor: hexToRgb(list.color, 0.3),
                        borderRadius: 5,
                    },
                ]}
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

export default List

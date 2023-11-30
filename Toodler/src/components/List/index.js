import React from "react"
import { View, Text, Button, ScrollView } from "react-native"
import { getX, get1X, changeX, addX } from "../Functions/storage"
import Card from "../Card"
import { shadows } from "../../styles/shadows"
import { BlurView } from "expo-blur"
import hexToRgb from "../Functions/hexToRgb"
import styles from "./styles"

function List({ list }) {
    const data = getX("tasks")
    const cards = data.filter((task) => task.listId === list.id)

    return (
        <View style={[styles.container, shadows.mediumShadow]}>
            <BlurView
                style={[
                    {
                        backgroundColor: hexToRgb(list.color, 0.7),
                        borderRadius: 5,
                    },
                ]}
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

export default List

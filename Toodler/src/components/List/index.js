import React, { useEffect, useState } from "react"
import { View, Text, Button, ScrollView } from "react-native"
import { getX, get1X, changeX, addX } from "../../Functions/storage"
import { getTasksByList } from "../../Functions/Manager"
import Card from "../Card"
import { shadows } from "../../styles/shadows"
import { BlurView } from "expo-blur"
import hexToRgb from "../../Functions/hexToRgb"
import styles from "./styles"
import data from "../../resources/data.json"

function List({ list }) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getTasksByList(list.id).then((tasks) => {
            setCards(tasks)
        })
    }, [list.id])

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

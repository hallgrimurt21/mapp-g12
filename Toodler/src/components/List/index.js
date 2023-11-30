import React, { useEffect, useState } from "react"
import { View, Text, Button, ScrollView } from "react-native"
import { addTask, getTasksByList } from "../../Functions/Manager"
import Card from "../Card"
import { shadows } from "../../styles/shadows"
import { BlurView } from "expo-blur"
import hexToRgb from "../../Functions/hexToRgb"
import styles from "./styles"

function List({ list }) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getTasksByList(list.id).then((tasks) => {
            setCards(tasks)
        })
    }, [list.id])

    function addTaskAndGetTasks(task) {
        addTask(task).then(() => {
            getTasksByList(list.id).then((tasks) => {
                setCards(tasks)
            })
        })
    }

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
                        <Button
                            style={styles.butRad}
                            title="Add Task"
                            onPress={() =>
                                addTaskAndGetTasks({
                                    name: "Eat dinne24r",
                                    description: "Get some sugar",
                                    listId: list.id,
                                })
                            }
                        />
                    </View>
                </ScrollView>
            </BlurView>
        </View>
    )
}

export default List

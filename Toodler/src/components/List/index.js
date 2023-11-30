import React, { useEffect, useState } from "react"
import { View, Text, Button, ScrollView } from "react-native"
<<<<<<< HEAD
<<<<<<< HEAD
import { getX, get1X, changeX, addX } from "../../Functions/storage"
import { addTask, getTasks, getTasksByList } from "../../Functions/Manager"
=======
import { getTasksByList } from "../../Functions/Manager"
>>>>>>> 5ef5509be2d198f247e4363a2309ec7925bc1365
=======
import { addTask, getTasks, getTasksByList } from "../../Functions/Manager"
>>>>>>> a1beb51c6313055aa676a1d471e0f71cebb14dcd
import Card from "../Card"
import { shadows } from "../../styles/shadows"
import { BlurView } from "expo-blur"
import hexToRgb from "../../Functions/hexToRgb"
import styles from "./styles"
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 5ef5509be2d198f247e4363a2309ec7925bc1365
=======
>>>>>>> a1beb51c6313055aa676a1d471e0f71cebb14dcd

function List({ list }) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getTasksByList(list.id).then((tasks) => {
            setCards(tasks)
        })
    }, [list.id])
<<<<<<< HEAD
    
    function addTaskAndGetTasks(task){
        addTask(task).then(() => {
        getTasksByList(list.id).then((tasks) => {
            setCards(tasks)
=======

    function addTaskAndGetTasks(task) {
        addTask(task).then(() => {
            getTasksByList(list.id).then((tasks) => {
                setCards(tasks)
            })
>>>>>>> a1beb51c6313055aa676a1d471e0f71cebb14dcd
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

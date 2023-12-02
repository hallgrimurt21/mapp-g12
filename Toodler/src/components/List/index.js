import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    Button,
    ScrollView,
    LayoutAnimation,
    Platform,
    UIManager,
} from "react-native"
import { addTask, getTasksByList } from "../../Functions/Manager"
import { shadows } from "../../styles/shadows"
import { BlurView } from "expo-blur"
import hexToRgb from "../../Functions/hexToRgb"
import styles from "./styles"
import AddCardModal from "../Modals/AddCardModal"
import CardButton from "../CardButton"

function List({ list, onListChange, changed }) {
    if (
        Platform.OS === "android" &&
        UIManager.setLayoutAnimationEnabledExperimental
    ) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    ///////// opening modal and setting cards /////////
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [cards, setCards] = useState([])

    //////// For adding a task ////////
    useEffect(() => {
        getTasksByList(list.id).then((tasks) => {
            setCards(tasks)
        })
    }, [list.id])

    ///// Deleting a task /////
    const handleDelete = (id) => {
        setCards(cards.filter((card) => card.id !== id))
    }
    const handleMove = (booler) => {
        if (booler) {
            getTasksByList(list.id).then((tasks) => {
                setCards(tasks)
                onListChange(true)
            })
        }
    }
    useEffect(() => {
        if (changed) {
            getTasksByList(list.id).then((tasks) => {
                setCards(tasks)
            })
        }
    }, [changed, list.id])
    ////////// add task to asyncStorage and get tasks from asyncStorage+update //////////
    function addTaskAndGetTasks(task) {
        addTask(task)
            .then(() => {
                getTasksByList(list.id)
                    .then((tasks) => {
                        LayoutAnimation.configureNext(
                            LayoutAnimation.Presets.easeInEaseOut,
                        )
                        setCards(tasks)
                    })
                    .catch((error) => {
                        console.error("Error getting tasks: ", error)
                    })
            })
            .catch((error) => {
                console.error("Error adding task: ", error)
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
                        ////////// Card item as a button //////////
                        <CardButton
                            key={card.id}
                            info={card}
                            onDelete={handleDelete} //////// Deleting a task ////////
                            cardMoved={handleMove} //////// Moving a task ////////
                        />
                    ))}

                    <View style={styles.adder}>
                        <Button
                            style={styles.butRad}
                            title="Add Task"
                            onPress={() => {
                                setIsAddModalOpen(true)
                            }}
                        />
                    </View>
                </ScrollView>
                <AddCardModal
                    isOpen={isAddModalOpen}
                    closeModal={() => setIsAddModalOpen(false)}
                    onModalClose={(name, description) => {
                        addTaskAndGetTasks({
                            name: name,
                            description: description,
                            listId: list.id,
                        })
                        // log the name and description
                    }}
                />
            </BlurView>
        </View>
    )
}

export default List

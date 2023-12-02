import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    Button,
    ScrollView,
    LayoutAnimation,
    Platform,
    UIManager,
    Pressable,
} from "react-native"
import { addTask, getTasksByList, changeList } from "../../Functions/Manager"
import { shadows } from "../../styles/shadows"
import { BlurView } from "expo-blur"
import hexToRgb from "../../Functions/hexToRgb"
import styles from "./styles"
import AddCardModal from "../Modals/AddCardModal"
import EditListModal from "../Modals/EditListModal"
import CardButton from "../CardButton"
import { deleteList } from "../../Functions/Manager"

function List({ list, onListChange, changed, onDelete }) {
    if (
        Platform.OS === "android" &&
        UIManager.setLayoutAnimationEnabledExperimental
    ) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    ///////// opening modal and setting cards /////////
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
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

    const handleDeleteList = () => {
        deleteList(list.id)
        onDelete(list.id)
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

    const handleEditModalOpen = () => {
        setIsEditModalOpen(true)
    }

    const handleEditModalClose = (name, color) => {
        // Update the list information here
        // You can perform any necessary actions with the updated information

        const updatedList = { ...list, name: name, color: color }
        changeList(updatedList).then(() => {
            setIsEditModalOpen(false)
            handleMove(true)
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
                <View style={styles.over}>
                    <View style={[styles.titler]}>
                        <Text style={styles.text}>{list.name}</Text>
                    </View>
                    <View style={[styles.editAndDelete, shadows.mediumShadow]}>
                        <View style={styles.button}>
                            <Button
                                style={styles.button}
                                title="Delete List"
                                onPress={handleDeleteList}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                style={styles.button}
                                title="Edit List"
                                onPress={handleEditModalOpen}
                            />
                        </View>
                    </View>
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
                <EditListModal
                    isOpen={isEditModalOpen}
                    closeModal={() => setIsEditModalOpen(false)}
                    onModalClose={handleEditModalClose}
                    list={list}
                />
            </BlurView>
        </View>
    )
}

export default List

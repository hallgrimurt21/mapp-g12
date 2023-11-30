import React, { useEffect, useState } from "react"
import { View, Text, Button, ScrollView } from "react-native"
import { addTask, getTasks, getTasksByList } from "../../Functions/Manager"
import Card from "../Card"
import { shadows } from "../../styles/shadows"
import { BlurView } from "expo-blur"
import hexToRgb from "../../Functions/hexToRgb"
import styles from "./styles"
import AddCardModal from "../Modals/AddCardModal"

function List({ list }) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
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

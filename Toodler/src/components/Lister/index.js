import React, { useEffect, useState } from "react"
import { View, Button, ScrollView } from "react-native"
import List from "../List"
import styles from "./styles"
import { shadows } from "../../styles/shadows"
import { getListsByBoard, addList } from "../../Functions/Manager"
import AddListModal from "../Modals/AddListModal" // Import the AddListModal component

function Lister({ board }) {
    const [lists, setLists] = useState([])
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [changed, setChanged] = useState(false)

    const handleDeleteList = (listId) => {
        setLists(lists.filter((list) => list.id !== listId));
      };


    useEffect(() => {
        getListsByBoard(board.id)
            .then((lists) => {
                setLists(lists)
            })
            .catch((error) => {
                console.error("Error getting lists: ", error)
            })
    }, [board.id])

    function addListAndGetLists(list) {
        // Add this function
        addList(list)
            .then(() => {
                getListsByBoard(board.id)
                    .then((lists) => {
                        setLists(lists)
                    })
                    .catch((error) => {
                        console.error("Error getting lists: ", error)
                    })
            })
            .catch((error) => {
                console.error("Error adding list: ", error)
            })
    }

    /////////// calling useEffect for moving card /////////////
    function handleChange(booler) {
        if (booler === true) {
            setChanged(true)
        }
    }

    ///////////// For card being moved /////////////
    useEffect(() => {
        if (changed) {
            getListsByBoard(board.id)
                .then((lists) => {
                    setLists(lists)
                    setChanged(false) // Reset the changed state
                })
                .catch((error) => {
                    console.error("Error getting lists: ", error)
                })
        }
    }, [changed, board.id])

    return (
        <>
            <ScrollView style={styles.lister} horizontal={true} pagingEnabled>
                {lists.map((list) => (
                    <List
                        key={list.id}
                        list={list}
                        onDelete={handleDeleteList}
                        onListChange={handleChange}
                        style={shadows.mediumShadow}
                        changed={changed}
                    />
                ))}
            </ScrollView>
            <View>
                <View style={styles.newList}>
                    <Button
                        style={styles.newbie}
                        title="New List"
                        onPress={() => {
                            setIsAddModalOpen(true)
                        }}
                    />
                </View>
            </View>
            <AddListModal // Add this component
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                onModalClose={(name, color) => {
                    addListAndGetLists({
                        name: name,
                        color: color,
                        boardId: board.id,
                    })
                }}
            />
        </>
    )
}

export default Lister

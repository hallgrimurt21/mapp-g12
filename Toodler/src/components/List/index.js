import EditListModal from "../Modals/EditListModal"
import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    Button,
    ScrollView,
    LayoutAnimation,
    Platform,
    UIManager,
    Pressable
} from "react-native"
import { addTask, getTasksByList, changeList, getLists, deleteList, getListsByBoard } from "../../Functions/Manager"
import { shadows } from "../../styles/shadows"
import { BlurView } from "expo-blur"
import hexToRgb from "../../Functions/hexToRgb"
import styles from "./styles"
import AddCardModal from "../Modals/AddCardModal"
import Card from "../Card"
import CardButton from "../CardButton"


function List({ list, board, editListAndGetLists, deleteListAndGetLists }) {
    if (
        Platform.OS === "android" &&
        UIManager.setLayoutAnimationEnabledExperimental
    ) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [editinglist, setEditingList] = useState(null)
    const [cards, setCards] = useState([])
    
    const handleEditList = () => {
        setIsEditModalOpen(true);
      };
    
      const handleDeleteList = () => {
        deleteListAndGetLists(list.id);
      };

    function editListAndGetLists(updatedList) {
    changeList(updatedList)
      .then(() => {
        getListsByBoard(board.id)
          .then((lists) => {
            getLists(lists);
          })
          .catch((error) => {
            console.error("Error getting lists: ", error);
          });
      })
      .catch((error) => {
        console.error("Error editing list: ", error);
      });
  }

  function deleteListAndGetLists(listId) {
    deleteList(listId)
      .then(() => {
        getListsByBoard(board.id)
          .then((lists) => {
            getLists(lists);
          })
          .catch((error) => {
            console.error("Error getting lists: ", error);
          });
      })
      .catch((error) => {
        console.error("Error deleting list: ", error);
      });
  }


    useEffect(() => {
        getTasksByList(list.id).then((tasks) => {
            setCards(tasks)
        })
    }, [list.id])

    const handlePress = () => {
        const updatedInfo = { ...listInfo, isFinished: !list.isFinished }
        changeList(updatedInfo).then(() => {
            get1List(updatedInfo.id).then((list) => {
                console.log(list)
            })
            setListInfo(updatedInfo)
        })
    }

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
                <View style={styles.header}>
                    <Text style={styles.text}>{list.name}</Text>
                    <Button
                        style={styles.editButton}
                        title="Edit"
                        onPress={handleEditList}
                    />
                    <Button 
                        title="Delete" 
                        onPress={handleDeleteList} 
                    />
                </View>
                <ScrollView style={styles.carder}>
                    {cards.map((card) => (
                        <CardButton key={card.id} info={card} />
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
                    }}
                />
                <EditListModal
                    isOpen={isEditModalOpen}
                    closeModal={() => setIsEditModalOpen(false)}
                    list={list}
                    board={board}
                    onModalClose={(name, color, deleted) => {
                        if (deleted) {
                            deleteListAndGetLists(list.id)
                        } else {
                        editListAndGetLists({
                            name,
                            color,
                            id: list.id,
                        })
                    }
                    }}
                />
            </BlurView>
        </View>
    )
}

export default List

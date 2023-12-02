import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { addTask, changeList, getTasksByList } from "../../Functions/Manager";
import { shadows } from "../../styles/shadows";
import { BlurView } from "expo-blur";
import hexToRgb from "../../Functions/hexToRgb";
import styles from "./styles";
import AddCardModal from "../Modals/AddCardModal";
import EditListModal from "../Modals/EditListModal";
import Card from "../Card";
import CardButton from "../CardButton";

function List({ list, onDelete }) {
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [cards, setCards] = useState([]);

  const handleDeleteList = () => {
    onDelete(list.id);
  };

  useEffect(() => {
    getTasksByList(list.id).then((tasks) => {
      setCards(tasks);
    });
  }, [list.id]);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  function addTaskAndGetTasks(task) {
    addTask(task)
      .then(() => {
        getTasksByList(list.id)
          .then((tasks) => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            );
            setCards(tasks);
          })
          .catch((error) => {
            console.error("Error getting tasks: ", error);
          });
      })
      .catch((error) => {
        console.error("Error adding task: ", error);
      });
  }

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = (name, color) => {
    // Update the list information here
    // You can perform any necessary actions with the updated information
    //console.log("Updated name:", name);
    //console.log("Updated color:", color);
    //update the list information here
    const updatedList = { ...list, name: name, color: color };
    changeList(updatedList).then(() => {
        setIsEditModalOpen(false);
        handleMoveList(updatedList);
        }
    );
  };

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
        <View style={[styles.container, shadows.mediumShadow]}>
          <Button title="Delete List" onPress={handleDeleteList} />
          <Button title="Edit List" onPress={handleEditModalOpen} />
        </View>
        <ScrollView style={styles.carder}>
          {cards.map((card) => (
            <CardButton
              key={card.id}
              info={card}
              onDelete={handleDelete}
            />
          ))}

          <View style={styles.adder}>
            <Button
              style={styles.butRad}
              title="Add Task"
              onPress={() => {
                setIsAddModalOpen(true);
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
            });
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
  );
}

export default List;
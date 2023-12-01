import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    ScrollView,
    LayoutAnimation,
    Platform,
    UIManager,
} from "react-native"
import { grey } from "../../styles/colors";
import List from "../List";
import styles from "./styles";
import { shadows } from "../../styles/shadows";
import { getListsByBoard, addList } from "../../Functions/Manager";
import AddListModal from "../Modals/AddListModal"; // Import the AddListModal component


function Lister({ board }) {
  const [lists, setLists] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    getListsByBoard(board.id)
      .then((lists) => {
        setLists(lists);
      })
      .catch((error) => {
        console.error("Error getting lists: ", error);
      });
  }, [board.id]);

  function addListAndGetLists(list) { // Add this function
    addList(list)
      .then(() => {
        getListsByBoard(board.id)
          .then((lists) => {
            setLists(lists);
          })
          .catch((error) => {
            console.error("Error getting lists: ", error);
          });
      })
      .catch((error) => {
        console.error("Error adding list: ", error);
      });
  }

  return (
    <>
      <ScrollView
        style={styles.lister}
        horizontal={true}
        pagingEnabled
      >
        {lists.map((list) => (
          <List
            key={list.id}
            list={list}
            style={shadows.mediumShadow}
          />
        ))}
      </ScrollView>
      <View>
        <View style={styles.newList}>
        <Button style={styles.newbie}
        title="New List" 
        onPress={() =>{
            setIsAddModalOpen(true)
        }}/>
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
          });
        }}
      />
    </>

  );
}

export default Lister;
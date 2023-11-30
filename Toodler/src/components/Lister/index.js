import React from "react"
import { View, ScrollView, Button } from "react-native"
import data from "../../resources/data.json"
import List from "../List"
import styles from "./styles"
import { shadows } from "../../styles/shadows"

function Lister({ board }) {
    const lists = data.lists.filter((list) => list.boardId === board.id)
    return (
        <>
            <>
                <ScrollView
                    style={styles.lister}
                    horizontal={true}
                    pagingEnabled
                >
                    {lists.map((list) => (
                        <List key={list.id} list={list} />
                    ))}
                </ScrollView>
            </>
            <View>
                <View style={styles.newList}>
                    <Button style={styles.newbie} title="New List" />
                </View>
            </View>
        </>
    )
}

export default Lister

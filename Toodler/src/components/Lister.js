import React from "react"
import { FlatList, Text, View } from "react-native"
import data from "../resources/data.json"
import Card from "./card/Card"
import List from "./List"

export default function Lister({ board }) {
    return (
        <View>
            <Text>{board.name}</Text>
            <FlatList
                data={data.lists.filter((list) => list.boardId === board.id)}
                keyExtractor={(list) => list.id.toString()}
                renderItem={({ item: list }) => (
                    <List>
                        <Text>{list.name}</Text>
                        <FlatList
                            data={data.tasks.filter(
                                (task) => task.listId === list.id,
                            )}
                            keyExtractor={(task) => task.id.toString()}
                            renderItem={({ item: task }) => (
                                <Card info={task}></Card>
                            )}
                            style={{ height: 100 }}
                        />
                    </List>
                )}
                style={{ height: 200 }}
            />
        </View>
    )
}

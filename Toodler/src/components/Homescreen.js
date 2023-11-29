import React from "react"
import data from "../resources/data.json" // replace this with the path to your data.json file
import { View, Text, Image, FlatList } from "react-native" // Add FlatList here
import Card from "../components/card" // Add Card here
import Board from "../components/Board" // Add Board here
import List from "../components/List" // Add List here

function HomeScreen () {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image
                source={require("../resources/Tood.webp")}
                style={{ width: 200, height: 300 }}
            />
            <Text>Toodler</Text>
            <FlatList
                data={data.boards}
                keyExtractor={(board) => board.id.toString()}
                renderItem={({ item: board }) => (
                    <Board>
                        <Text>{board.name}</Text>
                        <FlatList
                            data={data.lists.filter(list => list.boardId === board.id)}
                            keyExtractor={(list) => list.id.toString()}
                            renderItem={({ item: list }) => (
                                <List>
                                    <Text>{list.name}</Text>
                                    <FlatList
                                        data={data.tasks.filter(task => task.listId === list.id)}
                                        keyExtractor={(task) => task.id.toString()}
                                        renderItem={({ item: task }) => <Card>{task.name}</Card>}
                                        style={{ height: 100 }}
                                    />
                                </List>
                            )}
                            style={{ height: 200 }}
                        />
                    </Board>
                )}
            />
        </View>
    )
}

export default HomeScreen

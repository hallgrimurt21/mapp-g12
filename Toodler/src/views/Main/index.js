import React from "react"
import data from "../../resources/data.json" // replace this with the path to your data.json file
import { View, Text, Image, FlatList } from "react-native" // Add FlatList here

function HomeScreen () {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image
                source={require("../../resources/logo2.avif")}
                style={{ width: 200, height: 300 }}
            />
            <Text>Toodler</Text>
            <FlatList
                data={data.boards}
                keyExtractor={(board) => board.id.toString()}
                renderItem={({ item: board }) => (
                    <View>
                        <Text>{board.name}</Text>
                        <FlatList
                            data={data.lists.filter(list => list.boardId === board.id)}
                            keyExtractor={(list) => list.id.toString()}
                            renderItem={({ item: list }) => (
                                <View>
                                    <Text>{list.name}</Text>
                                    <FlatList
                                        data={data.tasks.filter(task => task.listId === list.id)}
                                        keyExtractor={(task) => task.id.toString()}
                                        renderItem={({ item: task }) => <Text>{task.name}</Text>}
                                        style={{ height: 100 }}
                                    />
                                </View>
                            )}
                            style={{ height: 200 }}
                        />
                    </View>
                )}
            />
        </View>
    )
}

export default HomeScreen

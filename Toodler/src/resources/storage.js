import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"

export const storeData = async (data) => {
    for (let key in data) {
        await AsyncStorage.setItem(key, JSON.stringify(data[key]))
    }
}

export const getX = async (varb) => {
    const stringer = await AsyncStorage.getItem(varb)
    const items = JSON.parse(stringer)
    return items
}

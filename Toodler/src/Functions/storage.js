import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"

export const storeData = async (data) => {
    for (const key in data) {
        await AsyncStorage.setItem(key, JSON.stringify(data[key]))
    }
}

export const getX = async (varb) => {
    const stringer = await AsyncStorage.getItem(varb)
    const items = JSON.parse(stringer)
    return items
}

export const changeX = async (varb, key, value) => {
    const items = await getX(varb)
    const item = items.filter((item) => item.id === key)[0]
    const index = items.indexOf(item)
    items[index] = value
    await AsyncStorage.setItem(varb, JSON.stringify(items))
}

export const addX = async (varb, value) => {
    const items = await getX(varb)
    ///////////////////add id to value
    const maxId = Math.max(...items.map((item) => item.id), 0)
    value.id = maxId + 1
    items.push(value)
    await AsyncStorage.setItem(varb, JSON.stringify(items))
}

export const deleteX = async (varb, key) => {
    const items = await getX(varb)
    const item = items.filter((item) => item.id === key)[0]
    const index = items.indexOf(item)
    items.splice(index, 1)
    await AsyncStorage.setItem(varb, JSON.stringify(items))
}

export const get1X = async (varb, key) => {
    const items = await getX(varb)
    const item = items.filter((item) => item.id == key)[0]
    return item
}

import React from "react"
import { getX, changeX, get1X, addX, deleteX } from "./storage"

/////////////////////TASKS////////////////////////
export const getTasks = async () => {
    const tasks = await getX("tasks")
    return tasks
}

export const addTask = async (task) => {
    await addX("tasks", task)
}

export const deleteTask = async (key) => {
    await deleteX("tasks", key)
}

export const changeTask = async (task) => {
    await changeX("tasks", task.id, task)
}

export const get1Task = async (key) => {
    const task = await get1X("tasks", key)
    return task
}

export const getTasksByList = async (listId) => {
    const tasks = await getX("tasks")
    const tasksByList = tasks.filter((task) => task.listId === listId)
    return tasksByList
}
/////////////////////LISTS////////////////////////

export const getLists = async () => {
    const lists = await getX("lists")
    return lists
}

export const addList = async (list) => {
    await addX("lists", list)
}

export const deleteList = async (key) => {
    await deleteX("lists", key)
}

export const changeList = async (list) => {
    await changeX("lists", list.id, list)
}

export const get1List = async (key) => {
    const list = await get1X("lists", key)
    return list
}

/////////////////////Boards////////////////////////

export const getBoards = async () => {
    const boards = await getX("boards")
    return boards
}

export const addBoard = async (board) => {
    await addX("boards", board)
}

export const deleteBoard = async (key) => {
    await deleteX("boards", key)
}

export const changeBoard = async (board) => {
    await changeX("boards", board.id, board)
}

export const get1Board = async (key) => {
    const board = await get1X("boards", key)
    return board
}

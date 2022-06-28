import { types } from "../types"


export const sayHelloAction = (text) => {
    return {
        type: types.SAY_HELLO,
        payload: text
    }
}

export const clearHelloAction = () => {
    return {
        type: types.CLEAR_HELLO
    }
}

export const createUserAction = (user) => {
    return {
        type: types.CREATE_USER,
        payload: user
    }
}

export const addNameAction = (name) => {
    return {
        type: types.ADD_NAME,
        payload: name
    }
}

export const clearFieldsAction = () => {
    return {
        type: types.CLEAR_FIELDS,
    }
}

export const addNumberAction = (number) => {
    return {
        type: types.ADD_NUMBER,
        payload: number,
    }
}

export const createNumberAction = (numb) => {
    return {
        type: types.CREATE_NUMBER,
        payload: numb,
    }
}
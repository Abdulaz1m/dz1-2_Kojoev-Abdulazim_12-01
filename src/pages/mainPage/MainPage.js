import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNameAction, clearFieldsAction, createUserAction } from "../../actions/actions"

const MainPage = () => {

    const dispatch = useDispatch()
    const eded = useSelector(state => state.users)
    const users = useSelector(state => state.users.users)
    const name = useSelector(state => state.users.name)

    const createUser = () => {
        dispatch(createUserAction(name))
        dispatch(clearFieldsAction())
        console.log(eded)
    }

    const changeInput = (e) => {
        dispatch(addNameAction(e.target.value))
    }

    return (
        <div className="component1">
            dz1-2
            <div>
                <input onChange={changeInput} type="text" value={name}/>
                <button onClick={createUser}>create user</button>
            </div>
            <ul>
                <li>users:</li>
                {users.map((user, key) => <li key={key}>{user}</li>)}
            </ul>
        </div>
    )
}

export default MainPage;
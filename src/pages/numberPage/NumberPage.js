import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { addNumberAction, createNumberAction } from "../../actions/actions";

function NumberPage () {
    const dispatch = useDispatch()
    const numbers = useSelector(state => state.numbers.numbers)
    const numb = useSelector(state => state.numbers.number)


    const addNumber = (e) => {
        dispatch(addNumberAction(e.target.value))
    }
    const createNumber = () => {
        dispatch(createNumberAction(numb))
    }


    return (
        <>
            <div className="div1">
    
                <input onChange={addNumber} className="inp" type="number" value={numb}/>
                <button onClick={createNumber} className="btn">enter</button>
                {numbers.map((number, key) => <span className="span1" key={key}>{number}</span>)}
            </div>
        </>
    )
}

export default NumberPage;
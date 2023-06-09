import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    increment,
    decrement,
    incrementByAmount,
    selectCount
} from '../counter/counterSlice.js'

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(2)
    
    return (
        <div className = "counter-container">
            <div className='input-counter'>
            <input value={incrementAmount} onChange={e =>setIncrementAmount( e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>ADD AMOUNT</button>
            </div>
            <div className='button-counter'> 
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            </div>
            
        </div>
    )
}
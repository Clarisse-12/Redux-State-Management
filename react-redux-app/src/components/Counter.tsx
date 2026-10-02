import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import{RootState} from '../store/store';
import {increment, decrement, reset} from '../store/actions/counterActions';
import styles from './counter.module.css';

const Counter = () => {
    const count = useSelector(
        (state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className={styles.counterContainer}>
            <h2>Counter: {count}</h2>
            <div className={styles.buttonContainer}>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
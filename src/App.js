import React, {useEffect, useRef, useState} from 'react';
import './App.css';

function App() {
    let [timer, setTimer] = useState(25 * 60);
    let [isRunning, setRunning] = useState(false);

    useInterval(() => {
        setTimer(timer - 1);
    }, isRunning ? 1000 : null);

    const startCounting = () => {
        setRunning(!isRunning);
    };

    return (
        <div>
            <div>
                {timer}
            </div>
            <button onClick={startCounting}>START</button>
            <button>RESET</button>
        </div>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default App;

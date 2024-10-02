



// 1 pomodoro 1 study session (25 mins) & 1 short break, 
// after 4 pomodoros = long break;

import { useContext, useEffect, useState } from "react";
import Clock from "./Clock";

import Draggable from "react-draggable";
import { DraggableContext } from "Frontend/views/@index";

import './pomodoroclock.styles.scss';

export default function PomodoroClock() {
    const LONGBREAKS_EVERY = 2;
    const POMODORO_TIME = 10; 
    const SHORT_BREAK = 5;
    const LONGBREAK_TIME =20;

    const POMO = 0;
    const SHORT = 1;
    const LONG = 2;


    const [currentPomo, setCurrentPomo] = useState(0);
    
    const [counter, setCounter] = useState(0);
    const [timer, setTimer] = useState(POMODORO_TIME);



    const dragContext = useContext(DraggableContext);

    const checkCompletion = () => {
    

        if(currentPomo === LONG)  {
            setCurrentPomo(POMO);
            setTimer(POMODORO_TIME);
            setCounter((count ) => count + 1);
            return;
        }

        // setCounter((count) => count + 1);
        let isLongBreak = false;
        if(currentPomo === SHORT) setCounter((count) => {
           
            
            return count + 1});

        else      if((counter + 1) % LONGBREAKS_EVERY === 0) isLongBreak = true;

            if(isLongBreak) {
                setCurrentPomo(LONG);
                setTimer(LONGBREAK_TIME);
                return;
            }
      
            setCurrentPomo((pomo) => {
              
                switch(pomo) {
                    case 0: return 1;
                    case 1: return 0;
                    default: return 0;
                }
    });
        
       
    }



    useEffect(() => {
        setTimer(returnTime());
    }, [currentPomo])

    const returnTime = () => {
       
        if(currentPomo === POMO) return POMODORO_TIME;
        else if(currentPomo === SHORT) return SHORT_BREAK;
        return LONGBREAK_TIME;
    }


    const returnTitle =() => {
        switch(currentPomo) {
            case 0: return "Time to Focus!";
            case 1: return "Time for a short break!";
            default: return "Time for a long break!";
        }
    }

    return (
        <Draggable disabled={!dragContext?.isDraggable}>
        <div className="pomodoro-clock-container">
            <h4>{returnTitle()}</h4>
            <Clock initialTime={timer} onTimerCompletion={checkCompletion} />
        </div>
        </Draggable>
    );
}
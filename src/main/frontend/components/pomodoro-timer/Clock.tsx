import { Button, Icon } from "@vaadin/react-components";

import  { useEffect, useRef, useState } from "react";



interface ClockProps {
    onTimerCompletion: () => void;
    initialTime: number;
}


export default function Clock({onTimerCompletion, initialTime}: ClockProps) {

    const nodeRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // seconds
    const [timer, setTimer] = useState(initialTime || 1500);
    const [isTicking, setIsTicking ] = useState(false);

    const getTimeRemaining = () => {
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60 ;
        const min = minutes < 10 ? '0'+minutes : minutes;
        const sec = seconds < 10 ? '0'+seconds : seconds;
        
        return `${min}:${sec}`;
    }

    useEffect(() => {
        
        setIsTicking(false);
        clearInterval(nodeRef.current as unknown as number);
        nodeRef.current= null;
        setTimer(initialTime);
    }, [initialTime]);

    useEffect(() => {
        if(timer === 0)  onTimerCompletion();
    }, [timer]);
    

    const startTimer = () => {
       
        setIsTicking(true);
       nodeRef.current = setInterval(() => {

          setTimer((prevTime) => {
            if (prevTime === 0) {
              clearInterval( nodeRef.current  as unknown as number);
             
            
              setIsTicking(false);
             
              return 0;
            } else {
              return prevTime - 1;
            }
          });
        }, 1000);
      }

      const onClickPauseTimer = () => {
        
        clearInterval( nodeRef.current  as unknown as number );
        setIsTicking(false);
      }

    //   const onClickResetTimer = () => {
    //     setTimer(initialTime || 1500);
    //     clearInterval( nodeRef.current  as unknown as number );
    //   }
    

      const renderPlayButton = () => {
        if(timer < 1) return <></>;

        return isTicking ? <Button onClick={onClickPauseTimer}><Icon icon={'vaadin:pause'}/></Button> :   <Button onClick={startTimer}><Icon icon={'vaadin:play'}/></Button>;
      }

      const onClickSkip = () => {
        onClickPauseTimer();
        setTimer(0);
      }

  

    return (
        <div>
             <h2>{getTimeRemaining()}</h2>
             {/* <Button onClick={onClickResetTimer}>Reset</Button> */}
             { renderPlayButton()}

             
             <Button onClick={onClickSkip}><Icon icon={'vaadin:step-forward'}/></Button>
        </div>
    )

}
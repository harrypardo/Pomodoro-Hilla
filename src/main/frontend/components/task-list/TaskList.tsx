
import { Button, Icon, TextField, TextFieldElement } from "@vaadin/react-components";

import './tasklist.styles.scss';
import { useContext, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { DraggableContext } from "Frontend/views/@index";

export default function TaskList() {

    const [items, setItems] = useState<String[]>([]);
    const [completedItems, setCompletedItems] =  useState<String[]>([]);
    const [taskValue, setTaskValue] = useState('');
    const textRef = useRef<TextFieldElement>(null);

    const dragContext = useContext(DraggableContext);

    useEffect(() => {
        if (textRef.current) {
            textRef.current.focus();
          }
    }, [taskValue])

    const onClickAddTask = () => {
     
        if(taskValue.length < 1) return;
            setItems((it) => [...it, taskValue]);
            setTaskValue('');
    }

    const onClickTaskItem =(index: number) =>   (e: React.SyntheticEvent) => {
        e.preventDefault();
        
        const item = items[index];
        setItems((it) => [...it].filter((_, ind) =>     index !== ind));

        setCompletedItems((it) => [...it, item]);
    }

    const onClickCancelButton = (index: number) => (e:  React.SyntheticEvent) => {
        e.stopPropagation();
        e.preventDefault();
      


        setItems((it) => [...it].filter((_, ind) =>     index !== ind));
           
    }

    const Header = () => (<div className="action-container">
        <TextField label="Add Task" 
        ref={textRef }
        value={taskValue}
        onValueChanged={(e) =>{
            e.preventDefault();
           
            setTaskValue(e.detail.value)
           }}
        clearButtonVisible>
            <Icon slot="prefix" icon="vaadin:tasks" />
        </TextField>
        <Button onClick={onClickAddTask}
            className="add-button"
            ><Icon icon={'vaadin:plus-circle'}/></Button>
    </div>);

    return (
    
    <Draggable disabled={!dragContext?.isDraggable}>
    <div className="tasklist-container">

        <Header />
       <h4>Active:</h4>
        <ul>
            {items.map((item, index) => 
            <li key={`${index}-todo-item`}
            className="checklist-item"
            onClick={onClickTaskItem(index)}
            >
             <p>
             {item}
                </p>  

                <Button onClick={onClickCancelButton(index)}><Icon icon="vaadin:close-small" /></Button>
            </li>)}

        </ul>
                    <h4>  Done:</h4>
      

             
        <ul>
            {completedItems.map((item, index) => 
            <li key={`${index}-c-todo-item`}
            className="completed-item"
           
            >
             <p>
             {item}
                </p>  

                
            </li>)}

        </ul>
    </div></Draggable>);
}
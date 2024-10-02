import { useContext } from "react";
import ToggleButton from "../toggle-button/ToggleButton";
import { DraggableContext } from "Frontend/views/@index";

import './dragsetting.styles.scss';

export default function DragSetting() {
    const contextProps = useContext(DraggableContext);
    
    return (
        <div className="drag-container">
           <p>Move Items?</p>
            <ToggleButton handleChange={contextProps?.flipDraggable} />
        </div>
    )
}
import { useContext } from "react";
import ToggleButton from "../toggle-button/ToggleButton";
import { DraggableContext } from "Frontend/views/@index";

export default function DragSetting() {
    const contextProps = useContext(DraggableContext);
    
    return (
        <div>
            Move items? 
            <ToggleButton handleChange={contextProps?.flipDraggable} />
        </div>
    )
}
import { ViewConfig } from '@vaadin/hilla-file-router/types.js';

import MusicPlayer from 'Frontend/components/music-player/MusicPlayer';
import PomodoroClock from 'Frontend/components/pomodoro-timer/PomodoroClock';
import DragSetting from 'Frontend/components/setting-toggle/DragSetting';
import TaskList from 'Frontend/components/task-list/TaskList';
import BackgroundVid from 'Frontend/components/video-bg/BackgroundVid';
import { createContext, useState } from 'react';


export const config: ViewConfig = {
  menu: { order: 0, icon: 'line-awesome/svg/globe-solid.svg' },
  title: 'Hello World',
  loginRequired: true,
};


interface DraggableProps {
  isDraggable: boolean;
  flipDraggable: () => void;
}


export const DraggableContext = createContext<DraggableProps | null>(null);



export default function HelloWorldView() {

  const [isDraggable, setIsDraggable] = useState(false);


  const flipDraggable = () => setIsDraggable((drag) => !drag);
  



  return (
    <>

    <DraggableContext.Provider value={{isDraggable, flipDraggable}}>
      <div>
      <DragSetting />
        <BackgroundVid />      
        <MusicPlayer />
      <PomodoroClock />
        <TaskList />
     
      </div>
      </DraggableContext.Provider>
    </>
  );
}

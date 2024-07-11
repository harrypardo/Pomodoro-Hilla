import { ViewConfig } from '@vaadin/hilla-file-router/types.js';

import MusicPlayer from 'Frontend/components/music-player/MusicPlayer';
import TaskList from 'Frontend/components/task-list/TaskList';


export const config: ViewConfig = {
  menu: { order: 0, icon: 'line-awesome/svg/globe-solid.svg' },
  title: 'Hello World',
  loginRequired: true,
};

export default function HelloWorldView() {

  return (
    <>
      <section className="flex p-m gap-m items-end">
      
        <MusicPlayer />
        <TaskList />
      </section>
    </>
  );
}

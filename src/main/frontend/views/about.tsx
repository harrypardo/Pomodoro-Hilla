import { ViewConfig } from '@vaadin/hilla-file-router/types.js';

export const config: ViewConfig = {
  menu: { order: 1, icon: 'line-awesome/svg/file.svg' },
  title: 'About',
  loginRequired: true,
};

export default function AboutView() {
  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
      <h2>This place intentionally left empty</h2>
      <p>It’s a place where you can grow your own UI 🤗</p>

      Credits:

      Icons:
      <a href="https://www.flaticon.com/free-icons/google-play-music" title="google play music icons">Google play music icons created by IYAHICON - Flaticon</a>
      <a href="https://www.flaticon.com/free-icons/stop-button" title="stop button icons">Stop button icons created by Hilmy Abiyyu A. - Flaticon</a>
    </div>
  );
}

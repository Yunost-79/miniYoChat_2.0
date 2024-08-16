import SidebarHeader from './sidebarHeader/SidebarHeader';
import ChatList from './chatList/ChatList';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar_component">
      <SidebarHeader />
      <div className="sidebar_main">
        <ChatList />
      </div>
    </div>
  );
};

export default Sidebar;

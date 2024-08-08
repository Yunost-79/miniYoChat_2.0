import SidebarHeader from './SidebarHeader';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar_component">
      <SidebarHeader />
      <div className="sidebar_main">
        <div className="chat_list"></div>
      </div>
    </div>
  );
};

export default Sidebar;

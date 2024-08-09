import Search from '../UI/Search/Search';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import OwnerImage from '/test-user.png';

const SidebarHeader = () => {
  return (
    <div className="sidebar_header">
      <div className="owner_info">
        <div className="user_info">
          {OwnerImage ? <img src={OwnerImage} /> : <AccountCircleIcon />}
          <span>UserNameUserNameUserNameUserNameUserName</span>
        </div>

        <div className="owner_setting">
          <MoreVertIcon />
        </div>
      </div>
      <div className="search">
        <Search />
      </div>
    </div>
  );
};

export default SidebarHeader;

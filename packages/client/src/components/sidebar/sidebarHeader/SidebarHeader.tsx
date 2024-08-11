import useAuthStore from '../../../zustand/useAuthStore';

import SearchInput from '../../UI/Inputs/SearchInput/SearchInput';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import OwnerImage from '/test-user.png';

const SidebarHeader = () => {
  const { setIsAuth } = useAuthStore();

  const handleLogout = () => {
    setIsAuth(false);
  };
  return (
    <div className="sidebar_header">
      <div className="owner_info">
        <div className="user_info">
          {OwnerImage ? <img src={OwnerImage} /> : <AccountCircleIcon />}
          <span>UserNameUserNameUserNameUserNameUserName</span>
        </div>

        <div className="owner_setting" onClick={handleLogout}>
          <MoreVertIcon />
        </div>
      </div>
      <div className="search">
        <SearchInput />
      </div>
    </div>
  );
};

export default SidebarHeader;

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import OwnerImage from '/test-user.png';

const TopMessageContainer = () => {
  return (
    <div className="top">
      <div className="user_receiver">
        <div className="receiver_image">{OwnerImage ? <img src={OwnerImage} /> : <AccountCircleIcon />}</div>
        <div className="receiver_info">
          <span>John Dude</span>
        </div>
      </div>
      <div className="user_setting">
        <button>
          <MoreHorizIcon />
        </button>
      </div>
    </div>
  );
};

export default TopMessageContainer;

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import OwnerImage from '/test-user.png';

import '../MessageContainer.scss';

const TopMessageContainer = () => {
  return (
    <>
      <div className="top">
        <div className="user_receiver">
          <div className="receiver_info">
            <div className="receiver_image">{OwnerImage ? <img src={OwnerImage} /> : <AccountCircleIcon />}</div>
            <span>John Dude</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMessageContainer;

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import MoreInfoButton from '../../../components/UI/Buttons/MoreInfoButton/MoreInfoButton';

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
          <div className="user_setting">
            <MoreInfoButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMessageContainer;

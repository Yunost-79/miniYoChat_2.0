import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import OwnerImage from '/test-user.png';

const ChatListItem = () => {
  return (
    <div className="chat_list_item">
      <div className="receiver_image">{OwnerImage ? <img src={OwnerImage} /> : <AccountCircleIcon />}</div>
      <div className="receiver_info">
        <span className="username">Dude_#1</span>
        <span className="last_message">It`s last messages #1</span>
      </div>
    </div>
  );
};

export default ChatListItem;

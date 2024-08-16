import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSocketContext } from '../../../../context/socketContext';

type ChatListItem = {
  id: string;
  username: string;
  profileAvatar: string;
  lastMessage?: string;
};

const ChatListItem = (props: ChatListItem) => {
  const { id, username, profileAvatar, lastMessage } = props;

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.some(({ userId }) => userId === id);

  return (
    <div className={`chat_list_item ${isOnline ? 'online' : ''}`} key={id}>
      <div className="receiver_image">
        {profileAvatar ? <img src={profileAvatar} /> : <AccountCircleIcon />}
      </div>
      <div className="receiver_info">
        <span className="username">{username}</span>
        {lastMessage && <span className="last_message">{lastMessage}</span>}
      </div>
    </div>
  );
};

export default ChatListItem;

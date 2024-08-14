import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type ChatListItem = {
  id: string;
  username: string;
  profileAvatar: string;
  lastMessage?: string;
};

const ChatListItem = (props: ChatListItem) => {
  const { id, username, profileAvatar, lastMessage } = props;
  return (
    <div className="chat_list_item" key={id}>
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

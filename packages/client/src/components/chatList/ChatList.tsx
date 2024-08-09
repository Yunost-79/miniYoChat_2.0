import { useLightModeStore } from '../../zustand/customModes/useLightModeStore';
import ChatListItem from './ChatListItem';

const ChatList = () => {
  const { isLightMode } = useLightModeStore();

  return (
    <div className={`chat_list ${isLightMode ? 'light' : ''}`}>
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
      <ChatListItem />
    </div>
  );
};

export default ChatList;

import { ConversationItem, useDataStore } from '../../../zustand/dataStore/useDataStore';
import { useLightModeStore } from '../../../zustand/customModesStores/useLightModeStore';
import ChatListItem from './chatListItem/ChatListItem';

const ChatList = () => {
  const { isLightMode } = useLightModeStore();
  const { userData } = useDataStore();

  const chatList = userData?.conversationList;

  return (
    <div className={`chat_list ${isLightMode ? 'light' : ''}`}>
      {chatList &&
        chatList.map((listItem: ConversationItem) => (
          <ChatListItem
            key={listItem._id}
            id={listItem.username}
            username={listItem.username}
            profileAvatar={listItem.profileAvatar}
            lastMessage={listItem.lastMessage}
          />
        ))}
    </div>
  );
};

export default ChatList;

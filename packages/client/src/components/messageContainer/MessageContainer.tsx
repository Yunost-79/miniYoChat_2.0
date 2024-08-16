import { useLightModeStore } from '../../zustand/customModesStores/useLightModeStore';

import TopMessageContainer from './topMessageContainer/TopMessageContainer';
import CenterMessageContainer from './centerMessageContainer/CenterMessageContainer';
import BottomMessageContainer from './bottomMessageContainer/BottomMessageContainer';

import './MessageContainer.scss';

const MessageContainer = () => {
  const { isLightMode } = useLightModeStore();

  return (
    <div className={`message_container_component ${isLightMode ? 'light' : ''}`}>
      <TopMessageContainer />
      <CenterMessageContainer />
      <BottomMessageContainer />
    </div>
  );
};

export default MessageContainer;

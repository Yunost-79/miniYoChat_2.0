import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import { useLightModeStore } from '../../zustand/customModesStores/useLightModeStore';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import CloseIcon from '@mui/icons-material/Close';

import TestImage from '/test-message-img.jpg';

import './Message.scss';

type Message = {
  isOwnMassage?: boolean;
};

const Message = (props: Message) => {
  const { isOwnMassage } = props;

  const { isLightMode } = useLightModeStore();
  const handleFullscreen = useFullScreenHandle();

  return (
    <div className={`message ${isOwnMassage ? 'own' : ''} ${isLightMode ? 'light' : ''}`}>
      <div className="message_content">
        <div className="sended_info">
          <div className="sender_icon">
            <AccountCircleIcon />
          </div>
          <div className="sender_username">
            <span>UserName</span>
          </div>
        </div>
        <div className="sended_content">
          <div
            className="message_images"
            onClick={() => (!handleFullscreen.active ? handleFullscreen.enter() : undefined)}
          >
            <FullScreen handle={handleFullscreen}>
              {handleFullscreen.active && (
                <>
                  <CloseIcon onClick={handleFullscreen.active && handleFullscreen.exit} />
                  <img src={TestImage} alt="Fullscreen" />
                </>
              )}
              <img src={TestImage} alt="Preview image" />
            </FullScreen>
          </div>
          <div className="messages_text">
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis maiores
              earum corrupti ad quos hic fugit ut voluptates nesciunt, aliquid, totam dolorum esse
              animi excepturi consequatur labore officia magnam mollitia neque nulla aperiam? Ab
              totam veniam delectus quibusdam! Maxime enim id provident eaque beatae! Laudantium ea
              vel veritatis quaerat!
            </span>
          </div>
        </div>
        <div className="sended_date">
          <span>4:20</span>
        </div>
      </div>
    </div>
  );
};

export default Message;

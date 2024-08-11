import SwitchLightModeButton from '../../../components/UI/Buttons/SwitchLightModeButton/SwitchLightButton';
import FullscreenButton from '../../../components/UI/Buttons/FullscreenButton/FullscreenButton';

import SendInput from '../../UI/Inputs/SendInput/SendInput';

const BottomMessageContainer = () => {
  return (
    <div className="bottom">
      <div className="send_item">
        <SendInput />
      </div>
      <div className="send_setting">
        <FullscreenButton />
        <SwitchLightModeButton />
      </div>
    </div>
  );
};

export default BottomMessageContainer;

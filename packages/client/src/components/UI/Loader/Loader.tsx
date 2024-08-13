import { useLightModeStore } from '../../../zustand/customModesStores/useLightModeStore';
import './Loader.scss';

const Loader = () => {
  const { isLightMode } = useLightModeStore();

  return (
    <div className={`wrapper_loader ${isLightMode ? 'light' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;

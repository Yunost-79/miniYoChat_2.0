import React from 'react';
import { useCustomizeModesStore } from '../../zustand/customModes/useCustomizeModes';

const Footer = () => {
  const { isShowFooter } = useCustomizeModesStore();
  return (
    <div className={`footer ${isShowFooter ? 'show' : ''}`}>
      <h3>Mini Yo Chat 2.0</h3>
      <span>With the support of Pastafarians and the Great Spaghetti</span>
    </div>
  );
};

export default Footer;

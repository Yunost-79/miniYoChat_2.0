import React from 'react';
import { useShowHeaderStore } from '../../zustand/customModes/useShowHeaderStore';

const Header = () => {
  const { isShowHeader } = useShowHeaderStore();
  return (
    <div className={`header ${isShowHeader ? 'show' : ''}`}>
      <div className="header_content">
        <h3>Mini Yo Chat 2.0</h3>
        <span>With the support of Pastafarians and the Great Spaghetti</span>
      </div>
    </div>
  );
};

export default Header;

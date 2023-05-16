import React, { useState, useEffect } from 'react';
import '../../styles/Popup.module.css';

export const Popup = ({ message }) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return isActive ? (
    <div className="popup">
      <span>{message}</span>
    </div>
  ) : null;
};



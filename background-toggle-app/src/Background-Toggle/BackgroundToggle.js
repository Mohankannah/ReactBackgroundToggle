import React, { useState } from 'react';

const BackgroundToggle = () => {
  const [isBackgroundDark, setIsBackgroundDark] = useState(false);

  const toggleBackground = () => {
    setIsBackgroundDark((prevIsBackgroundDark) => !prevIsBackgroundDark);
  };

  const backgroundColor = isBackgroundDark ? '#222' : '#fff';
  const textColor = isBackgroundDark ? '#fff' : '#222';

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}
    >
      <button onClick={toggleBackground}>
        Toggle Background
      </button>
    </div>
  );
};

export default BackgroundToggle;

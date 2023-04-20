import React, { useState } from "react";

function DarkMode({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appClass = isDarkMode ? "bg-gray-900 text-white" : "";

  return (
    <div className={appClass}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { isDarkMode, handleDarkMode });
      })}
    </div>
  );
}

export default DarkMode;

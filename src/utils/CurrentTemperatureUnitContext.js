import React from "react";

export const CurrentTemperatureUnitContext = React.createContext();

export function CurrentTemperatureUnitProvider({ children }) {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    React.useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "F" ? "C" : "F"));
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      {children}
    </CurrentTemperatureUnitContext.Provider>
  );
}

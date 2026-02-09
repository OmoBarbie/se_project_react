import { useContext, useState, useEffect } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  const isChecked = currentTemperatureUnit === "C";

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <input
          className="toggle-switch__checkbox"
          type="checkbox"
          onChange={handleToggleSwitchChange}
          checked={isChecked}
        />

        <span className="toggle-switch__circle" />

        <span className="toggle-switch__value toggle-switch__value-left">
          F
        </span>

        <span className="toggle-switch__value toggle-switch__value-right">
          C
        </span>
      </label>
    </div>
  );
}

export default ToggleSwitch;

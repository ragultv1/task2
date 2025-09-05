// components/ToggleSwitch.tsx
import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <button
      onClick={onChange}
      className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
        checked ? "bg-red-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;

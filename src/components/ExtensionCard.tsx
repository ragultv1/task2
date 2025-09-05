// components/ExtensionCard.tsx
import React from "react";
import ToggleSwitch from './ToggleSwitch';

interface ExtensionCardProps {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  onRemove: () => void;
  onToggle: () => void;
}

const ExtensionCard: React.FC<ExtensionCardProps> = ({
  logo,
  name,
  description,
  isActive,
  onRemove,
  onToggle,
}) => {
  return (
    <div className="relative bg-[#1E293B] dark:bg-white rounded-lg overflow-hidden outline-1 outline-gray-300 ">
      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg dark:bg-gray-100 flex items-center justify-center ">
              <img src={logo} alt={`${name} logo`} className="w-12 h-12" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 pr-2">
            <h3 className="text-white dark:text-gray-900 text-lg font-semibold mb-2">{name}</h3>
            <p className="text-[#94A3B8] dark:text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>

          
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between mt-4 items-center">
          {/* Remove Button */}
            <button
              onClick={onRemove}
              className="flex items-center justify-center bg-[#334155] hover:bg-[#9b0606] text-white text-sm font-medium px-4 py-2 rounded-3xl transition-colors"
            >
              Remove
            </button>
          
          <ToggleSwitch checked={isActive} onChange={onToggle} />
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;

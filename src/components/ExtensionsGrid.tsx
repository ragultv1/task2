import React from 'react';
import ExtensionCard from './ExtensionCard';

export interface Extension {
  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

interface ExtensionsGridProps {
  extensions: Extension[];
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

const ExtensionsGrid: React.FC<ExtensionsGridProps> = ({
  extensions,
  onRemove,
  onToggle,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {extensions.map((extension) => (
        <ExtensionCard
          key={extension.id}
          logo={extension.logo}
          name={extension.name}
          description={extension.description}
          isActive={extension.isActive}
          onRemove={() => onRemove(extension.id)}
          onToggle={() => onToggle(extension.id)}
        />
      ))}
    </div>
  );
};

export default ExtensionsGrid;

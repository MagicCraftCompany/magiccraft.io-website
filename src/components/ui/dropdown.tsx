// components/Dropdown.tsx
import { useState } from 'react';
import drop from '@/assets/icons/Vector 519.svg'

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
}

export function Dropdown({ label, options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  const handleSelect = (option: DropdownOption) => {
    setSelected(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left md:hidden">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns={drop}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
           
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.value}
                className="text-gray-700 block px-4 py-2 text-sm"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

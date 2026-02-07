import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <div className="relative w-6 h-6">
        {/* Top line */}
        <span
          className={`absolute left-0 top-1 w-6 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 top-2.5' : 'rotate-0 top-1'
          }`}
        />
        {/* Middle line */}
        <span
          className={`absolute left-0 top-2.5 w-6 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        />
        {/* Bottom line */}
        <span
          className={`absolute left-0 top-4 w-6 h-0.5 bg-primary transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 top-2.5' : 'rotate-0 top-4'
          }`}
        />
      </div>
    </button>
  );
};

export default HamburgerMenu;
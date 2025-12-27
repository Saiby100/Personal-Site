import React from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, scrollToSection as scrollToSectionUtil } from '../constants/navigation';
import { personal, images } from '../constants/portfolioConfig';
import { gradients, transitions, text, surface, accent, backgrounds } from '../constants/styles';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    scrollToSectionUtil(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${surface.nav} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className={`p-[1.5px] rounded-full ${gradients.bgAccent} ${transitions.scaleSmall}`}>
                <img
                  src={images.avatar}
                  alt={`${personal.name} avatar`}
                  className="w-9 h-9 rounded-full object-cover"
                />
              </div>
              <span className={`text-xl font-bold ${gradients.textAccent}`}>
                {personal.name}
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? `${accent.bg[500]} ${text.primary}`
                      : `${text.secondary} ${surface.hover} ${text.hover}`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${text.secondary} ${text.hover}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${backgrounds.card}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  activeSection === item.id
                    ? `${accent.bg[500]} ${text.primary}`
                    : `${text.secondary} ${surface.hover} ${text.hover}`
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

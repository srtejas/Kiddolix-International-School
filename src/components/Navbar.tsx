import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Shapes, Megaphone, MapPin, Home } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SCHOOL_BRAND } from '../data/schoolData';

export type ActivePage = 'home' | 'about' | 'programs' | 'announcements' | 'contact';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

const NAV_ITEMS: {
  label: string;
  page: ActivePage;
  href: string;
  accentHex: string;
  iconBg: string;
  iconText: string;
  Icon: React.FC<{ className?: string }>;
}[] = [
  {
    label: 'About Us',
    page: 'about',
    href: '/about',
    accentHex: '#0284C7',
    iconBg: 'bg-[#E0F2FE]',
    iconText: 'text-[#0284C7]',
    Icon: BookOpen,
  },
  {
    label: 'Programs',
    page: 'programs',
    href: '/programs',
    accentHex: '#4D7C0F',
    iconBg: 'bg-[#ECFCCB]',
    iconText: 'text-[#4D7C0F]',
    Icon: Shapes,
  },
  {
    label: 'Announcements',
    page: 'announcements',
    href: '/announcements',
    accentHex: '#C2410C',
    iconBg: 'bg-[#FFEDD5]',
    iconText: 'text-[#C2410C]',
    Icon: Megaphone,
  },
  {
    label: 'Contact',
    page: 'contact',
    href: '/contact',
    accentHex: '#BE185D',
    iconBg: 'bg-[#FCE7F3]',
    iconText: 'text-[#BE185D]',
    Icon: MapPin,
  },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (page: ActivePage) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 h-16 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#0F172A]/10">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Official Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0284C7] rounded-md shrink-0 transition-transform duration-150 hover:scale-[1.02]"
          aria-label={`${SCHOOL_BRAND.fullName} Home`}
        >
          <BrandLogo />
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#475569]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.page;
            return (
              <a
                key={item.page}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.page);
                }}
                aria-current={isActive ? 'page' : undefined}
                style={
                  isActive
                    ? { color: item.accentHex, textDecorationColor: item.accentHex }
                    : undefined
                }
                className={`whitespace-nowrap shrink-0 py-1.5 px-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0284C7] rounded-sm ${
                  isActive
                    ? 'font-semibold underline underline-offset-8 decoration-2'
                    : 'hover:text-[#0F172A] hover:underline underline-offset-8 decoration-[#0284C7]/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
          >
            Book a Visit
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#0F172A] bg-[#F1F5F9] hover:bg-[#E2E8F0] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Kid-Friendly Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FFFFFF] border-b border-[#0F172A]/10 shadow-md px-4 py-4"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              aria-current={activePage === 'home' ? 'page' : undefined}
              className={`flex items-center gap-3.5 min-h-[48px] px-3 py-2 text-base font-medium rounded-xl transition-colors ${
                activePage === 'home'
                  ? 'bg-[#E0F2FE] text-[#0284C7]'
                  : 'text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              <span className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0">
                <Home className="w-4 h-4" aria-hidden="true" />
              </span>
              <span>Home</span>
            </a>

            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.page;
              const IconComp = item.Icon;
              return (
                <a
                  key={item.page}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.page);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-3.5 min-h-[48px] px-3 py-2 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#F1F5F9] text-[#0F172A] font-semibold'
                      : 'text-[#0F172A] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span
                    className={`w-9 h-9 rounded-lg ${item.iconBg} ${item.iconText} flex items-center justify-center shrink-0`}
                  >
                    <IconComp className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div className="pt-3 mt-1 border-t border-[#0F172A]/10 flex flex-col gap-2">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('contact');
                }}
                className="flex items-center justify-center min-h-[46px] px-4 py-2.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors"
              >
                Book a Campus Visit
              </a>
              <a
                href={SCHOOL_BRAND.phoneHref}
                className="flex items-center justify-center min-h-[44px] px-4 py-2 text-sm font-medium text-[#0284C7] hover:bg-[#F1F5F9] rounded-xl transition-colors"
              >
                Call {SCHOOL_BRAND.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

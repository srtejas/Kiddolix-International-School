import React from 'react';
import { BrandLogo } from './BrandLogo';
import { SCHOOL_BRAND } from '../data/schoolData';
import { ActivePage } from './Navbar';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#0F172A]/10 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <BrandLogo size="sm" />
          <p className="mt-2 text-sm text-[#475569]">
            {SCHOOL_BRAND.addressLine1}, {SCHOOL_BRAND.addressLine2}
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-[#475569]"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="hover:text-[#0F172A] transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('about');
            }}
            className="hover:text-[#0F172A] transition-colors"
          >
            About Us
          </a>
          <a
            href="/programs"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('programs');
            }}
            className="hover:text-[#0F172A] transition-colors"
          >
            Programs
          </a>
          <a
            href="/announcements"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('announcements');
            }}
            className="hover:text-[#0F172A] transition-colors"
          >
            Announcements
          </a>
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="hover:text-[#0F172A] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6 pt-6 border-t border-[#0F172A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#475569]">
        <p>© 2026 {SCHOOL_BRAND.fullName}. All rights reserved.</p>
        <p>
          Preschool &amp; Daycare Hours: {SCHOOL_BRAND.schoolHours} · {SCHOOL_BRAND.phone}
        </p>
      </div>
    </footer>
  );
};

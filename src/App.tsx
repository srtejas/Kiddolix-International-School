/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { Navbar, ActivePage } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProgramsSection } from './components/ProgramsSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { ContactSection } from './components/ContactSection';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { KidFriendlyCursor } from './components/KidFriendlyCursor';

const PATH_TO_PAGE: Record<string, ActivePage> = {
  '/': 'home',
  '/about': 'about',
  '/programs': 'programs',
  '/announcements': 'announcements',
  '/contact': 'contact',
};

const PAGE_TO_PATH: Record<ActivePage, string> = {
  home: '/',
  about: '/about',
  programs: '/programs',
  announcements: '/announcements',
  contact: '/contact',
};

function getPageFromLocation(): ActivePage {
  if (typeof window === 'undefined') return 'home';
  const normalized = window.location.pathname.replace(/\/+$/, '') || '/';
  return PATH_TO_PAGE[normalized] ?? 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>(getPageFromLocation);

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getPageFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((page: ActivePage) => {
    setActivePage(page);
    const nextPath = PAGE_TO_PATH[page];
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <KidFriendlyCursor />
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {activePage === 'home' && <HeroSection onNavigate={handleNavigate} />}
        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {activePage === 'programs' && <ProgramsSection onNavigate={handleNavigate} />}
        {activePage === 'announcements' && <AnnouncementsSection onNavigate={handleNavigate} />}
        {activePage === 'contact' && <ContactSection onNavigate={handleNavigate} />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

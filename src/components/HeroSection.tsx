import React from 'react';
import { ArrowRight, BookOpen, Shapes, Megaphone, MapPin } from 'lucide-react';
import { HERO_MEDIA, SCHOOL_BRAND, SCHOOL_FACTS } from '../data/schoolData';
import { ResilientImage } from './ResilientImage';
import { ActivePage } from './Navbar';

interface HeroSectionProps {
  onNavigate: (page: ActivePage) => void;
}

const QUICK_EXPLORE_TILES: {
  page: ActivePage;
  title: string;
  description: string;
  accentBg: string;
  accentText: string;
  hoverBorder: string;
  Icon: React.FC<{ className?: string }>;
}[] = [
  {
    page: 'about',
    title: 'About Us',
    description: 'Since 2010 story, mission, philosophy & faculty',
    accentBg: 'bg-[#E0F2FE]',
    accentText: 'text-[#0284C7]',
    hoverBorder: 'hover:border-[#0284C7]/50',
    Icon: BookOpen,
  },
  {
    page: 'programs',
    title: 'Programs',
    description: 'Playgroup, Nursery, LKG–UKG, Daycare & Activity',
    accentBg: 'bg-[#ECFCCB]',
    accentText: 'text-[#4D7C0F]',
    hoverBorder: 'hover:border-[#65A30D]/50',
    Icon: Shapes,
  },
  {
    page: 'announcements',
    title: 'Announcements',
    description: 'Admissions open & parent circular updates',
    accentBg: 'bg-[#FFEDD5]',
    accentText: 'text-[#C2410C]',
    hoverBorder: 'hover:border-[#EA580C]/50',
    Icon: Megaphone,
  },
  {
    page: 'contact',
    title: 'Contact & Visit',
    description: 'Annapoorneshwari Nagar map & tour booking',
    accentBg: 'bg-[#FCE7F3]',
    accentText: 'text-[#BE185D]',
    hoverBorder: 'hover:border-[#E91E79]/50',
    Icon: MapPin,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="top" className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-18">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Asymmetric 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-sm font-medium text-[#475569] mb-4">
                Since {SCHOOL_BRAND.establishedYear} <span aria-hidden="true">·</span> Playgroup to
                UKG &amp; Daycare <span aria-hidden="true">·</span> Bengaluru
              </p>

              <h1 className="font-display text-[clamp(2.25rem,4vw,3.4rem)] font-semibold leading-[1.1] tracking-tight text-[#0F172A] text-balance">
                Every child is unique at {SCHOOL_BRAND.name}.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
                {SCHOOL_BRAND.fullName} offers a warm, NEP-aligned early learning space in
                Annapoorneshwari Nagar, Nagarabhavi—covering Playgroup, Nursery, LKG, UKG, Daycare,
                and our Activity Center.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
                >
                  Book a Campus Visit
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 text-sm font-medium text-[#0F172A] hover:text-[#0284C7] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7] rounded-lg"
                >
                  <span>About Our School</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <p className="mt-8 pt-6 border-t border-[#0F172A]/10 text-sm text-[#475569]">
              Admissions open <span aria-hidden="true">·</span> Call{' '}
              <a
                href={SCHOOL_BRAND.phoneHref}
                className="font-semibold text-[#0284C7] hover:underline tabular-nums"
              >
                {SCHOOL_BRAND.phone}
              </a>
            </p>
          </div>

          <div className="lg:col-span-6">
            <ResilientImage
              src={HERO_MEDIA.image}
              alt={HERO_MEDIA.alt}
              containerClassName="rounded-2xl aspect-[16/10] lg:aspect-auto lg:h-full border border-[#0F172A]/10"
              className="w-full h-full object-cover"
              fallbackTitle={SCHOOL_BRAND.fullName}
            />
          </div>
        </div>

        {/* Full-Width 4-Column Summary Facts Strip */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-[#0F172A]/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SCHOOL_FACTS.map((fact) => (
            <div key={fact.label}>
              <div className="font-display text-2xl sm:text-3xl font-semibold text-[#0F172A] tabular-nums tracking-tight">
                {fact.value}
              </div>
              <div className="mt-1 text-sm text-[#475569]">{fact.label}</div>
            </div>
          ))}
        </div>

        {/* Kid-Friendly & Parent Quick-Explore Section Menu */}
        <div className="mt-12 pt-10 border-t border-[#0F172A]/10">
          <div className="flex items-baseline justify-between gap-4 mb-5">
            <h2 className="font-display text-lg sm:text-xl font-semibold text-[#0F172A]">
              Explore {SCHOOL_BRAND.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569]">
              Choose a section to open
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_EXPLORE_TILES.map((tile) => {
              const IconComp = tile.Icon;
              return (
                <button
                  key={tile.page}
                  type="button"
                  onClick={() => onNavigate(tile.page)}
                  className={`group text-left p-5 rounded-2xl bg-[#FFFFFF] border border-[#0F172A]/10 ${tile.hoverBorder} transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7] flex items-start gap-4`}
                >
                  <span
                    className={`w-11 h-11 rounded-xl ${tile.accentBg} ${tile.accentText} flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-105`}
                  >
                    <IconComp className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="font-display text-base font-semibold text-[#0F172A] flex items-center gap-1.5">
                      <span>{tile.title}</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-[#475569] transition-transform duration-150 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-1 block text-sm text-[#475569] leading-snug">
                      {tile.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

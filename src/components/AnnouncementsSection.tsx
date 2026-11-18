import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, X } from 'lucide-react';
import {
  ANNOUNCEMENTS,
  AnnouncementCategory,
  AnnouncementItem,
} from '../data/schoolData';
import { ActivePage } from './Navbar';

type CategoryFilter = 'All' | AnnouncementCategory;

const CATEGORIES: CategoryFilter[] = ['All', 'Admissions', 'Events', 'Health & Safety'];

interface AnnouncementsSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [activeNotice, setActiveNotice] = useState<AnnouncementItem | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveNotice(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filteredNotices =
    selectedCategory === 'All'
      ? ANNOUNCEMENTS
      : ANNOUNCEMENTS.filter((item) => item.category === selectedCategory);

  return (
    <section id="announcements" className="pt-8 pb-16 sm:pt-12 sm:pb-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 min-h-[40px] text-sm font-medium text-[#475569] hover:text-[#0284C7] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7] rounded-md mb-6"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#C2410C]">Parent Noticeboard</p>
            <h1 className="mt-2 font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[#0F172A] text-balance">
              Announcements &amp; campus circulars
            </h1>
          </div>

          <div
            role="group"
            aria-label="Filter announcements by category"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#E2E8F0]/70 rounded-xl self-start md:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[40px] px-3.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7] ${
                    active
                      ? 'bg-[#FFFFFF] text-[#0284C7] shadow-xs font-semibold'
                      : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 divide-y divide-[#0F172A]/10 border-y border-[#0F172A]/10 bg-[#FFFFFF] rounded-2xl border-x px-5 sm:px-8">
          {filteredNotices.map((notice) => (
            <article
              key={notice.id}
              className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#475569]">
                  <span className="font-medium text-[#0284C7]">{notice.category}</span>
                  <span aria-hidden="true">·</span>
                  <time className="font-mono tabular-nums">{notice.date}</time>
                </div>

                <h2 className="mt-1.5 font-display text-lg sm:text-xl font-semibold text-[#0F172A]">
                  {notice.title}
                </h2>

                <p className="mt-2 text-sm sm:text-base text-[#475569] leading-relaxed">
                  {notice.summary}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveNotice(notice)}
                  className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 text-sm font-medium text-[#0F172A] bg-[#F1F5F9] hover:bg-[#E2E8F0] rounded-xl transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
                >
                  <span>Read circular</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0284C7]" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeNotice && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#0F172A]/40 backdrop-blur-[2px] p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="notice-modal-title"
          onClick={() => setActiveNotice(null)}
        >
          <div
            className="w-full sm:max-w-lg bg-[#FFFFFF] rounded-t-2xl sm:rounded-2xl border border-[#0F172A]/10 p-6 sm:p-8 shadow-xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-xs sm:text-sm text-[#475569] flex items-center gap-2">
                <span className="font-medium text-[#0284C7]">{activeNotice.category}</span>
                <span aria-hidden="true">·</span>
                <time className="font-mono tabular-nums">{activeNotice.date}</time>
              </div>

              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                aria-label="Close circular"
                className="inline-flex items-center justify-center w-11 h-11 -mr-2 -mt-2 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3
              id="notice-modal-title"
              className="mt-2 font-display text-xl sm:text-2xl font-semibold text-[#0F172A]"
            >
              {activeNotice.title}
            </h3>

            <div className="mt-4 space-y-3 text-sm sm:text-base text-[#475569] leading-relaxed">
              {activeNotice.fullNotice.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#0F172A]/10 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                className="min-h-[44px] px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] rounded-lg transition-colors"
              >
                Close
              </button>
              {activeNotice.actionLabel && activeNotice.actionPage && (
                <button
                  type="button"
                  onClick={() => {
                    const target = activeNotice.actionPage!;
                    setActiveNotice(null);
                    onNavigate(target);
                  }}
                  className="inline-flex items-center justify-center min-h-[44px] px-5 py-2 text-sm font-medium text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors"
                >
                  {activeNotice.actionLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

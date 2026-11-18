import React, { useState } from 'react';
import { ArrowLeft, Clock, Users } from 'lucide-react';
import { PROGRAMS } from '../data/schoolData';
import { ResilientImage } from './ResilientImage';
import { ActivePage } from './Navbar';

interface ProgramsSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onNavigate }) => {
  const [selectedId, setSelectedId] = useState<string>(PROGRAMS[0].id);
  const activeProgram = PROGRAMS.find((p) => p.id === selectedId) ?? PROGRAMS[0];

  return (
    <section id="programs" className="pt-8 pb-16 sm:pt-12 sm:pb-20 bg-[#F8FAFC]">
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
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#4D7C0F]">Early Years Stages</p>
            <h1 className="mt-2 font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[#0F172A] text-balance">
              Thoughtfully paced programs for every stage
            </h1>
          </div>

          <div
            role="tablist"
            aria-label="Preschool programs"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#E2E8F0]/70 rounded-xl self-start md:self-auto"
          >
            {PROGRAMS.map((program) => {
              const isSelected = program.id === activeProgram.id;
              return (
                <button
                  key={program.id}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(program.id)}
                  className={`min-h-[42px] px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7] ${
                    isSelected
                      ? 'bg-[#FFFFFF] text-[#0284C7] shadow-xs font-semibold'
                      : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {program.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 bg-[#FFFFFF] border border-[#0F172A]/10 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5">
            <ResilientImage
              src={activeProgram.image}
              alt={activeProgram.imageAlt}
              containerClassName="rounded-xl aspect-[4/3] lg:aspect-auto lg:h-full border border-[#0F172A]/10"
              className="w-full h-full object-cover"
              fallbackTitle={activeProgram.name}
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#475569]">
                <span className="font-semibold text-[#0F172A]">{activeProgram.ageGroup}</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 tabular-nums">
                  <Clock className="w-4 h-4 text-[#0284C7]" aria-hidden="true" />
                  {activeProgram.schedule}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 tabular-nums">
                  <Users className="w-4 h-4 text-[#4D7C0F]" aria-hidden="true" />
                  {activeProgram.ratio}
                </span>
              </div>

              <h2 className="mt-4 font-display text-xl sm:text-2xl font-semibold text-[#0F172A] text-balance">
                {activeProgram.headline}
              </h2>

              <p className="mt-3 text-base text-[#475569] leading-relaxed">
                {activeProgram.description}
              </p>

              <ul className="mt-6 space-y-2.5 text-sm sm:text-base text-[#0F172A]">
                {activeProgram.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0F172A]/10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <h3 className="text-sm font-semibold text-[#0F172A]">Typical Daily Rhythm</h3>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-sm font-semibold text-[#0284C7] hover:underline"
                >
                  Enquire for {activeProgram.name} →
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProgram.dailyRhythm.map((slot) => (
                  <div key={slot.time} className="flex items-baseline gap-3 py-1">
                    <span className="font-mono text-xs font-medium text-[#0284C7] tabular-nums shrink-0">
                      {slot.time}
                    </span>
                    <span className="text-sm text-[#475569]">{slot.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

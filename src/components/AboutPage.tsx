import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ABOUT_US, SCHOOL_BRAND } from '../data/schoolData';
import { ResilientImage } from './ResilientImage';
import { ActivePage } from './Navbar';

interface AboutPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A]">
      {/* Page Hero & Overview */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 min-h-[40px] text-sm font-medium text-[#475569] hover:text-[#0284C7] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7] rounded-md"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-[#0284C7]">
                  About {SCHOOL_BRAND.fullName} <span aria-hidden="true">·</span> Since{' '}
                  {SCHOOL_BRAND.establishedYear}
                </p>

                <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3.15rem)] font-semibold leading-[1.12] tracking-tight text-[#0F172A] text-balance">
                  {ABOUT_US.headline}
                </h1>

                <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                  {ABOUT_US.lead}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#0F172A]/10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
                >
                  Book a Campus Visit
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('programs')}
                  className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 text-sm font-medium text-[#0F172A] hover:text-[#0284C7] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ResilientImage
                src={ABOUT_US.image}
                alt={ABOUT_US.imageAlt}
                containerClassName="rounded-2xl aspect-[16/10] lg:aspect-auto lg:h-full border border-[#0F172A]/10"
                className="w-full h-full object-cover"
                fallbackTitle={SCHOOL_BRAND.fullName}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        aria-labelledby="mission-heading"
        className="py-12 sm:py-16 bg-[#FFFFFF] border-t border-[#0F172A]/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <div className="p-6 sm:p-8 rounded-2xl border border-[#0F172A]/10 bg-[#F8FAFC]">
              <p className="text-sm font-medium text-[#0284C7]">Our Purpose</p>
              <h2
                id="mission-heading"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#0F172A]"
              >
                Mission Statement
              </h2>
              <p className="mt-4 text-base text-[#475569] leading-relaxed">
                {ABOUT_US.mission}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-[#0F172A]/10 bg-[#F8FAFC]">
              <p className="text-sm font-medium text-[#4D7C0F]">Looking Ahead</p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#0F172A]">
                Our Vision
              </h2>
              <p className="mt-4 text-base text-[#475569] leading-relaxed">
                {ABOUT_US.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School History Timeline */}
      <section
        aria-labelledby="history-heading"
        className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-[#0F172A]/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0284C7]">Our Journey</p>
            <h2
              id="history-heading"
              className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A] text-balance"
            >
              Growing with families in Annapoorneshwari Nagar since 2010
            </h2>
          </div>

          <div className="mt-8 divide-y divide-[#0F172A]/10 border-y border-[#0F172A]/10 bg-[#FFFFFF] rounded-2xl border-x px-5 sm:px-8">
            {ABOUT_US.history.map((milestone) => (
              <div
                key={milestone.year}
                className="py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-baseline"
              >
                <div className="sm:col-span-2 font-mono text-lg sm:text-xl font-medium text-[#0284C7] tabular-nums">
                  {milestone.year}
                </div>
                <div className="sm:col-span-10 max-w-2xl">
                  <h3 className="font-display text-lg font-semibold text-[#0F172A]">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-[#475569] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section
        aria-labelledby="philosophy-heading"
        className="py-12 sm:py-16 bg-[#FFFFFF] border-t border-[#0F172A]/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0284C7]">How Children Learn</p>
            <h2
              id="philosophy-heading"
              className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A] text-balance"
            >
              Our teaching philosophy
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT_US.philosophy.map((pillar) => (
              <div
                key={pillar.index}
                className="p-6 sm:p-7 rounded-2xl border border-[#0F172A]/10 bg-[#F8FAFC]"
              >
                <span className="font-mono text-sm font-medium text-[#0284C7] tabular-nums">
                  {pillar.index}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-[#0F172A]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#475569] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Faculty Profiles */}
      <section
        aria-labelledby="faculty-heading"
        className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-[#0F172A]/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#0284C7]">Leadership &amp; Educators</p>
              <h2
                id="faculty-heading"
                className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F172A] text-balance"
              >
                Meet our key faculty
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-xl transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              Meet Our Teachers in Person
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_US.faculty.map((member) => (
              <article
                key={member.id}
                className="bg-[#FFFFFF] border border-[#0F172A]/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl text-white font-display text-xl font-semibold flex items-center justify-center shrink-0"
                      style={{ backgroundColor: member.accentColor }}
                      aria-hidden="true"
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[#0F172A]">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-[#0284C7]">{member.role}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-[#475569]">
                    <span>{member.experience}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{member.qualification}</span>
                  </p>

                  <p className="mt-3 text-sm text-[#475569] leading-relaxed">{member.bio}</p>
                </div>

                <p className="mt-5 pt-4 border-t border-[#0F172A]/10 text-sm italic text-[#0F172A]">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

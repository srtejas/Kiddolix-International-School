import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PROGRAMS, SCHOOL_BRAND, SCHOOL_IMAGES } from '../data/schoolData';
import { ResilientImage } from './ResilientImage';
import { ActivePage } from './Navbar';

interface FormState {
  parentName: string;
  phone: string;
  program: string;
  preferredDate: string;
  message: string;
}

interface ContactSectionProps {
  onNavigate: (page: ActivePage) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [form, setForm] = useState<FormState>({
    parentName: '',
    phone: '',
    program: PROGRAMS[0].name,
    preferredDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.parentName.trim() || form.parentName.trim().length < 2) {
      nextErrors.parentName = 'Please enter parent or guardian name.';
    }
    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      parentName: '',
      phone: '',
      program: PROGRAMS[0].name,
      preferredDate: '',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="pt-8 pb-16 sm:pt-12 sm:pb-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 min-h-[40px] text-sm font-medium text-[#475569] hover:text-[#0284C7] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7] rounded-md mb-6"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Home</span>
        </button>

        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#E91E79]">Admissions &amp; Campus Visits</p>
          <h1 className="mt-2 font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[#0F172A] text-balance">
            Visit our {SCHOOL_BRAND.neighborhood} campus
          </h1>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            Meet our teachers, walk through the classrooms, and ask any questions about settling in.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-[#FFFFFF] border border-[#0F172A]/10 rounded-2xl p-6 sm:p-7 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#E91E79] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-semibold text-[#0F172A]">Campus Address</h2>
                  <p className="mt-1 text-sm text-[#475569] leading-relaxed">
                    {SCHOOL_BRAND.addressLine1}
                    <br />
                    {SCHOOL_BRAND.addressLine2}
                  </p>
                  <a
                    href={SCHOOL_BRAND.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#0284C7] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#0F172A]/10 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#0284C7] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-semibold text-[#0F172A]">Admissions Desk</h2>
                  <a
                    href={SCHOOL_BRAND.phoneHref}
                    className="mt-1 inline-block text-sm font-medium text-[#475569] hover:text-[#0F172A] tabular-nums"
                  >
                    {SCHOOL_BRAND.phone}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#0F172A]/10 flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#65A30D] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-semibold text-[#0F172A]">Email</h2>
                  <a
                    href={`mailto:${SCHOOL_BRAND.email}`}
                    className="mt-1 inline-block text-sm font-medium text-[#475569] hover:text-[#0F172A] break-all"
                  >
                    {SCHOOL_BRAND.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#0F172A]/10 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#EA580C] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-semibold text-[#0F172A]">Parent Visiting Hours</h2>
                  <p className="mt-1 text-sm text-[#475569] tabular-nums">
                    {SCHOOL_BRAND.visitingHours}
                  </p>
                </div>
              </div>
            </div>

            <ResilientImage
              src={SCHOOL_IMAGES.campusEntrance}
              alt={`${SCHOOL_BRAND.fullName} entrance gate in Annapoorneshwari Nagar, Bengaluru`}
              containerClassName="rounded-2xl aspect-[16/10] border border-[#0F172A]/10 hidden sm:block"
              className="w-full h-full object-cover"
              fallbackTitle={SCHOOL_BRAND.fullName}
            />
          </div>

          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#0F172A]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
            {submitted ? (
              <div className="py-8 text-center max-w-md mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold text-[#0F172A]">
                  Visit request received
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#475569] leading-relaxed">
                  Thank you, <span className="font-medium text-[#0F172A]">{form.parentName}</span>.
                  Our admissions coordinator will reach out on{' '}
                  <span className="font-mono text-[#0F172A] tabular-nums">{form.phone}</span> to
                  confirm your {form.program} walkthrough
                  {form.preferredDate ? ` for ${form.preferredDate}` : ''}.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#0284C7] bg-[#E0F2FE] hover:bg-[#BAE6FD] rounded-xl transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h2 className="font-display text-xl font-semibold text-[#0F172A]">
                    Book a Campus Visit
                  </h2>
                  <p className="mt-1 text-sm text-[#475569]">
                    Share your details and we will confirm a 30-minute guided tour.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-sm font-medium text-[#0F172A] mb-1.5"
                    >
                      Parent / Guardian Name
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      required
                      value={form.parentName}
                      onChange={(e) => {
                        setForm({ ...form, parentName: e.target.value });
                        if (errors.parentName) setErrors({ ...errors, parentName: undefined });
                      }}
                      placeholder="e.g. Ananya Rao"
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0F172A] bg-[#FFFFFF] border border-[#0F172A]/20 rounded-xl focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15"
                    />
                    {errors.parentName && (
                      <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#0F172A] mb-1.5"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="90350 77701"
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0F172A] bg-[#FFFFFF] border border-[#0F172A]/20 rounded-xl focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="program"
                      className="block text-sm font-medium text-[#0F172A] mb-1.5"
                    >
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0F172A] bg-[#FFFFFF] border border-[#0F172A]/20 rounded-xl focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15"
                    >
                      {PROGRAMS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.ageGroup})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-sm font-medium text-[#0F172A] mb-1.5"
                    >
                      Preferred Visit Date
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#0F172A] bg-[#FFFFFF] border border-[#0F172A]/20 rounded-xl focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0F172A] mb-1.5"
                  >
                    Questions or Child’s Age (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share your child’s age, daycare needs, or any questions for our teachers..."
                    className="w-full px-3.5 py-2.5 text-sm text-[#0F172A] bg-[#FFFFFF] border border-[#0F172A]/20 rounded-xl focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#475569]">
                    No entrance assessments or admission fees to tour.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] rounded-xl transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
                  >
                    Request Campus Visit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

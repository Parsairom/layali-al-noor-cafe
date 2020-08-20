"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, Users, CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  request: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "none",
  request: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s-]{7,}$/;

function todayISO(): string {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localDate = new Date(now.getTime() - offset * 60 * 1000);
  return localDate.toISOString().split("T")[0];
}

export function ReservationForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const t = dict.reservationPage.form;
  const guestLabel = form.guests === "1" ? t.guestsOption : t.guestsOptionPlural;

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = t.errors.nameRequired;
    if (!form.email.trim()) next.email = t.errors.emailRequired;
    else if (!emailPattern.test(form.email)) next.email = t.errors.emailInvalid;
    if (!form.phone.trim()) next.phone = t.errors.phoneRequired;
    else if (!phonePattern.test(form.phone.trim())) next.phone = t.errors.phoneInvalid;
    if (!form.date) next.date = t.errors.dateRequired;
    else if (form.date < todayISO()) next.date = t.errors.datePast;
    if (!form.time) next.time = t.errors.timeRequired;
    if (!form.guests) next.guests = t.errors.guestsRequired;

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  function reset() {
    setForm(initialState);
    setErrors({});
    setSubmitted(false);
  }

  const formattedDate = form.date
    ? new Date(`${form.date}T00:00:00`).toLocaleDateString(locale === "ar" ? "ar-AE" : "en-AE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const inputClasses =
    "w-full border border-line bg-noir-soft px-4 py-3.5 font-body text-sm text-cream placeholder:text-cream-dim/50 outline-none transition-colors focus:border-gold";
  const labelClasses = "font-body text-xs uppercase tracking-[0.15em] text-cream-dim";

  return (
    <div className="relative border border-line bg-noir-soft/60 p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="flex flex-col items-center gap-5 py-12 text-center"
          >
            <CheckCircle2 size={44} className="text-gold" strokeWidth={1.5} />
            <h3 className="font-display text-2xl text-cream sm:text-3xl">{t.successTitle}</h3>
            <p className="max-w-md font-body text-sm leading-relaxed text-cream-dim">
              {t.successMessage
                .replace("{name}", form.name)
                .replace("{guests}", `${form.guests} ${guestLabel}`)
                .replace("{date}", formattedDate)
                .replace("{time}", form.time)}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-2 border border-gold/50 px-8 py-3.5 font-body text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold hover:bg-gold/10"
            >
              {t.newReservationButton}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-6"
          >
            <h3 className="font-display text-2xl text-cream">{t.sectionTitle}</h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClasses}>
                  {t.nameLabel} *
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder={t.namePlaceholder}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClasses}>
                  {t.emailLabel} *
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className={inputClasses}
                  dir="ltr"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={labelClasses}>
                  {t.phoneLabel} *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className={inputClasses}
                  dir="ltr"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <span className="text-xs text-red-400">{errors.phone}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="occasion" className={labelClasses}>
                  {t.occasionLabel}
                </label>
                <select
                  id="occasion"
                  value={form.occasion}
                  onChange={(e) => updateField("occasion", e.target.value)}
                  className={inputClasses}
                >
                  {Object.entries(t.occasionOptions).map(([key, label]) => (
                    <option key={key} value={key} className="bg-noir-soft">
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="date" className={labelClasses}>
                  <CalendarDays size={13} className="inline-block me-1.5 -mt-0.5" />
                  {t.dateLabel} *
                </label>
                <input
                  id="date"
                  type="date"
                  min={todayISO()}
                  value={form.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.date)}
                />
                {errors.date && <span className="text-xs text-red-400">{errors.date}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="time" className={labelClasses}>
                  <Clock size={13} className="inline-block me-1.5 -mt-0.5" />
                  {t.timeLabel} *
                </label>
                <input
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={(e) => updateField("time", e.target.value)}
                  className={inputClasses}
                  aria-invalid={Boolean(errors.time)}
                />
                {errors.time && <span className="text-xs text-red-400">{errors.time}</span>}
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="guests" className={labelClasses}>
                  <Users size={13} className="inline-block me-1.5 -mt-0.5" />
                  {t.guestsLabel} *
                </label>
                <select
                  id="guests"
                  value={form.guests}
                  onChange={(e) => updateField("guests", e.target.value)}
                  className={inputClasses}
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n} className="bg-noir-soft">
                      {n} {n === 1 ? t.guestsOption : t.guestsOptionPlural}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="request" className={labelClasses}>
                  {t.requestLabel}
                </label>
                <textarea
                  id="request"
                  rows={4}
                  value={form.request}
                  onChange={(e) => updateField("request", e.target.value)}
                  placeholder={t.requestPlaceholder}
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            <p className="text-xs text-cream-dim/70">{t.requiredNote}</p>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-noir transition-all duration-300 hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? t.submittingButton : t.submitButton}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

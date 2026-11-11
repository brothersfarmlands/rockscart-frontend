"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const topics = ["Order support", "Feedback", "Farmer / supplier partnership", "Business enquiry", "Other"];

/**
 * Opens the visitor's email app with the message pre-filled.
 * To store submissions server-side instead, swap the submit handler for a
 * Server Action or a form service (e.g. Formspree, Resend).
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${data.get("topic")}] Message from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Email: ${data.get("email")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input =
    "mt-1.5 w-full rounded-xl border border-forest/15 bg-cream/50 px-4 py-3 text-sm text-ink outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/25";

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold text-forest">
        Full name
        <input name="name" required className={input} placeholder="Your name" />
      </label>
      <label className="text-sm font-semibold text-forest">
        Phone
        <input name="phone" type="tel" className={input} placeholder="+91" />
      </label>
      <label className="text-sm font-semibold text-forest sm:col-span-2">
        Email
        <input name="email" type="email" required className={input} placeholder="you@example.com" />
      </label>
      <label className="text-sm font-semibold text-forest sm:col-span-2">
        Topic
        <select name="topic" className={input} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-semibold text-forest sm:col-span-2">
        Message
        <textarea name="message" required rows={5} className={input} placeholder="How can we help?" />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-forest px-8 py-3.5 font-semibold text-cream transition hover:bg-forest-light sm:w-auto"
        >
          Send message
        </button>
        {sent && (
          <p className="mt-3 text-sm text-leaf-dark">
            Your email app should open with the message ready to send. If it doesn’t, write to us at{" "}
            <a href={`mailto:${site.contact.email}`} className="font-semibold underline">
              {site.contact.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

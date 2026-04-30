"use client";

import { useState, type ChangeEvent } from "react";

type Fields = { name: string; email: string; message: string };
type FieldErrors = Partial<Fields>;

const inputCls =
  "bg-transparent border border-border rounded-xl px-4 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-accent/60 transition-colors duration-200";

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  function set(key: keyof Fields) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (!fields.name.trim()) e.name = "What should I call you?";
    if (!fields.email.trim()) e.email = "I'll need your email to write back.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "That doesn't look like a valid email — double-check?";
    if (!fields.message.trim())
      e.message = "Don't be shy — what's on your mind?";
    return e;
  }

  async function onSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...fields,
        }).toString(),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setServerError("Hmm, that didn't go through — give it another try?");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="w-full max-w-lg mx-auto text-center py-8"
      >
        <p className="text-2xl font-bold text-white mb-3">Message sent!</p>
        <p className="text-muted text-sm leading-relaxed">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="w-full max-w-lg mx-auto flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs font-mono tracking-widest uppercase text-dim"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            value={fields.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
            className={inputCls}
          />
          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="text-xs text-red-400 font-mono"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-mono tracking-widest uppercase text-dim"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={fields.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
            className={inputCls}
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="text-xs text-red-400 font-mono"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-mono tracking-widest uppercase text-dim"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          autoComplete="off"
          placeholder="What's on your mind?"
          value={fields.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputCls} resize-none`}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="text-xs text-red-400 font-mono"
          >
            {errors.message}
          </p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="text-xs text-red-400 font-mono">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="self-center mt-2 px-8 py-3.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent hover:text-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-500"
      >
        {submitting ? (
          "Sending…"
        ) : (
          <>
            Send Message <span aria-hidden="true">→</span>
          </>
        )}
      </button>
    </form>
  );
}

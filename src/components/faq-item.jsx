"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-sm border border-gold/20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between bg-charcoal/40 px-5 py-4 text-left transition-colors hover:bg-charcoal/60 sm:px-6 sm:py-5"
        aria-expanded={open}
      >
        <span className="pr-4 font-sans font-medium text-ivory">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="border-t border-gold/10 bg-charcoal/20 px-5 py-4 sm:px-6 sm:py-5">
          <p className="font-sans text-sm leading-relaxed text-ivory/80">{answer}</p>
        </div>
      )}
    </div>
  );
}

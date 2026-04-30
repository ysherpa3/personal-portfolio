"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-6 py-2.5 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent hover:text-background transition-colors duration-300"
    >
      Download PDF
    </button>
  );
}

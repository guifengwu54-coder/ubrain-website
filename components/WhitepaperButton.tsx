'use client';

export default function WhitepaperButton() {
  return (
    <button
      className="btn-secondary mt-4 w-full justify-center"
      onClick={() => alert('Research whitepaper download coming soon. Please contact us for access.')}
    >
      Download Research Whitepaper
    </button>
  );
}

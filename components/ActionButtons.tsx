'use client';

import Link from 'next/link';

export function BuyButton({ label = '立即购买', className = '' }: { label?: string; className?: string }) {
  return (
    <button
      className={`btn-primary ${className}`}
      onClick={() => alert('购买流程即将上线。如需购买，请联系客服。')}
    >
      {label}
    </button>
  );
}

export function SupportButton({ label = '咨询客服', className = '' }: { label?: string; className?: string }) {
  return (
    <Link href="/contact" className={`btn-secondary ${className}`}>
      {label}
    </Link>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🧠</div>
        <h1 className="text-3xl font-bold text-medical-900 mb-3">Page Not Found</h1>
        <p className="text-medical-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for may have been moved or doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/shop" className="btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}

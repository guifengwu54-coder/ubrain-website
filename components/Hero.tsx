import Link from 'next/link';

export default function Hero() {
  return (
    <section className="gradient-hero">
      <div className="container-page section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Developed with NTU Singapore Researchers
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-medical-900 leading-tight tracking-tight">
              Sleep Well,
              <br />
              <span className="text-emerald-600">Think Better</span>
            </h1>

            <p className="text-lg text-medical-500 mt-4 max-w-lg mx-auto lg:mx-0">
              Revolutionary brain health supplements powered by science. Enhance memory, boost focus,
              and experience peak mental clarity every day.
            </p>

            {/* 3 core selling points */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-medical-600">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                Supports Memory Enhancement
              </div>
              <div className="flex items-center gap-2 text-sm text-medical-600">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                Enhances Focus Capacity
              </div>
              <div className="flex items-center gap-2 text-sm text-medical-600">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                Supports Mental Clarity
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
              <Link href="/shop" className="btn-primary text-lg !py-4 !px-10">
                Shop Now
              </Link>
              <Link href="/journey" className="btn-secondary">
                Explore Our Research
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-100 via-teal-50 to-medical-50 flex items-center justify-center overflow-hidden border border-emerald-100">
                {/* Decorative neural nodes */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-200" />
                <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-emerald-300" />
                <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-teal-400" />
                <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-200" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-600 shadow-xl shadow-emerald-300 animate-pulse" />

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <line x1="100" y1="100" x2="200" y2="200" stroke="#a7f3d0" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="300" y1="130" x2="200" y2="200" stroke="#a7f3d0" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="133" y1="300" x2="200" y2="200" stroke="#5eead4" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="300" y1="300" x2="200" y2="200" stroke="#a7f3d0" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="100" y1="100" x2="300" y2="130" stroke="#99f6e4" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="133" y1="300" x2="100" y2="100" stroke="#99f6e4" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Text overlay */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-3">🧠</div>
                  <p className="text-emerald-700 font-semibold text-sm">Science-Backed · All Natural</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

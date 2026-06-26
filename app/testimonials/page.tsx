import { testimonials } from '@/lib/testimonials';
import TestimonialCard from '@/components/TestimonialCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials — UBrain',
  description: 'Read real stories from UBrain users worldwide: migraine relief, memory recovery, anxiety management, focus & energy improvements.',
};

export default function TestimonialsPage() {
  const groups = [
    { label: 'Migraine Relief', icon: '💆', ids: ['t1'] },
    { label: 'Focus & Energy', icon: '⚡', ids: ['t2', 't6'] },
    { label: 'Brain Recovery', icon: '🔄', ids: ['t3'] },
    { label: 'Anxiety Relief', icon: '🧘', ids: ['t4'] },
    { label: 'Memory Restoration', icon: '🧠', ids: ['t5'] },
  ];

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-medical-50 via-white to-emerald-50 py-16 md:py-24">
        <div className="container-page text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-900 mb-4">
            Our Customers. Real Stories. Proven Impact.
          </h1>
          <p className="text-lg text-medical-500 max-w-2xl mx-auto">
            Discover firsthand experiences from individuals who trust and benefit from UBrain —
            from Singapore to Ireland, from students to seniors.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* By audience */}
      <section className="bg-medical-50 section-padding">
        <div className="container-page">
          <h2 className="section-title mb-12">Browse by Need</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {groups.map((g) => (
              <div key={g.label} className="card p-5 text-center">
                <div className="text-3xl mb-2">{g.icon}</div>
                <h3 className="font-bold text-medical-800 text-sm">{g.label}</h3>
                <p className="text-xs text-medical-400 mt-1">{g.ids.length} {g.ids.length === 1 ? 'story' : 'stories'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Join Thousands Who Trust UBrain
          </h2>
          <p className="text-emerald-100 mb-8">
            Choose the right product for your brain health goals
          </p>
          <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
            Find Your Product
          </Link>
        </div>
      </section>
    </>
  );
}

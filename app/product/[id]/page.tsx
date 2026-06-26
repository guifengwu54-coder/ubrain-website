import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/products';
import { testimonials, getTestimonialsByProduct } from '@/lib/testimonials';
import TestimonialCard from '@/components/TestimonialCard';
import FAQ from '@/components/FAQ';
import { BuyButton, SupportButton } from '@/components/ActionButtons';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} — ${product.categoryLabel} | UBrain`,
    description: product.tagline,
    openGraph: {
      title: product.name,
      description: product.tagline,
      type: 'website',
    },
  };
}

const productFAQ = [
  {
    question: 'Is this product safe?',
    answer: 'Yes. UBrain products are made from all-natural tropical herbs and manufactured in a GMP-certified facility approved by the HSA Singapore. Our proprietary blend has been researched in collaboration with NTU. As with any supplement, consult your doctor if you have specific health concerns.',
  },
  {
    question: 'How long until I see results?',
    answer: 'Many users report improvements within 2–4 weeks of consistent use. For chronic concerns like migraines or neurodegenerative symptoms, allow 1–3 months. Individual results vary. We recommend consistent use as directed for best results.',
  },
  {
    question: 'Can I take this with other supplements?',
    answer: 'Generally yes, but take at least 2 hours apart from other supplements or medications. If you are on prescription medication, consult your doctor first.',
  },
  {
    question: 'What if I\'m not satisfied?',
    answer: 'We offer a satisfaction guarantee. Contact our customer support team if you\'re not satisfied with your purchase, and we\'ll work with you to make it right.',
  },
];

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.id);

  if (!product) {
    notFound();
  }

  const productTestimonials = getTestimonialsByProduct(product.id);
  const allTestimonials = productTestimonials.length > 0
    ? productTestimonials
    : testimonials.filter((t) => t.productId === product.id);

  return (
    <>
      {/* Product Hero */}
      <section className="gradient-hero">
        <div className="container-page py-12 md:py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-medical-400 mb-6">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-emerald-600 transition-colors">All Products</Link>
            <span>/</span>
            <span className="text-medical-600">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Product info */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-3">
                {product.categoryLabel}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-medical-900 mb-3">
                {product.name}
              </h1>

              <p className="text-lg text-medical-500 leading-relaxed mb-6">
                {product.tagline}
              </p>

              <p className="text-medical-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                  ))}
                </div>
                <span className="font-bold text-medical-800">{product.rating}</span>
                <span className="text-medical-400 text-sm">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-3xl font-bold text-medical-900">S${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-medical-400 line-through">S${product.originalPrice}</span>
                )}
                {product.originalPrice > product.price && (
                  <span className="text-sm text-emerald-600 font-medium">
                    Save S${product.originalPrice - product.price}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <BuyButton label="Buy Now" className="text-lg !py-4 !px-12" />
                <SupportButton label="Inquire Now" />
              </div>
            </div>

            {/* Right: Product image */}
            <div className="hidden lg:block">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 border border-emerald-100 flex items-center justify-center overflow-hidden p-8">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <h2 className="section-title">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
            {product.benefits.map((b) => (
              <div key={b.title} className="card p-6 flex gap-4">
                <span className="text-3xl shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-medical-800 mb-1">{b.title}</h3>
                  <p className="text-sm text-medical-500 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target audience + Ingredients */}
      <section className="bg-medical-50 section-padding">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Target audience */}
            <div className="card p-6">
              <h3 className="font-bold text-medical-800 text-lg mb-4">👥 Who It&apos;s For</h3>
              <ul className="space-y-2">
                {product.targetAudience.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-medical-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients */}
            <div className="card p-6">
              <h3 className="font-bold text-medical-800 text-lg mb-4">🧪 Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span key={ing} className="inline-block px-3 py-1.5 rounded-lg bg-medical-50 text-medical-700 text-sm">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Usage direction */}
          <div className="card p-6 mt-6 max-w-4xl mx-auto">
            <h3 className="font-bold text-medical-800 text-lg mb-2">📋 Directions for Use</h3>
            <p className="text-medical-500 text-sm">{product.usageDirection}</p>
          </div>
        </div>
      </section>

      {/* Scientific principle */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Understanding the science behind the formula</p>

          <div className="card p-6 md:p-8 mt-10">
            <h3 className="text-xl font-bold text-medical-900 mb-4">
              {product.scientificPrinciple.title}
            </h3>
            <p className="text-medical-600 leading-relaxed mb-6">
              {product.scientificPrinciple.content}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {product.scientificPrinciple.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 rounded-lg px-4 py-2.5">
                  <span className="text-emerald-500">✓</span>
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research support */}
      <section className="bg-medical-50 section-padding">
        <div className="container-page max-w-4xl">
          <h2 className="section-title">Research & Development</h2>
          <p className="section-subtitle">Our formulas are built on rigorous scientific research</p>

          <div className="space-y-4 mt-10">
            {product.researchSupport.map((r) => (
              <div key={r.institution} className="card p-6 flex gap-4">
                <span className="text-2xl shrink-0">🔬</span>
                <div>
                  <h4 className="font-semibold text-medical-800 mb-1">{r.institution}</h4>
                  <p className="text-sm text-medical-500 leading-relaxed">{r.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {allTestimonials.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-page">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real experiences from people using {product.name}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {allTestimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-medical-50 section-padding">
        <div className="container-page max-w-3xl">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <FAQ items={productFAQ} className="mt-10" />
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="mobile-cta-bar">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <div className="text-xs text-medical-400">{product.name}</div>
            <div className="font-bold text-medical-900">S${product.price}</div>
          </div>
          <BuyButton label="Buy Now" className="flex-1 !py-3" />
        </div>
      </div>
    </>
  );
}

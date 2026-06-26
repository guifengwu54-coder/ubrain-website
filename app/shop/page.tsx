import ProductGrid from '@/components/ProductGrid';
import { products } from '@/lib/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop All Products — UBrain',
  description: 'Explore UBrain\'s full range of natural brain health supplements: Focus & Memory, Motor Regain 100, MG-100 for migraines, and Memory Recovery.',
};

export default function ShopPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-medical-50 via-white to-emerald-50 py-16">
        <div className="container-page text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-medical-900">Our Products</h1>
          <p className="text-medical-500 mt-3 max-w-xl mx-auto">
            Our best-performing brain health supplements, expertly crafted with all-natural tropical herbs to elevate mental clarity, sharpen focus, and optimize your cognitive potential.
          </p>
        </div>
      </section>

      <ProductGrid
        products={products}
      />

      {/* Category filter guide */}
      <section className="bg-medical-50 py-16">
        <div className="container-page">
          <h2 className="section-title">Not sure which product is right for you?</h2>
          <p className="section-subtitle">Find the best match based on your needs</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {products.map((p) => (
              <div key={p.id} className="card p-6 text-center">
                <div className="text-3xl mb-3">{p.benefits[0]?.icon}</div>
                <h3 className="font-bold text-medical-800 mb-2">{p.categoryLabel}</h3>
                <p className="text-sm text-medical-500 mb-3">{p.tagline}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {p.targetAudience.slice(0, 2).map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-medical-50 text-medical-500">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

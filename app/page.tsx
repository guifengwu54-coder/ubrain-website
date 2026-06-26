import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import ScientificSection from '@/components/ScientificSection';
import ProductGrid from '@/components/ProductGrid';
import TestimonialCard from '@/components/TestimonialCard';
import FAQ from '@/components/FAQ';
import { products } from '@/lib/products';
import { testimonials } from '@/lib/testimonials';
import Link from 'next/link';

const homeFAQ = [
  {
    question: 'Are UBrain products safe? Do they have side effects?',
    answer: 'All UBrain products are made from all-natural tropical herbs and are manufactured in a GMP-certified facility approved by the Health Sciences Authority (HSA) of Singapore. Our proprietary blend has been researched in collaboration with Nanyang Technological University (NTU). As with any supplement, we recommend consulting your doctor before use, especially if you are on prescription medication or have specific health conditions.',
  },
  {
    question: 'How long before I see results?',
    answer: 'Many users report noticeable improvements within 2–4 weeks of consistent use. For chronic concerns such as migraines or neurodegenerative symptoms, allow 1–3 months. Individual results vary based on age, condition, and consistency of use. We recommend taking UBrain regularly as directed for best results.',
  },
  {
    question: 'Will I become dependent on UBrain products?',
    answer: 'No. UBrain products contain only all-natural tropical herbs and nutrients — no stimulants, no synthetic drugs, and no addictive compounds. Our formulations work by nourishing and supporting your brain\'s natural functions. You can stop at any time without withdrawal effects.',
  },
  {
    question: 'Which UBrain product is right for me?',
    answer: 'UBrain Focus & Memory is ideal for students and young professionals seeking daily cognitive performance and prevention. UBrain Motor Regain 100 is our most potent formula, designed for those over 50 or with neurodegenerative concerns. UBrain MG-100 targets chronic migraine sufferers. UBrain Memory Recovery supports elderly memory restoration and prevention. See each product page for detailed guidance.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Section 2: Trust */}
      <TrustSection />

      {/* Section 3: Science */}
      <ScientificSection />

      {/* Section 4: Products */}
      <ProductGrid
        products={products}
        title="Our Top Selling Products"
        subtitle="Explore our best-performing products, expertly crafted to elevate mental clarity, sharpen focus, and optimize your cognitive potential"
      />

      {/* Section 5: Research Trust */}
      <section className="bg-medical-50 section-padding">
        <div className="container-page">
          <h2 className="section-title">More Than a &lsquo;Supplement&rsquo;</h2>
          <p className="section-subtitle">
            Our proprietary blend of all-natural herbs was developed for years, creating a new standard
            of brain health supplementation
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="font-bold text-medical-800 text-lg mb-2">All-Natural</h3>
              <p className="text-sm text-medical-500">Made with premium natural herbs for quality and purity, free from toxins, fillers, and unwanted additives.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">⚗️</div>
              <h3 className="font-bold text-medical-800 text-lg mb-2">Proprietary Blend</h3>
              <p className="text-sm text-medical-500">Developed by top scientists in Singapore using our unique blend of phytonutrients that set a new standard for results.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="font-bold text-medical-800 text-lg mb-2">Quality</h3>
              <p className="text-sm text-medical-500">Each batch is produced under rigorous standards and careful supervision, ensuring consistent purity and safety always.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="font-bold text-medical-800 text-lg mb-2">Proven Results</h3>
              <p className="text-sm text-medical-500">Shown to support people with neurodegenerative issues, improving everyday life and reducing symptoms in real users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="bg-white section-padding">
        <div className="container-page">
          <h2 className="section-title">Our Customers. Real Stories. Proven Impact.</h2>
          <p className="section-subtitle">
            Discover firsthand experiences from individuals who trust and benefit from UBrain
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.slice(0, 6).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn-ghost">
              View All Testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="bg-medical-50 section-padding">
        <div className="container-page max-w-3xl">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find clear, concise answers about UBrain products and brain health
          </p>
          <FAQ items={homeFAQ} className="mt-10" />
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-ghost">
              View Full FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Unlock Your Brain&apos;s Full Potential?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-md mx-auto">
            Join 50,000+ users who trust UBrain for daily clarity, focus, and cognitive wellness
          </p>
          <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}

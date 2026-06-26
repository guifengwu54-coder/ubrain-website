import FAQ from '@/components/FAQ';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — UBrain',
  description: 'Frequently asked questions about UBrain brain health supplements: safety, usage, results, suitability, and ordering.',
};

const faqCategories = [
  {
    title: 'Safety & Quality',
    icon: '🛡️',
    items: [
      {
        question: 'Are UBrain products safe? Do they have side effects?',
        answer: 'Yes. All UBrain products are made from all-natural tropical herbs and are manufactured in a GMP-certified facility approved by the Health Sciences Authority (HSA) of Singapore. Our proprietary blend has been researched in collaboration with Nanyang Technological University (NTU). All components are naturally occurring and food-grade. As with any supplement, we recommend consulting your doctor before use, especially if you are on prescription medication.',
      },
      {
        question: 'What certifications do UBrain products have?',
        answer: 'UBrain products are manufactured in a GMP-certified facility approved by the HSA Singapore. Our proprietary tropical herbal blend has been validated through research collaboration with NTU\'s School of Biological Sciences (2020-2023). Each batch undergoes strict quality control testing.',
      },
      {
        question: 'Are there any heavy metals or contaminants?',
        answer: 'No. All raw materials are sourced from trusted suppliers and thoroughly tested by third-party laboratories. Every production batch is tested for heavy metals, pesticide residues, and microbial contamination before release. Products are manufactured in Singapore under HSA GMP standards.',
      },
    ],
  },
  {
    title: 'Usage & Results',
    icon: '📋',
    items: [
      {
        question: 'How long before I see results?',
        answer: 'Many users report noticeable improvements within 2–4 weeks of consistent use. For chronic concerns such as migraines or neurodegenerative symptoms, allow 1–3 months. Individual results vary based on age, condition, and consistency of use. We recommend taking UBrain regularly as directed for best results.',
      },
      {
        question: 'Do I need to take UBrain long-term? Will I become dependent?',
        answer: 'UBrain products contain only natural herbs and nutrients — no stimulants, synthetic drugs, or addictive compounds. You can use them cyclically (e.g., during exam season) or for ongoing maintenance. You can stop at any time without withdrawal effects.',
      },
      {
        question: 'Can I take UBrain with other supplements or medications?',
        answer: 'Generally yes, but we recommend taking them at least 2 hours apart from other supplements or medications. If you are on prescription medication — particularly blood thinners (warfarin), antidepressants (SSRIs/SNRIs), or blood pressure medication — please consult your doctor before use.',
      },
      {
        question: 'What if I miss a dose?',
        answer: 'Simply take your next dose as usual. Do not double the dose to make up for a missed one. UBrain works through sustained nutrient support, so an occasional missed dose will not significantly impact results.',
      },
    ],
  },
  {
    title: 'Who It\'s For',
    icon: '👥',
    items: [
      {
        question: 'Who should NOT take UBrain products?',
        answer: 'UBrain products are not recommended for: pregnant or breastfeeding women, individuals with known allergies to any listed ingredients, and those with severe liver or kidney impairment. Children under 5 should not take these products. If you have a specific health condition, please consult your doctor.',
      },
      {
        question: 'Can students take UBrain?',
        answer: 'Yes. UBrain Focus & Memory is specifically formulated for students and young professionals (ages 5-50). For ages 5-16, the recommended dose is 1 capsule twice daily. For 17 and above, 2 capsules twice daily.',
      },
      {
        question: 'Which product is best for seniors?',
        answer: 'UBrain Motor Regain 100 is our most potent formula for those over 50 or with neurodegenerative concerns. UBrain Memory Recovery is also excellent for elderly memory restoration (solution mode: 3 caps twice daily) and prevention (prevention mode: 2 caps twice daily). Always consult with a doctor before starting any new supplement.',
      },
    ],
  },
  {
    title: 'Ordering & Support',
    icon: '🛒',
    items: [
      {
        question: 'How do I order UBrain products?',
        answer: 'You can purchase directly through our website at ubrain.sg. We ship internationally. For bulk orders or wholesale inquiries, please contact us through the Contact page.',
      },
      {
        question: 'What is your return policy?',
        answer: 'We offer a satisfaction guarantee. If you are not satisfied with your purchase, please contact our customer support team. Return policies may vary by region — contact us for specific details relevant to your location.',
      },
      {
        question: 'What is the shelf life of UBrain products?',
        answer: 'All UBrain products have a shelf life of 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight. The manufacturing date and expiry date are printed on each bottle.',
      },
      {
        question: 'How can I become a distributor?',
        answer: 'We welcome partnership inquiries. Please reach out through our Contact page with details about your interest, and our team will respond within 5 business days.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-medical-50 via-white to-emerald-50 py-16 md:py-24">
        <div className="container-page text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-medical-500 max-w-2xl mx-auto">
            Find clear, concise answers about UBrain products and brain health.
            Can&apos;t find what you&apos;re looking for? Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* FAQ by categories */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          {faqCategories.map((cat) => (
            <div key={cat.title} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-bold text-medical-900">{cat.title}</h2>
              </div>
              <FAQ items={cat.items} />
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Still Have Questions?
          </h2>
          <p className="text-emerald-100 mb-8">
            Our team is here to help
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Journey — UBrain',
  description: 'The story behind UBrain: from NTU community herb garden discoveries to GMP-certified brain health supplements developed with NTU researchers.',
};

export default function JourneyPage() {
  const milestones = [
    {
      year: '2019',
      title: 'The Discovery',
      description: 'Anecdotal evidence from the NTU community herb garden reveals that certain tropical herbs from the Portulacaceae family are helping people with migraines, memory issues, and motor function concerns. These early observations spark scientific curiosity.',
    },
    {
      year: '2020',
      title: 'NTU Research Partnership Begins',
      description: 'The Biolabs Pte Ltd partners with Nanyang Technological University (NTU) School of Biological Sciences. Led by Prof Yoon Ho Sup and his team, advanced cell-culture studies begin to validate the neuroprotective power of our proprietary tropical herbal extract.',
    },
    {
      year: '2021',
      title: 'Proprietary Blend Development',
      description: 'Years of research culminate in the development of a unique, proprietary blend of all-natural phytonutrients. Through rigorous testing and refinement, the optimal combination of tropical herb species and extraction methods is established.',
    },
    {
      year: '2022',
      title: 'Animal Studies & Validation',
      description: 'Comprehensive animal model studies confirm significant improvements in locomotor and cognitive health. The findings from the NTU collaboration are prepared for publication, solidifying the scientific foundation of UBrain products.',
    },
    {
      year: '2023',
      title: 'Product Launch & GMP Certification',
      description: 'UBrain launches its first product line from a GMP-certified facility approved by the Health Sciences Authority (HSA) of Singapore. Products become available through the official website and select distribution channels.',
    },
    {
      year: '2024–Present',
      title: 'Growing Trust & Preparing Clinical Trials',
      description: 'Over 50,000 users across Singapore and internationally. Human clinical trials are now in preparation at NTU. UBrain continues to expand its product line and research efforts to bring evidence-backed, natural brain health solutions to more people worldwide.',
    },
  ];

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-medical-50 via-white to-emerald-50 py-16 md:py-24">
        <div className="container-page text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-900 mb-4">
            The UBrain Journey
          </h1>
          <p className="text-lg text-medical-500 max-w-2xl mx-auto">
            From a community herb garden at NTU to a GMP-certified brain health brand.
            This is the story of how science, nature, and dedication came together to create
            a new standard in brain health supplementation.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="section-title mb-12">Our Timeline</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-medical-100 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-emerald-500 border-4 border-white shadow -translate-x-1/2 mt-6" />

                  {/* Year marker */}
                  <div className={`hidden md:flex w-1/2 ${idx % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                    <span className="text-2xl font-bold text-emerald-600">{m.year}</span>
                  </div>

                  {/* Card */}
                  <div className={`md:w-1/2 ml-10 md:ml-0 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="card p-5">
                      <span className="text-sm font-bold text-emerald-600 md:hidden">{m.year}</span>
                      <h3 className="font-bold text-medical-800 mt-1 mb-2">{m.title}</h3>
                      <p className="text-sm text-medical-500 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core philosophy */}
      <section className="bg-medical-50 section-padding">
        <div className="container-page max-w-3xl">
          <h2 className="section-title">Our Core Beliefs</h2>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-medical-800 mb-2">Science-First</h3>
              <p className="text-sm text-medical-500">Every product is backed by research conducted with NTU Singapore, not marketing claims.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="font-bold text-medical-800 mb-2">All-Natural</h3>
              <p className="text-sm text-medical-500">We use only natural tropical herbs. No stimulants, synthetic drugs, or addictive compounds. Ever.</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-medical-800 mb-2">Transparency</h3>
              <p className="text-sm text-medical-500">We openly share our research partners, ingredients, and manufacturing process so you can make informed choices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Be Part of Our Story
          </h2>
          <p className="text-emerald-100 mb-8">
            Choose a science-backed, natural brain health solution
          </p>
          <Link href="/shop" className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
            Explore Products
          </Link>
        </div>
      </section>
    </>
  );
}

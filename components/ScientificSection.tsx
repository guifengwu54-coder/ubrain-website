export default function ScientificSection() {
  const mechanisms = [
    {
      title: 'Dopamine Replenishment',
      subtitle: 'Restore lost dopamine naturally',
      description:
        'UBrain Motor Regain 100 replenishes dopamine lost due to aging and neurodegenerative conditions. By increasing blood flow to the brain and delivering vital nutrients, it helps reverse the effects of aging on motor and cognitive function.',
      icon: '🧬',
      highlight: 'NTU Research-Validated',
    },
    {
      title: 'Neurotransmitter Support',
      subtitle: 'Amino acid precursors for brain chemistry',
      description:
        'Rich in L-phenylalanine, L-tyrosine, and L-tryptophan — essential precursors for dopamine, norepinephrine, and serotonin synthesis. Supports brain cell communication and mental clarity across all product formulations.',
      icon: '⚡',
      highlight: 'Triple Amino Acid Matrix',
    },
    {
      title: 'Brain Chemical Rebalancing',
      subtitle: 'Clear harmful compounds, restore balance',
      description:
        'UBrain MG-100 works by rebalancing chemicals in the brain and removing harmful ones believed to trigger migraines. The dual-herb formula from Portulacaceae and Cupressaceae families targets the root cause, not just symptoms.',
      icon: '⚖️',
      highlight: 'Dual Herb Synergy',
    },
    {
      title: 'Essential Fatty Acid Nutrition',
      subtitle: 'ALA + EPA + DHA natural matrix',
      description:
        'All UBrain products contain naturally occurring Alpha-Linolenic Acid (ALA), Eicosapentaenoic Acid (EPA), and Docosahexaenoic Acid (DHA) from tropical herbs — providing structural support for brain cell membranes and neural signaling.',
      icon: '💡',
      highlight: 'Natural ALA + EPA + DHA',
    },
  ];

  return (
    <section className="gradient-medical section-padding">
      <div className="container-page">
        <h2 className="section-title">Proprietary Science · Proven Results</h2>
        <p className="section-subtitle">
          Our proprietary blend of all-natural tropical herbs was developed over years of research,
          creating a new standard in brain health supplementation
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {mechanisms.map((m) => (
            <div key={m.title} className="card p-6 text-center group">
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="font-bold text-medical-800 text-lg mb-1">{m.title}</h3>
              <p className="text-sm text-emerald-600 font-medium mb-3">{m.subtitle}</p>
              <p className="text-sm text-medical-500 leading-relaxed mb-4">{m.description}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                {m.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Scientific methodology note */}
        <div className="mt-16 card p-8 md:p-10 max-w-3xl mx-auto text-center">
          <div className="text-3xl mb-4">🔬</div>
          <h3 className="text-xl font-bold text-medical-900 mb-3">Our Research Methodology</h3>
          <p className="text-medical-500 leading-relaxed text-sm max-w-xl mx-auto">
            From 2020 to 2023, The Biolabs partnered with scientists at Nanyang Technological University (NTU)
            to validate the neuroprotective power of our proprietary tropical herbal extract through advanced
            cell-culture and animal studies. Led by Prof Yoon Ho Sup and his Biological Science team,
            these findings suggest measurable support for locomotor and cognitive health. Human clinical trials
            are now in preparation to continue delivering evidence-backed, natural brain health solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

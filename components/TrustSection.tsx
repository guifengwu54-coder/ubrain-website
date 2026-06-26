export default function TrustSection() {
  const stats = [
    { value: '50,000+', label: 'Users Trusted', icon: '👥' },
    { value: 'NTU', label: 'Research Partner', icon: '🏛️' },
    { value: '4.9', label: 'User Rating', icon: '⭐' },
    { value: 'GMP', label: 'HSA Certified', icon: '✅' },
  ];

  const audiences = [
    { label: 'Students', desc: 'Exams, study & focus', icon: '🎓' },
    { label: 'Professionals', desc: 'Peak mental performance', icon: '💼' },
    { label: 'Seniors', desc: 'Brain health & prevention', icon: '🧑‍🦳' },
  ];

  const partners = [
    { label: 'NTU Singapore', desc: 'Biological Sciences', icon: '🔬' },
    { label: 'The Biolabs', desc: 'R&D & Formulation', icon: '⚗️' },
    { label: 'HSA Singapore', desc: 'GMP Certified Facility', icon: '🏥' },
  ];

  return (
    <section className="bg-white section-padding border-y border-medical-50">
      <div className="container-page">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-medical-900">{s.value}</div>
              <div className="text-sm text-medical-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Audiences */}
          <div>
            <h3 className="text-lg font-semibold text-medical-800 mb-4 text-center md:text-left">Covers All Age Groups & Brain Health Needs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {audiences.map((a) => (
                <div key={a.label} className="card p-4 text-center">
                  <div className="text-2xl mb-2">{a.icon}</div>
                  <div className="font-semibold text-medical-800 text-sm">{a.label}</div>
                  <div className="text-xs text-medical-400 mt-1">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold text-medical-800 mb-4 text-center md:text-left">Singapore Research & Manufacturing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {partners.map((p) => (
                <div key={p.label} className="card p-4 text-center">
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <div className="font-semibold text-medical-800 text-sm">{p.label}</div>
                  <div className="text-xs text-medical-400 mt-1">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

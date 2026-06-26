import type { Testimonial } from '@/lib/testimonials';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {testimonial.name[0]}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-medical-800 text-sm">{testimonial.name}</div>
          <div className="text-xs text-medical-400">
            {testimonial.age} · {testimonial.occupation} · {testimonial.city}
          </div>
        </div>
        <div className="ml-auto flex items-center gap-1 text-yellow-500 text-sm">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {testimonial.tags.map((tag) => (
          <span key={tag} className="inline-block px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Story structure: Before / During / After */}
      <div className="space-y-3 text-sm leading-relaxed">
        <div className="flex gap-3">
          <div className="shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xs font-bold">
            B
          </div>
          <p className="text-medical-500">{testimonial.before}</p>
        </div>

        <div className="flex gap-3">
          <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">
            D
          </div>
          <p className="text-medical-600">{testimonial.during}</p>
        </div>

        <div className="flex gap-3">
          <div className="shrink-0 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xs font-bold">
            A
          </div>
          <p className="text-medical-700 font-medium">{testimonial.after}</p>
        </div>
      </div>

      {/* Duration & product */}
      <div className="mt-4 pt-3 border-t border-medical-50 flex items-center justify-between text-xs text-medical-400">
        <span>Duration: {testimonial.duration}</span>
        <span className="font-medium text-emerald-600">{testimonial.productName}</span>
      </div>
    </div>
  );
}

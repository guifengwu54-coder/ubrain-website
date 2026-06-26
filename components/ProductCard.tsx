import Link from 'next/link';
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  const categoryColors: Record<string, string> = {
    focus: 'border-l-emerald-500',
    motor: 'border-l-blue-500',
    migraine: 'border-l-purple-500',
    memory: 'border-l-indigo-500',
  };

  const categoryBgs: Record<string, string> = {
    focus: 'bg-emerald-50 text-emerald-700',
    motor: 'bg-blue-50 text-blue-700',
    migraine: 'bg-purple-50 text-purple-700',
    memory: 'bg-indigo-50 text-indigo-700',
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className={`card overflow-hidden group border-l-4 ${categoryColors[product.category] || 'border-l-emerald-500'}`}
    >
      <div className="p-6">
        {/* Product image */}
        <div className="aspect-square rounded-xl bg-gradient-to-br from-medical-50 to-emerald-50 flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-w-full max-h-full object-contain p-4"
          />
        </div>

        {/* Category badge */}
        <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${categoryBgs[product.category] || 'bg-emerald-50 text-emerald-700'}`}>
          {product.categoryLabel}
        </span>

        {/* Product name */}
        <h3 className="text-xl font-bold text-medical-900 mb-2 group-hover:text-emerald-700 transition-colors">
          {product.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-medical-500 leading-relaxed mb-4">
          {product.tagline}
        </p>

        {/* Target audience */}
        <div className="mb-4">
          <p className="text-xs text-medical-400 mb-1.5 font-medium">Suitable for</p>
          <div className="flex flex-wrap gap-1.5">
            {product.targetAudience.slice(0, 3).map((t) => (
              <span key={t} className="inline-block px-2 py-0.5 rounded-md bg-medical-50 text-medical-600 text-xs">
                {t}
              </span>
            ))}
            {product.targetAudience.length > 3 && (
              <span className="inline-block px-2 py-0.5 rounded-md text-medical-400 text-xs">
                +{product.targetAudience.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Top 3 benefits */}
        <ul className="space-y-2 mb-4">
          {product.benefits.slice(0, 3).map((b) => (
            <li key={b.title} className="flex items-start gap-2 text-sm">
              <span className="shrink-0 mt-0.5">{b.icon}</span>
              <div>
                <span className="font-medium text-medical-800">{b.title}</span>
                <span className="text-medical-400 ml-1">— {b.description.slice(0, 30)}...</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-medical-50">
          <div>
            <span className="text-xl font-bold text-medical-900">S${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-medical-400 line-through ml-2">S${product.originalPrice}</span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-sm">★</span>
            <span className="text-sm font-medium text-medical-700">{product.rating}</span>
            <span className="text-xs text-medical-400">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

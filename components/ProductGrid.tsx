import ProductCard from './ProductCard';
import type { Product } from '@/lib/products';

export default function ProductGrid({ products, title, subtitle }: {
  products: Product[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

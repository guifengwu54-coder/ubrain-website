import { products } from '@/lib/products';

export default function ProductSchema({ productId }: { productId: string }) {
  const product = products.find((p) => p.id === productId || p.slug === productId);
  if (!product) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.tagline,
    category: 'Health & Beauty > Health Care > Brain Health',
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'SGD',
      availability: 'https://schema.org/InStock',
      url: `https://ubrain.sg/product/${product.slug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
    },
    brand: {
      '@type': 'Brand',
      name: 'UBrain',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ title, description, datePublished }: {
  title: string;
  description: string;
  datePublished?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: 'UBrain by The Biolabs',
    },
    publisher: {
      '@type': 'Organization',
      name: 'UBrain by The Biolabs',
    },
    datePublished: datePublished || '2025-01-01',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

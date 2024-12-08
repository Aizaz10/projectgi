import HeroSection from '../HeroSection';
import ProductCard from '../ProductCardProps';

const Home = () => {
  const products = [
    { title: 'Product 1', price: '100 RS', image: 'https://via.placeholder.com/300' },
    { title: 'Product 2', price: '150 RS', image: 'https://via.placeholder.com/300' },
    { title: 'Product 3', price: '120 RS', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div>
      <HeroSection />
      <section className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
    </div>
  );
};

export default Home;

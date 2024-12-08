import ProductCard from '../ProductCardProps';

const Products = () => {
  const products = [
    { title: 'Product 1', price: '$100', image: 'https://via.placeholder.com/300' },
    { title: 'Product 2', price: '$150', image: 'https://via.placeholder.com/300' },
    { title: 'Product 3', price: '$120', image: 'https://via.placeholder.com/300' },
    { title: 'Product 4', price: '$90', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div>
      <h2 className="text-center text-3xl mt-10">Our Products</h2>
      <section className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
    </div>
  );
};

export default Products;

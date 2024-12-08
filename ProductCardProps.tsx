interface ProductCardProps {
    title: string;
    price: string;
    image: string;
  }
  
  const ProductCard = ({ title, price, image }: ProductCardProps) => {
    return (
      <div className="product-card border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{price}</p>
          <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  
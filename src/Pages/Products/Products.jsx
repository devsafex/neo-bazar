import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const gamingLaptop = {
      id: 1,
      name: "ASUS ROG Strix G16",
      price: "$1799.99",
      discount_price: "$1599.99",
      image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/computer/d/j/m/g614ju-n3200ws-gaming-laptop-asus-original-imah4bjd8gfzvxgn.jpeg",
      rating: 4.8,
      reviews: 420,
      description: "High-performance gaming laptop with an Intel Core i9-13980HX processor, 32GB DDR5 RAM, and a 1TB SSD. Features a 16-inch QHD+ (2560x1600) 240Hz display with NVIDIA GeForce RTX 4070 8GB graphics. Comes with ROG Intelligent Cooling, per-key RGB backlit keyboard, Dolby Atmos audio, Wi-Fi 6E, and AI noise cancellation. Windows 11 Home pre-installed. Long-lasting 90Wh battery and premium Eclipse Gray finish."
  };

  return (
    <div className=" bg-[#00C982]/5 min-h-screen">
      <div className="  container mx-auto">
        <ProductCard product={gamingLaptop} />
      </div>
    </div>
  );
};

export default Products;

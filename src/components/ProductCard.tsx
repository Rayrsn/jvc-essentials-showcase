import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  inStock: boolean;
}

const CardInner = ({ name, category, price, image, inStock }: Omit<ProductCardProps, 'id'>) => (
  <div className={`relative overflow-hidden rounded-lg shadow-card transition-smooth bg-card h-full flex flex-col ${!inStock ? 'cursor-not-allowed opacity-80' : 'hover:shadow-card-hover'}`}>
    <div className="aspect-square overflow-hidden relative">
      <img
        src={image}
        alt={name}
        className={`w-full h-full object-cover transition-smooth ${inStock ? 'group-hover:scale-105' : ''}`}
      />
      {!inStock && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
          <Badge variant="destructive">Out of Stock</Badge>
        </div>
      )}
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <Badge variant="secondary" className="w-fit mb-2 text-xs">
        {category}
      </Badge>
      <h3 className="font-semibold text-foreground transition-smooth mb-2 line-clamp-2 flex-1">
        {name}
      </h3>
      <div className="text-lg font-bold text-primary">{price}</div>
    </div>
  </div>
);

const ProductCard = ({ id, name, category, price, image, inStock }: ProductCardProps) => {
  // If item is in stock, wrap card in a Link to the product page.
  // If out of stock, render the card as non-clickable (prevents navigation to product detail).
  if (inStock) {
    return (
      <Link to={`/product/${id}`} className="group">
        <CardInner name={name} category={category} price={price} image={image} inStock={inStock} />
      </Link>
    );
  }

  return (
    <div className="group">
      <CardInner name={name} category={category} price={price} image={image} inStock={inStock} />
    </div>
  );
};

export default ProductCard;

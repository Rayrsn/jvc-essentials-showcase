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

const ProductCard = ({ id, name, category, price, image, inStock }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-smooth bg-card h-full flex flex-col">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
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
          <h3 className="font-semibold text-foreground group-hover:text-secondary transition-smooth mb-2 line-clamp-2 flex-1">
            {name}
          </h3>
          <div className="text-lg font-bold text-primary">{price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

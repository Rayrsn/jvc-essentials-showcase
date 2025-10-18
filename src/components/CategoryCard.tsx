import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  productCount: number;
}

const CategoryCard = ({ title, description, image, slug, productCount }: CategoryCardProps) => {
  return (
    <Link to={`/catalog?category=${slug}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-smooth bg-card">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-secondary transition-smooth">
              {title}
            </h3>
            <ArrowRight className="h-5 w-5 text-secondary opacity-0 group-hover:opacity-100 transition-smooth" />
          </div>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
          <div className="text-xs font-semibold text-accent">
            {productCount} Products
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import productsData from "@/data/products.json";
import PageTransition from "@/components/PageTransition";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.products.find(p => p.id === id);

  if (!product) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/catalog">
              <Button variant="default">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Catalog
              </Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen py-12">
      <div className="container">
        <Link to="/catalog" className="inline-flex items-center text-sm text-muted-foreground hover:text-secondary transition-smooth mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-card bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {!product.inStock && (
              <Badge variant="destructive" className="absolute top-4 right-4">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div>
            <Badge variant="secondary" className="mb-4">
              {product.category}
            </Badge>
            
            <h1 className="font-heading text-4xl font-bold mb-4 text-foreground">
              {product.name}
            </h1>
            
            <div className="text-3xl font-bold text-primary mb-6">
              {product.price}
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-muted/50 border">
                <p className="text-sm text-muted-foreground mb-4">
                  Interested in wholesale pricing? Get in touch with our sales team for bulk orders and custom quotes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:sales@jvcgoods.com" className="flex-1">
                    <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      <Mail className="mr-2 h-5 w-5" />
                      Email Us
                    </Button>
                  </a>
                  <a href="tel:+447577035776" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-secondary" />
                <span>Quality guaranteed on all products</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="font-heading text-3xl font-bold mb-8">More from {product.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.products
              .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} className="group">
                  <div className="aspect-square rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-smooth mb-3">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-secondary transition-smooth">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-primary font-bold">{relatedProduct.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetail;

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import productsData from "@/data/products.json";

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  const filteredProducts = selectedCategory === "all" 
    ? productsData.products 
    : productsData.products.filter(p => p.categorySlug === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Product Catalog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive range of wholesale products
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-muted/50 p-2">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                All Products
              </TabsTrigger>
              {productsData.categories.map((category) => (
                <TabsTrigger 
                  key={category.slug} 
                  value={category.slug}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
              inStock={product.inStock}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-lg bg-muted/50 text-center">
          <h2 className="font-heading text-2xl font-bold mb-3">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us directly to discuss your specific wholesale requirements
          </p>
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
            Contact Sales Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

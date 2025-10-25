import { Link } from "react-router-dom";
import { ArrowRight, Package, Shield, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import productsData from "@/data/products.json";
import heroImage from "@/assets/hero-wholesale.jpg";
import PageTransition from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="JVC Goods Wholesale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
        </div>
        
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl text-white">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Curated Essentials for Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Premium wholesale supplier of Beauty, Toys, Pets, and Home & Kitchen products. 
              Crafted for everyday trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog">
                <Button size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-lg">
                  Browse Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-primary font-semibold">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
              <p className="text-sm text-muted-foreground">Curated selection of premium wholesale goods</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Trusted Supplier</h3>
              <p className="text-sm text-muted-foreground">Reliable partner for your business needs</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Quick turnaround on all orders</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">Dedicated team ready to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Product Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of wholesale products across multiple categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                description={category.description}
                image={`/products/${category.slug}-thumb.png`}
                slug={category.slug}
                productCount={category.productCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-accent">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today to discuss your wholesale needs and get a custom quote for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+447577035776">
                <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white/10 font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  +44 7577 035776
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
};

export default Home;

import { Package, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            About JVC Goods
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for premium wholesale products. 
            We curate essentials crafted for everyday trust.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="p-8 md:p-12 rounded-lg gradient-hero text-white">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-white/90">
              At JVC Goods, we're dedicated to providing businesses with high-quality wholesale products 
              across multiple categories. Our focus is on building lasting partnerships through reliability, 
              quality, and exceptional service. We carefully curate our product selection to ensure that 
              every item meets our high standards for quality and value.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 text-secondary mb-6">
              <Package className="h-10 w-10" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Quality First</h3>
            <p className="text-muted-foreground">
              Every product is carefully selected and vetted to meet our strict quality standards
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Customer Focus</h3>
            <p className="text-muted-foreground">
              Your success is our success. We're here to support your business needs
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 text-secondary mb-6">
              <Award className="h-10 w-10" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Reliability</h3>
            <p className="text-muted-foreground">
              Consistent quality and timely delivery you can count on, order after order
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-6">
              <TrendingUp className="h-10 w-10" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Growth Partnership</h3>
            <p className="text-muted-foreground">
              We grow when you grow. Your business success drives everything we do
            </p>
          </div>
        </div>

        {/* Company Info */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-lg bg-muted/30 border">
            <h2 className="font-heading text-2xl font-bold mb-6 text-center">Company Information</h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold min-w-[140px]">Company Name:</span>
                <span className="text-muted-foreground">NYSPV LTD</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold min-w-[140px]">Address:</span>
                <span className="text-muted-foreground">128 City Road, London, EC1V 2NX</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold min-w-[140px]">Email:</span>
                <a href="mailto:sales@jvcgoods.com" className="text-secondary hover:underline">
                  sales@jvcgoods.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold min-w-[140px]">Phone:</span>
                <a href="tel:+447577035776" className="text-secondary hover:underline">
                  +44 7577 035776
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mt-20 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg bg-card border shadow-card">
              <h3 className="font-semibold text-lg mb-2">Beauty Products</h3>
              <p className="text-sm text-muted-foreground">Premium skincare and cosmetics</p>
            </div>
            <div className="p-6 rounded-lg bg-card border shadow-card">
              <h3 className="font-semibold text-lg mb-2">Toys</h3>
              <p className="text-sm text-muted-foreground">Quality toys for all ages</p>
            </div>
            <div className="p-6 rounded-lg bg-card border shadow-card">
              <h3 className="font-semibold text-lg mb-2">Pet Supplies</h3>
              <p className="text-sm text-muted-foreground">Everything for beloved pets</p>
            </div>
            <div className="p-6 rounded-lg bg-card border shadow-card">
              <h3 className="font-semibold text-lg mb-2">Home & Kitchen</h3>
              <p className="text-sm text-muted-foreground">Essential products for modern living</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

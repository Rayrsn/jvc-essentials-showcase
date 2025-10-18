import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="JVC Goods" className="h-20 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated essentials, crafted for everyday trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=beauty" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  Beauty Products
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=toys" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  Toys
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=pets" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  Pet Supplies
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=home" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                  Home & Kitchen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                <a href="mailto:sales@jvcgoods.com" className="hover:text-secondary transition-smooth">
                  sales@jvcgoods.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                <a href="tel:+447577035776" className="hover:text-secondary transition-smooth">
                  +44 7577 035776
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                <span>128 City Road, London, EC1V 2NX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NYSPV LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

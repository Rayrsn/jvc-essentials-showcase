import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We typically reply within 1–2 business days.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Contact Information</h2>
              <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                <li><span className="font-semibold">Email:</span> <a className="underline" href="mailto:sales@jvcgoods.com">sales@jvcgoods.com</a></li>
                <li><span className="font-semibold">Phone/WhatsApp:</span> +44 7577 035776</li>
                <li><span className="font-semibold">Address:</span> NYSPV LTD, 128 City Road, London, EC1V 2N</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-muted/50 border">
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-lg bg-card border shadow-card">
              <h2 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} name="enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                <input type="hidden" name="form-name" value="enquiry" />
                <p className="hidden"><label>Don’t fill this out: <input name="bot-field" /></label></p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input id="name" name="name" placeholder="Jane Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select id="category" name="category" className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-foreground">
                      <option>Toys</option>
                      <option>Pets</option>
                      <option>Home &amp; Kitchen</option>
                      <option>Beauty</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="+44 7577 035776" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={5} placeholder="How can we help?" required />
                </div>

                <Button type="submit" size="lg" className="w-full bg-foreground text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>

                <p className="text-[11px] text-muted-foreground">This form uses Netlify Forms. By submitting, you agree to our <a className="underline" href="/privacy">Privacy Policy</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </PageTransition>
  );
};

export default Contact;

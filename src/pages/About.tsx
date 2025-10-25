import PageTransition from "@/components/PageTransition";

const About = () => {
  const year = new Date().getFullYear();

  return (
    <PageTransition>
      <div className="min-h-screen">
        <section className="border-b bg-rose-100/30">
          <div className="container py-16">
            <h1 className="text-4xl font-bold tracking-tight">About JVC Goods</h1>
            <p className="mt-4 text-foreground/80 max-w-prose">
              We’re a London-based online store offering curated products across four categories:
              <strong> Toys</strong>, <strong>Pets</strong>, <strong>Home &amp; Kitchen</strong>, and <strong>Beauty</strong>.
              Our focus is dependable quality, fair pricing, and responsive customer support.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border p-6 bg-white">
                <h3 className="font-semibold">Quality First</h3>
                <p className="mt-2 text-sm text-foreground/70">We select practical, evergreen items with good durability and low defect rates.</p>
              </div>
              <div className="rounded-xl border p-6 bg-white">
                <h3 className="font-semibold">Fast Dispatch</h3>
                <p className="mt-2 text-sm text-foreground/70">We process orders quickly and provide tracking where available.</p>
              </div>
              <div className="rounded-xl border p-6 bg-white">
                <h3 className="font-semibold">Human Support</h3>
                <p className="mt-2 text-sm text-foreground/70">Questions? Reach us via email or WhatsApp—real help, not bots.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container py-12 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold">Company</h2>
              <ul className="mt-4 text-sm text-foreground/70 space-y-2">
                <li><span className="font-semibold">Legal Name:</span> NYSPV LTD</li>
                <li><span className="font-semibold">Address:</span> 128 City Road, London, EC1V 2N</li>
                <li><span className="font-semibold">Email:</span> <a className="underline" href="mailto:sales@jvcgoods.com">sales@jvcgoods.com</a></li>
                <li><span className="font-semibold">Phone/WhatsApp:</span> +44 7577 035776</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="/contact" className="rounded-lg px-4 py-2 font-semibold bg-rose-600 text-white">Contact us</a>
                <a href="/catalog" className="rounded-lg px-4 py-2 border">Browse catalog</a>
              </div>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold">Categories</h3>
              <ul className="mt-3 text-sm text-foreground/70 grid grid-cols-2 gap-2">
                <li>• Toys</li><li>• Pets</li><li>• Home &amp; Kitchen</li><li>• Beauty</li>
              </ul>
              <p className="mt-4 text-sm text-foreground/60">We’re continuously adding new products. Availability may vary.</p>
            </div>
          </div>
        </section>

        <footer className="border-t mt-8">
          <div className="container py-8 text-sm text-foreground/70 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {year} JVC Goods. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="/about" className="hover:text-rose-500">About</a>
              <span>•</span>
              <a href="/terms" className="hover:text-rose-500">Terms</a>
              <span>•</span>
              <a href="/privacy" className="hover:text-rose-500">Privacy</a>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default About;

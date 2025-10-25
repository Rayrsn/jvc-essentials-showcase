import PageTransition from "@/components/PageTransition";

const Returns = () => {
  const year = new Date().getFullYear();

  return (
    <PageTransition>
      <main className="container py-12 prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold tracking-tight">Returns &amp; Shipping</h1>

        <h2>Shipping</h2>
        <ul>
          <li>Dispatch: typically 1–2 business days after order confirmation.</li>
          <li>UK delivery times: usually 2–5 business days depending on service.</li>
          <li>Tracking provided where available.</li>
        </ul>

        <h2>Returns</h2>
        <ul>
          <li>Change of mind: return unused items in original packaging within 30 days of delivery.</li>
          <li>Faulty or damaged items: contact us within 48 hours of delivery.</li>
          <li>Refunds issued to original payment method upon inspection of returned goods.</li>
        </ul>

        <h2>How to start a return</h2>
        <ol>
          <li>Email <a href="mailto:sales@jvcgoods.com">sales@jvcgoods.com</a> with your order reference and photos (if damaged).</li>
          <li>We’ll provide return instructions and—if applicable—a return label.</li>
          <li>Pack items securely and include any accessories/manuals.</li>
        </ol>

        <h2>Exclusions</h2>
        <p>For hygiene reasons, certain Beauty items may be non-returnable if opened or used unless faulty.</p>

        <h2>Contact</h2>
        <p>Questions? Email <a href="mailto:sales@jvcgoods.com">sales@jvcgoods.com</a> or call +44 7577 035776.</p>

        <div className="mt-8 text-sm text-muted-foreground/70">
          <p>© {year} JVC Goods. All rights reserved.</p>
        </div>
      </main>
    </PageTransition>
  );
};

export default Returns;
